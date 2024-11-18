import { Card } from "@/components/ui/card";
import LoginForm from "@/components/auth/LoginForm";

const Login = () => {
  return (
    <div className="container px-4 py-8">
      <Card className="max-w-md mx-auto p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Welcome Back to Food Fairy</h1>
        <LoginForm />
      </Card>
    </div>
  );
};

export default Login;