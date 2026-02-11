import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Building2,
  Database,
  Cpu,
  TrendingUp,
  Headset,
  FileCheck,
  Zap,
  Search,
  ShieldAlert,
  ArrowDown,
  Rocket
} from "lucide-react";
import whatsappLogo from "@assets/whatsapp_logo.png";
// Importa tus imágenes de Volt
// import voltBusiness from "@assets/volt_business.png";
// import voltTech from "@assets/volt_tech.png";
// import voltSuccess from "@assets/volt_rocket.png";

export default function CollaboratorsPage() {
      const roadmapSteps = [
    {
      id: 1,
      icon: <Building2 className="w-8 h-8 text-white" />,
      title: "Vinculación Institucional",
      description: "Establecemos el marco legal y comercial de la colaboración, posicionando nuestra plataforma como tu herramienta oficial.",
      color: "bg-blue-600",
      borderColor: "border-blue-600",
      voltSuggestion: "Volt Business (Dando la mano)",
      alignment: "left",
      // AJUSTES LIBRES DE POSICIÓN:
      customStyle: { 
         marginTop: "0px",       // Mover verticalmente
         marginLeft: "-430px",      // Mover horizontalmente
         transform: "translate(0px, 0px)" // Mover libremente en ejes X e Y simultáneamente
      }
    },
    {
      id: 2,
      icon: <Database className="w-8 h-8 text-white" />,
      title: "Integración de Cartera",
      description: "Carga masiva de tus datos y puntos de suministro (CUPS) en nuestro ecosistema digital para visión global inmediata.",
      color: "bg-[var(--color-brand-yellow)]",
      borderColor: "border-[var(--color-brand-yellow)]",
      alignment: "right",
      customStyle: { 
         marginTop: "150px",     // Ejemplo: bájala 150px
         marginRight: "-470px",    // Ejemplo: muévela 20px a la izquierda
         transform: "translate(0px, 0px)" 
      }
    },
    {
      id: 3,
      icon: <Cpu className="w-8 h-8 text-white" />,
      title: "Activación del 'Cerebro Digital'",
      description: "Nuestro motor de IA inicia auditorías automáticas, escaneando el mercado en tiempo real para detectar ahorros.",
      color: "bg-purple-600",
      borderColor: "border-purple-600",
      voltSuggestion: "Volt Tech (Analizando Datos/VR)",
      alignment: "left",
      customStyle: { 
         marginTop: "200px", 
         marginLeft: "-470px",     // Ejemplo: muévela 50px a la derecha
      }
    },
    {
      id: 4,
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      title: "Gestión de Beneficios",
      description: "Modelo de éxito compartido. Profesionalizamos la gestión energética, convirtiendo el gasto en un activo rentable.",
      color: "bg-green-600",
      borderColor: "border-green-600",
      alignment: "right",
      customStyle: { 
        marginTop: "-100px",
        marginLeft: "600px" } // Puedes poner solo lo que necesites
    },
    {
      id: 5,
      icon: <Headset className="w-8 h-8 text-white" />,
      title: "Escalabilidad y Soporte",
      description: "Soporte administrativo continuo para que puedas escalar tu volumen de negocio sin aumentar tu estructura.",
      color: "bg-orange-500",
      borderColor: "border-orange-500",
      alignment: "left",
      customStyle: { 
        marginTop: "50px",
        marginLeft: "-470px", }
    }
  ];
  
  const valueProps = [
    {
      icon: <FileCheck className="w-10 h-10 text-[var(--color-brand-yellow)]" />,
      title: "Liberación Administrativa",
      description: "Eliminamos el 100% de la carga burocrática y el trato con call centers ineficientes."
    },
    {
      icon: <Zap className="w-10 h-10 text-[var(--color-brand-yellow)]" />,
      title: "Informes en un Clic",
      description: "Generación automática de comparativas visuales listas para presentar a tus clientes, eliminando conflictos y dudas."
    },
    {
      icon: <Search className="w-10 h-10 text-[var(--color-brand-yellow)]" />,
      title: "Escaneo Multimarca",
      description: "Análisis automático de todo el mercado para garantizar siempre el precio más bajo posible a tu red de contactos."
    },
    {
      icon: <ShieldAlert className="w-10 h-10 text-[var(--color-brand-yellow)]" />,
      title: "Alertas Proactivas",
      description: "El sistema funciona como un escudo técnico, identificando renovaciones y cláusulas abusivas antes de que ocurran."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans overflow-x-hidden flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-[#0F1B2D] relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          
           {/* Líneas decorativas - Estilo Volt */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
             <svg className="absolute top-0 left-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M-10 20 Q 30 50 110 20" fill="none" stroke="var(--color-brand-yellow)" strokeWidth="0.3" />
                <circle cx="10" cy="80" r="20" fill="none" stroke="white" strokeWidth="0.2" opacity="0.5" />
                <path d="M80 100 C 60 70 90 40 100 0" fill="none" stroke="var(--color-brand-yellow)" strokeWidth="0.3" opacity="0.6" />
             </svg>
          </div>

          <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[var(--color-brand-yellow)]/10 rounded-full blur-[100px]"></div>

          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Transforma tu Red en un <span className="text-[var(--color-brand-yellow)]">Activo Rentable</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Únete al ecosistema de colaboración líder en el sector energético. 
              Automatización, rentabilidad y servicio premium para tus clientes.
            </p>
            <div className="flex flex-col items-center gap-4">
                <Button asChild size="lg" className="bg-[var(--color-brand-yellow)] text-[#0F1B2D] hover:bg-yellow-400 font-bold text-lg px-10 h-14 rounded-full shadow-[0_0_20px_rgba(255,204,0,0.4)] transition-transform transform hover:scale-105">
                <a href="#roadmap">
                    Ver Hoja de Ruta <ArrowDown className="ml-2 w-5 h-5" />
                </a>
                </Button>
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="py-20 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F1B2D] mb-4">
                Una Propuesta de Valor Única
              </h2>
              <p className="text-slate-600 text-lg">
                Hemos diseñado una solución integral para eliminar fricciones y maximizar resultados.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {valueProps.map((prop, index) => (
                <Card key={index} className="border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-slate-50">
                  <CardHeader className="pb-2">
                    <div className="w-16 h-16 rounded-2xl bg-[#0F1B2D]/5 flex items-center justify-center mb-4 mx-auto md:mx-0">
                      {prop.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-[#0F1B2D] text-center md:text-left">
                      {prop.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed text-center md:text-left">
                      {prop.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap Section (Winding Road Layout - WIDE & ZIG ZAG) */}
        <section id="roadmap" className="py-24 bg-[#0F1B2D] relative overflow-hidden">
             {/* Background Grid */}
             <div className="absolute inset-0 opacity-5 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-32">
              Roadmap para la <span className="text-[var(--color-brand-yellow)]">Implementación</span>
            </h2>

                        <div className="relative max-w-5xl mx-auto">
              
              {/* SVG CARRETERA COMPACTA (Más corta y ancha) */}
                             {/* SVG CARRETERA EXTENDIDA (Hasta el final) */}
              <div className="absolute top-0 h-[1900px] left-0 right-0 hidden md:block pointer-events-none w-full">
                 <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 1900">
                    <defs>
                      <linearGradient id="roadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#334155" stopOpacity="0" />
                        <stop offset="5%" stopColor="#334155" stopOpacity="1" />
                        <stop offset="90%" stopColor="#334155" stopOpacity="1" />
                        <stop offset="100%" stopColor="#334155" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    
                    {/* Path zig-zag COMPLETO (5 Pasos + Cohete) */}
                    <path 
                        d="M 500,0 
                           Q 500,80 350,120 
                           T 200,240 
                           L 200,300
                           Q 200,400 500,440
                           T 800,540
                           L 800,600
                           Q 800,700 500,740
                           T 200,840
                           L 200,900
                           Q 200,1000 500,1040
                           T 800,1140
                           L 800,1250
                           Q 800,1350 500,1390
                           T 200,1490
                           L 200,1550
                           Q 200,1650 500,1690
                           T 500,1790
                           L 500,1900" 
                        fill="none" 
                        stroke="url(#roadGradient)" 
                        strokeWidth="80" 
                        strokeLinecap="round"
                    />
                    
                    {/* Dashed Line on top */}
                    <path 
                        d="M 500,0 
                           Q 500,80 350,120 
                           T 200,240 
                           L 200,300
                           Q 200,400 500,440
                           T 800,540
                           L 800,600
                           Q 800,700 500,740
                           T 200,840
                           L 200,900
                           Q 200,1000 500,1040
                           T 800,1140
                           L 800,1250
                           Q 800,1350 500,1390
                           T 200,1490
                           L 200,1550
                           Q 200,1650 500,1690
                           T 500,1790
                           L 500,1900"
                        fill="none" 
                        stroke="#ffffff" 
                        strokeWidth="5" 
                        strokeDasharray="20, 30"
                        strokeLinecap="round"
                        className="opacity-40"
                    />
                 </svg>
              </div>
              
              {/* Mobile Straight Line fallback */}
              <div className="absolute left-6 top-0 bottom-0 w-3 bg-slate-700 md:hidden rounded-full">
                 <div className="w-1 h-full mx-auto my-2 border-l-2 border-dashed border-white/20"></div>
              </div>

                             {/* Quitamos 'space-y' porque ahora usamos márgenes individuales. 
                  Mantenemos 'pt-[150px]' (o lo que quieras) como punto de partida inicial global. */}
              <div className="relative pt-[100px]">
                {roadmapSteps.map((step, index) => (
                  <div 
                    key={index} 
                    className={`relative flex items-center md:items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-0`}
                    style={step.customStyle} // <--- ¡AQUÍ ESTÁ LA MAGIA! Acepta cualquier estilo CSS que definas arriba
                  >
                    
                    {/* CONTENIDO (Tarjeta) */}
                    <div className={`w-full md:w-5/12 ml-16 md:ml-0 z-10 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                        {/* ...contenido igual que antes... */}
                        {/* Para ahorrarte espacio aquí, el contenido interno de la tarjeta es el mismo de antes */}
                        
                        <div className="relative group">
                          <Card className={`bg-[#1A2C42]/90 backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(255,204,0,0.1)] transition-all duration-300 transform group-hover:-translate-y-2`}>
                             <div className={`h-1.5 w-full ${step.color}`}></div>
                            <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                <div className={`md:hidden p-2 rounded-lg bg-white/10 ${step.color} bg-opacity-20`}>
                                    {step.icon}
                                </div>
                                <CardTitle className="text-xl md:text-2xl font-bold text-white leading-tight">
                                    {step.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                                {step.description}
                              </p>
                            </CardContent>
                          </Card>
                          
                          <div className={`hidden md:flex absolute top-1/2 -translate-y-1/2 ${index % 2 === 0 ? '-right-24 translate-x-0' : '-left-24 translate-x-0'} w-16 h-16 rounded-full border-4 border-[#0F1B2D] items-center justify-center ${step.color} shadow-lg z-20`}>
                             {step.icon}
                          </div>
                          
                           <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-1 w-20 ${step.color} opacity-30 -z-10 ${index % 2 === 0 ? '-right-20' : '-left-20'}`}></div>
                       </div>
                    </div>
                    <div className="hidden md:block w-2/12"></div>
                    
                    <div className="hidden md:flex w-5/12 items-center justify-center relative px-10">
                         {step.voltSuggestion && (
                             <div className={`relative group cursor-help transition-all duration-500 hover:scale-105 opacity-80 hover:opacity-100 ${index % 2 === 0 ? 'origin-left' : 'origin-right'}`}>
                                <div className="p-4 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
                                    <div className="w-48 h-48 border-2 border-dashed border-white/20 rounded-xl flex flex-col items-center justify-center bg-[#0F1B2D]/50 text-center p-4">
                                        <span className="text-5xl mb-3">⚡</span>
                                        <p className="text-xs text-[var(--color-brand-yellow)] font-bold mb-1">POSICIÓN VOLT</p>
                                        <p className="text-[10px] text-slate-400 font-mono leading-tight">{step.voltSuggestion}</p>
                                    </div>
                                </div>
                             </div>
                         )}
                    </div>
                    {/* ...resto del código igual... */}
                    <div className={`absolute left-6 top-0 -translate-x-1/2 md:hidden flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#0F1B2D] z-20 shadow-xl ${step.color}`}>
                      <span className="text-sm font-bold text-white">{step.id}</span>
                    </div>
                  </div>
                ))}
                
                {/* COHETE FINAL */}
                <div className="flex justify-center pt-32 pb-10 relative z-20">
                     <div className="relative group">
                        <div className="absolute inset-0 bg-yellow-500/20 blur-2xl rounded-full animate-pulse"></div>
                        <div className="bg-gradient-to-t from-[var(--color-brand-yellow)] to-orange-400 p-8 rounded-full shadow-[0_0_60px_rgba(255,165,0,0.6)] border-8 border-[#0F1B2D] transform group-hover:scale-110 transition-transform duration-500 cursor-pointer relative z-10">
                            <Rocket className="w-20 h-20 text-[#0F1B2D] animate-bounce" />
                        </div>
                        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-white/50 font-bold tracking-[0.2em] text-sm uppercase whitespace-nowrap group-hover:text-white group-hover:tracking-[0.5em] transition-all duration-700">
                            Misión Cumplida
                        </div>
                     </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="container mx-auto px-4 text-center">
            
            <div className="max-w-4xl mx-auto bg-white rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden ring-1 ring-slate-200">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-brand-yellow)]/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-[#0F1B2D] mb-8">
                    ¿Estás listo para escalar?
                </h2>
                <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                  Contacta directamente con nuestro equipo de expansión a través de WhatsApp para agilizar tu registro y resolver dudas.
                </p>
                
                <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xl px-12 h-20 rounded-full shadow-xl hover:shadow-2xl gap-4 transition-all transform hover:scale-105">
                  <a 
                    href="https://wa.me/584120628427?text=Hola,%20estoy%20interesado%20en%20el%20programa%20de%20colaboradores%20de%20ComparamosTuLuz.%20Me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n."
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <img src={whatsappLogo} alt="WhatsApp" className="w-10 h-10 filter brightness-0 invert" />
                    Hablar con un Agente
                  </a>
                </Button>
                
                <div className="mt-8 flex items-center justify-center gap-2 text-slate-500 text-sm">
                    <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                    Respuesta media: &lt; 15 minutos
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}