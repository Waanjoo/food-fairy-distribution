import { Card } from "@/components/ui/card";
import AddCenterForm from "@/components/centers/AddCenterForm";

const Centers = () => {
  return (
    <div className="min-h-screen bg-fairy-lightPurple py-12">
      <div className="container px-4">
        <Card className="max-w-md mx-auto p-6 bg-white shadow-lg">
          <h1 className="text-2xl font-bold text-center mb-6 text-fairy-purple">Add Distribution Center</h1>
          <AddCenterForm />
        </Card>
      </div>
    </div>
  );
};

export default Centers;