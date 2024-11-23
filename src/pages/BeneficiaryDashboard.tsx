import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Calendar, MapPin } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

const BeneficiaryDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const { data: beneficiaryStats } = useQuery({
    queryKey: ["beneficiary-stats"],
    queryFn: async () => ({
      receivedAid: 8,
      nextPickup: "Tomorrow, 2 PM",
      nearestCenter: "Downtown Center",
    }),
  });

  const handleSchedulePickup = () => {
    toast({
      title: "Scheduling Pickup",
      description: "Opening pickup scheduler...",
    });
  };

  const handleViewCenters = () => {
    navigate("/centers");
  };

  return (
    <div className="min-h-screen bg-fairy-lightPurple py-12">
      <div className="container px-4">
        <h1 className="text-3xl font-bold text-fairy-purple mb-8 text-center">Beneficiary Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-4">
              <Package className="w-8 h-8 text-fairy-purple" />
              <div>
                <p className="text-sm text-gray-600">Aid Received</p>
                <p className="text-2xl font-bold">{beneficiaryStats?.receivedAid || 0}</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-4">
              <Calendar className="w-8 h-8 text-[#FF6B35]" />
              <div>
                <p className="text-sm text-gray-600">Next Pickup</p>
                <p className="text-2xl font-bold">{beneficiaryStats?.nextPickup || "Not scheduled"}</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-4">
              <MapPin className="w-8 h-8 text-[#33C3F0]" />
              <div>
                <p className="text-sm text-gray-600">Nearest Center</p>
                <p className="text-2xl font-bold">{beneficiaryStats?.nearestCenter || "Not assigned"}</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="flex gap-4 justify-center">
          <Button 
            onClick={handleSchedulePickup}
            className="bg-fairy-purple hover:bg-fairy-purple/90"
          >
            Schedule Pickup
          </Button>
          <Button 
            variant="outline" 
            onClick={handleViewCenters}
            className="border-fairy-purple text-fairy-purple hover:bg-fairy-purple/10"
          >
            View Available Centers
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BeneficiaryDashboard;