import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Users, Home, ShoppingBag, TrendingUp } from "lucide-react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";

// Mock API functions (replace with real API calls later)
const fetchStats = async () => {
  // Simulate API call
  return {
    donors: 150,
    beneficiaries: 450,
    centers: 12,
    deliveries: 890,
  };
};

const registerDonor = async () => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  return { success: true };
};

const addBeneficiary = async () => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  return { success: true };
};

const recordDelivery = async () => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  return { success: true };
};

const Index = () => {
  const { toast } = useToast();

  const { data: stats, isLoading } = useQuery({
    queryKey: ["dashboard-stats"],
    queryFn: fetchStats,
    refetchInterval: 30000, // Refetch every 30 seconds
  });

  const donorMutation = useMutation({
    mutationFn: registerDonor,
    onSuccess: () => {
      toast({
        title: "Success! ✨",
        description: "New donor registration initiated",
      });
    },
  });

  const beneficiaryMutation = useMutation({
    mutationFn: addBeneficiary,
    onSuccess: () => {
      toast({
        title: "Success! 🌟",
        description: "New beneficiary registration initiated",
      });
    },
  });

  const deliveryMutation = useMutation({
    mutationFn: recordDelivery,
    onSuccess: () => {
      toast({
        title: "Success! 🚚",
        description: "Delivery recorded successfully",
      });
    },
  });

  const recentActivity = [
    { id: 1, type: "donation", message: "New Food Donation", time: "2 hours ago" },
    { id: 2, type: "delivery", message: "Delivery Completed", time: "3 hours ago" },
    { id: 3, type: "registration", message: "New Beneficiary Registered", time: "4 hours ago" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-fairy-lightPurple to-white">
      <div className="container px-4 py-8">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-fairy-purple animate-sparkle" />
            <h1 className="text-4xl font-bold text-fairy-purple">The Food Fairy</h1>
            <Sparkles className="w-8 h-8 text-fairy-purple animate-sparkle" />
          </div>
          <p className="text-lg text-gray-600">Spreading magic through food distribution</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="fairy-card hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-fairy-purple/10 rounded-full">
                <Users className="w-6 h-6 text-fairy-purple" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Food Donors</p>
                <h3 className="text-2xl font-bold text-fairy-purple">
                  {isLoading ? "..." : stats?.donors}
                </h3>
              </div>
            </div>
          </Card>

          <Card className="fairy-card hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-fairy-peach/30 rounded-full">
                <Users className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Beneficiaries</p>
                <h3 className="text-2xl font-bold text-orange-500">
                  {isLoading ? "..." : stats?.beneficiaries}
                </h3>
              </div>
            </div>
          </Card>

          <Card className="fairy-card hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-fairy-green/30 rounded-full">
                <Home className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Distribution Centers</p>
                <h3 className="text-2xl font-bold text-green-600">
                  {isLoading ? "..." : stats?.centers}
                </h3>
              </div>
            </div>
          </Card>

          <Card className="fairy-card hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-blue-100 rounded-full">
                <ShoppingBag className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Deliveries Made</p>
                <h3 className="text-2xl font-bold text-blue-500">
                  {isLoading ? "..." : stats?.deliveries}
                </h3>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="fairy-card">
            <h2 className="text-2xl font-bold mb-4 text-fairy-purple">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center gap-4 p-4 bg-white/50 rounded-lg hover:bg-white/70 transition-colors"
                >
                  <div className="p-2 bg-fairy-purple/10 rounded-full">
                    <TrendingUp className="w-4 h-4 text-fairy-purple" />
                  </div>
                  <div>
                    <p className="font-medium">{activity.message}</p>
                    <p className="text-sm text-gray-600">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="fairy-card">
            <h2 className="text-2xl font-bold mb-4 text-fairy-purple">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              <Button
                onClick={() => donorMutation.mutate()}
                disabled={donorMutation.isPending}
                className="p-4 bg-fairy-purple text-white rounded-lg hover:bg-fairy-purple/90 transition-colors"
              >
                {donorMutation.isPending ? "Registering..." : "Register Donor"}
              </Button>
              <Button
                onClick={() => beneficiaryMutation.mutate()}
                disabled={beneficiaryMutation.isPending}
                className="p-4 bg-fairy-peach text-gray-800 rounded-lg hover:bg-fairy-peach/90 transition-colors"
              >
                {beneficiaryMutation.isPending ? "Adding..." : "Add Beneficiary"}
              </Button>
              <Button
                onClick={() => deliveryMutation.mutate()}
                disabled={deliveryMutation.isPending}
                className="p-4 bg-fairy-green text-gray-800 rounded-lg hover:bg-fairy-green/90 transition-colors"
              >
                {deliveryMutation.isPending ? "Recording..." : "Record Delivery"}
              </Button>
              <Button
                className="p-4 bg-blue-100 text-gray-800 rounded-lg hover:bg-blue-200 transition-colors"
              >
                View Reports
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;