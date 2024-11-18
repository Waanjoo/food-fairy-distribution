import { Card } from "@/components/ui/card";
import AddCenterForm from "@/components/centers/AddCenterForm";

const Centers = () => {
  return (
    <div className="container px-4 py-8">
      <Card className="max-w-md mx-auto p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Add Distribution Center</h1>
        <AddCenterForm />
      </Card>
    </div>
  );
};

export default Centers;