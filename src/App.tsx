import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Centers from "./pages/Centers";
import DonorDashboard from "./pages/DonorDashboard";
import BeneficiaryDashboard from "./pages/BeneficiaryDashboard";
import DeliveryDashboard from "./pages/DeliveryDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/centers" element={<Centers />} />
          <Route path="/dashboard/donor" element={<DonorDashboard />} />
          <Route path="/dashboard/beneficiary" element={<BeneficiaryDashboard />} />
          <Route path="/dashboard/delivery" element={<DeliveryDashboard />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;