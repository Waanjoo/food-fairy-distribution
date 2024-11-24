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
        description="Food Fairy is committed to rescuing surplus edible food that might otherwise go to waste and channeling it to vulnerable populations. We've established partnerships with large farms, small-scale producers, and pack houses near Jomo Kenyatta International Airport (JKIA) to facilitate this. With a strong focus on agriculture, Food Fairy collaborates with organizations like Agrico for training, ensuring our partnering small-scale farmers are equipped and self-reliant. Our demonstration farm showcases innovative crops and farming techniques. Through these initiatives, Food Fairy efficiently gathers surplus produce at reduced rates."
        imageSrc="https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
        imageAlt="Agriculture Recovery Program"
      />

      <ProgramSection
        title="Food Drives"
        description="Food drives are a cornerstone of our operations at Food Fairy. In collaboration with supermarkets and other partners, we employ several methods to collect donations. We accept 'Edible Surplus Donations,' which are foods and items unsellable due to minor damages or nearing expiration but are still consumable. Additionally, our monthly 'Drop Boxes' allow customers to deposit food donations, while they can also contribute by donating their loyalty points or rounding up their shopping bills, with the extra change benefiting the Food Bank."
        imageSrc="https://images.unsplash.com/photo-1488265333142-353a12931ee9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
        imageAlt="Food Drives Program"
        isReversed
      />

      <ProgramSection
        title="School Feeding Program"
        description="Malnutrition in children can lead to severe consequences, such as hindered cognitive abilities, reduced concentration, frequent absenteeism, and overall poor academic outcomes. Recognizing this, Food Fairy launched the School Feeding Program in November 2020. As of now, we serve daily meals to nine primary schools located in the informal areas of Nairobi, Kiambu, and Kajiado. We're committed to expanding our reach and continue making strides against childhood malnutrition."
        imageSrc="https://images.unsplash.com/photo-1509059852496-f3822ae057bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
        imageAlt="School Feeding Program"
      />

      <ProgramSection
        title="Emergency Outreach Mission"
        description="Food Fairy stands ready in times of need. Whether it's a global pandemic like COVID-19, natural disasters such as fires or floods, or individuals grappling with chronic illnesses, we're there. We collect, sort, and promptly distribute donated and rescued farm produce to the most vulnerable, especially those in informal settlements, ensuring that during the toughest times, nutrition isn't compromised."
        imageSrc="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
        imageAlt="Emergency Outreach Mission"
        isReversed
      />
    </div>
  );
};

export default Programs;