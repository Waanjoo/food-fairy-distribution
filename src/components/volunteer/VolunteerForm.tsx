import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";

const VolunteerForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Registration successful!",
      description: "Thank you for volunteering with Food Fairy. We'll be in touch soon!",
    });
    
    setIsSubmitting(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-2">Join the Food Fairy Family</h1>
      <p className="text-center text-gray-600 mb-8">Lend a Hand, Make a Difference: Volunteer with Food Fairy.</p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" required />
          </div>
          
          <div>
            <Label htmlFor="birthday">Birthday</Label>
            <Input id="birthday" type="date" required />
          </div>
          
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required />
          </div>
          
          <div>
            <Label htmlFor="address">Residential Address</Label>
            <Input id="address" placeholder="123 Maziwa Rd, Kileleshwa, Nairobi, 00100" required />
          </div>
          
          <div>
            <Label htmlFor="shirtSize">Shirt Size</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="small">Small</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="large">Large</SelectItem>
                <SelectItem value="xl">XL</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label>Are you available for an impromptu mini outreach?</Label>
            <RadioGroup defaultValue="no" className="flex gap-4 mt-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="yes" />
                <Label htmlFor="yes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="no" />
                <Label htmlFor="no">No</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div>
            <Label htmlFor="occupation">Occupation</Label>
            <Input id="occupation" required />
          </div>
          
          <div>
            <Label htmlFor="organization">Organization/Place of Work</Label>
            <Input id="organization" required />
          </div>
          
          <div>
            <Label htmlFor="reason">Why do you want to volunteer with Food Fairy?</Label>
            <Textarea id="reason" className="min-h-[100px]" required />
          </div>
          
          <div className="flex items-start space-x-2">
            <Checkbox id="terms" required />
            <Label htmlFor="terms" className="text-sm leading-relaxed">
              As a volunteer of Food Fairy, I agree to maintain the privacy and confidentiality of any and all personal information of users. I recognize the value and sensitivity of confidential information, and I agree not to copy, discuss, or otherwise disclose any participant's information to anyone who does not have official responsibility regarding that information of the food bank.
            </Label>
          </div>
        </div>

        <Button 
          type="submit" 
          className="w-full bg-[#FF6B35] hover:bg-[#FF8355]"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "BECOME A VOLUNTEER"}
        </Button>
      </form>
    </div>
  );
};

export default VolunteerForm;