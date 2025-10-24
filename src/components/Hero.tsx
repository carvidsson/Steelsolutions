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
          {/* Text Content - Left Side with Glassmorphism */}
          <div className="backdrop-blur-xl bg-background/80 border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl animate-fade-in-up max-w-xl">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-medium tracking-widest uppercase rounded-full border border-accent/20">
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
                className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-base animate-fade-in-up rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                style={{ animationDelay: "0.4s" }}
              >
                <Link to="/contact">
                  {getTranslation(language, "hero_cta")}
                </Link>
              </Button>
            </div>
          </div>

          {/* Right side - empty space for background to show through */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
