import { Button } from "@/components/ui/button";
import { Sparkles, Leaf, School, Heart, Users, MapPin, Mail, Phone } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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
  
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleJoinClick = () => {
    toast({
      title: "Welcome to Food Fairy!",
      description: "Redirecting you to join our mission...",
      duration: 2000,
    });
    setTimeout(() => navigate("/auth"), 1000);
  };

  const partners = [
    "The Global FoodBanking Network", "foodplus", "Beiersdorf", "NIVEA",
    "RIM", "W", "Arawi Agencies Ltd", "BigCold", "United Way"
  ];

  const locations = [
    { name: "Nairobi", color: "bg-red-500" },
    { name: "Kiambu", color: "bg-blue-500" },
    { name: "Nakuru", color: "bg-green-500" },
    { name: "Kirinyaga", color: "bg-yellow-500" },
    { name: "Wajir", color: "bg-purple-500" },
    { name: "Muranga", color: "bg-purple-700" },
    { name: "Uasin Gichu", color: "bg-pink-500" },
    { name: "Kajiado", color: "bg-lime-500" },
    { name: "Turkana", color: "bg-orange-500" },
    { name: "Marsabit", color: "bg-indigo-500" },
    { name: "Machakos", color: "bg-gray-500" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#2B4F60] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-bold mb-8 text-center">Food Fairy</h1>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-light mb-4 uppercase tracking-wider">Empowering communities today for a food secure tomorrow</h2>
              <h3 className="text-5xl font-bold mb-6">Nourishing Lives, One Meal at a Time</h3>
              <p className="text-lg mb-8">Food Fairy is more than just a food bank; it's a beacon of hope. Join us on this meaningful journey as we channel surplus food to build a hunger-free future.</p>
              <Button 
                onClick={handleJoinClick}
                className="bg-[#FF6B35] hover:bg-[#FF8355] text-white rounded-full px-8 transform hover:scale-105 transition-all duration-300 active:scale-95 active:bg-[#E55B25]"
              >
                JOIN THE HARVEST OF HOPE
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
      </div>

      {/* Partners Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#FF6B35] text-center mb-12">Our Partners</h2>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
            {partners.map((partner, index) => (
              <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
                <img
                  src={`/placeholder.svg`}
                  alt={partner}
                  className="max-h-12 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Operations Map Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-[#FF6B35] text-center uppercase tracking-wider mb-4">Spreading Nourishment Across Kenya</h3>
          <h2 className="text-4xl font-bold text-center mb-12">Our Operations Nation Wide</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-2">
              {locations.map((location, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded-full ${location.color}`}></div>
                  <span>{location.name}</span>
                </div>
              ))}
              <Button className="mt-8 bg-[#FF6B35] hover:bg-[#FF8355] text-white rounded-full">
                DONATE NOW ❤️
              </Button>
            </div>
            <div className="relative">
              <img src="/placeholder.svg" alt="Kenya Map" className="w-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-[#FF6B35] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl uppercase mb-8">Testimonials</h2>
          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <div className="text-center px-8">
                  <p className="text-xl mb-8">
                    "Joining FBK as a volunteer has been one of the most rewarding decisions I've ever made. The team is passionate, dedicated, and always eager to help. But the best part is seeing the hope we bring to families, ensuring they don't go to bed hungry. Every moment spent here is a testament to the change we're creating, one meal at a time."
                  </p>
                  <h3 className="text-2xl font-bold">Wanjiru Kimani</h3>
                  <p className="uppercase">Volunteer</p>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#2B4F60] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="font-bold mb-4">FOOD BANKING KENYA</h3>
              <p className="text-sm">
                We're curious, passionate, and committed to helping nonprofits learn and grow. Donate now!
              </p>
              <Button className="mt-4 bg-[#FF6B35] hover:bg-[#FF8355] text-white rounded-full">
                DONATE NOW ❤️
              </Button>
            </div>
            <div>
              <h3 className="font-bold mb-4">PROGRAMS</h3>
              <ul className="space-y-2">
                <li>Agricultural Recovery</li>
                <li>Food Drives</li>
                <li>School Feeding Programs</li>
                <li>Emergency Outreach Mission</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">GET INVOLVED</h3>
              <ul className="space-y-2">
                <li>Donate</li>
                <li>Food Drives</li>
                <li>Volunteer</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">CONTACTS</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Northern Bypass, Near Two Rivers Mall
                </li>
                <li>P.O BOX: 966 - 00517</li>
                <li className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  info@foodbankingkenya.org
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  +254 714 963 809
                </li>
                <li>+254 700 676 333</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
