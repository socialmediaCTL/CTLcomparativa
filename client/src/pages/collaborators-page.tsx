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
import { CollaboratorsSection } from "@/components/collaborators-section";
import { ScrollReveal } from "@/components/scroll-reveal";

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

        {/* AQUÍ ESTÁ EL CAMBIO: Sección de Colaboradores como Hero Principal */}
        <CollaboratorsSection />

        {/* Value Proposition Section */}
        <section id="value-proposition" className="py-20 bg-white relative overflow-hidden">
          {/* Decorative Yellow Curved Lines */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-10">
            <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M-10 30 Q 30 60 110 30" fill="none" stroke="var(--color-brand-yellow)" strokeWidth="0.5" />
              <path d="M-10 70 Q 50 40 110 70" fill="none" stroke="var(--color-brand-yellow)" strokeWidth="0.3" opacity="0.6" />
              <circle cx="85" cy="15" r="25" fill="none" stroke="var(--color-brand-yellow)" strokeWidth="0.3" opacity="0.4" />
              <path d="M0 90 C 20 60 40 80 60 50" fill="none" stroke="var(--color-brand-yellow)" strokeWidth="0.4" opacity="0.5" />
              <circle cx="10" cy="50" r="15" fill="none" stroke="var(--color-brand-yellow)" strokeWidth="0.2" opacity="0.3" />
            </svg>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0F1B2D] mb-4">
                  Una Propuesta de Valor <span className="text-[var(--color-brand-yellow)]">Única</span>
                </h2>
                <p className="text-slate-600 text-lg">
                  Hemos diseñado una solución integral para eliminar fricciones y maximizar resultados.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {valueProps.map((prop, index) => (
                <ScrollReveal
                  key={index}
                  delay={index * 0.1}
                  className="border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white hover:bg-[#0F1B2D] group cursor-pointer rounded-xl overflow-hidden"
                >
                  <Card className="border-0 shadow-none bg-transparent">
                    <CardHeader className="pb-2">
                      <div className="w-16 h-16 rounded-2xl bg-[#0F1B2D]/5 group-hover:bg-white flex items-center justify-center mb-4 mx-auto md:mx-0 transition-all duration-500 group-hover:rotate-[5deg]">
                        <div className="[&>svg]:text-[var(--color-brand-yellow)] group-hover:[&>svg]:text-[#0F1B2D] transition-colors duration-500">{prop.icon}</div>
                      </div>
                      <CardTitle className="text-xl font-bold text-[#0F1B2D] group-hover:text-white text-center md:text-left transition-colors duration-500">
                        {prop.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 group-hover:text-slate-100 leading-relaxed text-center md:text-left transition-colors duration-500">
                        {prop.description}
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap Section - Interactive with GSAP ScrollTrigger */}
        <RoadmapSection />

        {/* Final CTA Section */}
        <section id="cta" className="py-24 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
          {/* Decorative Yellow Curved Lines */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-10">
            <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M110 20 Q 70 50 -10 20" fill="none" stroke="var(--color-brand-yellow)" strokeWidth="0.5" />
              <path d="M-10 60 Q 50 30 110 60" fill="none" stroke="var(--color-brand-yellow)" strokeWidth="0.3" opacity="0.6" />
              <circle cx="15" cy="85" r="20" fill="none" stroke="var(--color-brand-yellow)" strokeWidth="0.3" opacity="0.5" />
              <circle cx="90" cy="10" r="15" fill="none" stroke="var(--color-brand-yellow)" strokeWidth="0.2" opacity="0.4" />
              <path d="M100 80 C 80 50 60 70 40 40" fill="none" stroke="var(--color-brand-yellow)" strokeWidth="0.4" opacity="0.7" />
            </svg>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <ScrollReveal direction="up" distance={50}>
              <div className="max-w-4xl mx-auto bg-white rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden ring-1 ring-slate-200">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-brand-yellow)]/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                <div className="relative z-10">
                  <h2 className="text-3xl md:text-5xl font-bold text-[#0F1B2D] mb-8">
                    ¿Estás listo para <span className="text-[var(--color-brand-yellow)]">escalar</span>?
                  </h2>
                  <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                    Contacta directamente con nuestro equipo de expansión a través de WhatsApp para agilizar tu registro y resolver dudas.
                  </p>

                  <Button asChild size="lg" className="bg-[var(--color-brand-yellow)] hover:bg-yellow-400 text-[#0F1B2D] font-bold text-xl px-12 h-20 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                    <a
                      href="/contacto"
                    >
                      Quiero formar parte y ser colaborador
                    </a>
                  </Button>

                  <div className="mt-8 flex items-center justify-center gap-2 text-slate-500 text-sm">
                    <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                    Respuesta media: &lt; 15 minutos
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}