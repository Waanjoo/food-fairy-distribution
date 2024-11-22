import { Card } from "@/components/ui/card";

const PartnersSection = () => {
  const partners = [
    { name: "Global FoodBanking Network", logo: "/partners/gfn.png" },
    { name: "FoodPlus", logo: "/partners/foodplus.png" },
    { name: "Beiersdorf", logo: "/partners/beiersdorf.png" },
    { name: "Nivea", logo: "/partners/nivea.png" },
    { name: "Family TV", logo: "/partners/familytv.png" },
    { name: "Aryan Agencies", logo: "/partners/aryan.png" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#FF6B35] mb-12">Our Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner) => (
            <Card key={partner.name} className="p-4 flex items-center justify-center hover:shadow-lg transition-shadow">
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="max-h-12 w-auto grayscale hover:grayscale-0 transition-all"
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;