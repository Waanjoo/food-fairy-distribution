import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PartnersSection from "@/components/home/PartnersSection";
import OperationsMap from "@/components/home/OperationsMap";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import Footer from "@/components/home/Footer";
import { Card } from "@/components/ui/card";
import { Sparkles, Leaf, School, Heart, Users } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

const fetchStats = async () => {
  // Simulate API call
  return {
    mealsServed: "10M+",
    schoolsReached: "11+",
    childrenServed: "10k+",
    groupsReached: "90+"
  };
};

const Index = () => {
  const { data: stats, isLoading } = useQuery({
    queryKey: ["dashboard-stats"],
    queryFn: fetchStats,
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#2B4F60] text-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-light mb-4 uppercase tracking-wider">Empowering communities today for a food secure tomorrow</h2>
            <h1 className="text-5xl font-bold mb-6">Nourishing Lives, One Meal at a Time</h1>
            <p className="text-lg mb-8">Food Fairy is more than just a food bank; it's a beacon of hope. Join us on this meaningful journey as we channel surplus food to build a hunger-free future.</p>
            <Button 
              asChild 
              className="bg-[#FF6B35] hover:bg-[#FF8355] text-white rounded-full px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:bg-[#FF5325] active:scale-95"
            >
              <Link to="/auth">JOIN THE HARVEST OF HOPE</Link>
            </Button>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1488459716781-31db52582fe9"
              alt="Fresh vegetables and fruits"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-[#FF6B35] uppercase tracking-wider mb-4">Our Programs</h3>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Empowering Programs, Endless Possibilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've curated a suite of impactful programs tailored to address food insecurity at its root, spanning from agriculture to emergency outreach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-[#4CAF50] mb-4">
                <Leaf className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-3">Agriculture Recovery</h3>
              <p className="text-gray-600">From farm to table, we turn surplus into sustenance, ensuring no crop goes to waste.</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-[#FF6B35] mb-4">
                <School className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-3">School Feeding Programs</h3>
              <p className="text-gray-600">Nourishing minds to foster bright futures in our partnered schools.</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-[#2196F3] mb-4">
                <Heart className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-3">Emergency Outreach</h3>
              <p className="text-gray-600">Swift response in times of crisis, turning adversity into moments of hope.</p>
            </Card>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-[#FF6B35] mb-2">{isLoading ? "..." : stats?.mealsServed}</h3>
              <p className="text-gray-600">MEALS SERVED</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-[#FF6B35] mb-2">{isLoading ? "..." : stats?.schoolsReached}</h3>
              <p className="text-gray-600">SCHOOLS REACHED</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-[#FF6B35] mb-2">{isLoading ? "..." : stats?.childrenServed}</h3>
              <p className="text-gray-600">CHILDREN SERVED DAILY</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-[#FF6B35] mb-2">{isLoading ? "..." : stats?.groupsReached}</h3>
              <p className="text-gray-600">GROUPS REACHED</p>
            </div>
          </div>
        </div>
      </div>

      {/* New Sections */}
      <PartnersSection />
      <OperationsMap />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;