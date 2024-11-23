import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import LoginForm from "@/components/auth/LoginForm";
import SignUpForm from "@/components/auth/SignUpForm";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-fairy-lightPurple py-12">
      <div className="container px-4">
        <Card className="max-w-md mx-auto p-6 bg-white shadow-lg">
          <div className="flex justify-center gap-4 mb-6">
            <Button
              variant={isLogin ? "default" : "outline"}
              onClick={() => setIsLogin(true)}
              className={isLogin ? "bg-fairy-purple hover:bg-fairy-purple/90" : ""}
            >
              Login
            </Button>
            <Button
              variant={!isLogin ? "default" : "outline"}
              onClick={() => setIsLogin(false)}
              className={!isLogin ? "bg-fairy-purple hover:bg-fairy-purple/90" : ""}
            >
              Sign Up
            </Button>
          </div>
          
          <h1 className="text-2xl font-bold text-center mb-6 text-fairy-purple">
            {isLogin ? "Welcome Back to Food Fairy" : "Join Food Fairy"}
          </h1>
          
          {isLogin ? <LoginForm /> : <SignUpForm />}
        </Card>
      </div>
    </div>
  );
};

export default Auth;