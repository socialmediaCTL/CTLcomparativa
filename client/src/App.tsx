import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import Upload from "@/pages/upload";

function Router() {
  return (
    <Switch>
  <Route path="/" component={Home} />
  <Route path="/subir-factura" component={Upload} /> {/* Nueva línea */}
  <Route component={NotFound} />
</Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
