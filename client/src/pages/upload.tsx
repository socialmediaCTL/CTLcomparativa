import { useState, useRef } from "react";
import { useLocation } from "wouter";
import { Upload as UploadIcon, ShieldCheck, Zap, Clock, ArrowLeft, FileSearch, Phone, Share2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { motion, AnimatePresence } from "framer-motion";
import logoRound from "@assets/logo_ctl_clean.png";
import voltLupa from "@assets/volt_lupa.webp";
import voltCall from "@assets/volt_call.webp";
import voltShared from "@assets/volt_shared.webp";
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
  const [file, setFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    terms: false,
    ads: false,
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => { e.preventDefault(); setIsDragging(true); };
  const handleDragLeave = () => { setIsDragging(false); };
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.terms) {
      alert("Debes aceptar los términos y condiciones.");
      return;
    }

    setStatus("submitting");
    const data = new FormData();
    data.append("form_type", "Analyze Invoice");
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("marketing_consent", formData.ads ? "yes" : "no");
    if (file) {
      data.append("invoice", file);
    }

    try {
      const response = await fetch("https://formspree.io/f/xaqdonvj", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center space-y-4">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
          <ShieldCheck className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-[#0F1B2D]">¡Recibido!</h3>
        <p className="text-gray-600">Estamos analizando tu factura. Te contactaremos pronto.</p>
        <Button onClick={() => setStatus("idle")} className="bg-[var(--color-brand-yellow)] text-[#0F1B2D] font-bold">VOLVER</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-stretch gap-8 h-full">
      {/* Imagen Volt (Visible solo Desktop) */}
      <div className="hidden md:flex w-1/3 items-center justify-center relative">
        <img
          src={voltLupa}
          alt="Volt Analizando"
          className=" h-auto w-auto drop-shadow-xl"
        />
      </div>
      {/* Formulario */}
      <div className="flex-1 w-full space-y-5 flex flex-col justify-center">
        <div className="text-center md:text-left space-y-2">
          <h3 className="text-2xl font-bold text-[#0F1B2D]">Sube tu factura <span className="text-[var(--color-brand-yellow)]">de la luz</span> </h3>
          <p className="text-gray-500">Descubre cuánto dinero te puedes ahorrar</p>
        </div>

        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={(e) => e.target.files && setFile(e.target.files[0])}
          accept=".pdf,.jpeg,.png,.jpg"
        />

        <div
          onClick={() => fileInputRef.current?.click()}
          className={`w-full bg-blue-50/50 rounded-xl border-2 border-dashed transition-all duration-300 p-6 flex flex-col items-center justify-center gap-3 cursor-pointer
            ${isDragging ? "border-[var(--color-brand-yellow)] bg-yellow-50" : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"}
            ${file ? "border-green-400 bg-green-50" : ""}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {file ? (
            <div className="flex flex-col items-center gap-2">
              <ShieldCheck className="w-10 h-10 text-green-600" />
              <p className="font-bold text-green-700 text-sm truncate max-w-[200px]">{file.name}</p>
            </div>
          ) : (
            <>
              <UploadIcon className="w-10 h-10 text-[#0F1B2D]" />
              <div className="text-center">
                <p className="font-bold text-[#0F1B2D] text-sm">Factura Reciente</p>
                <p className="text-[10px] text-gray-500">.pdf, .jpeg, .png</p>
              </div>
            </>
          )}
        </div>
        <div className="space-y-3">
          <div>
            <Label className="text-[#0F1B2D]">Datos de contacto:</Label>
            <Input
              name="email"
              type="email"
              required
              placeholder="Correo electrónico*"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 bg-white border-gray-200 text-gray-900"
            />
          </div>
          <div>
            <Input
              name="phone"
              type="tel"
              required
              placeholder="Teléfono móvil*"
              value={formData.phone}
              onChange={handleChange}
              className="bg-white border-gray-200 text-gray-900"
            />
          </div>
        </div>

        <div className="space-y-2 pt-1 text-left">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms1"
              name="terms"
              checked={formData.terms}
              onCheckedChange={(checked) => setFormData(p => ({ ...p, terms: !!checked }))}
            />
            <label htmlFor="terms1" className="text-xs text-gray-500 leading-none cursor-pointer">
              Acepto los <a href="#" className="underline">términos y condiciones*</a>
            </label>
          </div>
          <div className="flex items-start space-x-2">
            <Checkbox
              id="ads1"
              name="ads"
              checked={formData.ads}
              onCheckedChange={(checked) => setFormData(p => ({ ...p, ads: !!checked }))}
            />
            <label htmlFor="ads1" className="text-xs text-gray-500 leading-none cursor-pointer">
              Quiero recibir información comercial.
            </label>
          </div>
        </div>
        <Button
          type="submit"
          disabled={status === "submitting"}
          className="w-full bg-[var(--color-brand-yellow)] hover:bg-yellow-500 text-[#0F1B2D] font-bold text-lg py-4 shadow-lg hover:shadow-yellow-500/20"
        >
          {status === "submitting" ? "ENVIANDO..." : "SIGUIENTE"}
        </Button>
        {status === "error" && <p className="text-red-500 text-xs text-center">Error al enviar. Por favor intenta de nuevo.</p>}
      </div>
    </form>
  );
}
function CallForm() {
  const [file, setFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    terms: false,
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.terms) {
      alert("Debes aceptar la política de privacidad.");
      return;
    }

    setStatus("submitting");
    const data = new FormData();
    data.append("form_type", "Request Call");
    data.append("name", formData.name);
    data.append("phone", formData.phone);
    if (file) data.append("invoice", file);

    try {
      const response = await fetch("https://formspree.io/f/xaqdonvj", {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) setStatus("success");
      else setStatus("error");
    } catch (error) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center space-y-4">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
          <Phone className="w-10 h-10 text-blue-600" />
        </div>
        <h3 className="text-2xl font-bold text-[#0F1B2D]">¡Solicitud enviada!</h3>
        <p className="text-gray-600">Te llamaremos muy pronto.</p>
        <Button onClick={() => setStatus("idle")} className="bg-[var(--color-brand-yellow)] text-[#0F1B2D] font-bold">VOLVER</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-stretch gap-8 h-full">
      {/* Imagen Volt (Visible solo Desktop) */}
      <div className="hidden md:flex w-1/3 items-end justify-center relative">
        <img
          src={voltCall}
          alt="Volt Llamada"
          className="object-contain max-h-[450px] w-auto drop-shadow-xl"
        />
      </div>
      {/* Formulario */}
      <div className="flex-1 w-full space-y-5 flex flex-col justify-center">
        <div className="text-center md:text-left space-y-2">
          {/* Icono solo en móvil */}
          <div className="md:hidden w-12 h-12 bg-[var(--color-brand-yellow)] rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
            <Phone className="w-6 h-6 text-[#0F1B2D]" />
          </div>
          <h3 className="text-2xl font-bold text-[#0F1B2D]">¡Nosotros te <span className="text-[var(--color-brand-yellow)]">llamamos!</span></h3>
          <p className="text-gray-500">Déjanos tu número y te asesoramos gratis.</p>
        </div>
        <div className="space-y-3">
          <Input
            name="name"
            required
            placeholder="Nombre*"
            value={formData.name}
            onChange={handleChange}
            className="bg-white border-gray-200 text-gray-900"
          />
          <Input
            name="phone"
            type="tel"
            required
            placeholder="Teléfono móvil*"
            value={formData.phone}
            onChange={handleChange}
            className="bg-white border-gray-200 text-gray-900"
          />

          <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
            <p className="text-xs font-bold text-[#0F1B2D] mb-1">OPCIONAL - Adjuntar factura:</p>
            <label className="flex items-center justify-center border border-dashed border-gray-300 rounded p-2 hover:border-[#002782] transition-colors cursor-pointer bg-white">
              <span className="text-xs text-gray-400">{file ? file.name : "Seleccionar archivo"}</span>
              <input
                type="file"
                className="hidden"
                onChange={(e) => e.target.files && setFile(e.target.files[0])}
              />
            </label>
          </div>
        </div>
        <div className="space-y-2 pt-1 text-left">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms2"
              checked={formData.terms}
              onCheckedChange={(checked) => setFormData(p => ({ ...p, terms: !!checked }))}
            />
            <label htmlFor="terms2" className="text-xs text-gray-500 leading-none cursor-pointer">
              He leído y acepto la <a href="#" className="underline text-gray-500">política de privacidad*</a>
            </label>
          </div>
        </div>
        <Button
          type="submit"
          disabled={status === "submitting"}
          className="w-full bg-[var(--color-brand-yellow)] hover:bg-yellow-500 text-[#0F1B2D] font-bold text-lg py-4 shadow-lg shadow-yellow-500/10"
        >
          {status === "submitting" ? "ENVIANDO..." : "ENVIAR SOLICITUD"}
        </Button>
        {status === "error" && <p className="text-red-500 text-xs text-center">Error al enviar. Por favor intenta de nuevo.</p>}
      </div>
    </form>
  );
}
function ShareForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/xaqdonvj", {
        method: "POST",
        body: JSON.stringify({ form_type: "Share Link/Reminder", email }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) setStatus("success");
      else setStatus("error");
    } catch (error) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center space-y-4">
        <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
          <Mail className="w-10 h-10 text-yellow-600" />
        </div>
        <h3 className="text-2xl font-bold text-[#0F1B2D]">¡Recordatorio enviado!</h3>
        <p className="text-gray-600">Revisa tu bandeja de entrada.</p>
        <Button onClick={() => setStatus("idle")} className="bg-[var(--color-brand-yellow)] text-[#0F1B2D] font-bold">VOLVER</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center gap-8 h-full">
      {/* Imagen Volt (Visible solo Desktop) */}
      <div className="hidden md:flex w-1/3 items-end justify-center relative">
        <img
          src={voltShared}
          alt="Volt Compartir"
          className="object-contain max-h-[450px] w-auto drop-shadow-xl"
        />
      </div>
      {/* Formulario */}
      <div className="flex-1 w-full max-w-md mx-auto space-y-6 flex flex-col justify-center">
        <div className="text-center md:text-left space-y-4">
          <div>
            <h3 className="text-2xl font-bold text-[#0F1B2D]">¿No tienes la <span className="text-[var(--color-brand-yellow)]">factura?</span> </h3>
            <p className="text-gray-500 mt-2">Te enviamos un recordatorio para que la subas cuando puedas.</p>
          </div>
        </div>
        <div className="w-full space-y-4">
          <Input
            type="email"
            required
            placeholder="Correo electrónico*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white border-gray-200 text-gray-900 py-6"
          />

          <Button
            type="submit"
            disabled={status === "submitting"}
            className="w-full bg-[var(--color-brand-yellow)] hover:bg-yellow-500 text-[#0F1B2D] font-bold text-lg py-6 shadow-lg shadow-yellow-500/10"
          >
            {status === "submitting" ? "ENVIANDO..." : "ENVIAR RECORDATORIO"}
          </Button>
          {status === "error" && <p className="text-red-500 text-xs text-center">Error al enviar. Por favor intenta de nuevo.</p>}
        </div>
      </div>
    </form>
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
            <stop stopColor="#FFC300" />
            <stop offset="1" stopColor="#FFC300" stopOpacity="0" />
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
          <img src={logoRound} alt="Comparamos Tu Luz" className="h-24 md:h-24 w-auto" />
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
                        <div className="relative p-6 bg-white rounded-b-xl border-x-2 border-b-2 border-white/10 shadow-lg mt-1 mx-1 mb-4">
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