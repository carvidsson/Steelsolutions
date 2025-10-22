import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/translations/translations";
import heroImage from "@/assets/hero-bright-manufacturing.jpg";

const Hero = () => {
  const { language } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-32">
          {/* Text Content - Left Side */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <span className="text-sm font-medium text-accent tracking-widest uppercase">
                {getTranslation(language, "hero_label")}
              </span>
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                {getTranslation(language, "hero_title")}
              </h1>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed" style={{ animationDelay: "0.2s" }}>
              {getTranslation(language, "hero_subtitle")}
            </p>
            <Button 
              asChild
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-base animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Link to="/contact">
                {getTranslation(language, "hero_cta")}
              </Link>
            </Button>
          </div>

          {/* Image - Right Side */}
          <div className="relative h-[600px] lg:h-[700px] animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <img 
              src={heroImage} 
              alt="AB Steelsolutions Manufacturing"
              className="w-full h-full object-cover rounded-sm shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
