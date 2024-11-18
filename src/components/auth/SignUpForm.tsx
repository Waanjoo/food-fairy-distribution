import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

type UserRole = "donor" | "beneficiary" | "delivery";

const SignUpForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState<UserRole>("donor");

  const signUpMutation = useMutation({
    mutationFn: async (formData: FormData) => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return { success: true };
    },
    onSuccess: () => {
      toast({
        title: "✨ Welcome to Food Fairy!",
        description: "Your account has been created successfully.",
      });
      
      // Navigate to the appropriate dashboard based on user role
      switch (userRole) {
        case "donor":
          navigate("/dashboard/donor");
          break;
        case "beneficiary":
          navigate("/dashboard/beneficiary");
          break;
        case "delivery":
          navigate("/dashboard/delivery");
          break;
      }
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    signUpMutation.mutate(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
      <div className="space-y-4">
        <Label>I want to join as:</Label>
        <RadioGroup
          defaultValue="donor"
          onValueChange={(value) => setUserRole(value as UserRole)}
          className="flex flex-col space-y-2"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="donor" id="donor" />
            <Label htmlFor="donor">Food Donor</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="beneficiary" id="beneficiary" />
            <Label htmlFor="beneficiary">Beneficiary</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="delivery" id="delivery" />
            <Label htmlFor="delivery">Delivery Personnel</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" required />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" type="password" required />
        </div>
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={signUpMutation.isPending}
      >
        {signUpMutation.isPending ? "Creating account..." : "Sign Up"}
      </Button>
    </form>
  );
};

export default SignUpForm;