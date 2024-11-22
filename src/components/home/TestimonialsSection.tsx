import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Joining FBK as a volunteer has been one of the most rewarding decisions I've ever made. The team is passionate, dedicated, and always eager to help. But the best part is seeing the hope we bring to families, ensuring they don't go to bed hungry. Every moment spent here is a testament to the change we're creating, one meal at a time.",
      author: "Wanjiru Kimani",
      role: "VOLUNTEER",
      image: "/testimonials/volunteer1.jpg"
    },
    // Add more testimonials here
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-[#FF6B35]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h3 className="uppercase tracking-wider mb-4">TESTIMONIALS</h3>
            <p className="text-xl mb-8">{testimonials[currentIndex].quote}</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold">{testimonials[currentIndex].author}</p>
                <p className="text-sm">{testimonials[currentIndex].role}</p>
              </div>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" onClick={prevTestimonial}>
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button variant="ghost" size="icon" onClick={nextTestimonial}>
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src={testimonials[currentIndex].image}
              alt="Testimonial"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;