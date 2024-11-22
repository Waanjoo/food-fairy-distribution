import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const OperationsMap = () => {
  const locations = [
    { name: "Nairobi", color: "bg-red-500" },
    { name: "Kiambu", color: "bg-blue-500" },
    { name: "Nakuru", color: "bg-green-500" },
    { name: "Kirinyaga", color: "bg-yellow-500" },
    { name: "Wajir", color: "bg-purple-500" },
    { name: "Muranga", color: "bg-indigo-500" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h3 className="text-[#FF6B35] text-center uppercase tracking-wider mb-4">Spreading Nourishment Across Kenya</h3>
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Operations Nation Wide</h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {locations.map((location) => (
                <div key={location.name} className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded-full ${location.color}`} />
                  <span className="text-gray-700">{location.name}</span>
                </div>
              ))}
            </div>
            <Button className="mt-8 bg-[#FF6B35] hover:bg-[#FF8355] w-full md:w-auto">
              <Heart className="mr-2 h-4 w-4" /> DONATE NOW
            </Button>
          </div>
          
          <div className="relative">
            <img 
              src="/kenya-map.svg" 
              alt="Kenya Operations Map"
              className="w-full"
            />
            {/* Add location markers here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationsMap;