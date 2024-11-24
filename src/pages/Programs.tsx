import React from 'react';
import ProgramHero from '@/components/programs/ProgramHero';
import ProgramSection from '@/components/programs/ProgramSection';

const Programs = () => {
  return (
    <div className="min-h-screen bg-white">
      <ProgramHero />
      
      <div className="py-16 bg-fairy-lightPurple">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-[#FF6B35] uppercase tracking-wider mb-4">WE ARE THERE FOR THE VULNERABLE</h3>
          <h2 className="text-4xl font-bold mb-12">Introducing Our Programs</h2>
        </div>
      </div>

      <ProgramSection
        title="Agriculture Recovery"
        description="FBK is committed to rescuing surplus edible food that might otherwise go to waste and channeling it to vulnerable populations. We've established partnerships with large farms, small-scale producers, and pack houses near Jomo Kenyatta International Airport (JKIA) to facilitate this. With a strong focus on agriculture, FBK collaborates with organizations like Agrico for training, ensuring our partnering small-scale farmers are equipped and self-reliant. Our demonstration farm showcases innovative crops and farming techniques. Through these initiatives, FBK efficiently gathers surplus produce at reduced rates."
        imageSrc="/lovable-uploads/63dfd5eb-5004-45ea-ac56-6ac28e1b827b.png"
        imageAlt="Agriculture Recovery Program"
      />

      <ProgramSection
        title="Food Drives"
        description="Food drives are a cornerstone of our operations at FBK. In collaboration with supermarkets and other partners, we employ several methods to collect donations. We accept 'Edible Surplus Donations,' which are foods and items unsellable due to minor damages or nearing expiration but are still consumable. Additionally, our monthly 'Drop Boxes' allow customers to deposit food donations, while they can also contribute by donating their loyalty points or rounding up their shopping bills, with the extra change benefiting the Food Bank."
        imageSrc="/lovable-uploads/9d078059-8bae-4a78-841e-eb8034f05d7a.png"
        imageAlt="Food Drives Program"
        isReversed
      />

      <ProgramSection
        title="School Feeding Program"
        description="Malnutrition in children can lead to severe consequences, such as hindered cognitive abilities, reduced concentration, frequent absenteeism, and overall poor academic outcomes. Recognizing this, FBK launched the School Feeding Program in November 2020. As of now, we serve daily meals to nine primary schools located in the informal areas of Nairobi, Kiambu, and Kajiado. We're committed to expanding our reach and continue making strides against childhood malnutrition."
        imageSrc="/lovable-uploads/c893cca2-872c-41b7-9b52-0af79fbe3a39.png"
        imageAlt="School Feeding Program"
      />

      <ProgramSection
        title="Emergency Outreach Mission"
        description="FBK stands ready in times of need. Whether it's a global pandemic like COVID-19, natural disasters such as fires or floods, or individuals grappling with chronic illnesses, we're there. We collect, sort, and promptly distribute donated and rescued farm produce to the most vulnerable, especially those in informal settlements, ensuring that during the toughest times, nutrition isn't compromised."
        imageSrc="/lovable-uploads/a4c46894-f1ee-40af-ad84-f90b783a112d.png"
        imageAlt="Emergency Outreach Mission"
        isReversed
      />
    </div>
  );
};

export default Programs;