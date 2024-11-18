import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Users, Home, ShoppingBag, TrendingUp } from "lucide-react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";

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

const Index = () => {
  const { toast } = useToast();
  const { data: stats, isLoading } = useQuery({
    queryKey: ["dashboard-stats"],
    queryFn: fetchStats,
    refetchInterval: 30000, // Refetch every 30 seconds
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-fairy-lightPurple to-white">
      <div className="container px-4 py-8">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-fairy-purple animate-sparkle" />
            <h1 className="text-4xl font-bold text-fairy-purple">The Food Fairy</h1>
            <Sparkles className="w-8 h-8 text-fairy-purple animate-sparkle" />
          </div>
          <p className="text-lg text-gray-600 mb-6">Spreading magic through food distribution</p>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link to="/register">Join as Donor/Beneficiary</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/centers">Add Distribution Center</Link>
            </Button>
          </div>
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
      </div>
    </div>
  );
};

export default Index;
