import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FileCheck,
  Zap,
  Search,
  ShieldAlert,
  ArrowDown
} from "lucide-react";
import whatsappLogo from "@assets/whatsapp_logo.png";
import { RoadmapSection } from "@/components/roadmap-section";
// Importa tus imágenes de Volt
// import voltBusiness from "@assets/volt_business.png";
// import voltTech from "@assets/volt_tech.png";
// import voltSuccess from "@assets/volt_rocket.png";

export default function CollaboratorsPage() {
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

        {/* Roadmap Section - Interactive with GSAP ScrollTrigger */}
        <RoadmapSection />


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