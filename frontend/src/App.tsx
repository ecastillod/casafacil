import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Listing from "./pages/Listing";
import Register from "./pages/Register";
import Publicar from "./pages/Publicar";
import PropiedadDetalle from "./pages/PropiedadDetalle";
import Login from "./pages/Login";
import { AuthProvider } from './AuthContext';

const queryClient = new QueryClient();

const App = () => (
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/propiedades" element={<Listing />} />
            <Route path="/propiedad/:id" element={<PropiedadDetalle />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/publicar" element={<Publicar />} />
            <Route path="/editar-propiedad/:id" element={<Publicar />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </AuthProvider>
);

export default App;