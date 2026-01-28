import { GoogleGenerativeAI } from "@google/generative-ai";
import "dotenv/config";

if (!process.env.GEMINI_API_KEY) {
  throw new Error("❌ FALTA LA API KEY. Asegúrate de tener el archivo .env configurado.");
}
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

const SYSTEM_PROMPT = `
Eres Volt, el asistente virtual inteligente de "Comparamos Tu Luz" (CTL).
Tu misión es ayudar a los usuarios a ahorrar en su factura de luz comparando tarifas.

INFORMACIÓN DEL NEGOCIO:
- Servicio 100% gratuito, transparente y sin permanencia.
- Analizamos el consumo real de la factura (PDF, foto) para encontrar el máximo ahorro.
- No somos una comercializadora, somos un comparador imparcial.

ACCIONES:
1. SI QUIEREN COMPARAR: Tu prioridad es que usen el formulario de esta web.
   - NO des enlaces externos (como https://...) a menos que el usuario diga explícitamente que no puede ver la web.
   - Guíalos para usar los botones o formularios que tienen en pantalla según el contexto.
2. SI QUIEREN HABLAR CON UN HUMANO: Dales el WhatsApp +584120628427 o diles que dejen su número en la sección "Te llamamos".

TONO:
- Amigable, cercano y experto. Usa emojis (⚡, 💡, 📄).
- Respuestas breves. NO repitas saludos si ya has saludado.
`;

export async function chatWithGemini(message: string, history: { role: string; text: string }[] = [], location: string = "") {
  try {
    // Detectamos contexto
    const isUploadPage = location.includes("campaign") || location.includes("subir-factura");
    const contextPrompt = isUploadPage
      ? "CONTEXTO: El usuario está viendo el formulario de carga. Guíalo para que suba su factura AQUÍ MISMO. No le des enlaces externos."
      : "CONTEXTO: El usuario está en la página de inicio. Invítalo a hacer clic en 'Comparar Factura' o 'Subir Factura'.";

    // Prompt Sistema Ajustado
    const REFINED_SYSTEM_PROMPT = `
${SYSTEM_PROMPT}

${contextPrompt}

REGLAS DE ORO (SÍGUELAS OBLIGATORIAMENTE):
1. ⛔ **PROHIBIDO DAR URLS O ENLACES.** No escribas "https://..." bajo ninguna circunstancia.
2. Si el usuario quiere comparar, dile: "Pulsa el botón 'Subir Factura' que tienes en pantalla" o "Usa el formulario que ves aquí".
3. NO repitas saludos. Ve al grano.
`;

    const chat = model.startChat({
      history: [
        { role: "user", parts: [{ text: REFINED_SYSTEM_PROMPT }] },
        { role: "model", parts: [{ text: "Entendido." }] }, 
        ...history.map(msg => ({
          role: msg.role === "admin" ? "model" : "user",
          parts: [{ text: msg.text }]
        }))
      ]
    });

    const result = await chat.sendMessage(message);
    return result.response.text();
  } catch (error: any) {
    console.error("Error Gemini:", error);
    return "Tuve un pequeño problema técnico ⚡. Inténtalo de nuevo.";
  }
}