import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Plus, History } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

const DonorDashboard = () => {
  const { data: donationStats } = useQuery({
    queryKey: ["donor-stats"],
    queryFn: async () => ({
      totalDonations: 12,
      pendingPickups: 3,
      impact: 150,
    }),
  });

  return (
    <div className="container px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Donor Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <ShoppingBag className="w-8 h-8 text-purple-500" />
            <div>
              <p className="text-sm text-gray-600">Total Donations</p>
              <p className="text-2xl font-bold">{donationStats?.totalDonations || 0}</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <Plus className="w-8 h-8 text-orange-500" />
            <div>
              <p className="text-sm text-gray-600">Pending Pickups</p>
              <p className="text-2xl font-bold">{donationStats?.pendingPickups || 0}</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <History className="w-8 h-8 text-green-500" />
            <div>
              <p className="text-sm text-gray-600">People Impacted</p>
              <p className="text-2xl font-bold">{donationStats?.impact || 0}</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="flex gap-4">
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          New Donation
        </Button>
        <Button variant="outline">View History</Button>
      </div>
    </div>
  );
};

export default DonorDashboard;