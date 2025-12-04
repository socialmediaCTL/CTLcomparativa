import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {
  Lightbulb,
  Zap,
  MousePointerClick,
  CheckCircle2,
  Search,
  ShieldCheck,
  TrendingDown,
  Menu,
  X,
  Camera,
  FileText,
  ArrowRight,
  BarChart3,
  Users,
  Gift,
  MessageCircle,
  Phone,
  Clock,
  Wallet,
  ChevronLeft,
  ChevronRight,
  Brain,
  ChevronDown,
  Headset,
  FileUp,
  ArrowLeftRight,
  RotateCw,
  Leaf,
  Check,
  Star,
  Target,
  Eye,
  MapPin,
  Mail,
  HelpCircle,
  BookOpen,
  Lock,
  Home as HomeIcon,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import aboutUsTeam from "@assets/about_us_team.jpg";
import voltMain from "@assets/volt_hero_v2.png";
import voltTools from "@assets/conoce-a-volt.webp";
import voltHowToWork from "@assets/volt_hero_final.png";
import voltAhorro from "@assets/volt_ahorro.png";
import logoRound from "@assets/logo_ctl_clean.png";

import arcosImage from "@assets/arcos.png";
import testimonialMaria from "@assets/testimonial_maria.jpg";
import testimonialCarlos from "@assets/testimonial_carlos.jpg";
import testimonialLaura from "@assets/testimonial_laura.jpg";
import testimonialAntonio from "@assets/testimonial_antonio.jpg";
import testimonialIsabel from "@assets/testimonial_isabel.jpg";
import familyHero from "@assets/family_hero.webp";
import logoUE from "@assets/logo-compo-ue-color.png";
import logoFooter from "@assets/logo_footer.webp";
import voltBoton from "@assets/volt-boton.webp";
import voltFAQ from "@assets/volt-intriga.webp";
import thoughtBubble from "@assets/thought_bubble.png";
import whatsappLogo from "@assets/whatsapp_logo.png";



const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.585 1.961.893 2.796.893 3.183 0 5.768-2.586 5.768-5.766.001-3.181-2.585-5.768-5.768-5.78zM12 2C6.48 2 2 6.48 2 12c0 1.82.48 3.53 1.31 5.02L2 22l5.12-1.35C8.64 21.55 10.29 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm.01 18c-1.48 0-2.9-.4-4.13-1.1l-.3-.16-3.05.8.81-2.98-.19-.32c-.79-1.3-1.21-2.8-1.21-4.34 0-4.96 4.04-9 9-9s9 4.04 9 9-4.04 9-9.01 9z" />
    <path d="M16.57 14.38c-.23-.11-1.37-.68-1.58-.76-.21-.08-.37-.11-.52.11-.16.23-.61.76-.75.91-.14.16-.28.17-.51.06-.23-.11-.97-.36-1.85-1.14-.69-.62-1.16-1.38-1.29-1.61-.13-.23-.01-.36.1-.47.11-.1.23-.26.35-.39.11-.13.15-.22.23-.37.08-.16.04-.29-.02-.41-.06-.11-.52-1.26-.71-1.72-.19-.45-.38-.39-.52-.4-.13-.01-.28-.01-.43-.01-.15 0-.39.06-.6.29-.21.23-.79.77-.79 1.88 0 1.11.81 2.18.92 2.33.11.16 3.19 4.87 7.72 6.83 2.69 1.16 3.73.93 4.42.87.76-.07 1.67-.68 1.91-1.34.24-.66.24-1.22.17-1.34-.07-.11-.25-.17-.48-.29z" />
  </svg>
);

export default function Home() {

  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">

      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Comparison />
      <Testimonials />
      <AboutUs />
      <MeetVolt />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}



function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  //  const [, setLocation] = useLocation(); 
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className="fixed top-0 left-0 z-50 w-full border-b border-white/5 transition-all duration-300 text-[#C6CFDA] bg-[#0F1B2D]"
    >
      <div className="container mx-auto px-4 flex h-24 items-center justify-between">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2"
        >
          <img
            src={logoRound}
            alt="CTL Logo"
            className="h-16 md:h-20 w-auto transition-transform duration-300 hover:scale-110"
          />
        </a>
        <div className="hidden xl:flex items-center">
          {[
            { name: "Beneficios", href: "#features" },
            { name: "Cómo funciona", href: "#how-it-works" },
            { name: "Comparativa", href: "#comparison" },
            { name: "Opiniones", href: "#testimonials" },
            { name: "Sobre nosotros", href: "#about-us" },
            { name: "Conoce a Volt", href: "#meet-volt" },
            { name: "Preguntas", href: "#faq" },
          ].map((link, index, array) => (
            <div key={link.name} className="flex items-center">
              <a
                href={link.href}
                className="relative text-[10px] lg:text-xs font-bold uppercase hover:text-[var(--color-brand-yellow)] transition-colors px-3 lg:px-4 whitespace-nowrap group"
              >
                {link.name}
                <span className="absolute bottom-[-6px] left-1/2 w-0 h-[2px] bg-[var(--color-brand-yellow)] -translate-x-1/2 transition-all duration-500 ease-out group-hover:w-full"></span>
              </a>
              {index < array.length - 1 && (
                <div className="h-4 w-px bg-white/50"></div>
              )}
            </div>
          ))}
          <Button asChild className="ml-4 bg-[var(--color-brand-yellow)] text-white hover:bg-yellow-400 font-bold shadow-lg shadow-white/20 transition-all uppercase text-xs tracking-wide border-2 [text-shadow:1px_1px_2px_black] border-white whitespace-nowrap transition-all transform hover:scale-105">
            <a href="https://campaign.comparamostuluz.es" target="_blank" rel="noopener noreferrer">
              Subir Factura
            </a>
          </Button>
          <Button asChild className="ml-4 bg-transparent hover:bg-transparent text-white font-bold uppercase text-xs tracking-wide whitespace-nowrap transition-all transform hover:scale-105 p-0 border-none shadow-none">
            <a href="https://wa.me/34600295895" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
              <span>Hablar con un asesor</span>
              <div className="relative flex items-center justify-center">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--color-brand-yellow)] opacity-75 animate-ping-slow"></span>
                <img src={whatsappLogo} alt="WhatsApp" className="relative h-8 w-8 rounded-full" />
              </div>
            </a>
          </Button>
        </div>
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X className="text-white" />
          ) : (
            <Menu className="text-white" />
          )}
        </button>
      </div>
      {
        isOpen && (
          <div className="md:hidden p-4 bg-[#0F1B2D] border-b border-white/5 space-y-4">
            {[
              { name: "Beneficios", href: "#features" },
              { name: "Cómo funciona", href: "#how-it-works" },
              { name: "Comparativa", href: "#comparison" },
              { name: "Opiniones", href: "#testimonials" },
              { name: "Sobre nosotros", href: "#about-us" },
              { name: "Conoce a Volt", href: "#meet-volt" },
              { name: "Preguntas", href: "#faq" },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-sm font-bold uppercase text-[#C6CFDA] hover:text-[var(--color-brand-yellow)] border-b border-white/10 pb-3"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button asChild className="w-full bg-transparent hover:bg-transparent text-white font-bold uppercase text-xs tracking-wide whitespace-nowrap transition-all transform hover:scale-105 p-0 border-none shadow-none justify-center">
              <a href="https://wa.me/34600295895" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3">
                <span>Hablar con un asesor</span>
                <div className="relative flex items-center justify-center">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--color-brand-yellow)] opacity-75 animate-ping-slow"></span>
                  <img src={whatsappLogo} alt="WhatsApp" className="relative h-8 w-8 rounded-full" />
                </div>
              </a>
            </Button>
            <Button asChild className="w-full bg-[var(--color-brand-yellow)] text-white font-bold uppercase border-2 border-white ">
              <a href="https://campaign.comparamostuluz.es" target="_blank" rel="noopener noreferrer">
                Subir Factura
              </a>
            </Button>
          </div>
        )
      }
    </nav >
  );
}

function Hero() {
  //  const [, setLocation] = useLocation();
  return (
    <section className="relative overflow-hidden bg-[#0C1A2B] min-h-[75vh] flex items-center text-white">
      <div className="absolute top-24 right-0 w-full lg:w-[55%] h-[calc(100%-6rem)] z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C1A2B] via-[#0C1A2B]/90 to-transparent lg:via-[#0C1A2B]/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C1A2B] via-transparent to-transparent z-10 lg:hidden"></div>
        <img
          src={familyHero}
          alt="Familia feliz ahorrando luz"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 z-20 hidden lg:block pointer-events-none">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -10, 0]
            }}
            transition={{
              opacity: { duration: 0.5, delay: 0.3 },
              x: { duration: 0.5, delay: 0.3 },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8
              }
            }}
            className="absolute top-[35%] left-[10%] pointer-events-auto bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-xl flex items-center gap-4 w-64 transition-all duration-200 ease-out hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)]"
          >
            <div className="bg-[var(--color-brand-yellow)] p-3 rounded-full text-primary shadow-lg">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-gray-300 uppercase font-bold tracking-wider">
                Bienestar
              </p>
              <p className="text-lg font-bold text-white leading-none [text-shadow:1px_1px_2px_black]">
                Para tu Familia
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -10, 0]
            }}
            transition={{
              opacity: { duration: 0.5, delay: 0.5 },
              x: { duration: 0.5, delay: 0.5 },
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.0
              }
            }}
            className="absolute top-[55%] right-[5%] pointer-events-auto bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-xl flex items-center gap-4 w-64 transition-all duration-200 ease-out hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)]"
          >
            <div className="bg-[var(--color-brand-yellow)] p-3 rounded-full text-primary shadow-lg">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-gray-300 uppercase font-bold tracking-wider">
                Energía
              </p>
              <p className="text-lg font-bold text-white leading-none [text-shadow:1px_1px_2px_black]">
                Luz al mejor precio
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -10, 0]
            }}
            transition={{
              opacity: { duration: 0.5, delay: 0.7 },
              scale: { duration: 0.5, delay: 0.7 },
              y: {
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.2
              }
            }}
            className="absolute bottom-[10%] left-[35%] pointer-events-auto bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-xl flex items-center gap-4 w-64 transition-all duration-200 ease-out hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)]"
          >
            <div className="bg-[var(--color-brand-yellow)] p-3 rounded-full text-primary shadow-lg">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-gray-300 uppercase font-bold tracking-wider">
                Tranquilidad
              </p>
              <p className="text-lg font-bold text-white leading-none [text-shadow:1px_1px_2px_black]">
                Hogar Protegido
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-black/20 pointer-events-none z-0"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-20"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <circle
            cx="0"
            cy="0"
            r="40"
            fill="none"
            stroke="var(--color-brand-yellow)"
            strokeWidth="0.5"
          />
        </svg>
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-20 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-20 grid lg:grid-cols-2 gap-12 items-center h-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8 text-center lg:text-left pt-32 lg:pt-0 pb-12 lg:pb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Ahorra en tu factura de luz sin{" "}
            <span className="text-[var(--color-brand-yellow)]">
              complicaciones
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed mb-10">
            Comparamos por ti las mejores tarifas del mercado y te mostramos la
            opción que realmente te ayuda a pagar menos cada mes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2 items-center sm:items-end">
            <div className="relative transition-transform duration-300 hover:-translate-y-2">
              <Button
                asChild
                size="lg"
                className="bg-[var(--color-brand-yellow)] [text-shadow:1px_1px_2px_black] hover:bg-yellow-400 text-white font-bold text-lg h-14 px-8 rounded-xl shadow-lg shadow-yellow-500/20 transition-all duration-300 relative z-10"
              >
                <a href="https://campaign.comparamostuluz.es" target="_blank" rel="noopener noreferrer">
                  Comparar tarifas ahora
                </a>
              </Button>
              {/* Imagen de Volt recostado */}
              <img
                src={voltBoton}
                alt="Volt"
                className="absolute -left-8 -bottom-1.5 w-22 z-20 pointer-events-none filter drop-shadow-lg hidden sm:block"
              />
            </div>
            <a
              href="https://wa.me/34600295895"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 bg-transparent text-white hover:bg-[var(--color-brand-yellow)] hover:text-[#FFFFFF] hover:-translate-y-1 hover:border-[var(--color-brand-white)] transition-all duration-300 h-14 px-8 font-bold rounded-xl"
              >
                Hablar con un asesor
              </Button>
            </a>
          </div>
          <div className="pt-6 border-t border-white/10 mt-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-medium text-gray-300">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span>100% gratis</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span>Comparativa imparcial</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span>Sin permanencia</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span>Seguro y transparente</span>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="hidden lg:block"></div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: (
        <TrendingDown className="w-8 h-8 md:w-10 md:h-10 text-[var(--color-brand-yellow)]" />
      ),
      title: "Ahorro real garantizado",
      description:
        "Encontramos la tarifa que reduce tu factura al máximo según tu consumo.",
    },
    {
      icon: (
        <BarChart3 className="w-8 h-8 md:w-10 md:h-10 text-[var(--color-brand-yellow)]" />
      ),
      title: "Comparativa imparcial",
      description:
        "Analizamos múltiples compañías y seleccionamos solo las opciones más transparentes.",
    },
    {
      icon: (
        <Headset className="w-8 h-8 md:w-10 md:h-10 text-[var(--color-brand-yellow)]" />
      ),
      title: "Asesoría personalizada",
      description:
        "Te guiamos paso a paso para que elijas la mejor opción sin letra pequeña.",
    },
    {
      icon: (
        <Clock className="w-8 h-8 md:w-10 md:h-10 text-[var(--color-brand-yellow)]" />
      ),
      title: "Rápido y sin complicaciones",
      description: "En pocos minutos sabes cuánto puedes ahorrar cada mes.",
    },
  ];
    return (
    <section
      id="features"
      className="py-10 md:py-32 bg-[#0F1B2D] border-t border-white/5 relative scroll-mt-28 overflow-hidden"
    >
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
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Por qué <span className="text-[var(--color-brand-yellow)]">elegirnos</span>?
          </h2>
          <p className="text-lg text-blue-100">
            Descubre cómo te ayudamos a pagar menos por tu factura de luz,
            siempre con transparencia y sin complicaciones.
          </p>
        </div>

        {/* Vista Escritorio (Grid) - Oculto en móviles */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300 hover:shadow-[0_0_16px_rgba(255,255,255,0.12)] rounded-2xl p-6"
            >
              <div className="mb-6 p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-all duration-300 border border-white/5 group-hover:rotate-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-blue-100 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Vista Móvil (Carrusel) - Solo visible en móviles */}
        <div className="md:hidden px-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {features.map((feature, index) => (
                <CarouselItem key={index} className="pl-4">
                  <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-[#102033] border border-white/5 h-full">
                    <div className="mb-6 p-4 rounded-full bg-white/5 border border-white/5">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-blue-100 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-9 bg-[#0F1B2D] border-white/10 text-white hover:bg-white/10" />
            <CarouselNext className="-right-9 bg-[#0F1B2D] border-white/10 text-white hover:bg-white/10" />
          </Carousel>
        </div>

      </div>
    </section>
  );
}
function HowItWorks() {
  const steps = [
    {
      icon: <FileUp className="h-8 w-8 text-[var(--color-brand-yellow)]" />,
      title: "Sube tu factura",
      description:
        "Analizamos tu consumo real y detectamos oportunidades de ahorro personalizadas.",
    },
    {
      icon: (
        <ArrowLeftRight className="h-8 w-8 text-[var(--color-brand-yellow)]" />
      ),
      title: "Comparamos tarifas por ti",
      description:
        "Revisamos las mejores compañías del mercado y seleccionamos solo las tarifas que te benefician de verdad.",
    },
    {
      icon: <Zap className="h-8 w-8 text-[var(--color-brand-yellow)]" />,
      title: "Ahorra desde el primer mes",
      description:
        "Elige la opción ideal y empieza a pagar menos sin papeleo ni llamadas interminables.",
    },
  ];
  return (
    <section
      id="how-it-works"
      className="py-10 bg-[var(--color-brand-blue)] border-t border-white/5 relative z-10 scroll-mt-28"
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
      <div className="absolute top-0 left-0 w-full h-px bg-white/5"></div>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Cómo <span className="text-[var(--color-brand-yellow)]">funciona</span>?
          </h2>
          <p className="text-lg text-[#C6CFDA]">
            Nuestro proceso es rápido, fácil y pensado para ayudarte a pagar
            menos por tu electricidad sin complicaciones.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="flex flex-col items-center text-center group bg-[#102033] border border-white/5 rounded-2xl p-8 shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            >
              <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center mb-6 bg-white/5 group-hover:bg-white/10 transition-all duration-300 relative">
                {step.icon}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[var(--color-brand-yellow)] rounded-full flex items-center justify-center text-[#0F1B2D] font-bold text-sm border-2 border-[#0F1B2D]">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-[#C6CFDA] leading-relaxed max-w-sm mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


function Comparison() {
  return (
    <section id="comparison" className="py-10 md:py-10 bg-[#0F1B2D] border-t border-white/5 relative scroll-mt-28 overflow-hidden">
      <GoldenArcBackground position="top-right" />
      <GoldenArcBackground position="bottom-left" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Contenido de Imagen (Ahora a la Izquierda) */}
          <div className="w-6/12 lg:w-auto relative flex justify-center lg:justify-end">
            {/* Elementos decorativos de fondo */}
            <div className="absolute inset-0 bg-gradient-to-tr to-transparent rounded-full blur-3xl transform scale-90"></div>

            <img
              src={voltAhorro}
              alt="Comparativa de mercado con Volt"
              className="relative z-10 w-full max-w-sm lg:max-w-md object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Contenido de Texto (Ahora a la Derecha) */}
          <div className="lg:w-7/12 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Te comparamos la tasa entre{" "}
                <span className="text-[var(--color-brand-yellow)]">
                  <br /> +20 compañías
                </span>{" "}
                del mercado
              </h2>
              <p className="text-lg text-[#C6CFDA] leading-relaxed mb-8">
                En un mercado lleno de tarifas confusas y mensajes poco claros, nosotros te ayudamos a ver de forma simple, transparente y directa cuál es la mejor opción para ti.
              </p>

              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <div className="mt-1">
                    <BarChart3 className="w-6 h-6 text-[#C6CFDA]" />
                  </div>
                  <span className="text-[#C6CFDA] font-medium">Análisis real basado en tu consumo, no en simulaciones.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1">
                    <FileText className="w-6 h-6 text-[#C6CFDA]" />
                  </div>
                  <span className="text-[#C6CFDA] font-medium">Estudio directo desde tu factura real: sin errores ni estimaciones fallidas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1">
                    <ShieldCheck className="w-6 h-6 text-[#C6CFDA]" />
                  </div>
                  <span className="text-[#C6CFDA] font-medium">Recomendaciones transparentes: sin letra pequeña ni estrategias comerciales.</span>
                </li>
              </ul>
            </div>

            {/* Tabla de Comparación */}
            <div className="bg-[#102033] rounded-2xl shadow-xl overflow-hidden border border-white/5">
              <div className="grid grid-cols-2">
                {/* Header Otros */}
                <div className="bg-[#0F1B2D] p-4 text-center border-b border-white/5">
                  <span className="font-bold text-white uppercase tracking-wider text-sm">Otros</span>
                </div>
                {/* Header Nosotros */}
                <div className="bg-[#002782] p-4 text-center border-b border-white/5 relative">
                  <div className="flex items-center justify-center gap-2">
                    <span className="font-bold text-white uppercase tracking-wider text-sm">Nosotros</span>
                  </div>
                </div>

                {/* Row 1 */}
                <div className="p-4 text-center border-b border-white/5 bg-red-900/10 text-[#ff8080] text-sm md:text-base hover:-translate-y-[2px] hover:shadow-[0_4px_10px_rgba(0,0,0,0.12)] transition-all duration-200 ease-out">
                  Procesos lentos
                </div>
                <div className="p-4 text-center border-b border-white/5 bg-blue-900/10 text-white font-semibold text-sm md:text-base hover:-translate-y-[2px] hover:shadow-[0_4px_10px_rgba(0,0,0,0.12)] transition-all duration-200 ease-out">
                  Resultados en minutos
                </div>

                {/* Row 2 */}
                <div className="p-4 text-center border-b border-white/5 bg-red-900/10 text-[#ff8080] text-sm md:text-base hover:-translate-y-[2px] hover:shadow-[0_4px_10px_rgba(0,0,0,0.12)] transition-all duration-200 ease-out">
                  Ofertas confusas
                </div>
                <div className="p-4 text-center border-b border-white/5 bg-blue-900/10 text-white font-semibold text-sm md:text-base hover:-translate-y-[2px] hover:shadow-[0_4px_10px_rgba(0,0,0,0.12)] transition-all duration-200 ease-out">
                  Información clara y directa
                </div>

                {/* Row 3 */}
                <div className="p-4 text-center border-b border-white/5 bg-red-900/10 text-[#ff8080] text-sm md:text-base hover:-translate-y-[2px] hover:shadow-[0_4px_10px_rgba(0,0,0,0.12)] transition-all duration-200 ease-out">
                  Resultados genéricos
                </div>
                <div className="p-4 text-center border-b border-white/5 bg-blue-900/10 text-white font-semibold text-sm md:text-base hover:-translate-y-[2px] hover:shadow-[0_4px_10px_rgba(0,0,0,0.12)] transition-all duration-200 ease-out">
                  Recomendaciones personalizadas
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      name: "María G., Madrid",
      amount: "42€/mes",
      text: "Pensaba que ya pagaba poco. Subí mi factura, en 5 minutos tenía una tarifa mejor y hoy pago mucho menos. Increíblemente fácil.",
      image: testimonialMaria,
    },
    {
      name: "Carlos R., Barcelona",
      amount: "38€/mes",
      text: "Nunca me fié de los comparadores, pero Volt me mostró el ahorro real con mi factura. Sin llamadas molestas, todo 100% online.",
      image: testimonialCarlos,
    },
    {
      name: "Laura M., Valencia",
      amount: "32€/mes",
      text: "Genial que no pidan teléfono para acosar. Subes el PDF, ves tu ahorro y decides tú mismo. Así debería ser siempre.",
      image: testimonialLaura,
    },
    {
      name: "Antonio S., Sevilla",
      amount: "35€/mes",
      text: "Somos 4 y el aire dispara la factura. Gracias a Comparamos Tu Luz bajamos el gasto casi a la mitad este verano.",
      image: testimonialAntonio,
    },
    {
      name: "Isabel P., Bilbao",
      amount: "29€/mes",
      text: "Sencillo, rápido y muy transparente. Me cambié de compañía al momento y sin papeleos complicados. Lo recomiendo a todo el mundo.",
      image: testimonialIsabel,
    },
  ];
  return (
    <section
      id="testimonials"
      className="py-20  bg-[var(--color-brand-blue)] border-t border-white/5 relative z-10 scroll-mt-28"
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
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Lo que dicen nuestros{" "}
            <span className="text-[var(--color-brand-yellow)]">usuarios</span>
          </h2>
          <p className="text-lg text-[#C6CFDA]">
            Estas son opiniones reales de personas que ya están ahorrando con
            nuestras recomendaciones.
          </p>
        </div>

        {/* VISTA ESCRITORIO (Original) */}
        <div className="hidden md:flex flex-col gap-8">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col p-8 rounded-[20px] bg-[#102033] border border-white/5 hover:border-[var(--color-brand-yellow)]/30 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(255,255,255,0.25)] h-full"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/10 shrink-0">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-white">{t.name}</div>
                    <div className="text-sm text-[var(--color-brand-yellow)] font-medium">
                      Ahorró {t.amount}
                    </div>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="w-4 h-4 fill-[var(--color-brand-yellow)] text-[var(--color-brand-yellow)]"
                    />
                  ))}
                </div>
                <p className="text-[#C6CFDA] text-sm leading-relaxed italic">
                  "{t.text}"
                </p>
              </motion.div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:w-2/3 mx-auto">
            {testimonials.slice(3, 5).map((t, i) => (
              <motion.div
                key={i + 3}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 3) * 0.1 }}
                className="flex flex-col p-8 rounded-[20px] bg-[#102033] border border-white/5 hover:border-[var(--color-brand-yellow)]/30 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(255,255,255,0.25)] h-full"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/10 shrink-0">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-white">{t.name}</div>
                    <div className="text-sm text-[var(--color-brand-yellow)] font-medium">
                      Ahorró {t.amount}
                    </div>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="w-4 h-4 fill-[var(--color-brand-yellow)] text-[var(--color-brand-yellow)]"
                    />
                  ))}
                </div>
                <p className="text-[#C6CFDA] text-sm leading-relaxed italic">
                  "{t.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* VISTA MÓVIL (Carrusel) */}
        <div className="md:hidden px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((t, i) => (
                <CarouselItem key={i} className="pl-4">
                  <div className="flex flex-col p-8 rounded-[20px] bg-[#102033] border border-white/5 h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/10 shrink-0">
                        <img
                          src={t.image}
                          alt={t.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-white">{t.name}</div>
                        <div className="text-sm text-[var(--color-brand-yellow)] font-medium">
                          Ahorró {t.amount}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          className="w-4 h-4 fill-[var(--color-brand-yellow)] text-[var(--color-brand-yellow)]"
                        />
                      ))}
                    </div>
                    <p className="text-[#C6CFDA] text-sm leading-relaxed italic">
                      "{t.text}"
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-9 bg-[#0F1B2D] border-white/10 text-white hover:bg-white/10" />
            <CarouselNext className="-right-9 bg-[#0F1B2D] border-white/10 text-white hover:bg-white/10" />
          </Carousel>
        </div>

      </div>
    </section>
  );
}

function AboutUs() {
  return (
    <section
      id="about-us"
      className="py-20 bg-[#0F1B2D] border-t border-white/5 relative overflow-hidden scroll-mt-28"
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
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Sobre <span className="text-[var(--color-brand-yellow)]">nosotros</span>
              </h2>
              <p className="text-lg text-[#C6CFDA] leading-relaxed">
                En ComparamosTuLuz ayudamos a miles de personas a pagar lo justo
                por su electricidad. Nuestro equipo analiza de forma imparcial
                las mejores tarifas del mercado para que cada hogar pueda
                ahorrar sin complicaciones, sin letra pequeña y con total
                transparencia.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-[var(--color-brand-yellow)]" />
                  Nuestra misión
                </h3>
                <p className="text-[#C6CFDA] text-sm">
                  Permitir que cualquier persona pueda acceder fácilmente a una
                  tarifa eléctrica justa, clara y adaptada a sus necesidades,
                  sin perder tiempo comparando compañías.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-[var(--color-brand-yellow)]" />
                  Nuestra visión
                </h3>
                <p className="text-[#C6CFDA] text-sm">
                  Ser la plataforma de referencia en ahorro energético, donde
                  cada usuario pueda tomar decisiones informadas y seguras sobre
                  su consumo.
                </p>
              </div>
            </div>
                        <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Nuestros valores
              </h3>
              {/* CAMBIO: grid-cols-3 para que sean 3 columnas en móvil */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                {[
                  {
                    title: "Transparencia",
                    desc: "Siempre mostramos las mejores opciones sin intereses ocultos.",
                    icon: ShieldCheck,
                  },
                  {
                    title: "Ahorro real",
                    desc: "Nuestro objetivo es que pagues menos desde el primer mes.",
                    icon: TrendingDown,
                  },
                  {
                    title: "Cercanía",
                    desc: "Te guiamos paso a paso para que el proceso sea sencillo.",
                    icon: Users,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    // CAMBIO: Padding reducido en móvil (p-2)
                    className="flex flex-col gap-2 p-2 sm:p-4 rounded-lg bg-[#102033] border border-white/5"
                  >
                    <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1 sm:gap-2 text-[var(--color-brand-yellow)] font-bold">
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                      {/* CAMBIO: Texto título más pequeño en móvil */}
                      <span className="text-xs xl:text-base leading-tight">{item.title}</span>
                    </div>
                    {/* CAMBIO: Texto descripción más pequeño en móvil (text-[10px]) */}
                    <p className="text-[#C6CFDA] text-[10px] sm:text-xs leading-snug">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center lg:justify-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-[var(--color-brand-yellow)]/10 blur-[80px] rounded-full"></div>
              <img
                src={aboutUsTeam}
                alt="Equipo ComparamosTuLuz"
                className="relative z-10 w-full h-auto object-cover rounded-2xl shadow-2xl border border-white/10 transform hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MeetVolt() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      id: 0,
      label: "Ágil y Seguro",
      title: "Protegido desde el inicio",
      content:
        "Volt cuida tu información desde el primer instante para que todo sea seguro y sin complicaciones.",
      icon: ShieldCheck,
    },
    {
      id: 1,
      label: "Claridad real",
      title: "Claridad real",
      content:
        "Analiza tu factura tal cual es, sin letra pequeña ni tecnicismos innecesarios.",
      icon: Search,
    },
    {
      id: 2,
      label: "A tu lado en cada decisión",
      title: "Te guía paso a paso",
      content:
        "Volt te explica lo esencial para que elijas la mejor tarifa con confianza.",
      icon: MessageCircle,
    },
  ];

  return (
    <section id="meet-volt" className="pb-10 sm:py-10 bg-[var(--color-brand-blue)] border-t border-white/5 relative z-10 scroll-mt-28">
      <GoldenArcBackground position="top-right" />
      <GoldenArcBackground position="bottom-left" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-20 w-auto mx-auto">
          {/* IMAGEN: Izquierda (lg:order-1) */}
          <div className="w-5/12  lg:w-[80%] flex justify-center relative lg:mb-0 order-1 lg:order-1">
            <div className="relative scale-100 lg:scale-110 w-full max-w-sm lg:max-w-md mx-auto">
              {/* Círculo de fondo con sombra blanca sutil */}
              <div className="absolute inset-0 m-auto w-[200px] h-[200px] lg:w-[380px] lg:h-[380px] bg-[#002782] rounded-full shadow-[0_0_20px_rgba(255,255,255,0.1)] border border-white/10 z-0">
                {/* Arco Blanco (Superior Derecho) */}
                <div className="absolute -top-[2px] -right-[2px] w-full h-full rounded-full border-t-4 border-r-4 border-white opacity-90 transform rotate-12 pointer-events-none"></div>
                {/* Arco Amarillo (Inferior Izquierdo) */}
                <div className="absolute -bottom-[2px] -left-[2px] w-full h-full rounded-full border-b-4 border-l-4 border-[var(--color-brand-yellow)] opacity-90 transform rotate-12 pointer-events-none"></div>
              </div>

              <img
                src={voltTools}
                alt="Volt con herramientas"
                className="w-full drop-shadow-[0_0_20px_rgba(255,255,255,0.15)] relative z-10"
              />
            </div>
          </div>

          {/* TEXTO: Derecha (lg:order-2) */}
          <div className="w-full lg:w-6/12 order-2 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight text-left">
              Volt: tu acompañante en cada{" "}
              <span className="text-[var(--color-brand-yellow)]"> decisión</span> energética
            </h2>
            <p className="text-lg text-[#C6CFDA] mb-8 text-left">
              Volt está contigo en cada paso importante, haciendo que todo sea más claro y fácil de entender. Su misión es darte seguridad y ayudarte a comprender tu factura sin enredos.
            </p>

            {/* ACCORDION CARDS */}
            <div className="flex flex-col gap-4">
              {tabs.map((tab) => (
                <motion.div
                  key={tab.id}
                  className={`bg-[#102033] rounded-xl border transition-all duration-300 overflow-hidden cursor-pointer ${activeTab === tab.id
                    ? "border-[var(--color-brand-yellow)] shadow-[0_0_12px_rgba(255,255,255,0.08)]"
                    : "border-white/5 hover:border-white/10"
                    }`}
                  style={{
                    transform: activeTab === tab.id ? "translateY(-2px)" : "none",
                  }}
                  onMouseEnter={() => setActiveTab(tab.id)}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <div className="p-4 flex items-start gap-4">
                    <div
                      className={`p-2 rounded-lg transition-colors duration-300 ${activeTab === tab.id
                        ? "bg-[var(--color-brand-yellow)] text-[#1c2e4a]"
                        : "bg-white/5 text-gray-400"
                        }`}
                    >
                      <tab.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 text-left">
                      <h3
                        className={`text-lg font-bold mb-1 transition-colors duration-300 ${activeTab === tab.id ? "text-white" : "text-white"
                          }`}
                      >
                        {tab.title}
                      </h3>
                      <AnimatePresence>
                        {activeTab === tab.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                          >
                            <p className="text-[#C6CFDA] text-base leading-relaxed pt-1">
                              {tab.content}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "¿El servicio es completamente gratis?",
      a: "Sí. Analizamos tu factura y comparamos tarifas sin coste para ti. Nuestro objetivo es ayudarte a pagar menos sin ningún compromiso.",
    },
    {
      q: "¿Tengo que cambiar de compañía obligatoriamente?",
      a: "No. Te mostramos las mejores opciones para tu consumo, pero tú decides si quieres cambiar o mantener tu compañía actual.",
    },
    {
      q: "¿Cuánto puedo ahorrar realmente?",
      a: "Depende de tu consumo, pero nuestros usuarios suelen ahorrar entre un 15% y un 40% cada mes con la tarifa adecuada.",
    },
    {
      q: "¿Cómo analizan mi factura?",
      a: "Nuestro sistema identifica tus consumos, horarios y tipo de tarifa actual para encontrar alternativas más económicas y transparentes.",
    },
    {
      q: "¿Las recomendaciones son imparciales?",
      a: "La comparativa es 100% imparcial, basada únicamente en tu consumo y en la transparencia.",
    },
    {
      q: "¿Necesito subir mi factura completa para recibir el análisis?",
      a: "Sí. Analizamos tu factura real para ofrecerte resultados exactos y personalizados. Esto nos permite detectar oportunidades de ahorro que no aparecen en simulaciones.",
    },
  ];
  return (
    <section
      id="faq"
      className="pt-10 sm:py-10 bg-[#0F1B2D] border-t border-white/5 relative overflow-hidden scroll-mt-28"
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

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Preguntas <span className="text-[var(--color-brand-yellow)]">frecuentes</span>
          </h2>
          <p className="text-lg text-[#C6CFDA]">
            Resolvemos las dudas más comunes para ayudarte a entender cómo <br />
            funciona nuestra plataforma y cómo puedes empezar a ahorrar.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Columna Izquierda: Preguntas */}
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-white/5 rounded-xl bg-[#102033] px-6 transition-all duration-200 ease-out hover:shadow-[0_0_12px_rgba(255,255,255,0.08)] hover:-translate-y-[2px] [&[data-state=open]]:shadow-[0_0_16px_rgba(255,255,255,0.12)] [&[data-state=open]]:border-white/20"
              >
                <AccordionTrigger className="text-left font-bold text-white hover:text-[var(--color-brand-yellow)] hover:no-underline py-6 text-lg [&[data-state=open]]:text-[var(--color-brand-yellow)] transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#C6CFDA] pb-6 text-base leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          {/* Columna Derecha: Volt */}
          <div className="flex justify-center lg:justify-center relative pt-4 mb-0 sm:pt-10 md:mb-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transform hover:scale-105 transition-transform duration-500">
            <motion.div
              initial={{ scale: 0.9 }}
              whileHover={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-xs"
            >
              {/* Fondo difuminado detrás */}
              <motion.div
                animate={{ opacity: [0.3, 0.15, 0.3], scale: [0.95, 1, 0.30] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-blue-500/20 rounded-full blur-[50px]"
              ></motion.div>
              {/* SOMBRA */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-[60%] h-8 bg-black/60 blur-xl rounded-[100%] z-0"></div>
              {/* BURBUJA DE PENSAMIENTO (CON DELAY DE 1.5s) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                  delay: 0.8
                }}
                className="absolute -top-32 -right-16 z-50"
              >
                <div className="relative filter drop-shadow-xl top-14 right-22">
                  <img
                    src={thoughtBubble}
                    alt="Thought Bubble"
                    className="w-[170px] h-[120px] object-contain"
                  />
                </div>
              </motion.div>
              {/* Imagen de Volt */}
              <img
                src={voltFAQ}
                alt="Volt respondiendo dudas"
                className="w-[80%] xl:w-10/8 h-auto relative z-10 drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  // const [, setLocation] = useLocation(); 
  return (
    <section className="py-20  bg-[var(--color-brand-blue)] relative overflow-hidden border-t border-white/5">
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
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Empieza hoy a{" "}
            <span className="text-[var(--color-brand-yellow)]">
              pagar menos
            </span>{" "}
            por tu factura de luz
          </h2>
          <p className="text-lg md:text-xl text-[#C6CFDA] max-w-2xl mx-auto">
            Obtén un análisis imparcial y descubre <br /> cuánto puedes ahorrar en
            menos de 5 minutos.
          </p>
          <div className="pt-4 pb-8">
            <Button
              asChild
              size="lg"
              className="bg-[var(--color-brand-yellow)] [text-shadow:1px_1px_2px_black]  text-[#f8f8f8] font-bold text-lg h-16 px-10 rounded-full  transition-all transform hover:scale-105"
            >
              <a href="https://campaign.comparamostuluz.es" target="_blank" rel="noopener noreferrer">
                Comparar tarifas ahora
              </a>
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-medium text-gray-300">
            {[
              "100% gratis",
              "Sin permanencia",
              "Comparativa imparcial",
              "Seguro y transparente",
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5 cursor-default"
              >
                <CheckCircle2 className="w-4 h-4 text-[#00C97E]" />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0F1B2D] text-[#C6CFDA] py-16 border-t border-white/5 font-sans relative overflow-hidden">
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
      {/* Líneas decorativas - Superior Izquierda */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-20"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <circle
            cx="0"
            cy="0"
            r="30"
            fill="none"
            stroke="var(--color-brand-yellow)"
            strokeWidth="0.5"
          />
          <circle
            cx="0"
            cy="0"
            r="35"
            fill="none"
            stroke="white"
            strokeWidth="0.1"
            opacity="0.3"
          />
        </svg>
      </div>
      {/* Líneas decorativas - Inferior Derecha */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <svg
          className="absolute bottom-0 right-0 w-full h-full opacity-20"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <circle
            cx="100"
            cy="100"
            r="30"
            fill="none"
            stroke="var(--color-brand-yellow)"
            strokeWidth="0.5"
          />
          <circle
            cx="100"
            cy="100"
            r="35"
            fill="none"
            stroke="white"
            strokeWidth="0.1"
            opacity="0.3"
          />
        </svg>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
          {/* Columna 1: Logo + Texto */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1 space-y-4">
            <img
              src={logoFooter}
              alt="ComparamosTuLuz"
              className="h-auto w-auto mx-auto"
            />
            <p className="text-lg text-center leading-relaxed text-[#C6CFDA]">
              Tu plataforma para comparar tarifas de electricidad de manera
              transparente y ahorrar en tu factura cada mes.
            </p>
          </div>

          {/* Columna 2: Navegación */}
          <div className="col-span-1">
            <h4 className="text-white font-bold mb-6 text-lg">Navegación</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <HomeIcon className="w-4 h-4 text-[var(--color-brand-yellow)]" />
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <TrendingDown className="w-4 h-4 text-[var(--color-brand-yellow)]" />
                  Beneficios
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Zap className="w-4 h-4 text-[var(--color-brand-yellow)]" />
                  Cómo funciona
                </a>
              </li>
              <li>
                <a
                  href="#comparison"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <BarChart3 className="w-4 h-4 text-[var(--color-brand-yellow)]" />
                  Comparativa
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[var(--color-brand-yellow)]" />
                  Opiniones
                </a>
              </li>
              <li>
                <a
                  href="#about-us"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Users className="w-4 h-4 text-[var(--color-brand-yellow)]" />
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a
                  href="#meet-volt"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Brain className="w-4 h-4 text-[var(--color-brand-yellow)]" />
                  Conoce a Volt
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Recursos */}
          <div className="col-span-1">
            <h4 className="text-white font-bold mb-6 text-lg">Recursos</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#faq"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <HelpCircle className="w-4 h-4 text-[var(--color-brand-yellow)]" />
                  Preguntas frecuentes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <BookOpen className="w-4 h-4 text-[var(--color-brand-yellow)]" />
                  Guía de ahorro
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Lock className="w-4 h-4 text-[var(--color-brand-yellow)]" />
                  Política de privacidad
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <FileText className="w-4 h-4 text-[var(--color-brand-yellow)]" />
                  Términos y condiciones
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <h4 className="text-white font-bold mb-6 text-lg">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0 text-[var(--color-brand-yellow)]" />
                <a
                  href="mailto:soporte@comparamostuluz.com"
                  className="hover:text-white transition-colors"
                >
                  info@comparamostuluz.es
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 shrink-0 text-[var(--color-brand-yellow)]" />
                <span>L–V 9:00–18:00</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0 text-[var(--color-brand-yellow)]" />
                <span>España - Valencia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar con Logo UE */}
        {/* Bottom Bar con Logo UE */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#C6CFDA">
            © 2025 ComparamosTuLuz. Todos los derechos reservados.
          </p>
          <img
            src={logoUE}
            alt="Financiado por la Unión Europea"
            className="h-10 w-auto opacity-90"
          />
        </div>
      </div>
    </footer>
  );
}
function GoldenArcBackground({ className, position = "top-right" }: { className?: string, position?: "top-right" | "bottom-left" }) {
  const isTopRight = position === "top-right";
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}>
      <svg
        className="absolute w-full h-full opacity-20"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <circle
          cx={isTopRight ? "100" : "0"}
          cy={isTopRight ? "0" : "100"}
          r="40"
          fill="none"
          stroke="var(--color-brand-yellow)"
          strokeWidth="0.5"
        />
      </svg>
    </div>
  );
}
