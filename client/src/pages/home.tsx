import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
  Eye
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Assets
import aboutUsTeam from "@assets/about_us_team.jpg";
import voltMain from "@assets/volt_hero_v2.png";
import voltTools from "@assets/volt_tools.png";
import voltHowToWork from "@assets/volt_hero_final.png";
import voltAhorro from "@assets/volt_ahorro.png";
import logoRound from "@assets/logo_ctl_clean.png";
import logoLoading from "@assets/logo sin fondo.png";
import arcosImage from "@assets/arcos.png";
import testimonialMaria from "@assets/testimonial_maria.jpg";
import testimonialCarlos from "@assets/testimonial_carlos.jpg";
import testimonialLaura from "@assets/testimonial_laura.jpg";
import testimonialAntonio from "@assets/testimonial_antonio.jpg";
import testimonialIsabel from "@assets/testimonial_isabel.jpg";
import familyHero from "@assets/family_hero.jpg";
import logoUE from "@assets/logo-compo-ue-color.png";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="min-h-screen bg-background font-sans">
      <AnimatePresence>
        {loading && <Preloader />}
      </AnimatePresence>
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

function Preloader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--color-brand-blue)]"
    >
      <div className="relative">
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={logoLoading} alt="Logo" className="w-48 h-auto" />
        </motion.div>
        <motion.div
          className="absolute -top-6 -right-6 text-[var(--color-brand-yellow)]"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 15, -15, 0],
            filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"]
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Zap className="w-12 h-12 fill-current drop-shadow-[0_0_10px_rgba(255,255,0,0.5)]" />
        </motion.div>
      </div>
    </motion.div>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 text-white ${isScrolled
        ? "bg-[#002782]/60 backdrop-blur-md border-white/20 shadow-lg"
        : "bg-brand-gradient border-transparent"
        }`}
    >
      <div className="container mx-auto px-4 flex h-24 items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src={logoRound}
            alt="CTL Logo"
            className="h-16 md:h-20 w-auto transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="hidden xl:flex items-center">
          {[
            { name: "Cómo funciona", href: "#how-it-works" },
            { name: "Comparativa", href: "#comparison" },
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
          <Button className="ml-4 bg-[var(--color-brand-yellow)] text-white hover:bg-yellow-400 font-bold shadow-lg shadow-white/20 hover:shadow-white/40 transition-all uppercase text-xs tracking-wide border-2 border-white whitespace-nowrap">
            Subir Factura
          </Button>
        </div>
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden p-4 bg-white border-b space-y-4">
          <a href="#how-it-works" className="block text-sm font-bold uppercase text-foreground hover:text-[var(--color-brand-yellow)]" onClick={() => setIsOpen(false)}>Cómo funciona</a>
          <a href="#faq" className="block text-sm font-bold uppercase text-foreground hover:text-[var(--color-brand-yellow)]" onClick={() => setIsOpen(false)}>Preguntas</a>
          <Button className="w-full bg-[var(--color-brand-yellow)] text-white font-bold uppercase border-2 border-white">
            Subir Factura
          </Button>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0C1A2B] min-h-[85vh] flex items-center text-white">
      {/* Background Image (Right Side) */}
      <div className="absolute top-0 right-0 w-full lg:w-[55%] h-full z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C1A2B] via-[#0C1A2B]/90 to-transparent lg:via-[#0C1A2B]/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C1A2B] via-transparent to-transparent z-10 lg:hidden"></div>
        <img
          src={familyHero}
          alt="Familia feliz ahorrando luz"
          className="w-full h-full object-cover object-center"
        />

        {/* Floating Buttons (Now positioned over the image) */}
        <div className="absolute inset-0 z-20 hidden lg:block pointer-events-none">
          {/* Button 1: Family (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute top-[35%] left-[10%] pointer-events-auto bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-xl flex items-center gap-4 w-64 transform hover:scale-105 transition-transform duration-300"
          >
            <div className="bg-[var(--color-brand-yellow)] p-3 rounded-full text-primary shadow-lg">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-gray-300 uppercase font-bold tracking-wider">Bienestar</p>
              <p className="text-lg font-bold text-white leading-none">Para tu Familia</p>
            </div>
          </motion.div>

          {/* Button 2: Light (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute top-[55%] right-[5%] pointer-events-auto bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-xl flex items-center gap-4 w-64 transform hover:scale-105 transition-transform duration-300"
          >
            <div className="bg-[var(--color-brand-yellow)] p-3 rounded-full text-primary shadow-lg">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-gray-300 uppercase font-bold tracking-wider">Energía</p>
              <p className="text-lg font-bold text-white leading-none">Luz al mejor precio</p>
            </div>
          </motion.div>

          {/* Button 3: Savings/Protection (Bottom Center-ish) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="absolute bottom-[10%] left-[35%] pointer-events-auto bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-xl flex items-center gap-4 w-64 transform hover:scale-105 transition-transform duration-300"
          >
            <div className="bg-[var(--color-brand-yellow)] p-3 rounded-full text-primary shadow-lg">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-gray-300 uppercase font-bold tracking-wider">Tranquilidad</p>
              <p className="text-lg font-bold text-white leading-none">Hogar Protegido</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Gradient & Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-black/20 pointer-events-none z-0"></div>

      {/* Corporate Background SVGs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <svg className="absolute top-0 left-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="0" cy="0" r="40" fill="none" stroke="var(--color-brand-yellow)" strokeWidth="0.5" />
        </svg>
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-20 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-20 grid lg:grid-cols-2 gap-12 items-center h-full">
        {/* Left Column: Text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8 text-center lg:text-left pt-20 lg:pt-0"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Ahorra en tu factura de luz sin <span className="text-[var(--color-brand-yellow)]">complicaciones</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
            Comparamos por ti las mejores tarifas del mercado y te mostramos la opción que realmente te ayuda a pagar menos cada mes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
            <Button size="lg" className="bg-[var(--color-brand-yellow)] hover:bg-yellow-400 text-white font-bold text-lg h-14 px-8 rounded-xl shadow-lg shadow-yellow-500/20 transition-all duration-300">
              Comparar tarifas ahora
            </Button>
            <a href="https://wa.me/34600295895" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="border-white/20 bg-transparent text-white hover:bg-white/10 h-14 px-8 font-bold rounded-xl">
                Hablar con un asesor
              </Button>
            </a>
          </div>

          {/* Trust Badges */}
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

        {/* Right Column: Empty now (Buttons moved to background image container) */}
        <div className="hidden lg:block"></div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: <TrendingDown className="w-8 h-8 md:w-10 md:h-10 text-[var(--color-brand-yellow)]" />,
      title: "Ahorro real garantizado",
      description: "Encontramos la tarifa que reduce tu factura al máximo según tu consumo."
    },
    {
      icon: <BarChart3 className="w-8 h-8 md:w-10 md:h-10 text-[var(--color-brand-yellow)]" />,
      title: "Comparativa imparcial",
      description: "Analizamos múltiples compañías y seleccionamos solo las opciones más transparentes."
    },
    {
      icon: <Headset className="w-8 h-8 md:w-10 md:h-10 text-[var(--color-brand-yellow)]" />,
      title: "Asesoría personalizada",
      description: "Te guiamos paso a paso para que elijas la mejor opción sin letra pequeña."
    },
    {
      icon: <Clock className="w-8 h-8 md:w-10 md:h-10 text-[var(--color-brand-yellow)]" />,
      title: "Rápido y sin complicaciones",
      description: "En pocos minutos sabes cuánto puedes ahorrar cada mes."
    }
  ];

  return (
    <section className="py-20 bg-[var(--color-brand-blue)] border-t border-white/5 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Por qué elegirnos?</h2>
          <p className="text-lg text-blue-100">
            Descubre cómo te ayudamos a pagar menos por tu factura de luz, siempre con transparencia y sin complicaciones.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-6 p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors duration-300 border border-white/5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-blue-100 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
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
      description: "Analizamos tu consumo real y detectamos oportunidades de ahorro personalizadas."
    },
    {
      icon: <ArrowLeftRight className="h-8 w-8 text-[var(--color-brand-yellow)]" />,
      title: "Comparamos tarifas por ti",
      description: "Revisamos las mejores compañías del mercado y seleccionamos solo las tarifas que te benefician de verdad."
    },
    {
      icon: <Zap className="h-8 w-8 text-[var(--color-brand-yellow)]" />,
      title: "Ahorra desde el primer mes",
      description: "Elige la opción ideal y empieza a pagar menos sin papeleo ni llamadas interminables."
    }
  ];
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-[#0F1B2D] border-t border-white/5 relative">
      {/* Subtle top divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/5"></div>

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Cómo funciona?</h2>
          <p className="text-lg text-[#C6CFDA]">
            Nuestro proceso es rápido, fácil y pensado para ayudarte a pagar menos por tu electricidad sin complicaciones.
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
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center mb-8 bg-white/5 group-hover:bg-white/10 transition-all duration-300 relative">
                {step.icon}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[var(--color-brand-yellow)] rounded-full flex items-center justify-center text-[#0F1B2D] font-bold text-sm border-2 border-[#0F1B2D]">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-[#C6CFDA] leading-relaxed max-w-sm mx-auto">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Comparison() {
  return (
    <section id="comparison" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          <div className="space-y-6 text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight uppercase">
              Más que un comparador: tu filtro de alta velocidad
            </h2>
            <p className="text-lg text-muted-foreground">
              En un mercado saturado, nosotros somos la luz. Sin letra pequeña, sin comerciales insistentes, solo ahorro claro.
            </p>
            <ul className="space-y-4">
              {[
                "No te pedimos datos para llamarte luego.",
                "Estudio directo desde tu factura real.",
                "Sin comerciales insistentes."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[var(--color-brand-yellow)] shrink-0" />
                  <span className="text-primary font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#1c2e4a] rounded-2xl p-8 border border-white/10 shadow-xl w-full text-white">
            <h3 className="text-xl font-bold text-white mb-8 text-center uppercase">Comparativa</h3>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="h-16 flex items-center justify-center mb-4">
                  <div className="font-bold text-slate-300 text-center uppercase text-sm">Otros</div>
                </div>
                <div className="bg-red-50 p-4 rounded-lg text-sm text-red-800 border border-red-100 h-24 flex items-center justify-center text-center font-medium">
                  Piden tu número para llamarte sin parar
                </div>
                <div className="bg-red-50 p-4 rounded-lg text-sm text-red-800 border border-red-100 h-24 flex items-center justify-center text-center font-medium">
                  Comparaciones genéricas
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-16 flex items-center justify-center mb-4">
                  <img src={logoRound} alt="Comparamos Tu Luz" className="h-16 w-auto object-contain" />
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-sm text-primary border border-blue-100 h-24 flex items-center justify-center text-center font-bold shadow-sm">
                  Subes tu factura y ves resultados al instante
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-sm text-primary border border-blue-100 h-24 flex items-center justify-center text-center font-bold shadow-sm">
                  Análisis real y personalizado
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
      amount: "45€/mes",
      text: "Pensaba que ya pagaba poco. Subí mi factura, en 5 minutos tenía una tarifa mejor y hoy pago mucho menos. Increíblemente fácil.",
      image: testimonialMaria
    },
    {
      name: "Carlos R., Barcelona",
      amount: "38€/mes",
      text: "Nunca me fié de los comparadores, pero Volt me mostró el ahorro real con mi factura. Sin llamadas molestas, todo 100% online.",
      image: testimonialCarlos
    },
    {
      name: "Laura M., Valencia",
      amount: "32€/mes",
      text: "Genial que no pidan teléfono para acosar. Subes el PDF, ves tu ahorro y decides tú mismo. Así debería ser siempre.",
      image: testimonialLaura
    },
    {
      name: "Antonio S., Sevilla",
      amount: "50€/mes",
      text: "Somos 4 y el aire dispara la factura. Gracias a Comparamos Tu Luz bajamos el gasto casi a la mitad este verano.",
      image: testimonialAntonio
    },
    {
      name: "Isabel P., Bilbao",
      amount: "29€/mes",
      text: "Sencillo, rápido y muy transparente. Me cambié de compañía al momento y sin papeleos complicados. Lo recomiendo a todo el mundo.",
      image: testimonialIsabel
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-[#0F1B2D] border-t border-white/5 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Lo que dicen nuestros usuarios</h2>
          <p className="text-lg text-[#C6CFDA]">
            Estas son opiniones reales de personas que ya están ahorrando con nuestras recomendaciones.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {/* Top row: 3 cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col p-8 rounded-[20px] bg-[#102033] border border-white/5 hover:border-[var(--color-brand-yellow)]/30 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.25)] h-full"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/10 shrink-0">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-bold text-white">{t.name}</div>
                    <div className="text-sm text-[var(--color-brand-yellow)] font-medium">Ahorró {t.amount}</div>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star key={starIndex} className="w-4 h-4 fill-[var(--color-brand-yellow)] text-[var(--color-brand-yellow)]" />
                  ))}
                </div>
                <p className="text-[#C6CFDA] text-sm leading-relaxed italic">
                  "{t.text}"
                </p>
              </motion.div>
            ))}
          </div>
          {/* Bottom row: 2 cards, centered */}
          <div className="grid md:grid-cols-2 gap-8 md:w-2/3 mx-auto">
            {testimonials.slice(3, 5).map((t, i) => (
              <motion.div
                key={i + 3}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 3) * 0.1 }}
                className="flex flex-col p-8 rounded-[20px] bg-[#102033] border border-white/5 hover:border-[var(--color-brand-yellow)]/30 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.25)] h-full"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/10 shrink-0">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-bold text-white">{t.name}</div>
                    <div className="text-sm text-[var(--color-brand-yellow)] font-medium">Ahorró {t.amount}</div>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star key={starIndex} className="w-4 h-4 fill-[var(--color-brand-yellow)] text-[var(--color-brand-yellow)]" />
                  ))}
                </div>
                <p className="text-[#C6CFDA] text-sm leading-relaxed italic">
                  "{t.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutUs() {
  return (
    <section id="about-us" className="py-20 bg-[#0F1B2D] border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Column */}
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Sobre nosotros</h2>
              <p className="text-lg text-[#C6CFDA] leading-relaxed">
                En ComparamosTuLuz ayudamos a miles de personas a pagar lo justo por su electricidad. Nuestro equipo analiza de forma imparcial las mejores tarifas del mercado para que cada hogar pueda ahorrar sin complicaciones, sin letra pequeña y con total transparencia.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-[var(--color-brand-yellow)]" />
                  Nuestra misión
                </h3>
                <p className="text-[#C6CFDA] text-sm">
                  Permitir que cualquier persona pueda acceder fácilmente a una tarifa eléctrica justa, clara y adaptada a sus necesidades, sin perder tiempo comparando compañías.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-[var(--color-brand-yellow)]" />
                  Nuestra visión
                </h3>
                <p className="text-[#C6CFDA] text-sm">
                  Ser la plataforma de referencia en ahorro energético, donde cada usuario pueda tomar decisiones informadas y seguras sobre su consumo.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">Nuestros valores</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { title: "Transparencia", desc: "Siempre mostramos las mejores opciones sin intereses ocultos.", icon: ShieldCheck },
                  { title: "Ahorro real", desc: "Nuestro objetivo es que pagues menos desde el primer mes.", icon: TrendingDown },
                  { title: "Cercanía", desc: "Te guiamos paso a paso para que el proceso sea sencillo.", icon: Users }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-2 p-4 rounded-lg bg-[#102033] border border-white/5">
                    <div className="flex items-center gap-2 text-[var(--color-brand-yellow)] font-bold">
                      <item.icon className="w-5 h-5" />
                      {item.title}
                    </div>
                    <p className="text-[#C6CFDA] text-xs leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="flex-1 flex justify-center lg:justify-end">
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const features = [
    {
      title: "Vigila las tarifas 24/7",
      description: "Monitorizamos el mercado eléctrico en tiempo real para asegurar que siempre pagues el precio más justo, sin sorpresas."
    },
    {
      title: "Te avisa de oportunidades de ahorro",
      description: "Si detectamos una tarifa mejor que la tuya, te enviamos una alerta personalizada para que puedas cambiarte y ahorrar al instante."
    },
    {
      title: "Te defiende ante las eléctricas",
      description: "Nos encargamos de las gestiones pesadas. Si tienes una incidencia o un cobro indebido, Volt reclama por ti."
    }
  ];
  return (
    <section id="meet-volt" className="py-12 md:py-20 bg-blue-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* CORREGIDO: Invertido el orden visual en Desktop si fuera necesario con flex-row-reverse, 
            pero aquí cambiamos el orden HTML para que el Texto salga primero en móvil si se desea, 
            o simplemente Texto Izquierda / Imagen Derecha en Desktop. 
        */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 max-w-6xl mx-auto">

          {/* 1. BLOQUE DE TEXTO (Ahora va primero para estar a la izquierda en Desktop) */}
          <div className="w-full lg:w-6/12 order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 uppercase tracking-tight text-center lg:text-left">Conoce a Volt, tu experto en luz</h2>
            <p className="text-lg text-muted-foreground mb-6 text-center lg:text-left">
              Volt es el chihuahua que te acompaña en cada paso. Él representa nuestra forma de trabajar: cercano, inteligente y siempre atento a que no pagues de más.
            </p>
            <div className="space-y-4">
              {features.map((item, i) => (
                <motion.div
                  key={i}
                  className={`bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer transition-all duration-300 ${openIndex === i ? 'ring-2 ring-[var(--color-brand-yellow)]' : 'hover:shadow-md'}`}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  initial={false}
                >
                  <div className="flex items-center gap-3 p-4">
                    <div className="w-8 h-8 bg-[var(--color-brand-yellow)] rounded-full flex items-center justify-center shrink-0">
                      <Zap className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-bold text-primary flex-1">{item.title}</span>
                    <motion.div
                      animate={{ rotate: openIndex === i ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    </motion.div>
                  </div>
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-4 pb-4 pl-15 text-muted-foreground text-sm">
                          {item.description}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
          {/* 2. BLOQUE DE IMAGEN (Ahora va segundo para estar a la derecha en Desktop) */}
          <div className="w-full lg:w-5/12 flex justify-center relative mb-12 lg:mb-0 order-1 lg:order-2">
            {/* Ajusté la escala y el ancho para móvil */}
            <div className="relative scale-100 lg:scale-125 w-3/4 max-w-xs lg:max-w-none mx-auto">
              {/* Dark Neon Gradient Background */}
              <motion.div
                animate={{ opacity: [0.4, 0.2, 0.4], scale: [0.75, 0.7, 0.75] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-blue-600/40 rounded-full blur-[60px] mix-blend-multiply"
              ></motion.div>
              <motion.div
                animate={{ opacity: [0.3, 0.15, 0.3], scale: [0.6, 0.55, 0.6] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute inset-0 bg-indigo-500/30 rounded-full blur-[40px] mix-blend-screen"
              ></motion.div>
              <img src={voltTools} alt="Volt con herramientas" className="w-full drop-shadow-2xl relative z-10" />
              {/* Floating Quality Buttons */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute top-0 -left-4 lg:top-12 lg:-left-8 bg-white shadow-xl border border-blue-100 px-4 py-2 rounded-full flex items-center gap-2 z-20"
              >
                <Brain className="w-4 h-4 text-[var(--color-brand-yellow)] fill-[var(--color-brand-yellow)]" />
                <span className="text-sm font-bold text-primary">Experto</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-4 -right-4 lg:bottom-16 lg:-right-8 bg-white shadow-xl border border-blue-100 px-4 py-2 rounded-full flex items-center gap-2 z-20"
              >
                <ShieldCheck className="w-4 h-4 text-[var(--color-brand-yellow)]" />
                <span className="text-sm font-bold text-primary">Protector</span>
              </motion.div>
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
      a: "Sí. Analizamos tu factura y comparamos tarifas sin coste para ti. Nuestro objetivo es ayudarte a pagar menos sin ningún compromiso."
    },
    {
      q: "¿Tengo que cambiar de compañía obligatoriamente?",
      a: "No. Te mostramos las mejores opciones para tu consumo, pero tú decides si quieres cambiar o mantener tu compañía actual."
    },
    {
      q: "¿Cuánto puedo ahorrar realmente?",
      a: "Depende de tu consumo, pero nuestros usuarios suelen ahorrar entre un 15% y un 40% cada mes con la tarifa adecuada."
    },
    {
      q: "¿Cómo analizan mi factura?",
      a: "Nuestro sistema identifica tus consumos, horarios y tipo de tarifa actual para encontrar alternativas más económicas y transparentes."
    },
    {
      q: "¿Las comparativas son imparciales?",
      a: "Sí. No favorecemos a ninguna compañía. Nuestro análisis es independiente para mostrarte solo las opciones que realmente te benefician."
    },
    {
      q: "¿Cuánto tiempo tarda el proceso?",
      a: "Menos de 5 minutos. Solo subes tu factura, analizamos los datos y te mostramos las mejores tarifas disponibles."
    },
    {
      q: "¿Necesito tener conocimientos técnicos?",
      a: "No. Nosotros nos encargamos de todo. Tú solo debes elegir la opción que mejor se adapte a ti."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-[#0F1B2D] border-t border-white/5">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Preguntas frecuentes</h2>
          <p className="text-lg text-[#C6CFDA]">
            Resolvemos las dudas más comunes para ayudarte a entender cómo funciona nuestra plataforma y cómo puedes empezar a ahorrar.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border border-white/5 rounded-xl bg-[#102033] px-6">
              <AccordionTrigger className="text-left font-bold text-white hover:text-[var(--color-brand-yellow)] hover:no-underline py-6 text-lg [&[data-state=open]]:text-[var(--color-brand-yellow)] transition-colors">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-[#C6CFDA] pb-6 text-base leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-20 bg-[#0C1A2B] relative overflow-hidden border-t border-white/5">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Empieza hoy a pagar menos por tu factura de luz
          </h2>

          <p className="text-lg md:text-xl text-[#C6CFDA] max-w-2xl mx-auto">
            Obtén un análisis imparcial y descubre cuánto puedes ahorrar en menos de 5 minutos.
          </p>

          <div className="pt-4 pb-8">
            <Button size="lg" className="bg-[var(--color-brand-yellow)] hover:bg-[#E4B700] text-[#0C1A2B] font-bold text-lg h-16 px-10 rounded-full shadow-[0_0_20px_rgba(255,204,0,0.3)] hover:shadow-[0_0_30px_rgba(255,204,0,0.5)] transition-all transform hover:scale-105">
              Comparar tarifas ahora
            </Button>
          </div>

          {/* Benefits List */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-medium text-gray-300">
            {[
              "100% gratis",
              "Sin permanencia",
              "Comparativa imparcial",
              "Seguro y transparente"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-[#00C97E]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Subtle Mascot Guiño */}
        <div className="absolute bottom-0 right-4 md:right-10 opacity-20 hover:opacity-100 transition-opacity duration-500 hidden md:block">
          <img src={voltMain} alt="Volt" className="w-24 h-auto transform translate-y-4" />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0C1A2B] text-[#C6CFDA] py-16 border-t border-white/5 font-sans">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Columna 1 — Marca */}
          <div className="space-y-6">
            <img
              src={logoRound}
              alt="ComparamosTuLuz"
              className="h-12 w-auto"
            />
            <p className="text-sm leading-relaxed">
              Tu plataforma para comparar tarifas de electricidad de manera transparente y ahorrar en tu factura cada mes.
            </p>
          </div>

          {/* Columna 2 — Navegación */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Navegación</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-[var(--color-brand-yellow)] transition-colors">Inicio</a></li>
              <li><a href="#how-it-works" className="hover:text-[var(--color-brand-yellow)] transition-colors">Cómo funciona</a></li>
              <li><a href="#comparison" className="hover:text-[var(--color-brand-yellow)] transition-colors">Tarifas destacadas</a></li>
              <li><a href="#testimonials" className="hover:text-[var(--color-brand-yellow)] transition-colors">Opiniones</a></li>
              <li><a href="#about-us" className="hover:text-[var(--color-brand-yellow)] transition-colors">Sobre nosotros</a></li>
            </ul>
          </div>

          {/* Columna 3 — Recursos */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Recursos</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#faq" className="hover:text-[var(--color-brand-yellow)] transition-colors">Preguntas frecuentes</a></li>
              <li><a href="#" className="hover:text-[var(--color-brand-yellow)] transition-colors">Guía de ahorro energético</a></li>
              <li><a href="#" className="hover:text-[var(--color-brand-yellow)] transition-colors">Contacto</a></li>
              <li><a href="#" className="hover:text-[var(--color-brand-yellow)] transition-colors">Políticas de privacidad</a></li>
              <li><a href="#" className="hover:text-[var(--color-brand-yellow)] transition-colors">Términos y condiciones</a></li>
            </ul>
          </div>

          {/* Columna 4 — Contacto */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Contacto</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="font-medium text-white">Email:</span>
                <a href="mailto:soporte@comparamostuluz.com" className="hover:text-[var(--color-brand-yellow)] transition-colors">soporte@comparamostuluz.com</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-medium text-white">Horario:</span>
                <span>L–V 9:00–18:00</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-medium text-white">Ubicación:</span>
                <span>España</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Fila Inferior */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs md:text-sm">
          <div className="text-center md:text-left">
            <p>&copy; 2025 ComparamosTuLuz. Todos los derechos reservados.</p>
          </div>

          <div className="hidden md:block text-white/40 font-medium tracking-wide">
            Transparencia · Seguridad · Ahorro
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src={logoUE}
              alt="Financiado por la Unión Europea - NextGenerationEU"
              className="h-10 md:h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}