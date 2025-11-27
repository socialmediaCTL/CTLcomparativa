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
  ChevronDown
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Assets
import voltMain from "@assets/volt_hero_v2.png";
import voltTools from "@assets/volt_tools.png";
import voltAhorro from "@assets/volt_ahorro.png";
import logoRound from "@assets/logo_ctl_clean.png";
import logoLoading from "@assets/logo sin fondo.png";
import arcosImage from "@assets/arcos.png";

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
      <HowItWorks />
      <Comparison />
      <Savings />
      <MeetVolt />
      <FAQ />
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
            { name: "Ahorro", href: "#savings" },
            { name: "Colaboradores", href: "#collaborators" },
            { name: "Confianza", href: "#trust" },
            { name: "Incentivos", href: "#incentives" },
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
          <Button className="ml-4 bg-[var(--color-brand-yellow)] text-primary hover:bg-yellow-400 font-bold shadow-lg shadow-white/20 hover:shadow-white/40 transition-all uppercase text-xs tracking-wide border-2 border-white whitespace-nowrap">
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
          <a href="#savings" className="block text-sm font-bold uppercase text-foreground hover:text-[var(--color-brand-yellow)]" onClick={() => setIsOpen(false)}>Ahorro</a>
          <a href="#faq" className="block text-sm font-bold uppercase text-foreground hover:text-[var(--color-brand-yellow)]" onClick={() => setIsOpen(false)}>Preguntas</a>
          <Button className="w-full bg-[var(--color-brand-yellow)] text-primary font-bold uppercase border-2 border-white">
            Subir Factura
          </Button>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-brand-blue)] pt-20 pb-12 md:pt-32 md:pb-32 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 to-transparent opacity-50 blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-center lg:text-left"
        >
          <div className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-900/30 px-3 py-1 text-sm text-white backdrop-blur-sm uppercase tracking-wider font-semibold">
            <Zap className="mr-2 h-4 w-4 text-[var(--color-brand-yellow)]" />
            <span>Ahorro inteligente garantizado</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight font-sans leading-tight uppercase">
            Sube tu factura y <br />
            ahorra hasta <br />
            <span className="text-[var(--color-brand-yellow)]">300€</span> al año
          </h1>

          <p className="text-lg text-white max-w-2xl mx-auto lg:mx-0 font-medium">
            Rápido, seguro y sin llamadas comerciales. Nosotros comparamos por ti, tú solo eliges y ahorras.
          </p>

          <div className="hidden lg:flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <Button size="lg" className="bg-[var(--color-brand-yellow)] text-primary hover:bg-yellow-400 font-bold text-lg h-14 px-8 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300 animate-pulse-slow uppercase border-2 border-white">
              Subir mi factura ahora
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 h-14 px-8 uppercase font-bold tracking-wide">
              Ver cómo funciona
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm text-white pt-4 font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-6 w-6 text-[var(--color-brand-yellow)]" />
              <span>ANÁLISIS AUTOMÁTICO Y SEGURO</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingDown className="h-6 w-6 text-[var(--color-brand-yellow)]" />
              <span>PROCESO EN MENOS DE 3 MINUTOS</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden lg:flex relative justify-center lg:justify-center mt-8 lg:mt-0"
        >
          <div className="relative w-full max-w-lg md:aspect-square flex items-center justify-center scale-100 origin-center -translate-y-12">
            {/* Background Arcs (Image) */}
            <img
              src={arcosImage}
              alt=""
              className="absolute inset-0 w-full h-full z-0 pointer-events-none object-contain scale-125"
            />

            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <img
              src={voltMain}
              alt="Volt el experto"
              className="relative z-10 object-contain w-full h-full drop-shadow-2xl scale-[1.4] md:scale-[1.4]"
            />

            {/* Floating Buttons */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0 }}
              className="hidden md:flex absolute top-0 left-0 md:top-10 md:-left-12 bg-[#002782]/60 backdrop-blur-md border border-white/20 px-4 py-2 rounded-2xl shadow-lg shadow-white/10 z-30 cursor-pointer hover:scale-105 transition-transform items-center gap-2"
            >
              <Users className="w-5 h-5 text-[var(--color-brand-yellow)]" />
              <span className="text-xs font-bold text-white whitespace-nowrap">Comunidad de Ahorro</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1 }}
              className="hidden md:flex absolute top-8 right-0 md:top-20 md:-right-8 bg-[#002782]/60 backdrop-blur-md border border-white/20 px-4 py-2 rounded-2xl shadow-lg shadow-white/10 z-30 cursor-pointer hover:scale-105 transition-transform items-center gap-2"
            >
              <MessageCircle className="w-5 h-5 text-[var(--color-brand-yellow)]" />
              <span className="text-xs font-bold text-white whitespace-nowrap">Asesoramiento Real</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 2 }}
              className="hidden md:flex absolute bottom-24 right-0 md:bottom-20 md:-right-4 bg-[#002782]/60 backdrop-blur-md border border-white/20 px-4 py-2 rounded-2xl shadow-lg shadow-white/10 z-30 cursor-pointer hover:scale-105 transition-transform items-center gap-2"
            >
              <Phone className="w-5 h-5 text-[var(--color-brand-yellow)]" />
              <span className="text-xs font-bold text-white whitespace-nowrap">Sin Spam Telefónico</span>
            </motion.div>

            {/* Speech Bubble */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute bottom-10 -left-8 bg-[#002782]/60 backdrop-blur-md border border-white/20 text-white p-5 rounded-2xl shadow-xl max-w-[240px] hidden sm:block z-20"
            >
              <p className="text-sm font-bold italic leading-relaxed">
                "¡Hola! Soy <span className="text-[var(--color-brand-yellow)] font-extrabold">Volt</span> ⚡ <br />
                Tu amigo experto en energía. Sube tu factura y déjame conseguirte el mejor precio."
              </p>
            </motion.div>

          </div>
        </motion.div>

        {/* New Mobile-Only Side-by-Side Layout */}
        <div className="flex lg:hidden flex-row items-end justify-between mt-10 w-full">
          {/* Left: Big Dog */}
          <div className="w-[45%] relative -ml-8 translate-y-8">
            <img
              src={voltMain}
              alt="Volt el experto"
              className="w-full object-contain scale-[1.65] origin-bottom-left drop-shadow-2xl"
            />
          </div>

          {/* Right: Small Buttons */}
          <div className="w-[55%] flex flex-col gap-3 pb-4">
            <Button size="sm" className="w-full bg-[var(--color-brand-yellow)] text-primary hover:bg-yellow-400 font-bold text-xs h-12 shadow-lg uppercase border border-white leading-tight whitespace-normal text-center px-1">
              SUBIR MI FACTURA
            </Button>
            <Button variant="outline" size="sm" className="w-full border-white/20 text-white hover:bg-white/10 h-10 uppercase font-bold text-[10px] tracking-wide whitespace-normal text-center px-1">
              VER CÓMO FUNCIONA
            </Button>
          </div>
        </div>
      </div >
    </section >
  );
}

function HowItWorks() {
  const steps = [
    {
      icon: <Camera className="h-8 w-8 text-[var(--color-brand-yellow)]" />,
      title: "Sube tu factura",
      description: "Haz una foto, súbela a la web o arrastra tu PDF. Sin formularios interminables."
    },
    {
      icon: <Zap className="h-8 w-8 text-[var(--color-brand-yellow)]" />,
      title: "Analizamos y comparamos",
      description: "Nuestro sistema analiza tus consumos y compara entre las mejores tarifas del mercado."
    },
    {
      icon: <MousePointerClick className="h-8 w-8 text-[var(--color-brand-yellow)]" />,
      title: "Elige y contrata",
      description: "Te mostramos las mejores opciones. Tú eliges, contratas al instante y empiezas a ahorrar."
    }
  ];

  return (
    <section id="how-it-works" className="py-12 md:py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 uppercase tracking-tight">¿Cómo funciona Comparamos Tu Luz?</h2>
          <p className="text-lg text-muted-foreground">Tres pasos sencillos para dejar de pagar de más.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-blue-100 -z-10"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative bg-white p-8 rounded-2xl shadow-lg border border-blue-50 hover:border-blue-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out group"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-900/20 relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                {step.icon}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[var(--color-brand-yellow)] rounded-full flex items-center justify-center text-primary font-bold text-sm border-2 border-white">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 text-center uppercase">{step.title}</h3>
              <p className="text-muted-foreground text-center">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="bg-blue-50 p-4 rounded-xl inline-flex items-center gap-4 max-w-md border border-blue-100 shadow-sm">
            <img src={voltTools} alt="Volt Mini" className="w-12 h-12 object-contain" />
            <p className="text-sm text-primary font-bold italic">
              "Si no entiendes una tarifa, no te preocupes, yo te la explico."
            </p>
          </div>
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

function Savings() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "María G., Madrid",
      amount: "45€/mes",
      text: "Pensaba que ya pagaba poco. Subí mi factura, en 5 minutos tenía una tarifa mejor y hoy pago mucho menos. Increíblemente fácil."
    },
    {
      name: "Carlos R., Barcelona",
      amount: "38€/mes",
      text: "Nunca me fié de los comparadores, pero Volt me mostró el ahorro real con mi factura. Sin llamadas molestas, todo 100% online."
    },
    {
      name: "Laura M., Valencia",
      amount: "32€/mes",
      text: "Genial que no pidan teléfono para acosar. Subes el PDF, ves tu ahorro y decides tú mismo. Así debería ser siempre."
    },
    {
      name: "Antonio S., Sevilla",
      amount: "50€/mes",
      text: "Somos 4 y el aire dispara la factura. Gracias a Comparamos Tu Luz bajamos el gasto casi a la mitad este verano."
    },
    {
      name: "Isabel P., Bilbao",
      amount: "29€/mes",
      text: "Sencillo, rápido y muy transparente. Me cambié de compañía al momento y sin papeleos complicados. Lo recomiendo a todo el mundo."
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="savings" className="py-12 md:py-20 bg-brand-gradient text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-12">
        {/* Imagen del personaje a la izquierda */}
        <div className="flex-1 flex flex-col items-center lg:items-end gap-8">
          <img src={voltAhorro} alt="Volt Ahorro" className="w-full max-w-md h-auto object-contain drop-shadow-2xl" />
          {/* Bloque de caso de éxito movido aquí */}
          <div className="w-full max-w-md bg-white/10 backdrop-blur border-white/20 p-4 rounded-lg">
            <h3 className="text-lg font-bold text-[var(--color-brand-yellow)] mb-2">Caso de éxito</h3>
            <p className="text-white">"Gracias a Volt ahorré 45€/mes y el proceso fue rápido y sin llamadas." – María G.</p>
          </div>
        </div>
        {/* Contenido a la derecha */}
        <div className="flex-1 flex flex-col gap-8 w-full">
          {/* Grid unificado de 3 tarjetas iguales */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <Card className="bg-white/10 backdrop-blur border-white/20 text-white p-4 flex flex-col items-center justify-center h-40 hover:bg-white/20 transition-colors">
              <div className="text-3xl font-bold text-[var(--color-brand-yellow)] mb-1">100%</div>
              <p className="text-blue-100 font-bold uppercase text-xs tracking-wider text-center">Online y sin llamadas</p>
            </Card>
            <Card className="bg-white/10 backdrop-blur border-white/20 text-white p-4 flex flex-col items-center justify-center h-40 hover:bg-white/20 transition-colors">
              <div className="text-3xl font-bold text-[var(--color-brand-yellow)] mb-1">300€</div>
              <p className="text-blue-100 font-bold uppercase text-xs tracking-wider text-center">Ahorro potencial anual</p>
            </Card>
            <Card className="bg-white/10 backdrop-blur border-white/20 text-white p-4 flex flex-col items-center justify-center h-40 hover:bg-white/20 transition-colors">
              <div className="text-3xl font-bold text-[var(--color-brand-yellow)] mb-1">3 min</div>
              <p className="text-blue-100 font-bold uppercase text-xs tracking-wider text-center">Tiempo medio del proceso</p>
            </Card>
          </div>
        </div>
      </div>
      {/* Testimonios */}
      <div className="max-w-4xl mx-auto mt-12 px-4 md:px-0"> {/* <-- AQUI AGREGUÉ px-4 para móviles */}
        <div className="relative bg-white text-primary p-8 rounded-2xl shadow-2xl">
          <div className="flex items-center">
            <button onClick={prevTestimonial} className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 p-2 bg-slate-200/50 md:bg-white/20 hover:bg-white/30 rounded-full text-primary md:text-white transition-colors z-10" aria-label="Anterior testimonio">
              <ChevronLeft className="w-6 h-6 md:w-10 md:h-10" />
            </button>
            <div className="flex-1 px-4 md:px-12">
              <AnimatePresence mode="wait">
                <motion.div key={currentIndex} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-20 h-20 bg-slate-200 rounded-full flex-shrink-0 overflow-hidden flex items-center justify-center">
                    <Users className="w-10 h-10 text-slate-400" />
                  </div>
                  <div>
                    <p className="text-lg italic mb-4">"{testimonials[currentIndex].text}"</p>
                    <div className="font-bold text-primary">— {testimonials[currentIndex].name}</div>
                    <div className="text-sm text-muted-foreground font-medium">Ahorró {testimonials[currentIndex].amount}</div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            <button onClick={nextTestimonial} className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 p-2 bg-slate-200/50 md:bg-white/20 hover:bg-white/30 rounded-full text-primary md:text-white transition-colors z-10" aria-label="Siguiente testimonio">
              <ChevronRight className="w-6 h-6 md:w-10 md:h-10" />
            </button>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button key={index} onClick={() => setCurrentIndex(index)} className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-[var(--color-brand-blue)] w-6' : 'bg-slate-300'}`} aria-label={`Ir al testimonio ${index + 1}`}></button>
            ))}
          </div>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12 mt-8 text-center">
          Además del ahorro directo, estamos preparando incentivos exclusivos para nuestra comunidad.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { icon: <Gift className="w-8 h-8" />, title: "Experiencias" },
            { icon: <Zap className="w-8 h-8" />, title: "Sorteos Luz Gratis" },
            { icon: <Users className="w-8 h-8" />, title: "Eventos VIP" }
          ].map((item, i) => (
            <div key={i} className="group relative p-8 rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden">
              <div className="absolute top-3 right-3 bg-blue-100 text-[var(--color-brand-blue)] text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                Próximamente
              </div>
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-[var(--color-brand-yellow)] group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="font-bold text-lg text-primary uppercase">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section >
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
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 max-w-6xl mx-auto">
          <div className="md:w-5/12 flex justify-center md:justify-center relative mb-12 md:mb-0">
            {/* Ajusté la escala para móvil (scale-100) y desktop (md:scale-125) */}
            <div className="relative scale-100 md:scale-125">
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

              {/* Ajusté la escala de la imagen también */}
              <img src={voltTools} alt="Volt con herramientas" className="w-full max-w-sm drop-shadow-2xl relative z-10 scale-100 md:scale-[1.3]" />

              {/* Floating Quality Buttons */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute top-0 -left-4 md:top-12 md:-left-8 bg-white shadow-xl border border-blue-100 px-4 py-2 rounded-full flex items-center gap-2 z-20"
              >
                <Brain className="w-4 h-4 text-[var(--color-brand-yellow)] fill-[var(--color-brand-yellow)]" />
                <span className="text-sm font-bold text-primary">Experto</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-4 -right-4 md:bottom-16 md:-right-8 bg-white shadow-xl border border-blue-100 px-4 py-2 rounded-full flex items-center gap-2 z-20"
              >
                <ShieldCheck className="w-4 h-4 text-[var(--color-brand-yellow)]" />
                <span className="text-sm font-bold text-primary">Protector</span>
              </motion.div>
            </div>
          </div>

          <div className="md:w-6/12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 uppercase tracking-tight text-center md:text-left">Conoce a Volt, tu experto en luz</h2>
            <p className="text-lg text-muted-foreground mb-6 text-center md:text-left">
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
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-[var(--color-brand-yellow)]" />,
      q: "¿Es seguro subir mi factura?",
      a: "Totalmente. Usamos encriptación de grado bancario y tus datos solo se usan para la comparativa."
    },
    {
      icon: <Clock className="w-5 h-5 text-[var(--color-brand-yellow)]" />,
      q: "¿Cuánto tarda el análisis?",
      a: "Menos de 3 minutos. Nuestro sistema lee tu factura automáticamente."
    },
    {
      icon: <FileText className="w-5 h-5 text-[var(--color-brand-yellow)]" />,
      q: "¿Tengo permanencia?",
      a: "Depende de la tarifa que elijas, pero siempre te avisaremos antes de contratar."
    },
    {
      icon: <Wallet className="w-5 h-5 text-[var(--color-brand-yellow)]" />,
      q: "¿Cobráis algo por el servicio?",
      a: "Para ti es 100% gratuito. Nosotros cobramos una comisión a las comercializadoras, no a ti."
    },
  ];

  return (
    <section id="faq" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-primary text-center mb-12 uppercase tracking-tight">Preguntas Frecuentes</h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-bold text-primary uppercase text-sm tracking-wide">
                <div className="flex items-center gap-3">
                  {faq.icon}
                  <span>{faq.q}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pl-8">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--color-brand-blue)] text-white py-8 md:py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2 flex flex-col items-center text-center md:items-start md:text-left">
            <div className="mb-6">
              <img
                src={logoRound}
                alt="Logo"
                className="h-32 w-auto transition-transform duration-300 hover:scale-110"
              />
            </div>
            <p className="text-white/80 max-w-sm mx-auto md:mx-0">
              La plataforma inteligente que democratiza el ahorro energético. Sin letra pequeña.
            </p>
          </div>

          {/* Contenedor para Enlaces y Legal juntos en móvil */}
          <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold mb-4 text-[var(--color-brand-yellow)] uppercase text-sm tracking-wider">Enlaces</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-white">Inicio</a></li>
                <li><a href="#how-it-works" className="hover:text-white">Cómo funciona</a></li>
                <li><a href="#savings" className="hover:text-white">Ahorro</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-[var(--color-brand-yellow)] uppercase text-sm tracking-wider">Legal</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-white">Aviso Legal</a></li>
                <li><a href="#" className="hover:text-white">Privacidad</a></li>
                <li><a href="#" className="hover:text-white">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-sm text-white/60 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; 2025 Comparamos Tu Luz. Todos los derechos reservados.</p>
          <div className="flex items-center gap-2">
            <span>Hecho con</span>
            <Zap className="w-4 h-4 text-[var(--color-brand-yellow)]" />
            <span>y energía renovable.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
