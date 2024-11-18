import { Card } from "@/components/ui/card";
import { Sparkles, Users, Home, ShoppingBag, TrendingUp } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

const Index = () => {
  const { data: stats } = useQuery({
    queryKey: ["dashboard-stats"],
    queryFn: async () => ({
      donors: 150,
      beneficiaries: 450,
      centers: 12,
      deliveries: 890,
    }),
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
          <p className="text-lg text-gray-600">Spreading magic through food distribution</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="fairy-card">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-fairy-purple/10 rounded-full">
                <Users className="w-6 h-6 text-fairy-purple" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Food Donors</p>
                <h3 className="text-2xl font-bold text-fairy-purple">{stats?.donors || 0}</h3>
              </div>
            </div>
          </Card>

          <Card className="fairy-card">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-fairy-peach/30 rounded-full">
                <Users className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Beneficiaries</p>
                <h3 className="text-2xl font-bold text-orange-500">{stats?.beneficiaries || 0}</h3>
              </div>
            </div>
          </Card>

          <Card className="fairy-card">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-fairy-green/30 rounded-full">
                <Home className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Distribution Centers</p>
                <h3 className="text-2xl font-bold text-green-600">{stats?.centers || 0}</h3>
              </div>
            </div>
          </Card>

          <Card className="fairy-card">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-blue-100 rounded-full">
                <ShoppingBag className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Deliveries Made</p>
                <h3 className="text-2xl font-bold text-blue-500">{stats?.deliveries || 0}</h3>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="fairy-card">
            <h2 className="text-2xl font-bold mb-4 text-fairy-purple">Recent Activity</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white/50 rounded-lg">
                  <div className="p-2 bg-fairy-purple/10 rounded-full">
                    <TrendingUp className="w-4 h-4 text-fairy-purple" />
                  </div>
                  <div>
                    <p className="font-medium">New Food Donation</p>
                    <p className="text-sm text-gray-600">2 hours ago</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="fairy-card">
            <h2 className="text-2xl font-bold mb-4 text-fairy-purple">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 bg-fairy-purple text-white rounded-lg hover:bg-fairy-purple/90 transition-colors">
                Register Donor
              </button>
              <button className="p-4 bg-fairy-peach text-gray-800 rounded-lg hover:bg-fairy-peach/90 transition-colors">
                Add Beneficiary
              </button>
              <button className="p-4 bg-fairy-green text-gray-800 rounded-lg hover:bg-fairy-green/90 transition-colors">
                Record Delivery
              </button>
              <button className="p-4 bg-blue-100 text-gray-800 rounded-lg hover:bg-blue-200 transition-colors">
                View Reports
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;