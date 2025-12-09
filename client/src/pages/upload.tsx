import { useState } from "react";
import { useLocation } from "wouter";
import { Upload as UploadIcon, ShieldCheck, Zap, Clock, ArrowLeft, FileSearch, Phone, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { motion, AnimatePresence } from "framer-motion";
import logoRound from "@assets/logo_ctl_clean.png";
type ActiveTab = "analyze" | "call" | "share";
// Variantes para animaciones
const fadeIn = {
  hidden: { opacity: 0, y: 10, height: 0 },
  visible: { opacity: 1, y: 0, height: "auto", transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -10, height: 0, transition: { duration: 0.2 } }
};
// --- COMPONENTES DE FORMULARIO REUTILIZABLES ---
function AnalyzeForm() {
  const [isDragging, setIsDragging] = useState(false);
  const handleDragOver = (e: React.DragEvent) => { e.preventDefault(); setIsDragging(true); };
  const handleDragLeave = () => { setIsDragging(false); };
  const handleDrop = (e: React.DragEvent) => { e.preventDefault(); setIsDragging(false); };
  return (
    <div className="flex flex-col md:flex-row items-center gap-12 h-full">
      <div className="flex-1 w-full space-y-6">
        <div className="text-center md:text-left space-y-2">
          <h3 className="text-2xl font-bold text-[#002782]">Sube tu factura de la luz</h3>
          <p className="text-gray-500">Descubre cuánto dinero te puedes ahorrar</p>
        </div>
        
        <div
          className={`w-full bg-blue-50/50 rounded-xl border-2 border-dashed transition-all duration-300 p-8 flex flex-col items-center justify-center gap-4 cursor-pointer
            ${isDragging ? "border-[var(--color-brand-yellow)] bg-yellow-50" : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <UploadIcon className="w-12 h-12 text-[#002782]" />
          <div className="text-center">
            <p className="font-bold text-[#002782]">Factura Reciente</p>
            <p className="text-xs text-gray-500">.pdf, .jpeg, .png</p>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <Label className="text-[#002782]">Datos de contacto:</Label>
            <Input placeholder="Correo electrónico*" className="mt-1 bg-white border-gray-200 text-gray-900" />
          </div>
          <div>
            <Input placeholder="Teléfono móvil*" className="bg-white border-gray-200 text-gray-900" />
          </div>
        </div>
        
        <div className="space-y-4 pt-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms1" />
            <label htmlFor="terms1" className="text-xs text-gray-500 leading-none">
              Acepto los <a href="#" className="underline">términos y condiciones*</a>
            </label>
          </div>
          <div className="flex items-start space-x-2">
            <Checkbox id="ads1" />
            <label htmlFor="ads1" className="text-xs text-gray-500 leading-none">
              Quiero recibir información sobre servicios u ofertas relacionadas.
            </label>
          </div>
        </div>
        <Button className="w-full bg-[var(--color-brand-yellow)] hover:bg-yellow-500 text-[#002782] font-bold text-lg py-6 shadow-lg hover:shadow-yellow-500/20">
          SIGUIENTE
        </Button>
      </div>
    </div>
  );
}
function CallForm() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-12 h-full">
      <div className="flex-1 w-full space-y-6">
        <div className="text-center space-y-2">
          <div className="w-16 h-16 bg-[var(--color-brand-yellow)] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-yellow-500/20">
            <Phone className="w-8 h-8 text-[#0F1B2D]" />
          </div>
          <h3 className="text-2xl font-bold text-[#002782]">¡Nosotros te llamamos!</h3>
          <p className="text-gray-500">Déjanos tu número y te ofreceremos asesoramiento telefónico.</p>
        </div>
        <div className="space-y-4">
          <Input placeholder="Nombre*" className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-[var(--color-brand-yellow)]" />
          <Input placeholder="Teléfono móvil*" className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-[var(--color-brand-yellow)]" />
          
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
            <p className="text-xs font-bold text-[#002782] mb-2">OPCIONAL - Si dispones de factura, adjúntala:</p>
            <div className="flex items-center justify-center border border-dashed border-gray-300 rounded p-4 hover:border-[#002782] transition-colors cursor-pointer bg-white">
              <span className="text-xs text-gray-400">Factura Reciente</span>
            </div>
          </div>
        </div>
        <div className="space-y-4 pt-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms2" />
            <label htmlFor="terms2" className="text-xs text-gray-500 leading-none">
              He leído y acepto la <a href="#" className="underline text-gray-500">política de tratamiento de datos*</a>
            </label>
          </div>
          <div className="flex items-start space-x-2">
            <Checkbox id="ads2" />
            <label htmlFor="ads2" className="text-xs text-gray-500 leading-none">
              Quiero recibir información comercial.
            </label>
          </div>
        </div>
        <Button className="w-full bg-[var(--color-brand-yellow)] hover:bg-yellow-500 text-[#002782] font-bold text-lg py-6 shadow-lg shadow-yellow-500/10">
          ENVIAR SOLICITUD
        </Button>
      </div>
    </div>
  );
}
function ShareForm() {
  return (
    <div className="flex flex-col items-center gap-8 h-full max-w-md mx-auto">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-[#002782] rounded-full flex items-center justify-center mx-auto border border-white/10">
          <Share2 className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-[#002782]">¿No tienes la factura a mano?</h3>
        <p className="text-gray-500">Podemos enviarte un correo para que accedas en otro momento.</p>
      </div>
      <div className="w-full space-y-4">
        <Input placeholder="Correo electrónico*" className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-[var(--color-brand-yellow)]" />
        
        <Button className="w-full bg-[var(--color-brand-yellow)] hover:bg-yellow-500 text-[#002782] font-bold text-lg py-6 shadow-lg shadow-yellow-500/10">
          ENVIAR RECORDATORIO
        </Button>
      </div>
    </div>
  );
}
// Componente decorativo
function GoldenArcBackground({ className, position = "top-right" }: { className?: string, position?: "top-right" | "bottom-left" }) {
  const isTopRight = position === "top-right";
  
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}>
        <svg 
            className="absolute w-full h-full opacity-40"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
        >
            <circle 
                cx={isTopRight ? "100" : "0"} 
                cy={isTopRight ? "0" : "100"} 
                r="40" 
                fill="none" 
                stroke="url(#paint0_linear)" 
                strokeWidth="0.5" 
            />
            <defs>
                <linearGradient id="paint0_linear" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFC300"/>
                    <stop offset="1" stopColor="#FFC300" stopOpacity="0"/>
                </linearGradient>
            </defs>
        </svg>
    </div>
  );
}
export default function Upload() {
  const [, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState<ActiveTab>("analyze");
  // Configuración de las opciones
  const tabs = [
    { id: 'analyze' as ActiveTab, icon: FileSearch, title: "QUIERO ANALIZAR MI FACTURA ONLINE", desc: "Analiza tu factura mediante IA y obtén un resultado en 5 segundos", component: AnalyzeForm },
    { id: 'call' as ActiveTab, icon: Phone, title: "QUIERO QUE ME LLAMEN Y ME ASESOREN", desc: "Indícanos tu teléfono y te llamará uno de nuestros asesores", component: CallForm },
    { id: 'share' as ActiveTab, icon: Share2, title: "QUIERO COMPARTIR ESTE ENLACE POR EMAIL", desc: "Envía esta página a tu correo para acceder más tarde", component: ShareForm },
  ];
  const ActiveComponent = tabs.find(t => t.id === activeTab)?.component || AnalyzeForm;
  return (
    <div className="min-h-screen flex flex-col font-sans">
      
      {/* SECCIÓN 1: NAVBAR */}
      <nav className="bg-[#0F1B2D] border-b border-white/5 py-4 relative z-50 shadow-md">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <img src={logoRound} alt="Comparamos Tu Luz" className="h-24 md:h-20 w-auto" />
          <button 
            onClick={() => setLocation("/")}
            className="text-xs md:text-sm text-gray-300 hover:text-[var(--color-brand-yellow)] flex items-center gap-2 transition-colors font-medium border border-white/10 px-4 py-2 rounded-lg hover:border-[var(--color-brand-yellow)]"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </button>
        </div>
      </nav>
      {/* SECCIÓN 2: HERO (Contenido Principal) */}
      <main className="flex-1 bg-[#0C1A2B] relative overflow-hidden flex flex-col items-center justify-start py-8 md:py-12">
        <GoldenArcBackground position="top-right" />
        <GoldenArcBackground position="bottom-left" />
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center max-w-5xl">
          <div className="text-center mb-10 space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Compara tarifas y <span className="text-[var(--color-brand-yellow)]">paga menos</span>
            </h1>
            <p className="text-[#C6CFDA] text-base md:text-lg max-w-xl mx-auto leading-relaxed px-2">
              La forma más sencilla de reducir tu factura eléctrica.
              <br className="hidden md:block" />
              Contrata en minutos. Sin letra pequeña.
            </p>
          </div>
          {/* GRID DE OPCIONES (Adaptable: Grid en Desktop, Stack en Mobile) */}
          <div className="w-full mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {tabs.map((tab) => (
                <div key={tab.id} className="flex flex-col">
                  {/* Tarjeta / Botón */}
                  <SelectionCard 
                    icon={tab.icon}
                    title={tab.title}
                    desc={tab.desc}
                    isActive={activeTab === tab.id}
                    onClick={() => setActiveTab(tab.id)}
                  />
                  {/* VISTA MÓVIL: Acordeón (Se despliega justo debajo de la tarjeta) */}
                  <AnimatePresence>
                    {activeTab === tab.id && (
                      <motion.div 
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={fadeIn}
                        className="md:hidden overflow-hidden relative z-0"
                      >
                         <div className="p-6 bg-white rounded-xl border-x-2 border-b-2 border-white/10 shadow-lg mt-1 mx-1 mb-4">
                           <tab.component />
                         </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
          {/* VISTA DESKTOP: Contenedor Principal (Visible solo en md+) */}
          <div className="hidden md:block w-full max-w-4xl rounded-3xl border-2 border-white/10 p-12 shadow-2xl overflow-hidden relative min-h-[500px] bg-white">
             <AnimatePresence mode="wait">
               <motion.div 
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
               >
                 <ActiveComponent />
               </motion.div>
             </AnimatePresence>
          </div>
          
        </div>
        
        <div className="mt-12 text-center text-gray-500 text-xs text-white/40">
          <p>© 2025 Comparamos Tu Luz. Todos los derechos reservados.</p>
        </div>
      </main>
    </div>
  );
}
function SelectionCard({ icon: Icon, title, desc, isActive, onClick }: any) {
  return (
    <div 
      onClick={onClick}
      className={`relative p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer flex flex-col items-center text-center gap-3 group z-10 h-auto md:h-full
        ${isActive 
          ? "bg-[#0F1B2D] border-[var(--color-brand-yellow)] shadow-[0_0_20px_rgba(255,195,0,0.15)] md:scale-105" 
          : "bg-[#102033]/80 border-white/10 hover:border-white/30 hover:bg-[#15253a]"
        }`}
    >
      <Icon className={`w-8 h-8 transition-colors ${isActive ? "text-[var(--color-brand-yellow)]" : "text-gray-300 group-hover:text-white"}`} />
      <h3 className={`font-bold text-sm transition-colors ${isActive ? "text-white" : "text-gray-300 group-hover:text-white"}`}>
        {title}
      </h3>
      <p className={`text-xs transition-colors ${isActive ? "text-gray-300" : "text-gray-400 group-hover:text-gray-300"}`}>
        {desc}
      </p>
      
      {/* Flecha solo visible en Desktop */}
      {isActive && (
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#0F1B2D] border-r-2 border-b-2 border-[var(--color-brand-yellow)] rotate-45 transform md:block hidden"></div>
      )}
    </div>
  );
}