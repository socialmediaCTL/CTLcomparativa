import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoRound from "@assets/logo_ctl_clean.png";
import whatsappLogo from "@assets/whatsapp_logo.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determinar si estamos en la home para los enlaces de ancla
  const isHome = location === "/";

  const navLinks = [
    { name: "Beneficios", href: isHome ? "#features" : "/#features" },
    { name: "Cómo funciona", href: isHome ? "#how-it-works" : "/#how-it-works" },
    { name: "Comparativa", href: isHome ? "#comparison" : "/#comparison" },
    { name: "Opiniones", href: isHome ? "#testimonials" : "/#testimonials" },
    { name: "Conoce a Volt", href: isHome ? "#meet-volt" : "/#meet-volt" },
    { name: "Preguntas", href: isHome ? "#faq" : "/#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full border-b transition-all duration-300 ${isScrolled ? "bg-[#0F1B2D]/95 backdrop-blur-md border-white/10" : "bg-[#0F1B2D] border-white/5"
        } text-[#C6CFDA]`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 flex h-24 items-center justify-between">
        <Link href="/">
          <a
            className="flex items-center gap-2"
            onClick={() => {
              if (isHome) window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img
              src={logoRound}
              alt="CTL Logo"
              className="h-16 md:h-20 w-auto transition-transform duration-300 hover:scale-110"
            />
          </a>
        </Link>
        <div className="hidden xl:flex items-center">
          {navLinks.map((link, index) => (
            <div key={link.name} className="flex items-center">
              <a
                href={link.href}
                className="relative text-[10px] lg:text-xs font-bold uppercase hover:text-[var(--color-brand-yellow)] transition-colors px-3 lg:px-4 whitespace-nowrap group"
              >
                {link.name}
                <span className="absolute bottom-[-6px] left-1/2 w-0 h-[2px] bg-[var(--color-brand-yellow)] -translate-x-1/2 transition-all duration-500 ease-out group-hover:w-full"></span>
              </a>
              <div className="h-4 w-px bg-white/50"></div>
            </div>
          ))}

          {/* Nuevo enlace Colaboradores */}
          <div className="flex items-center">
            <Link href="/colaboradores">
              <a className={`relative text-[10px] lg:text-xs font-bold uppercase transition-colors px-3 lg:px-4 whitespace-nowrap group ${location === '/colaboradores' ? 'text-[var(--color-brand-yellow)]' : 'hover:text-[var(--color-brand-yellow)]'}`}>
                Colaboradores
                <span className={`absolute bottom-[-6px] left-1/2 h-[2px] bg-[var(--color-brand-yellow)] -translate-x-1/2 transition-all duration-500 ease-out ${location === '/colaboradores' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </a>
            </Link>
            <div className="h-4 w-px bg-white/50"></div>
          </div>

          {/* Enlace Contacto */}
          <div className="flex items-center">
            <Link href="/contacto">
              <a className={`relative text-[10px] lg:text-xs font-bold uppercase transition-colors px-3 lg:px-4 whitespace-nowrap group ${location === '/contacto' ? 'text-[var(--color-brand-yellow)]' : 'hover:text-[var(--color-brand-yellow)]'}`}>
                Contacto
                <span className={`absolute bottom-[-6px] left-1/2 h-[2px] bg-[var(--color-brand-yellow)] -translate-x-1/2 transition-all duration-500 ease-out ${location === '/contacto' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </a>
            </Link>
          </div>

          <Button asChild className="ml-4 bg-[var(--color-brand-yellow)] text-white hover:bg-yellow-400 font-bold shadow-lg shadow-white/20 transition-all uppercase text-xs tracking-wide border-2 [text-shadow:1px_1px_2px_black] border-white whitespace-nowrap transition-all transform hover:scale-105">
            <a href="https://campaign.comparamostuluz.es/?agente=17216" target="_blank" rel="noopener noreferrer">
              Subir Factura
            </a>
          </Button>
          <Button asChild className="ml-4 bg-transparent hover:bg-transparent text-white font-bold uppercase text-xs tracking-wide whitespace-nowrap transition-all transform hover:scale-105 p-0 border-none shadow-none">
            <a href="https://wa.me/34635624154?text=Hola,%20quisiera%20mas%20informacion%20sobre%20la%20comparativa%20de%20la%20factura%20de%20luz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
              <span>Hablar con un asesor</span>
              <div className="relative flex items-center justify-center">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--color-brand-yellow)] opacity-75 animate-ping-slow"></span>
                <img src={whatsappLogo} alt="WhatsApp" className="relative h-8 w-8 rounded-full" />
              </div>
            </a>
          </Button>
        </div>
        <button className="xl:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X className="text-white" />
          ) : (
            <Menu className="text-white" />
          )}
        </button>
      </div>
      {
        isOpen && (
          <div className="xl:hidden p-4 bg-[#0F1B2D] border-b border-white/5 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-sm font-bold uppercase text-[#C6CFDA] hover:text-[var(--color-brand-yellow)] border-b border-white/10 pb-3"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}

            {/* Enlace móvil Colaboradores */}
            <Link href="/colaboradores">
              <a
                className={`block text-sm font-bold uppercase border-b border-white/10 pb-3 ${location === '/colaboradores' ? 'text-[var(--color-brand-yellow)]' : 'text-[#C6CFDA] hover:text-[var(--color-brand-yellow)]'}`}
                onClick={() => setIsOpen(false)}
              >
                Colaboradores
              </a>
            </Link>

            <Button asChild className="w-full bg-transparent hover:bg-transparent text-white font-bold uppercase text-xs tracking-wide whitespace-nowrap transition-all transform hover:scale-105 p-0 border-none shadow-none justify-center">
              <a href="https://wa.me/584120628427?text=Hola,%20quisiera%20mas%20informacion%20sobre%20la%20comparativa%20de%20la%20factura%20de%20luz" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3">
                <span>Hablar con un asesor</span>
                <div className="relative flex items-center justify-center">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--color-brand-yellow)] opacity-75 animate-ping-slow"></span>
                  <img src={whatsappLogo} alt="WhatsApp" className="relative h-8 w-8 rounded-full" />
                </div>
              </a>
            </Button>
            <Button asChild className="w-full bg-[var(--color-brand-yellow)] text-white font-bold uppercase border-2 border-white ">
              <a href="https://campaign.comparamostuluz.es/?agente=17216" target="_blank" rel="noopener noreferrer">
                Subir Factura
              </a>
            </Button>
          </div>
        )
      }
    </nav >
  );
}