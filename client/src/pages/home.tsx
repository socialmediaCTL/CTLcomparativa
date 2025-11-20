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
  Gift
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Assets
import voltMain from "@assets/Generated Image November 20, 2025 - 8_49AM_1763673302834.png";
import voltTools from "@assets/Gemini_Generated_Image_62tzie62tzie62tz_1763673302834.png";
import logoRound from "@assets/LOGO_CTL_1763673320699.jpg";
import logoText from "@assets/IMAGEN_CTL_1763673302835.jpg";

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
      <Collaborators />
      <Trust />
      <FutureIncentives />
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
        <img src={logoRound} alt="Logo" className="w-24 h-24 rounded-full shadow-2xl mb-8" />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 1.5, 
            ease: "easeInOut" 
          }}
          className="absolute -right-4 -top-4"
        >
          <Zap className="w-12 h-12 text-[var(--color-brand-yellow)] fill-[var(--color-brand-yellow)]" />
        </motion.div>
      </div>
      <h2 className="text-2xl font-bold text-white tracking-widest uppercase">Comparamos Tu Luz</h2>
    </motion.div>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logoRound} alt="CTL Logo" className="h-10 w-10 rounded-full" />
          <span className="font-bold text-xl text-[var(--color-brand-blue)] hidden md:block uppercase tracking-tight">Comparamos Tu Luz</span>
        </div>

        <div className="hidden md:flex gap-6 items-center">
          <a href="#how-it-works" className="text-sm font-bold uppercase hover:text-primary transition-colors">Cómo funciona</a>
          <a href="#savings" className="text-sm font-bold uppercase hover:text-primary transition-colors">Ahorro</a>
          <a href="#faq" className="text-sm font-bold uppercase hover:text-primary transition-colors">Preguntas</a>
          <Button className="bg-[var(--color-brand-yellow)] text-primary hover:bg-yellow-400 font-bold shadow-lg glow-yellow hover:shadow-yellow-400/50 transition-all uppercase text-xs tracking-wide">
            Subir Factura
          </Button>
        </div>

        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden p-4 bg-white border-b space-y-4">
          <a href="#how-it-works" className="block text-sm font-bold uppercase" onClick={() => setIsOpen(false)}>Cómo funciona</a>
          <a href="#savings" className="block text-sm font-bold uppercase" onClick={() => setIsOpen(false)}>Ahorro</a>
          <a href="#faq" className="block text-sm font-bold uppercase" onClick={() => setIsOpen(false)}>Preguntas</a>
          <Button className="w-full bg-[var(--color-brand-yellow)] text-primary font-bold uppercase">
            Subir Factura
          </Button>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-gradient pt-16 pb-24 md:pt-24 md:pb-32 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 to-transparent opacity-50 blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-center lg:text-left"
        >
          <div className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-900/30 px-3 py-1 text-sm text-blue-100 backdrop-blur-sm uppercase tracking-wider font-semibold">
            <Zap className="mr-2 h-4 w-4 text-[var(--color-brand-yellow)]" />
            <span>Ahorro inteligente garantizado</span>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl font-sans leading-tight uppercase">
            Sube tu factura y ahorra hasta <span className="text-[var(--color-brand-yellow)]">300€</span> al mes
          </h1>
          
          <p className="text-lg text-blue-100 max-w-2xl mx-auto lg:mx-0 font-medium">
            Rápido, seguro y sin llamadas comerciales. Nosotros comparamos por ti, tú solo eliges y ahorras.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <Button size="lg" className="bg-[var(--color-brand-yellow)] text-primary hover:bg-yellow-400 font-bold text-lg h-14 px-8 shadow-[0_0_20px_rgba(255,200,0,0.3)] hover:shadow-[0_0_30px_rgba(255,200,0,0.5)] transition-all duration-300 animate-pulse-slow uppercase">
              Subir mi factura ahora
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 h-14 px-8 uppercase font-bold tracking-wide">
              Ver cómo funciona
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm text-blue-200 pt-4 font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[var(--color-brand-yellow)]" />
              <span>ANÁLISIS AUTOMÁTICO Y SEGURO</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingDown className="h-4 w-4 text-[var(--color-brand-yellow)]" />
              <span>PROCESO EN MENOS DE 3 MINUTOS</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-md aspect-square">
            <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
            <img 
              src={voltMain} 
              alt="Volt el experto" 
              className="relative z-10 object-contain w-full h-full drop-shadow-2xl"
            />
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-white text-primary p-4 rounded-2xl shadow-xl max-w-[200px] hidden sm:block"
            >
              <p className="text-sm font-bold italic">"Yo me encargo de la comparación, tú de disfrutar el ahorro."</p>
              <div className="absolute -top-2 left-6 w-4 h-4 bg-white transform rotate-45"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
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
    <section id="how-it-works" className="py-20 bg-slate-50">
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
              className="relative bg-white p-8 rounded-2xl shadow-lg border border-blue-50 hover:border-blue-100 hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-900/20 relative z-10">
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
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

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-xl">
            <h3 className="text-xl font-bold text-primary mb-6 text-center uppercase">Comparativa</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="font-bold text-muted-foreground text-center mb-4 uppercase text-sm">Otros</div>
                <div className="bg-red-50 p-4 rounded-lg text-sm text-red-800 border border-red-100 h-24 flex items-center justify-center text-center font-medium">
                  Piden tu número para llamarte sin parar
                </div>
                <div className="bg-red-50 p-4 rounded-lg text-sm text-red-800 border border-red-100 h-24 flex items-center justify-center text-center font-medium">
                  Comparaciones genéricas
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="font-bold text-primary text-center mb-4 uppercase text-sm">Comparamos Tu Luz</div>
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
  return (
    <section id="savings" className="py-20 bg-brand-gradient text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tight">Hasta 300€ menos al mes</h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Nuestros usuarios han optimizado sus facturas drásticamente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white/10 backdrop-blur border-white/20 text-white p-8 text-center">
            <div className="text-5xl font-bold text-[var(--color-brand-yellow)] mb-2">300€</div>
            <p className="text-blue-100 font-bold uppercase text-sm tracking-wider">Ahorro potencial mensual</p>
          </Card>

          <Card className="bg-white/10 backdrop-blur border-white/20 text-white p-8 text-center">
            <div className="text-5xl font-bold text-[var(--color-brand-yellow)] mb-2">3 min</div>
            <p className="text-blue-100 font-bold uppercase text-sm tracking-wider">Tiempo medio del proceso</p>
          </Card>

          <Card className="bg-white/10 backdrop-blur border-white/20 text-white p-8 text-center">
            <div className="text-5xl font-bold text-[var(--color-brand-yellow)] mb-2">100%</div>
            <p className="text-blue-100 font-bold uppercase text-sm tracking-wider">Online y sin llamadas</p>
          </Card>
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-white text-primary p-8 rounded-2xl shadow-2xl">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-20 h-20 bg-slate-200 rounded-full flex-shrink-0 overflow-hidden">
              <Users className="w-full h-full p-4 text-slate-400" />
            </div>
            <div>
              <p className="text-lg italic mb-4">
                "Pensaba que ya pagaba poco. Subí mi factura, en 5 minutos tenía una tarifa mejor y hoy pago mucho menos. Increíblemente fácil."
              </p>
              <div className="font-bold text-primary">— María G., Madrid</div>
              <div className="text-sm text-muted-foreground font-medium">Ahorró 45€/mes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Collaborators() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-brand-yellow)] rounded-full filter blur-[80px] opacity-20"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-3xl font-bold mb-4 uppercase tracking-tight">Gana comisiones recomendando ahorro real</h2>
              <p className="text-slate-300 mb-8 text-lg">
                Si tienes audiencia, nosotros ponemos la herramienta y tú el código QR. Todo lo facturado del día 1 al 30 se paga el día 5.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <BarChart3 className="text-[var(--color-brand-yellow)]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg uppercase text-sm tracking-wider">Seguimiento en tiempo real</h4>
                    <p className="text-slate-400 text-sm">Panel privado para ver tus conversiones.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <FileText className="text-[var(--color-brand-yellow)]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg uppercase text-sm tracking-wider">Autofactura mensual</h4>
                    <p className="text-slate-400 text-sm">Pagos automáticos y transparentes.</p>
                  </div>
                </div>
              </div>

              <Button className="mt-8 bg-[var(--color-brand-yellow)] text-primary hover:bg-yellow-400 font-bold uppercase tracking-wide shadow-lg glow-yellow">
                Ser Colaborador
              </Button>
            </div>
            
            <div className="hidden md:block relative h-full min-h-[300px]">
               <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 h-full flex items-center justify-center">
                 <div className="text-center">
                    <p className="text-2xl font-bold text-[var(--color-brand-yellow)] mb-2 uppercase">Panel de Partner</p>
                    <p className="text-slate-400">Próximamente visualización del dashboard</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4 uppercase tracking-tight">Confianza y Experiencia</h2>
          <p className="text-muted-foreground font-medium">Tu factura no es un experimento.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "+10 Años", desc: "Experiencia en el sector energético" },
            { title: "< 2%", desc: "Índice de bajas anual" },
            { title: "0", desc: "Incidencias no resueltas" },
            { title: "100%", desc: "Monitorización en tiempo real" }
          ].map((stat, i) => (
            <Card key={i} className="p-6 text-center border-none shadow-sm bg-white hover:shadow-md transition-shadow">
              <div className="text-3xl font-bold text-[var(--color-brand-blue)] mb-2">{stat.title}</div>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">{stat.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function FutureIncentives() {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-primary mb-4 uppercase tracking-tight">Ahorra hoy… y gana mañana</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
          Además del ahorro directo, estamos preparando incentivos exclusivos para nuestra comunidad.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <Gift className="w-8 h-8" />, title: "Experiencias" },
            { icon: <Zap className="w-8 h-8" />, title: "Sorteos Luz Gratis" },
            { icon: <Users className="w-8 h-8" />, title: "Eventos VIP" }
          ].map((item, i) => (
            <div key={i} className="group relative p-8 rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden">
              <div className="absolute top-3 right-3 bg-blue-100 text-[var(--color-brand-blue)] text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                Próximamente
              </div>
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-[var(--color-brand-blue)] group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="font-bold text-lg text-primary uppercase">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MeetVolt() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 flex justify-center">
            <img src={voltTools} alt="Volt con herramientas" className="w-full max-w-md drop-shadow-xl" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 uppercase tracking-tight">Conoce a Volt, tu experto en luz</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Volt es el chihuahua que te acompaña en cada paso. Él representa nuestra forma de trabajar: cercano, inteligente y siempre atento a que no pagues de más.
            </p>
            
            <div className="space-y-4">
              {[
                "Vigila las tarifas 24/7",
                "Te avisa de oportunidades de ahorro",
                "Te defiende ante las eléctricas"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                  <div className="w-8 h-8 bg-[var(--color-brand-yellow)] rounded-full flex items-center justify-center shrink-0">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-bold text-primary">{item}</span>
                </div>
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
    { q: "¿Es seguro subir mi factura?", a: "Totalmente. Usamos encriptación de grado bancario y tus datos solo se usan para la comparativa." },
    { q: "¿Cuánto tarda el análisis?", a: "Menos de 3 minutos. Nuestro sistema lee tu factura automáticamente." },
    { q: "¿Tengo permanencia?", a: "Depende de la tarifa que elijas, pero siempre te avisaremos antes de contratar." },
    { q: "¿Cobráis algo por el servicio?", a: "Para ti es 100% gratuito. Nosotros cobramos una comisión a las comercializadoras, no a ti." },
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-primary text-center mb-12 uppercase tracking-tight">Preguntas Frecuentes</h2>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-bold text-primary uppercase text-sm tracking-wide">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
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
    <footer className="bg-[var(--color-brand-blue)] text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src={logoRound} alt="Logo" className="w-10 h-10 rounded-full" />
              <span className="font-bold text-xl uppercase tracking-tight">Comparamos Tu Luz</span>
            </div>
            <p className="text-blue-200 max-w-sm">
              La plataforma inteligente que democratiza el ahorro energético. Sin letra pequeña.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-[var(--color-brand-yellow)] uppercase text-sm tracking-wider">Enlaces</h4>
            <ul className="space-y-2 text-blue-200">
              <li><a href="#" className="hover:text-white">Inicio</a></li>
              <li><a href="#how-it-works" className="hover:text-white">Cómo funciona</a></li>
              <li><a href="#savings" className="hover:text-white">Ahorro</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-[var(--color-brand-yellow)] uppercase text-sm tracking-wider">Legal</h4>
            <ul className="space-y-2 text-blue-200">
              <li><a href="#" className="hover:text-white">Aviso Legal</a></li>
              <li><a href="#" className="hover:text-white">Privacidad</a></li>
              <li><a href="#" className="hover:text-white">Cookies</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-sm text-blue-300 flex flex-col md:flex-row justify-between items-center gap-4">
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
