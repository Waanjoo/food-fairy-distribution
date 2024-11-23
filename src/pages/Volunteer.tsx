import VolunteerForm from "@/components/volunteer/VolunteerForm";

const Volunteer = () => {
  return (
    <div className="min-h-screen bg-fairy-lightPurple py-12">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <VolunteerForm />
        </div>
      </div>
    </div>
  );
};

export default Volunteer;