
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { 
  Menu, X, Heart, Users, MapPin, Mail, Phone, ChevronDown, 
  Leaf, School, Truck, Shield, Star, CheckCircle, ArrowRight,
  Globe, Target, Award, Sparkles, User
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ModernLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'programs', 'impact', 'volunteer', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for volunteering!",
      description: "We'll be in touch with you soon.",
    });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'programs', label: 'Programs' },
    { id: 'impact', label: 'Impact' },
    { id: 'volunteer', label: 'Volunteer' },
    { id: 'contact', label: 'Contact' },
  ];

  const stats = [
    { number: "10M+", label: "Meals Served", icon: Heart },
    { number: "11+", label: "Schools Reached", icon: School },
    { number: "10K+", label: "Children Served", icon: Users },
    { number: "90+", label: "Communities", icon: Globe },
  ];

  const programs = [
    {
      title: "Agriculture Recovery",
      description: "Rescuing surplus edible food from farms and channeling it to vulnerable populations across Kenya.",
      icon: Leaf,
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Food Drives",
      description: "Collaborating with supermarkets and partners to collect donations through various innovative methods.",
      icon: Truck,
      image: "https://images.unsplash.com/photo-1488265333142-353a12931ee9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "School Feeding Program",
      description: "Daily meals to primary schools in informal areas, fighting childhood malnutrition and improving education.",
      icon: School,
      image: "https://images.unsplash.com/photo-1509059852496-f3822ae057bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Emergency Outreach",
      description: "Rapid response during crises, natural disasters, and emergencies to ensure nutrition isn't compromised.",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
  ];

  const locations = [
    { name: "Nairobi", color: "bg-red-500", count: "15 Centers" },
    { name: "Kiambu", color: "bg-blue-500", count: "8 Centers" },
    { name: "Nakuru", color: "bg-green-500", count: "12 Centers" },
    { name: "Kirinyaga", color: "bg-yellow-500", count: "6 Centers" },
    { name: "Wajir", color: "bg-purple-500", count: "4 Centers" },
    { name: "Muranga", color: "bg-purple-700", count: "7 Centers" },
  ];

  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Food Fairy
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 font-medium ${
                    activeSection === item.id
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('volunteer')}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Donate Now ❤️
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-700">
          <div className="absolute inset-0 bg-black/30"></div>
          <img 
            src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Fresh vegetables and fruits"
            className="w-full h-full object-cover mix-blend-overlay opacity-60"
          />
        </div>

        {/* Floating elements animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-orange-400/20 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-pink-400/20 rounded-full animate-float"></div>
        </div>

        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="mb-8 animate-fade-in">
              <span className="inline-block px-6 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium mb-6">
                🌟 Empowering Communities Since 2020
              </span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 font-playfair animate-slide-up">
              <span className="bg-gradient-to-r from-white via-yellow-200 to-orange-300 bg-clip-text text-transparent">
                Food Fairy
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl font-light mb-4 uppercase tracking-wider animate-slide-up-delayed">
              Empowering communities today for a food secure tomorrow
            </p>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-8 animate-slide-up-delayed-2">
              Nourishing Lives, One Meal at a Time
            </h2>
            
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-delayed">
              Food Fairy is more than just a food bank; it's a beacon of hope. Join us on this meaningful journey as we channel surplus food to build a hunger-free future across Kenya.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-delayed-2">
              <Button 
                onClick={() => scrollToSection('volunteer')}
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300"
              >
                JOIN THE HARVEST OF HOPE
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                onClick={() => scrollToSection('about')}
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-800 px-8 py-4 rounded-full text-lg font-semibold backdrop-blur-md transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/80" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold uppercase tracking-wider text-sm">About Food Fairy</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6 font-playfair">
              Our Mission & Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming surplus food into hope, one meal at a time across Kenya
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold uppercase tracking-wider text-sm">Our Programs</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6 font-playfair">
              Making Impact Through Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four comprehensive programs designed to tackle hunger and food insecurity across Kenya
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {programs.map((program, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 shadow-lg">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                      <program.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{program.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section with Map */}
      <section id="impact" className="py-24 bg-gradient-to-br from-purple-900 to-pink-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-orange-300 font-semibold uppercase tracking-wider text-sm">Our Reach</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 font-playfair">
              Spreading Hope Across Kenya
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              From bustling cities to remote villages, our impact reaches every corner of Kenya
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {locations.map((location, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-4 h-4 rounded-full ${location.color}`}></div>
                      <span className="font-semibold text-lg">{location.name}</span>
                    </div>
                    <p className="text-purple-200 text-sm">{location.count}</p>
                  </div>
                ))}
              </div>
              
              <Button 
                onClick={() => scrollToSection('volunteer')}
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-full shadow-xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300"
              >
                DONATE NOW ❤️
                <Heart className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center">
                <img 
                  src="/Kenya-Map-min-1-880x1024.png" 
                  alt="Kenya Map showing our operations" 
                  className="w-full max-w-md mx-auto filter brightness-110"
                />
                <p className="mt-6 text-purple-100">
                  Operating in 11+ counties across Kenya, reaching the most vulnerable communities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-yellow-300 fill-current" />
              ))}
            </div>
            
            <blockquote className="text-2xl md:text-3xl font-light mb-8 leading-relaxed">
              "Joining Food Fairy as a volunteer has been one of the most rewarding decisions I've ever made. The team is passionate, dedicated, and always eager to help. Every moment spent here is a testament to the change we're creating, one meal at a time."
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <User className="w-8 h-8" />
              </div>
              <div className="text-left">
                <div className="text-xl font-bold">Wanjiru Kimani</div>
                <div className="text-orange-200">Volunteer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold uppercase tracking-wider text-sm">Join Our Mission</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6 font-playfair">
              Become a Food Fairy Volunteer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lend a Hand, Make a Difference: Volunteer with Food Fairy
            </p>
          </div>

          <Card className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm shadow-2xl border-0 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <form onSubmit={handleVolunteerSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <Input placeholder="Enter your full name" required className="h-12" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <Input type="email" placeholder="Enter your email" required className="h-12" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <Input placeholder="+254 xxx xxx xxx" required className="h-12" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                      <Input placeholder="Your city/county" required className="h-12" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Why do you want to volunteer?</label>
                    <Textarea placeholder="Tell us about your motivation..." className="h-24" required />
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white h-14 text-lg font-semibold rounded-xl shadow-xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
                  >
                    BECOME A VOLUNTEER
                    <Heart className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </div>
              
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-8 lg:p-12 text-white flex items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Make a Real Impact</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-300" />
                      <span>Help feed families in need</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-300" />
                      <span>Support school feeding programs</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-300" />
                      <span>Join emergency response missions</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-300" />
                      <span>Be part of a passionate community</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold uppercase tracking-wider text-sm">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6 font-playfair">
              Contact Food Fairy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to join our mission? We'd love to hear from you
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-lg h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a message</h3>
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Input placeholder="Your Name" required className="h-12" />
                    </div>
                    <div>
                      <Input type="email" placeholder="Your Email" required className="h-12" />
                    </div>
                  </div>
                  <div>
                    <Input placeholder="Subject" required className="h-12" />
                  </div>
                  <div>
                    <Textarea placeholder="Your message..." className="h-32" required />
                  </div>
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white h-14 text-lg font-semibold rounded-xl shadow-xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300"
                  >
                    SEND MESSAGE
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h4>
                    <p className="text-gray-600">Northern Bypass, Near Two Rivers Mall</p>
                    <p className="text-gray-600">P.O BOX: 966 - 00517, Nairobi</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h4>
                    <p className="text-gray-600">+254795556283</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h4>
                    <p className="text-gray-600">info@foodfairy.org</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-purple-900 to-pink-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Food Fairy</span>
              </div>
              <p className="text-purple-200 mb-6 leading-relaxed">
                We're curious, passionate, and committed to helping communities learn and grow. Join us in building a hunger-free future for Kenya.
              </p>
              <Button 
                onClick={() => scrollToSection('volunteer')}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300"
              >
                DONATE NOW ❤️
              </Button>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Programs</h4>
              <ul className="space-y-3 text-purple-200">
                <li className="hover:text-white transition-colors cursor-pointer">Agricultural Recovery</li>
                <li className="hover:text-white transition-colors cursor-pointer">Food Drives</li>
                <li className="hover:text-white transition-colors cursor-pointer">School Feeding Programs</li>
                <li className="hover:text-white transition-colors cursor-pointer">Emergency Outreach Mission</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Get Involved</h4>
              <ul className="space-y-3 text-purple-200">
                <li>
                  <button 
                    onClick={() => scrollToSection('volunteer')}
                    className="hover:text-white transition-colors"
                  >
                    Volunteer
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('volunteer')}
                    className="hover:text-white transition-colors"
                  >
                    Donate
                  </button>
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">Partner with Us</li>
                <li className="hover:text-white transition-colors cursor-pointer">Corporate Sponsorship</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-purple-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-purple-200 text-sm">
                © 2024 Food Fairy Kenya. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <span className="text-purple-200 text-sm hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
                <span className="text-purple-200 text-sm hover:text-white transition-colors cursor-pointer">Terms of Service</span>
                <span className="text-purple-200 text-sm hover:text-white transition-colors cursor-pointer">Cookie Policy</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ModernLanding;
