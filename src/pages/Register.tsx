import { Card } from "@/components/ui/card";
import SignUpForm from "@/components/auth/SignUpForm";

const Register = () => {
  return (
    <div className="container px-4 py-8">
      <Card className="max-w-md mx-auto p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Join Food Fairy</h1>
        <SignUpForm />
      </Card>
    </div>
  );
};

export default Register;