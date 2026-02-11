import {
  Home as HomeIcon,
  TrendingDown,
  Zap,
  BarChart3,
  MessageCircle,
  Brain,
  HelpCircle,
  Lock,
  FileText,
  Mail,
  Clock,
  MapPin,
  Phone,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

import logoFooter from "@assets/logo_footer.webp";
import logoUE from "@assets/logo-compo-ue-color.png";

export function Footer() {
  return (
    <div className="bg-[#0F1B2D] text-[#C6CFDA] py-16 border-t border-white/5 font-sans relative overflow-hidden">
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
                  href="/#"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <HomeIcon className="w-4 h-4 text-[var(--color-brand-yellow)]" />
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="/#features"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <TrendingDown className="w-4 h-4 text-[var(--color-brand-yellow)]" />
                  Beneficios
                </a>
              </li>
              <li>
                <a
                  href="/#how-it-works"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Zap className="w-4 h-4 text-[var(--color-brand-yellow)]" />
                  Cómo funciona
                </a>
              </li>
              <li>
                <a
                  href="/#comparison"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <BarChart3 className="w-4 h-4 text-[var(--color-brand-yellow)]" />
                  Comparativa
                </a>
              </li>
              <li>
                <a
                  href="/#testimonials"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[var(--color-brand-yellow)]" />
                  Opiniones
                </a>
              </li>
              <li>
                <a
                  href="/#meet-volt"
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
                  href="/#faq"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <HelpCircle className="w-4 h-4 text-[var(--color-brand-yellow)]" />
                  Preguntas frecuentes
                </a>
              </li>
              <li>
                <Dialog>
                  <DialogTrigger className="flex items-center gap-2 hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer">
                    <Lock className="w-4 h-4 text-[var(--color-brand-yellow)]" />
                    Política de privacidad
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl w-[95vw] md:w-full bg-[#0F1B2D] text-white border-white/10 flex flex-col p-0 overflow-hidden outline-none">
                    <DialogHeader className="p-6 pb-2 shrink-0">
                      <DialogTitle className="text-2xl font-bold text-[var(--color-brand-yellow)]">Política de Privacidad</DialogTitle>
                    </DialogHeader>
                    <div className="flex-1 overflow-hidden">
                      <ScrollArea className="h-[60vh] md:h-[70vh] px-6 pb-6">
                        <div className="space-y-6 text-[#C6CFDA] pr-6">
                          <section>
                            <h3 className="text-white font-bold mb-2">1. RESPONSABLE DEL TRATAMIENTO</h3>
                            <p><strong>Identidad:</strong> Audienercop Energias S.L.<br />
                              <strong>NIF:</strong> B67640672<br />
                              <strong>Dirección Postal:</strong> Camireal 101 bajo, 46470, Albal (Valencia).<br />
                              <strong>Correo electrónico:</strong> info@comparamostuluz.es</p>
                          </section>
                          <section>
                            <h3 className="text-white font-bold mb-2">2. FINALIDAD DEL TRATAMIENTO</h3>
                            <p>En Audienercop Energias S.L. tratamos la información que nos facilitan las personas interesadas con el fin de:</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                              <li>Gestionar las solicitudes de información y comparación de tarifas de luz y gas realizadas a través de la web comparamostuluz.es.</li>
                              <li>Prestar servicios de asesoramiento energético y tramitación de cambios de compañía comercializadora.</li>
                              <li>Enviar comunicaciones comerciales relacionadas con el sector energético, siempre que se haya obtenido el consentimiento expreso del usuario.</li>
                            </ul>
                          </section>
                          <section>
                            <h3 className="text-white font-bold mb-2">3. LEGITIMACIÓN</h3>
                            <p>La base legal para el tratamiento de sus datos es el consentimiento del interesado al rellenar los formularios y aceptar esta política, así como la necesidad para la ejecución de medidas precontractuales (estudio de factura y comparativa).</p>
                          </section>
                          <section>
                            <h3 className="text-white font-bold mb-2">4. DESTINATARIOS</h3>
                            <p>Los datos no se cederán a terceros salvo obligación legal o cuando sea estrictamente necesario para la prestación del servicio. En concreto, en caso de que el usuario decida contratar una tarifa, sus datos serán comunicados a la Compañía Comercializadora de Energía elegida para formalizar el contrato.</p>
                          </section>
                          <section>
                            <h3 className="text-white font-bold mb-2">5. DERECHOS</h3>
                            <p>Cualquier persona tiene derecho a obtener confirmación sobre si en Audienercop Energias S.L. estamos tratando datos personales que les conciernan.</p>
                            <p className="mt-2">Los interesados tienen derecho a acceder a sus datos personales, rectificar los inexactos o solicitar su supresión cuando los datos ya no necesarios.</p>
                            <p className="mt-2">Para ejercer estos derechos, el usuario puede enviar un email a info@comparamostuluz.es adjuntando copia de su DNI.</p>
                          </section>
                        </div>
                      </ScrollArea>
                    </div>
                  </DialogContent>
                </Dialog>
              </li>
              <li>
                <Dialog>
                  <DialogTrigger className="flex items-center gap-2 hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer text-left focus:outline-none">
                    <FileText className="w-4 h-4 text-[var(--color-brand-yellow)]" />
                    Términos y condiciones
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl w-[95vw] md:w-full bg-[#0F1B2D] text-white border-white/10 flex flex-col p-0 overflow-hidden outline-none">
                    <DialogHeader className="p-6 pb-2 shrink-0">
                      <DialogTitle className="text-2xl font-bold text-[var(--color-brand-yellow)]">Aviso Legal y Términos de Uso</DialogTitle>
                    </DialogHeader>
                    <div className="flex-1 overflow-hidden">
                      <ScrollArea className="h-[60vh] md:h-[70vh] px-6 pb-6">
                        <div className="space-y-6 text-[#C6CFDA] pr-6">
                          <section>
                            <h3 className="text-white font-bold mb-2">1. DATOS IDENTIFICATIVOS</h3>
                            <p>En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSICE), se reflejan a continuación los datos del titular del dominio web comparamostuluz.es:</p>
                            <p className="mt-2"><strong>Razón Social:</strong> Audienercop Energias S.L.<br />
                              <strong>NIF:</strong> B67640672<br />
                              <strong>Domicilio Social:</strong> Camireal 101 bajo, 46470, Albal (Valencia).<br />
                              <strong>Correo electrónico de contacto:</strong> info@comparamostuluz.es<br />
                              <strong>Sitio web:</strong> comparamostuluz.es</p>
                          </section>
                          <section>
                            <h3 className="text-white font-bold mb-2">2. USUARIOS</h3>
                            <p>El acceso y/o uso de este portal de Audienercop Energias S.L. atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas.</p>
                          </section>
                          <section>
                            <h3 className="text-white font-bold mb-2">3. USO DEL PORTAL</h3>
                            <p>comparamostuluz.es proporciona el acceso a informaciones, servicios de comparación de tarifas energéticas o datos (en adelante, "los contenidos") en Internet pertenecientes a Audienercop Energias S.L. o a sus licenciantes.</p>
                            <p className="mt-2">El USUARIO asume la responsabilidad del uso del portal. Dicha responsabilidad se extiende al registro que fuese necesario para acceder a determinados servicios o contenidos.</p>
                            <p className="mt-2">Audienercop Energias S.L. actúa como intermediario independiente y no garantiza que los precios mostrados sean vinculantes en tiempo real, ya que dependen de la actualización de las comercializadoras.</p>
                          </section>
                          <section>
                            <h3 className="text-white font-bold mb-2">4. PROTECCIÓN DE DATOS</h3>
                            <p>Audienercop Energias S.L. cumple con las directrices del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD), y vela por garantizar un correcto uso y tratamiento de los datos personales del usuario.</p>
                          </section>
                          <section>
                            <h3 className="text-white font-bold mb-2">5. PROPIEDAD INTELECTUAL E INDUSTRIAL</h3>
                            <p>Audienercop Energias S.L. por sí o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial de su página web. Todos los derechos reservados.</p>
                          </section>
                          <section>
                            <h3 className="text-white font-bold mb-2">6. EXCLUSIÓN DE GARANTÍAS Y RESPONSABILIDAD</h3>
                            <p>Audienercop Energias S.L. no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos.</p>
                          </section>
                          <section>
                            <h3 className="text-white font-bold mb-2">7. MODIFICACIONES</h3>
                            <p>Audienercop Energias S.L. se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal.</p>
                          </section>
                          <section>
                            <h3 className="text-white font-bold mb-2">8. LEGISLACIÓN APLICABLE Y JURISDICCIÓN</h3>
                            <p>La relación entre Audienercop Energias S.L. y el USUARIO se regirá por la normativa española vigente. Para la resolución de cualquier controversia, las partes se someten a los Juzgados y Tribunales de la ciudad de Valencia.</p>
                          </section>
                        </div>
                      </ScrollArea>
                    </div>
                  </DialogContent>
                </Dialog>
              </li>
            </ul>
          </div>

                    {/* Columna 4: Contacto */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <h4 className="text-white font-bold mb-6 text-lg">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 text-[var(--color-brand-yellow)]" />
                <a
                  href="tel:+34635624154"
                  className="hover:text-white transition-colors"
                >
                  +34 635 62 41 54
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0 text-[var(--color-brand-yellow)]" />
                <a
                  href="mailto:info@comparamostuluz.es"
                  className="hover:text-white transition-colors"
                >
                  info@comparamostuluz.es
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 shrink-0 text-[var(--color-brand-yellow)] mt-1" />
                <span>
                  Avd. Cami Reial 101 <br />
                  46470 Valencia, España
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 shrink-0 text-[var(--color-brand-yellow)]" />
                <span>L–V 9:00–18:00</span>
              </li>
            </ul>
          </div>
        </div>

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
    </div>
  );
}