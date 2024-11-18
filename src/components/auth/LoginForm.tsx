import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useMutation } from "@tanstack/react-query";
import { useNavigate, Link } from "react-router-dom";

const LoginForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: async (formData: FormData) => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const email = formData.get("email") as string;
      // In a real app, you would determine the user role from the backend
      // For now, we'll simulate a donor login
      return { success: true, role: "donor" };
    },
    onSuccess: (data) => {
      toast({
        title: "✨ Welcome back!",
        description: "You've successfully logged in.",
      });
      
      // Navigate to the appropriate dashboard
      navigate(`/dashboard/${data.role}`);
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Invalid email or password.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    loginMutation.mutate(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
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
        disabled={loginMutation.isPending}
      >
        {loginMutation.isPending ? "Logging in..." : "Login"}
      </Button>

      <p className="text-center text-sm text-gray-600">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-600 hover:underline">
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;