// debug-gemini.js
const https = require('https');

// Tu clave (la que me diste)
const API_KEY = "AIzaSyBSd7-fIUfQzw53eMXazoLI9qpmcz0WvNo";

// Vamos a listar los modelos directamente via HTTP REST
const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`;

console.log("📡 Consultando API de Google DIRECTAMENTE...");

https.get(url, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log(`\nEstado HTTP: ${res.statusCode}`);
    
    if (res.statusCode === 200) {
      const response = JSON.parse(data);
      console.log("✅ API CORRECTA. Modelos disponibles para tu clave:");
      response.models.forEach(m => console.log(` - ${m.name}`));
    } else {
      console.log("❌ ERROR DE PERMISOS DETECTADO:");
      console.log(data); // Aquí nos dirá exactamente por qué falla
      console.log("\nSOLUCIÓN: Tu clave es válida pero el proyecto no tiene permisos. Crea una clave NUEVA en un proyecto NUEVO en aistudio.google.com");
    }
  });

}).on("error", (err) => {
  console.log("Error de red: " + err.message);
});