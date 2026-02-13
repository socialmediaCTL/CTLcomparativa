import { Switch, Route, useLocation } from "wouter"; // Agregado useLocation
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import Upload from "@/pages/upload";
import CollaboratorsPage from "@/pages/collaborators-page";
import ContactPage from "@/pages/contact-page";
import { ChatWidget } from "@/components/chat-widget";
import { useEffect } from "react"; // Agregado useEffect

// Componente para volver arriba al cambiar de ruta
function ScrollToTop() {
  const [pathname] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/colaboradores" component={CollaboratorsPage} />
      <Route path="/contacto" component={ContactPage} />
      <Route path="/subir-factura" component={Upload} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* ScrollToTop debe estar dentro del provider pero fuera del Router/Switch */}
      <ScrollToTop />
      <Router />
      <ChatWidget />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;