const ContactHero = () => {
  return (
    <div className="relative bg-fairy-purple text-white py-20">
      <div className="absolute inset-0 bg-black/50" />
      <div className="container relative z-10 mx-auto px-4">
        <h1 className="text-6xl font-bold mb-4 text-center">Contact Us</h1>
        <div className="flex items-center justify-center gap-2 text-sm">
          <span>HOME</span>
          <span>›</span>
          <span className="text-[#FF6B35]">CONTACT</span>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;