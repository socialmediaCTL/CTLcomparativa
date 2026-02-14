import { Button } from "@/components/ui/button";
import { Handshake, Globe, TrendingUp, ArrowDown } from "lucide-react";
import { ScrollReveal } from "./scroll-reveal";
// import colaboradoresBg from "@assets/colaboradores.png"; // Ya no usamos la imagen
import voltVideo from "@assets/video_colaboradores_page.webm"; // <--- Importamos el video

export function CollaboratorsSection() {
  const steps = [
    {
      icon: <Handshake className="w-10 h-10 text-[var(--color-brand-yellow)]" />,
      title: "Fase de Alianza",
      description: "Formalizamos acuerdos estratégicos para integrar nuestra tecnología en tu red de contactos."
    },
    {
      icon: <Globe className="w-10 h-10 text-[var(--color-brand-yellow)]" />,
      title: "Despliegue Digital",
      description: "Activación de acceso a nuestro CRM centralizado para gestión masiva sin esfuerzo manual."
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-[var(--color-brand-yellow)]" />,
      title: "Crecimiento",
      description: "Genera ingresos mediante incentivos profesionales mientras tus clientes ahorran en su factura."
    }
  ];

  const handleScroll = () => {
    const nextSection = document.getElementById('value-proposition');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* CAMBIO PRINCIPAL: Video de Fondo */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source src={voltVideo} type="video/webm" />
          Su navegador no soporta videos HTML5.
        </video>

        {/* Overlay oscuro para que el texto se lea bien sobre el video */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1B2D]/95 via-[#0F1B2D]/90 to-[#0F1B2D]/80"></div>
      </div>

      {/* Líneas decorativas "Tech" (Amarillas) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-20">
        <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 0 L 100 100" stroke="var(--color-brand-yellow)" strokeWidth="0.1" fill="none" />
          <path d="M100 0 L 0 100" stroke="var(--color-brand-yellow)" strokeWidth="0.1" fill="none" />
          <circle cx="0" cy="50" r="30" stroke="var(--color-brand-yellow)" strokeWidth="0.2" fill="none" />
          <circle cx="100" cy="50" r="30" stroke="var(--color-brand-yellow)" strokeWidth="0.2" fill="none" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 relative">
            <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--color-brand-yellow)]/30 bg-[var(--color-brand-yellow)]/10 text-[var(--color-brand-yellow)] font-medium text-sm mb-6 tracking-wide uppercase">
              Programa de Partners
            </span>

            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              ¿Quieres ser nuestro <br className="hidden md:block" />
              <span className="text-[var(--color-brand-yellow)]">Colaborador Oficial?</span>
            </h2>

            <p className="text-xl text-slate-300 font-light leading-relaxed">
              Únete al ecosistema que rentabiliza tu red de contactos mientras ayudas a tus clientes a ahorrar.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <ScrollReveal
              key={index}
              delay={index * 0.15}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-[var(--color-brand-yellow)]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(255,204,0,0.15)] group"
            >
              <div className="mb-6 bg-gradient-to-br from-white/5 to-white/10 w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-[var(--color-brand-yellow)]/30">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--color-brand-yellow)] transition-colors">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {step.description}
              </p>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={handleScroll}
            className="bg-[var(--color-brand-yellow)] text-[#0F1B2D] hover:bg-[#FFD700] hover:text-black font-bold text-lg px-10 h-16 rounded-full shadow-[0_0_20px_rgba(255,204,0,0.3)] hover:shadow-[0_0_30px_rgba(255,204,0,0.6)] gap-3 transition-all transform hover:scale-105"
          >
            Más información <ArrowDown className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}