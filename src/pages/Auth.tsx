import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import LoginForm from "@/components/auth/LoginForm";
import SignUpForm from "@/components/auth/SignUpForm";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container px-4 py-8">
      <Card className="max-w-md mx-auto p-6">
        <div className="flex justify-center gap-4 mb-6">
          <Button
            variant={isLogin ? "default" : "outline"}
            onClick={() => setIsLogin(true)}
          >
            Login
          </Button>
          <Button
            variant={!isLogin ? "default" : "outline"}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </Button>
        </div>
        
        <h1 className="text-2xl font-bold text-center mb-6">
          {isLogin ? "Welcome Back to Food Fairy" : "Join Food Fairy"}
        </h1>
        
        {isLogin ? <LoginForm /> : <SignUpForm />}
      </Card>
    </div>
  );
};

export default Auth;