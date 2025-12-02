import { useState } from "react";
import { useLocation } from "wouter";
import { Upload as UploadIcon, ShieldCheck, Zap, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import logoRound from "@assets/logo_ctl_clean.png";

export default function Upload() {
  const [, setLocation] = useLocation();
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    console.log("Archivo soltado:", e.dataTransfer.files[0]);
  };

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <header className="border-b border-gray-100 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <img src={logoRound} alt="Comparamos Tu Luz" className="h-10 w-auto" />
          <button 
            onClick={() => setLocation("/")}
            className="text-sm text-gray-600 hover:text-[#002782] flex items-center gap-2 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </button>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12 md:py-20 flex flex-col items-center justify-center max-w-4xl">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#002782]">
            Sube tu factura de luz
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Analizaremos tu consumo para encontrar el máximo ahorro posible.
            <br />
            Seguro, rápido y sin compromiso.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`w-full max-w-2xl bg-white rounded-3xl border-2 border-dashed transition-all duration-300 p-12 flex flex-col items-center justify-center gap-6 mb-16 cursor-pointer
            ${isDragging 
              ? "border-[var(--color-brand-yellow)] bg-yellow-50/30 scale-[1.02]" 
              : "border-gray-200 hover:border-blue-200 hover:bg-blue-50/30"
            }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-2">
            <UploadIcon className="w-10 h-10 text-[#002782]" />
          </div>
          <div className="text-center space-y-2">
            <h3 className="text-xl font-bold text-[#002782]">
              Arrastra tu factura aquí
            </h3>
            <p className="text-gray-400">
              o selecciona un archivo de tu dispositivo
            </p>
            <p className="text-xs text-gray-300 pt-2">
              Soportamos PDF, JPG, PNG (Max 10MB)
            </p>
          </div>
          <Button 
            variant="outline" 
            className="mt-4 border-gray-200 text-gray-600 hover:text-[#002782] hover:border-[#002782] hover:bg-white px-8 py-6 h-auto text-base font-bold rounded-xl transition-all"
          >
            Explorar archivos
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 w-full max-w-4xl">
          {[
            { icon: ShieldCheck, title: "100% Seguro", desc: "Tus datos están protegidos", color: "text-blue-600" },
            { icon: Zap, title: "Análisis IA", desc: "Tecnología de precisión", color: "text-[var(--color-brand-yellow)]" },
            { icon: Clock, title: "Inmediato", desc: "Resultados en segundos", color: "text-[#002782]" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
              className="bg-white border border-gray-100 p-6 rounded-2xl flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <item.icon className={`w-8 h-8 ${item.color}`} />
              <div className="text-left">
                <h4 className="font-bold text-[#002782] text-sm">{item.title}</h4>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}