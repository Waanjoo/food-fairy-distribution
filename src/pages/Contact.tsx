import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import ContactHero from "@/components/contact/ContactHero";
import { MapPin, Mail, Phone } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="min-h-screen">
      <ContactHero />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-fairy-purple mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Visit us</h3>
                  <p className="text-gray-600">FOOD FAIRY</p>
                  <p className="text-gray-600">Northern Bypass, Near Two Rivers Mall</p>
                  <p className="text-gray-600">P.O BOX: 966 - 00517</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-fairy-purple mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Mail us</h3>
                  <p className="text-gray-600">info@foodfairy.org</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-fairy-purple mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Call us</h3>
                  <p className="text-gray-600">+254795556283</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input placeholder="Your Name *" required />
              </div>
              <div>
                <Input type="email" placeholder="Your Email *" required />
              </div>
              <div>
                <Textarea 
                  placeholder="Message..." 
                  className="min-h-[200px]"
                  required
                />
              </div>
              <Button 
                type="submit"
                className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white"
              >
                SEND A MESSAGE
              </Button>
            </form>
          </div>
        </div>
      </div>

      <div className="w-full h-[400px] mt-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8166139419745!2d36.8713!3d-1.2177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTMnMDMuNyJTIDM2wrA1MicxNi43IkU!5e0!3m2!1sen!2sus!4v1635774243011!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;