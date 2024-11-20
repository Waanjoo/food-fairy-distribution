import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Users, Home, ShoppingBag } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

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
  const { data: stats, isLoading } = useQuery({
    queryKey: ["dashboard-stats"],
    queryFn: fetchStats,
    refetchInterval: 30000,
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-fairy-lightPurple to-white">
      <div className="container px-4 py-8">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-fairy-purple" />
            <h1 className="text-4xl font-bold text-fairy-purple">The Food Fairy</h1>
            <Sparkles className="w-8 h-8 text-fairy-purple" />
          </div>
          <p className="text-lg text-gray-600 mb-6">Spreading magic through food distribution</p>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link to="/auth">Get Started</Link>
            </Button>
          </div>
        </header>

        {/* Hero Section with Images */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
              alt="Fresh fruits and vegetables"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1501286353178-1ec881214838" 
              alt="Fresh produce"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
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

          <Card className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
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

          <Card className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
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

          <Card className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
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
