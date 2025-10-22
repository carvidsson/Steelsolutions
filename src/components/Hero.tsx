import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-manufacturing.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-graphite">
        <img 
          src={heroImage} 
          alt="Precision manufacturing"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-graphite/40 via-transparent to-graphite/80" />
      </div>
      
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight animate-fade-in-up">
          Precision in<br />Every Detail
        </h1>
        <p className="text-lg md:text-xl text-offWhite max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Nordic engineering excellence meets advanced steel manufacturing technology
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button size="lg" className="bg-taupe hover:bg-taupe/90 text-graphite font-medium px-8">
            Explore Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
            Contact Us
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
