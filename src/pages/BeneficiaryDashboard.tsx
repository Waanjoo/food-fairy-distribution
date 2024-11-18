import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Calendar, MapPin } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

const BeneficiaryDashboard = () => {
  const { data: beneficiaryStats } = useQuery({
    queryKey: ["beneficiary-stats"],
    queryFn: async () => ({
      receivedAid: 8,
      nextPickup: "Tomorrow, 2 PM",
      nearestCenter: "Downtown Center",
    }),
  });

  return (
    <div className="container px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Beneficiary Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <Package className="w-8 h-8 text-purple-500" />
            <div>
              <p className="text-sm text-gray-600">Aid Received</p>
              <p className="text-2xl font-bold">{beneficiaryStats?.receivedAid || 0}</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <Calendar className="w-8 h-8 text-orange-500" />
            <div>
              <p className="text-sm text-gray-600">Next Pickup</p>
              <p className="text-2xl font-bold">{beneficiaryStats?.nextPickup || "Not scheduled"}</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <MapPin className="w-8 h-8 text-green-500" />
            <div>
              <p className="text-sm text-gray-600">Nearest Center</p>
              <p className="text-2xl font-bold">{beneficiaryStats?.nearestCenter || "Not assigned"}</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="flex gap-4">
        <Button>Schedule Pickup</Button>
        <Button variant="outline">View Available Centers</Button>
      </div>
    </div>
  );
};

export default BeneficiaryDashboard;