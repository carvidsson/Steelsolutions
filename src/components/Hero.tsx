import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/translations/translations";
import heroImage from "@/assets/hero-bright-manufacturing.jpg";

interface HeroProps {
  videoSrc?: string;
  useVideo?: boolean;
}

const Hero = ({ videoSrc, useVideo = false }: HeroProps = {}) => {
  const { language } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image or Video */}
      {useVideo && videoSrc ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
      )}
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-32">
          {/* Text Content - Left Side */}
          <div className="space-y-8 animate-fade-in-up max-w-xl">
            <div className="space-y-4">
              <span className="text-sm font-medium text-accent tracking-widest uppercase">
                {getTranslation(language, "hero_label")}
              </span>
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                {getTranslation(language, "hero_title")}
              </h1>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
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

          {/* Right side - empty space for background to show through */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
