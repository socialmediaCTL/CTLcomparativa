import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    Handshake,
    Network,
    Brain,
    ShieldCheck,
    Building2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface RoadmapStep {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    icon: React.ReactNode;
}

const roadmapSteps: RoadmapStep[] = [
    {
        id: 1,
        title: "Paso 01",
        subtitle: "Alianza Estratégica",
        description:
            "Firma de Convenio Institucional. Formalización de la plataforma como herramienta oficial del Colegio de Administradores de Fincas (CAF).",
        icon: <Handshake className="w-12 h-12 md:w-16 md:h-16" />,
    },
    {
        id: 2,
        title: "Paso 02",
        subtitle: "Integración de Datos",
        description:
            "Despliegue de la Red. Transmisión de la información necesaria de los administradores colegiados al CRM centralizado del sistema.",
        icon: <Network className="w-12 h-12 md:w-16 md:h-16" />,
    },
    {
        id: 3,
        title: "Paso 03",
        subtitle: "Inteligencia en Tiempo Real",
        description:
            "Activación del Motor de IA. Inicio de auditorías automáticas mediante un escaneo multimarca de más de 80 ofertas del mercado energético.",
        icon: <Brain className="w-12 h-12 md:w-16 md:h-16" />,
    },
    {
        id: 4,
        title: "Paso 04",
        subtitle: "Control y Seguridad",
        description:
            "Monitorización y Escalado. Control continuo de la eficiencia energética con alertas proactivas que identifican renovaciones tácitas y cláusulas abusivas.",
        icon: <ShieldCheck className="w-12 h-12 md:w-16 md:h-16" />,
    },
    {
        id: 5,
        title: "Paso 05",
        subtitle: "Libertad Operativa",
        description:
            "Valor para el Administrador: Escalabilidad Operativa. Eliminación de la carga burocrática para permitir la gestión de un volumen ilimitado de comunidades con la misma estructura de personal.",
        icon: <Building2 className="w-12 h-12 md:w-16 md:h-16" />,
    },
];

export function RoadmapSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const pathRef = useRef<SVGPathElement>(null);
    const circlesRef = useRef<(HTMLDivElement | null)[]>([]);
    const textsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (!sectionRef.current || !pathRef.current) return;

        const ctx = gsap.context(() => {
            // Animate the path drawing
            const path = pathRef.current;
            if (path) {
                const pathLength = path.getTotalLength();
                gsap.set(path, {
                    strokeDasharray: pathLength,
                    strokeDashoffset: pathLength,
                });

                gsap.to(path, {
                    strokeDashoffset: 0,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top center",
                        end: "bottom center",
                        scrub: 1,
                    },
                });
            }

            // Animate circles and text content
            circlesRef.current.forEach((circle, index) => {
                if (!circle) return;

                const text = textsRef.current[index];

                // Circle activation animation
                gsap.from(circle, {
                    scale: 0,
                    opacity: 0,
                    scrollTrigger: {
                        trigger: circle,
                        start: "top 80%",
                        end: "top 50%",
                        scrub: 1,
                    },
                });

                // Text reveal animation
                if (text) {
                    gsap.from(text, {
                        opacity: 0,
                        x: index % 2 === 0 ? -50 : 50,
                        scrollTrigger: {
                            trigger: circle,
                            start: "top 75%",
                            end: "top 45%",
                            scrub: 1,
                        },
                    });
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="roadmap"
            className="py-20 md:py-32 bg-[#0F1B2D] border-t border-white/5 relative scroll-mt-28 overflow-hidden"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <svg
                    className="absolute top-0 left-0 w-full h-full opacity-[0.04]"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0 100 C 20 0 50 0 100 100 Z"
                        fill="none"
                        stroke="white"
                        strokeWidth="0.5"
                    />
                    <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="white"
                        strokeWidth="0.2"
                    />
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Nuestra{" "}
                        <span className="text-[var(--color-brand-yellow)]">
                            Hoja de Ruta
                        </span>
                    </h2>
                    <p className="text-lg text-[#C6CFDA] leading-relaxed">
                        Un proceso estratégico diseñado para transformar la gestión
                        energética de las comunidades de propietarios.
                    </p>
                </div>

                {/* Roadmap Container */}
                <div className="relative max-w-6xl mx-auto">
                    {/* SVG Path - Hidden on mobile, visible on tablet+ */}
                    <svg
                        className="hidden md:block absolute inset-0 w-full h-full pointer-events-none"
                        viewBox="0 0 1000 1400"
                        preserveAspectRatio="none"
                    >
                        <path
                            ref={pathRef}
                            d="M 200 100 Q 400 150, 500 250 T 500 450 Q 500 550, 600 650 T 700 850 Q 750 950, 650 1050 T 500 1250"
                            fill="none"
                            stroke="var(--color-brand-yellow)"
                            strokeWidth="4"
                            strokeLinecap="round"
                        />
                    </svg>

                    {/* Steps */}
                    <div className="space-y-32 md:space-y-40">
                        {roadmapSteps.map((step, index) => (
                            <div
                                key={step.id}
                                className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                            >
                                {/* Circle Container */}
                                <div
                                    ref={(el) => { circlesRef.current[index] = el; }}
                                    className="flex-shrink-0 relative"
                                >
                                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#0C1A2B] border-4 border-[var(--color-brand-yellow)] flex items-center justify-center text-[var(--color-brand-yellow)] shadow-[0_0_30px_rgba(255,215,0,0.3)] hover:scale-110 transition-transform duration-300">
                                        {step.icon}
                                    </div>
                                    {/* Step Number Badge */}
                                    <div className="absolute -top-2 -right-2 w-10 h-10 md:w-12 md:h-12 bg-[var(--color-brand-yellow)] rounded-full flex items-center justify-center text-[#0C1A2B] font-bold text-lg md:text-xl border-4 border-[#0F1B2D] shadow-lg">
                                        {step.id}
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div
                                    ref={(el) => { textsRef.current[index] = el; }}
                                    className={`flex-1 ${index % 2 === 0 ? "md:text-left" : "md:text-right"
                                        } text-center md:text-left`}
                                >
                                    <div className="bg-[#102033] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-[var(--color-brand-yellow)]/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,215,0,0.15)]">
                                        <p className="text-[var(--color-brand-yellow)] font-bold text-sm md:text-base uppercase tracking-wider mb-2">
                                            {step.title}
                                        </p>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                            {step.subtitle}
                                        </h3>
                                        <p className="text-[#C6CFDA] leading-relaxed text-base md:text-lg">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
