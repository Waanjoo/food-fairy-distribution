import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Centers from "./pages/Centers";
import DonorDashboard from "./pages/DonorDashboard";
import BeneficiaryDashboard from "./pages/BeneficiaryDashboard";
import DeliveryDashboard from "./pages/DeliveryDashboard";
import Volunteer from "./pages/Volunteer";
import Dashboard from "./pages/Dashboard";
import Programs from "./pages/Programs";
import Contact from "./pages/Contact";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      retry: 1,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/centers" element={<Centers />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/donor" element={<DonorDashboard />} />
          <Route path="/dashboard/beneficiary" element={<BeneficiaryDashboard />} />
          <Route path="/dashboard/delivery" element={<DeliveryDashboard />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;