import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Package, 
  Users, 
  TrendingUp,
  Search,
  Settings,
  Bell
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const mockChartData = [
  { name: 'Jan', value: 20 },
  { name: 'Feb', value: 35 },
  { name: 'Mar', value: 25 },
  { name: 'Apr', value: 40 },
  { name: 'May', value: 30 },
  { name: 'Jun', value: 45 },
  { name: 'Jul', value: 35 },
];

const DonorDashboard = () => {
  const { data: stats } = useQuery({
    queryKey: ["donor-stats"],
    queryFn: async () => ({
      totalDonations: 253,
      activeDeliveries: 12,
      beneficiariesHelped: 47,
    }),
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-fairy-purple">Food Fairy</h1>
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border rounded-lg bg-gray-50"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Stats Cards */}
          <Card className="p-6 bg-white">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-fairy-lightPurple rounded-lg">
                <Package className="h-6 w-6 text-fairy-purple" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Donations</p>
                <p className="text-2xl font-bold">{stats?.totalDonations || 0}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-fairy-peach rounded-lg">
                <TrendingUp className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Active Deliveries</p>
                <p className="text-2xl font-bold">{stats?.activeDeliveries || 0}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-fairy-green rounded-lg">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Beneficiaries Helped</p>
                <p className="text-2xl font-bold">{stats?.beneficiariesHelped || 0}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Analytics Chart */}
        <Card className="p-6 bg-white">
          <h2 className="text-lg font-semibold mb-4">Donation Analytics</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#9b87f5" 
                  strokeWidth={2}
                  dot={{ fill: '#9b87f5' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default DonorDashboard;