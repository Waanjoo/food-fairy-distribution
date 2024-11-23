import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";
import { User } from "@/types/models";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: async ({ email, password }: { email: string; password: string }) => {
      return apiClient.login(email, password);
    },
    onSuccess: (data) => {
      setUser(data.user);
      localStorage.setItem("token", data.token);
      toast({
        title: "Welcome back!",
        description: "You've successfully logged in.",
      });
      navigate(`/dashboard/${data.user.role}`);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Invalid email or password.",
        variant: "destructive",
      });
    },
  });

  const registerMutation = useMutation({
    mutationFn: async (userData: Partial<User>) => {
      return apiClient.register(userData);
    },
    onSuccess: (data) => {
      setUser(data.user);
      localStorage.setItem("token", data.token);
      toast({
        title: "Welcome to Food Fairy!",
        description: "Your account has been created successfully.",
      });
      navigate(`/dashboard/${data.user.role}`);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Could not create account. Please try again.",
        variant: "destructive",
      });
    },
  });

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    navigate("/");
    toast({
      title: "Logged out",
      description: "You've been successfully logged out.",
    });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Here you would typically validate the token with your backend
      // and fetch the user data if the token is valid
    }
  }, []);

  return {
    user,
    login: loginMutation.mutate,
    register: registerMutation.mutate,
    logout,
    isLoading: loginMutation.isPending || registerMutation.isPending,
  };
};