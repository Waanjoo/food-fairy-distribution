import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useMutation } from "@tanstack/react-query";

const AddCenterForm = () => {
  const { toast } = useToast();

  const addCenterMutation = useMutation({
    mutationFn: async (formData: FormData) => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return { success: true };
    },
    onSuccess: () => {
      toast({
        title: "✨ Distribution Center Added",
        description: "The new center has been registered successfully.",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    addCenterMutation.mutate(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
      <div className="space-y-4">
        <div>
          <Label htmlFor="centerName">Center Name</Label>
          <Input id="centerName" name="centerName" required />
        </div>
        <div>
          <Label htmlFor="address">Address</Label>
          <Textarea id="address" name="address" required />
        </div>
        <div>
          <Label htmlFor="capacity">Storage Capacity (kg)</Label>
          <Input
            id="capacity"
            name="capacity"
            type="number"
            min="0"
            required
          />
        </div>
        <div>
          <Label htmlFor="manager">Manager Name</Label>
          <Input id="manager" name="manager" required />
        </div>
        <div>
          <Label htmlFor="phone">Contact Phone</Label>
          <Input id="phone" name="phone" type="tel" required />
        </div>
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={addCenterMutation.isPending}
      >
        {addCenterMutation.isPending ? "Adding Center..." : "Add Distribution Center"}
      </Button>
    </form>
  );
};

export default AddCenterForm;