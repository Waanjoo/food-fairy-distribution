import React from 'react';
import { cn } from "@/lib/utils";

interface ProgramSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  isReversed?: boolean;
}

const ProgramSection = ({
  title,
  description,
  imageSrc,
  imageAlt,
  isReversed = false
}: ProgramSectionProps) => {
  return (
    <div className="py-16">
      <div className={cn(
        "container mx-auto px-4 grid gap-8",
        "md:grid-cols-2 md:items-center",
        isReversed ? "md:grid-flow-dense" : ""
      )}>
        <div className={cn(
          "space-y-4",
          isReversed ? "md:col-start-2" : ""
        )}>
          <h2 className="text-4xl font-bold text-[#FF6B35]">{title}</h2>
          <p className="text-gray-700 leading-relaxed">
            {description}
          </p>
        </div>
        <div className={isReversed ? "md:col-start-1" : ""}>
          <img
            src={imageSrc}
            alt={imageAlt}
            className="rounded-lg shadow-xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ProgramSection;