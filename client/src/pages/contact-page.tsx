import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Youtube, Facebook, Instagram, ShieldCheck, Upload } from "lucide-react";
import { useState, useRef } from "react";
import voltContacto from "@assets/volt_contacto.webp"; // <--- Importamos la imagen de Volt

export default function ContactPage() {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        telefono: "",
        comentario: ""
    });
    const [submitted, setSubmitted] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const data = new FormData();
            data.append("nombre", formData.nombre);
            data.append("email", formData.email);
            data.append("telefono", formData.telefono);
            data.append("comentario", formData.comentario);
            if (file) {
                data.append("attachment", file);
            }

            const response = await fetch("https://formspree.io/f/xreapwqa", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                },
                body: data,
            });

            if (response.ok) {
                setSubmitted(true);
                // Opcional: Limpiar formulario tras éxito
                setFormData({
                    nombre: "",
                    email: "",
                    telefono: "",
                    comentario: ""
                });
                setFile(null);
            } else {
                alert("Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.");
            }
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
            alert("No se pudo conectar con el servidor. Por favor, revisa tu conexión.");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans overflow-x-hidden flex flex-col">
            <Navbar />

            <main className="flex-grow pt-24">
                {/* Hero Section */}
                <section className="py-12 bg-[#0F1B2D] relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>

                    {/* Decorative elements */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                        <svg className="absolute top-0 left-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path d="M-10 20 Q 30 50 110 20" fill="none" stroke="var(--color-brand-yellow)" strokeWidth="0.3" />
                            <circle cx="85" cy="15" r="25" fill="none" stroke="var(--color-brand-yellow)" strokeWidth="0.2" opacity="0.4" />
                        </svg>
                    </div>

                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            ¿Tienes dudas? <span className="text-[var(--color-brand-yellow)]">Te las resolvemos</span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            Un equipo completo con técnicos y asesores a tu disposición para cualquier duda.
                        </p>
                    </div>
                </section>

                {/* Contact Form Section */}
                <section className="py-20 bg-white relative z-10">
                    {/* Decorative Yellow Curved Lines */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-10">
                        <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path d="M-10 30 Q 30 60 110 30" fill="none" stroke="var(--color-brand-yellow)" strokeWidth="0.5" />
                            <path d="M110 70 Q 50 40 -10 70" fill="none" stroke="var(--color-brand-yellow)" strokeWidth="0.3" opacity="0.6" />
                            <circle cx="15" cy="85" r="20" fill="none" stroke="var(--color-brand-yellow)" strokeWidth="0.3" opacity="0.5" />
                            <path d="M-10 50 Q 50 20 110 50" fill="none" stroke="var(--color-brand-yellow)" strokeWidth="0.4" opacity="0.7" />
                            <circle cx="90" cy="30" r="30" fill="none" stroke="var(--color-brand-yellow)" strokeWidth="0.2" opacity="0.4" />
                            <path d="M0 10 C 25 40 75 10 100 40" fill="none" stroke="var(--color-brand-yellow)" strokeWidth="0.3" opacity="0.5" />
                        </svg>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                            {/* Left Column - Contact Info */}
                            <div className="bg-[#0F1B2D] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden order-2 lg:order-1">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-brand-yellow)]/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                                <div className="relative z-10">
                                    <div className="inline-block bg-[var(--color-brand-yellow)] text-[#0F1B2D] px-6 py-2 rounded-full font-bold text-sm mb-8 uppercase tracking-wide">
                                        Contacta con ComparamosTuLuz
                                    </div>

                                    <h2 className="text-3xl font-bold mb-6">
                                        Información de <span className="text-[var(--color-brand-yellow)]">Contacto</span>
                                    </h2>

                                    <div className="space-y-6 mb-10">
                                        {/* Phone */}
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-full bg-[var(--color-brand-yellow)]/10 flex items-center justify-center flex-shrink-0">
                                                <Phone className="w-6 h-6 text-[var(--color-brand-yellow)]" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold mb-1">Atención al cliente</h3>
                                                <a href="tel:+34635624154" className="text-slate-300 hover:text-[var(--color-brand-yellow)] transition-colors text-lg">
                                                    +34 635 62 41 54
                                                </a>
                                                <p className="text-slate-400 text-sm mt-1">Lun - Vie / 9:00 - 19:00</p>
                                            </div>
                                        </div>

                                        {/* Email */}
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-full bg-[var(--color-brand-yellow)]/10 flex items-center justify-center flex-shrink-0">
                                                <Mail className="w-6 h-6 text-[var(--color-brand-yellow)]" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold mb-1">Email</h3>
                                                <a href="mailto:info@comparamostuluz.com" className="text-slate-300 hover:text-[var(--color-brand-yellow)] transition-colors">
                                                    info@comparamostuluz.com
                                                </a>
                                                <p className="text-slate-400 text-sm mt-1">Contacta 24/7 en nuestro mail</p>
                                            </div>
                                        </div>

                                        {/* Address */}
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-full bg-[var(--color-brand-yellow)]/10 flex items-center justify-center flex-shrink-0">
                                                <MapPin className="w-6 h-6 text-[var(--color-brand-yellow)]" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold mb-1">Oficina</h3>
                                                <p className="text-slate-300">Avd. Cami Reial 101 46470 Valencia, España</p>
                                                <p className="text-slate-400 text-sm mt-1">Atención internacional</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Social Media */}
                                    <div>
                                        <h3 className="font-bold mb-4">Síguenos</h3>
                                        <div className="flex gap-4">
                                            <a href="#" className="w-12 h-12 rounded-full bg-white/10 hover:bg-[var(--color-brand-yellow)] flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                                                <Youtube className="w-6 h-6 text-white group-hover:text-[#0F1B2D]" />
                                            </a>
                                            <a href="#" className="w-12 h-12 rounded-full bg-white/10 hover:bg-[var(--color-brand-yellow)] flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                                                <Facebook className="w-6 h-6 text-white group-hover:text-[#0F1B2D]" />
                                            </a>
                                            <a href="#" className="w-12 h-12 rounded-full bg-white/10 hover:bg-[var(--color-brand-yellow)] flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                                                <Instagram className="w-6 h-6 text-white group-hover:text-[#0F1B2D]" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Contact Form */}
                            {/* Agregamos relative y mt-24 para el espacio de Volt en móvil */}
                            <div className="relative order-1 lg:order-2 mt-24 lg:mt-0">

                                {/* Imagen de Volt flotando arriba */}
                                <img
                                    src={voltContacto}
                                    alt="Volt Contacto"
                                    className="absolute -top-48 left-1/2 transform -translate-x-1/4 w-[70%] z-20 drop-shadow-2xl pointer-events-none"
                                />

                                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-100 relative z-10">
                                    {submitted ? (
                                        <div className="text-center py-12 space-y-6">
                                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                                <ShieldCheck className="w-12 h-12 text-green-600" />
                                            </div>
                                            <h2 className="text-3xl font-bold text-[#0F1B2D]">¡Mensaje enviado!</h2>
                                            <p className="text-slate-600 text-lg">
                                                Gracias por contactarnos. Nuestro equipo revisará tu consulta y te responderá lo antes posible.
                                            </p>
                                            <Button
                                                onClick={() => setSubmitted(false)}
                                                className="bg-[var(--color-brand-yellow)] hover:bg-yellow-400 text-[#0F1B2D] font-bold px-8 rounded-full"
                                            >
                                                Enviar otro mensaje
                                            </Button>
                                        </div>
                                    ) : (
                                        <>
                                            <h2 className="text-3xl font-bold text-[#0F1B2D] mb-3">
                                                Envíanos tu <span className="text-[var(--color-brand-yellow)]">consulta</span>
                                            </h2>
                                            <p className="text-slate-600 mb-8">
                                                Completa la siguiente información y en breve nos pondremos en contacto contigo.
                                            </p>

                                            <form onSubmit={handleSubmit} className="space-y-6">
                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <div>
                                                        <label htmlFor="nombre" className="block text-sm font-bold text-[#0F1B2D] mb-2">
                                                            Nombre <span className="text-red-500">*</span>
                                                        </label>
                                                        <Input
                                                            type="text"
                                                            id="nombre"
                                                            name="nombre"
                                                            required
                                                            value={formData.nombre}
                                                            onChange={handleChange}
                                                            className="h-12 border-slate-300 focus:border-[var(--color-brand-yellow)] focus:ring-[var(--color-brand-yellow)]"
                                                        />
                                                    </div>

                                                    <div>
                                                        <label htmlFor="email" className="block text-sm font-bold text-[#0F1B2D] mb-2">
                                                            Email <span className="text-red-500">*</span>
                                                        </label>
                                                        <Input
                                                            type="email"
                                                            id="email"
                                                            name="email"
                                                            required
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            className="h-12 border-slate-300 focus:border-[var(--color-brand-yellow)] focus:ring-[var(--color-brand-yellow)]"
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label htmlFor="telefono" className="block text-sm font-bold text-[#0F1B2D] mb-2">
                                                        Teléfono
                                                    </label>
                                                    <Input
                                                        type="tel"
                                                        id="telefono"
                                                        name="telefono"
                                                        value={formData.telefono}
                                                        onChange={handleChange}
                                                        className="h-12 border-slate-300 focus:border-[var(--color-brand-yellow)] focus:ring-[var(--color-brand-yellow)]"
                                                    />
                                                </div>

                                                <div>
                                                    <label htmlFor="comentario" className="block text-sm font-bold text-[#0F1B2D] mb-2">
                                                        Comentario
                                                    </label>
                                                    <Textarea
                                                        id="comentario"
                                                        name="comentario"
                                                        rows={5}
                                                        value={formData.comentario}
                                                        onChange={handleChange}
                                                        className="border-slate-300 focus:border-[var(--color-brand-yellow)] focus:ring-[var(--color-brand-yellow)] resize-none"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-bold text-[#0F1B2D] mb-2">
                                                        Adjuntar factura o documento (Opcional)
                                                    </label>
                                                    <input
                                                        type="file"
                                                        ref={fileInputRef}
                                                        className="hidden"
                                                        onChange={(e) => e.target.files && setFile(e.target.files[0])}
                                                    />
                                                    <div
                                                        onClick={() => fileInputRef.current?.click()}
                                                        className={`w-full border-2 border-dashed rounded-xl p-4 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all
                                                        ${file ? "border-green-400 bg-green-50" : "border-slate-300 hover:border-[var(--color-brand-yellow)] hover:bg-slate-50"}`}
                                                    >
                                                        {file ? (
                                                            <div className="flex items-center gap-2">
                                                                <ShieldCheck className="w-5 h-5 text-green-600" />
                                                                <span className="text-sm font-medium text-green-700">{file.name}</span>
                                                            </div>
                                                        ) : (
                                                            <>
                                                                <Upload className="w-6 h-6 text-slate-400" />
                                                                <span className="text-sm text-slate-500">Seleccionar archivo (PDF, JPG, PNG)</span>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>

                                                <Button
                                                    type="submit"
                                                    className="w-full h-14 bg-[var(--color-brand-yellow)] hover:bg-yellow-400 text-[#0F1B2D] font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                                                >
                                                    Enviar Consulta
                                                </Button>
                                            </form>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}