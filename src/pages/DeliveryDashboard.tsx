import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Clock, Route } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

const DeliveryDashboard = () => {
  const { data: deliveryStats } = useQuery({
    queryKey: ["delivery-stats"],
    queryFn: async () => ({
      completedDeliveries: 45,
      activeDeliveries: 2,
      totalDistance: "120km",
    }),
  });

  return (
    <div className="container px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Delivery Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <Truck className="w-8 h-8 text-purple-500" />
            <div>
              <p className="text-sm text-gray-600">Completed Deliveries</p>
              <p className="text-2xl font-bold">{deliveryStats?.completedDeliveries || 0}</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <Clock className="w-8 h-8 text-orange-500" />
            <div>
              <p className="text-sm text-gray-600">Active Deliveries</p>
              <p className="text-2xl font-bold">{deliveryStats?.activeDeliveries || 0}</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <Route className="w-8 h-8 text-green-500" />
            <div>
              <p className="text-sm text-gray-600">Total Distance</p>
              <p className="text-2xl font-bold">{deliveryStats?.totalDistance || "0km"}</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="flex gap-4">
        <Button>Start New Delivery</Button>
        <Button variant="outline">View Route History</Button>
      </div>
    </div>
  );
};

export default DeliveryDashboard;