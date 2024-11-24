import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';
import { Search, Bell, Settings, Download, Users, Package, TrendingUp } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

const mockDeliveryData = [
  { name: 'Mon', value: 20 },
  { name: 'Tue', value: 35 },
  { name: 'Wed', value: 25 },
  { name: 'Thu', value: 45 },
  { name: 'Fri', value: 30 },
  { name: 'Sat', value: 50 },
  { name: 'Sun', value: 40 },
];

const mockAnalyticsData = [
  { name: 'Jan', value: 30 },
  { name: 'Feb', value: 40 },
  { name: 'Mar', value: 35 },
  { name: 'Apr', value: 50 },
  { name: 'May', value: 45 },
];

const Dashboard = () => {
  const { data: stats } = useQuery({
    queryKey: ["dashboard-stats"],
    queryFn: async () => ({
      totalDonors: 253,
      activeDeliveries: 47,
      completionRate: 79,
    }),
  });

  return (
    <div className="min-h-screen bg-fairy-lightPurple/50 py-8">
      <div className="container px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-fairy-purple">Food Management</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="search"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border rounded-lg bg-white/80 backdrop-blur-sm"
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

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 bg-white/80 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-fairy-lightPurple rounded-lg">
                <Users className="h-6 w-6 text-fairy-purple" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Donors</p>
                <p className="text-2xl font-bold">{stats?.totalDonors || 0}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white/80 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-fairy-peach rounded-lg">
                <Package className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Active Deliveries</p>
                <p className="text-2xl font-bold">{stats?.activeDeliveries || 0}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white/80 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-fairy-green rounded-lg">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Completion Rate</p>
                <p className="text-2xl font-bold">{stats?.completionRate || 0}%</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="p-6 bg-white/80 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Delivery Centers</h2>
              <Button variant="ghost" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mockDeliveryData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                  <XAxis dataKey="name" stroke="#888" />
                  <YAxis stroke="#888" />
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

          <Card className="p-6 bg-white/80 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Analytics</h2>
              <Button variant="ghost" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mockAnalyticsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                  <XAxis dataKey="name" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip />
                  <Bar dataKey="value" fill="#9b87f5" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        {/* Progress Table */}
        <Card className="p-6 bg-white/80 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Delivery Progress</h2>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Center Name</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Downtown Center</TableCell>
                <TableCell className="w-[300px]">
                  <Progress value={75} className="h-2" />
                </TableCell>
                <TableCell>Active</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Westside Hub</TableCell>
                <TableCell className="w-[300px]">
                  <Progress value={45} className="h-2" />
                </TableCell>
                <TableCell>In Progress</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>East End Station</TableCell>
                <TableCell className="w-[300px]">
                  <Progress value={90} className="h-2" />
                </TableCell>
                <TableCell>Near Complete</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;