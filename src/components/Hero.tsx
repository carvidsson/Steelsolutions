import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/translations/translations";
import heroImage from "@/assets/hero-manufacturing.jpg";

const Hero = () => {
  const { language } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-graphite/70" />
      </div>
      
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in-up">
          {getTranslation(language, "hero_title")}
        </h1>
        <p className="text-xl md:text-2xl text-offWhite max-w-3xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          {getTranslation(language, "hero_subtitle")}
        </p>
        <Button 
          size="lg" 
          className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-base animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          {getTranslation(language, "hero_cta")}
        </Button>
      </div>
    </section>
  );
};

export default Hero;
