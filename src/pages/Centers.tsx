import { Card } from "@/components/ui/card";
import AddCenterForm from "@/components/centers/AddCenterForm";

const Centers = () => {
  return (
    <div className="min-h-screen bg-fairy-lightPurple py-12">
      <div className="container px-4">
        <h1 className="text-3xl font-bold text-fairy-purple mb-8 text-center">Distribution Centers</h1>
        <Card className="max-w-2xl mx-auto p-8 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-bold text-center mb-6 text-fairy-purple">Add Distribution Center</h2>
          <AddCenterForm />
        </Card>
      </div>
    </div>
  );
};

export default Centers;