import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Clock, Route } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";

const DeliveryDashboard = () => {
  const { toast } = useToast();
  const { data: deliveryStats } = useQuery({
    queryKey: ["delivery-stats"],
    queryFn: async () => ({
      completedDeliveries: 45,
      activeDeliveries: 2,
      totalDistance: "120km",
    }),
  });

  const handleStartDelivery = () => {
    toast({
      title: "Starting New Delivery",
      description: "Preparing your delivery route...",
    });
  };

  const handleViewHistory = () => {
    toast({
      title: "Route History",
      description: "Loading your delivery history...",
    });
  };

  return (
    <div className="min-h-screen bg-fairy-lightPurple py-12">
      <div className="container px-4">
        <h1 className="text-3xl font-bold text-fairy-purple mb-8 text-center">Delivery Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-4">
              <Truck className="w-8 h-8 text-fairy-purple" />
              <div>
                <p className="text-sm text-gray-600">Completed Deliveries</p>
                <p className="text-2xl font-bold">{deliveryStats?.completedDeliveries || 0}</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-4">
              <Clock className="w-8 h-8 text-[#FF6B35]" />
              <div>
                <p className="text-sm text-gray-600">Active Deliveries</p>
                <p className="text-2xl font-bold">{deliveryStats?.activeDeliveries || 0}</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-4">
              <Route className="w-8 h-8 text-green-500" />
              <div>
                <p className="text-sm text-gray-600">Total Distance</p>
                <p className="text-2xl font-bold">{deliveryStats?.totalDistance || "0km"}</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="flex gap-4 justify-center">
          <Button
            onClick={handleStartDelivery}
            className="bg-fairy-purple hover:bg-fairy-purple/90"
          >
            Start New Delivery
          </Button>
          <Button
            variant="outline"
            onClick={handleViewHistory}
            className="border-fairy-purple text-fairy-purple hover:bg-fairy-purple/10"
          >
            View Route History
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeliveryDashboard;