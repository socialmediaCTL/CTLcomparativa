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

// Import Volt background images  
import voltAlianza from "@assets/volt_alianza.webp";
import voltIA from "@assets/volt_ia.webp";
import voltMonitorizacion from "@assets/volt_monitorizacion.webp";
import voltRed from "@assets/volt_red.webp";
import voltEscalabilidad from "@assets/volt_escalabilidad.webp";

gsap.registerPlugin(ScrollTrigger);

interface RoadmapStep {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    icon: React.ReactNode;
    image: string;
}

const roadmapSteps: RoadmapStep[] = [
    {
        id: 1,
        title: "01",
        subtitle: "Alianza Estratégica",
        description:
            "Establecemos un marco de colaboración oficial para integrar nuestra tecnología como la herramienta de gestión energética de referencia para tu entidad.",
        icon: <Handshake className="w-12 h-12 md:w-16 md:h-16" />,
        image: voltAlianza,
    },
    {
        id: 2,
        title: "02",
        subtitle: "Despliegue de la Red",
        description:
            "Conectamos y centralizamos todos tus puntos de suministro en nuestro sistema inteligente, permitiendo una visión global de tu ecosistema energético desde un solo lugar.",
        icon: <Network className="w-12 h-12 md:w-16 md:h-16" />,
        image: voltRed,
    },
    {
        id: 3,
        title: "03",
        subtitle: "Activación del Motor de IA",
        description:
            "Iniciamos el proceso de auditoría automática mediante un escaneo multimarca que detecta y activa ahorros netos garantizados de forma inmediata.",
        icon: <Brain className="w-12 h-12 md:w-16 md:h-16" />,
        image: voltIA,
    },
    {
        id: 4,
        title: "04",
        subtitle: "Escudo Técnico y Control",
        description:
            "Implementamos un sistema de vigilancia proactiva que monitoriza incidencias y protege tu rentabilidad frente a cláusulas abusivas o renovaciones tácticas.",
        icon: <ShieldCheck className="w-12 h-12 md:w-16 md:h-16" />,
        image: voltMonitorizacion,
    },
    {
        id: 5,
        title: "05",
        subtitle: "Escalabilidad Operativa",
        description:
            "Liberamos a tu equipo del 100% de la carga burocrática, permitiendo gestionar un volumen ilimitado de activos con la misma estructura de personal.",
        icon: <Building2 className="w-12 h-12 md:w-16 md:h-16" />,
        image: voltEscalabilidad,
    },
];

// Utility function to split text into words wrapped in spans
const splitTextIntoWords = (text: string): React.ReactNode => {
    return text.split(' ').map((word, index) => (
        <span
            key={index}
            className="inline-block opacity-0"
            style={{ willChange: 'opacity, transform' }}
        >
            {word}{index < text.split(' ').length - 1 ? '\u00A0' : ''}
        </span>
    ));
};

export function RoadmapSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const pathRef = useRef<SVGPathElement>(null);
    const circlesRef = useRef<(HTMLDivElement | null)[]>([]);
    const textsRef = useRef<(HTMLDivElement | null)[]>([]);
    const backgroundsRef = useRef<(HTMLDivElement | null)[]>([]);
    const subtitlesRef = useRef<(HTMLHeadingElement | null)[]>([]);
    const descriptionsRef = useRef<(HTMLParagraphElement | null)[]>([]);

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

            // Animate background images with instant transitions
            backgroundsRef.current.forEach((bg, index) => {
                if (!bg) return;

                // Set initial opacity to 0 for all except the first
                gsap.set(bg, { opacity: index === 0 ? 0.25 : 0 });

                const circle = circlesRef.current[index];
                if (!circle) return;

                // Get text elements for this step
                const subtitle = subtitlesRef.current[index];
                const description = descriptionsRef.current[index];

                // Instant background switch when step enters viewport
                ScrollTrigger.create({
                    trigger: circle,
                    start: "top 75%", // When step enters viewport
                    end: "bottom 25%", // When step leaves viewport
                    onEnter: () => {
                        // Show current background instantly
                        gsap.to(bg, { opacity: 0.25, duration: 0.3, ease: "power2.out" });
                        // Hide all other backgrounds instantly
                        backgroundsRef.current.forEach((otherBg, otherIndex) => {
                            if (otherIndex !== index && otherBg) {
                                gsap.to(otherBg, { opacity: 0, duration: 0.3, ease: "power2.out" });
                            }
                        });

                        // Trigger text animations when background appears
                        if (subtitle) {
                            const words = subtitle.querySelectorAll('span');
                            gsap.fromTo(words,
                                { opacity: 0, y: 10 },
                                {
                                    opacity: 1,
                                    y: 0,
                                    stagger: 0.04,
                                    duration: 0.6,
                                    ease: "power2.out",
                                }
                            );
                        }

                        if (description) {
                            const words = description.querySelectorAll('span');
                            gsap.fromTo(words,
                                { opacity: 0, y: 10 },
                                {
                                    opacity: 1,
                                    y: 0,
                                    stagger: 0.04,
                                    duration: 0.6,
                                    delay: 0.2, // Slight delay after subtitle
                                    ease: "power2.out",
                                }
                            );
                        }
                    },
                    onEnterBack: () => {
                        // Show current background when scrolling back up
                        gsap.to(bg, { opacity: 0.25, duration: 0.3, ease: "power2.out" });
                        // Hide all other backgrounds
                        backgroundsRef.current.forEach((otherBg, otherIndex) => {
                            if (otherIndex !== index && otherBg) {
                                gsap.to(otherBg, { opacity: 0, duration: 0.3, ease: "power2.out" });
                            }
                        });

                        // Re-trigger text animations when scrolling back
                        if (subtitle) {
                            const words = subtitle.querySelectorAll('span');
                            gsap.fromTo(words,
                                { opacity: 0, y: 10 },
                                {
                                    opacity: 1,
                                    y: 0,
                                    stagger: 0.04,
                                    duration: 0.6,
                                    ease: "power2.out",
                                }
                            );
                        }

                        if (description) {
                            const words = description.querySelectorAll('span');
                            gsap.fromTo(words,
                                { opacity: 0, y: 10 },
                                {
                                    opacity: 1,
                                    y: 0,
                                    stagger: 0.04,
                                    duration: 0.6,
                                    delay: 0.2,
                                    ease: "power2.out",
                                }
                            );
                        }
                    },
                    onLeave: () => {
                        // When scrolling down past this step, only hide if not going to next step
                        if (index < backgroundsRef.current.length - 1) {
                            // Let next step handle it
                        } else {
                            // Last step, hide background when leaving
                            gsap.to(bg, { opacity: 0, duration: 0.3, ease: "power2.out" });
                        }
                    },
                    onLeaveBack: () => {
                        // When scrolling up past this step, only hide if not going to previous step
                        if (index > 0) {
                            // Let previous step handle it
                        } else {
                            // First step, hide background when leaving back
                            gsap.to(bg, { opacity: 0, duration: 0.3, ease: "power2.out" });
                        }
                    },
                });
            });

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

            {/* Dynamic Volt Background Images */}
            {roadmapSteps.map((step, index) => (
                <div
                    key={`bg-${step.id}`}
                    ref={(el) => {
                        backgroundsRef.current[index] = el;
                    }}
                    className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-1000"
                    style={{
                        opacity: index === 0 ? 0.2 : 0,
                    }}
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url(${step.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                            filter: 'blur(0px)', // No blur to maintain Volt's proportions
                        }}
                    />
                </div>
            ))}

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
                        <defs>
                            {/* Gradient for the glowing light */}
                            <radialGradient id="lightGlow">
                                <stop offset="0%" stopColor="var(--color-brand-yellow)" stopOpacity="1" />
                                <stop offset="50%" stopColor="var(--color-brand-yellow)" stopOpacity="0.6" />
                                <stop offset="100%" stopColor="var(--color-brand-yellow)" stopOpacity="0" />
                            </radialGradient>
                        </defs>

                        {/* Main path */}
                        <path
                            ref={pathRef}
                            id="roadmapPath"
                            d="M 200 100 Q 400 150, 500 250 T 500 450 Q 500 550, 600 650 T 700 850 Q 750 950, 650 1050 T 500 1250"
                            fill="none"
                            stroke="var(--color-brand-yellow)"
                            strokeWidth="4"
                            strokeLinecap="round"
                        />

                        {/* Animated light that follows the path */}
                        <circle
                            id="pathLight"
                            r="12"
                            fill="url(#lightGlow)"
                            opacity="0.8"
                        >
                            <animateMotion
                                dur="8s"
                                repeatCount="indefinite"
                                path="M 200 100 Q 400 150, 500 250 T 500 450 Q 500 550, 600 650 T 700 850 Q 750 950, 650 1050 T 500 1250"
                            />
                        </circle>

                        {/* Outer glow ring */}
                        <circle
                            r="20"
                            fill="none"
                            stroke="var(--color-brand-yellow)"
                            strokeWidth="2"
                            opacity="0.3"
                        >
                            <animateMotion
                                dur="8s"
                                repeatCount="indefinite"
                                path="M 200 100 Q 400 150, 500 250 T 500 450 Q 500 550, 600 650 T 700 850 Q 750 950, 650 1050 T 500 1250"
                            />
                            <animate
                                attributeName="r"
                                values="20;28;20"
                                dur="1.5s"
                                repeatCount="indefinite"
                            />
                            <animate
                                attributeName="opacity"
                                values="0.3;0.6;0.3"
                                dur="1.5s"
                                repeatCount="indefinite"
                            />
                        </circle>
                    </svg>

                    {/* Steps */}
                    <div className="space-y-64 md:space-y-80">
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
                                        <h3
                                            ref={(el) => { subtitlesRef.current[index] = el; }}
                                            className="text-2xl md:text-3xl font-bold text-white mb-4"
                                        >
                                            {splitTextIntoWords(step.subtitle)}
                                        </h3>
                                        <p
                                            ref={(el) => { descriptionsRef.current[index] = el; }}
                                            className="text-[#C6CFDA] leading-relaxed text-base md:text-lg"
                                        >
                                            {splitTextIntoWords(step.description)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Final Phrase */}
                    <div className="mt-20 text-center">
                        <p className="text-xl md:text-2xl text-white font-bold italic max-w-3xl mx-auto">
                            "El éxito de tu crecimiento se construye sobre una base sólida de tecnología, confianza y resultados medibles"
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
