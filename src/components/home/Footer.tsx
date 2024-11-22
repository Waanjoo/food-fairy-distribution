import { Button } from "@/components/ui/button";
import { Heart, MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#2B4F60] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h4 className="font-bold mb-4">FOOD BANKING KENYA</h4>
            <p className="text-sm mb-6">
              We're curious, passionate, and committed to helping nonprofits learn and grow. Donate now!
            </p>
            <Button className="bg-[#FF6B35] hover:bg-[#FF8355]">
              <Heart className="mr-2 h-4 w-4" /> DONATE NOW
            </Button>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">PROGRAMS</h4>
            <ul className="space-y-2">
              <li>Agricultural Recovery</li>
              <li>Food Drives</li>
              <li>School Feeding Programs</li>
              <li>Emergency Outreach Mission</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">GET INVOLVED</h4>
            <ul className="space-y-2">
              <li>Donate</li>
              <li>Food Drives</li>
              <li>Volunteer</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">CONTACTS</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-1" />
                <div>
                  Northern Bypass, Near Two Rivers Mall.
                  <br />P.O BOX: 966 - 00517
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                info@foodbankingkenya.org
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                +254 714 963 809
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-600 text-center">
          <p className="text-sm">Copyright © 2024 Food Banking Kenya. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;