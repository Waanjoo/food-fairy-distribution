import VolunteerForm from "@/components/volunteer/VolunteerForm";
import { Card } from "@/components/ui/card";

const Volunteer = () => {
  return (
    <div className="min-h-screen bg-fairy-lightPurple py-12">
      <div className="container px-4">
        <h1 className="text-3xl font-bold text-fairy-purple mb-8 text-center">Join Our Volunteer Team</h1>
        <Card className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300">
          <VolunteerForm />
        </Card>
      </div>
    </div>
  );
};

export default Volunteer;