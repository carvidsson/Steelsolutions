import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/translations/translations";
import heroImage from "@/assets/hero-absteel.png";

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
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-8 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center min-h-screen py-40">
          {/* Text Content - Left Side Clean Design */}
          <div className="bg-background border border-border/50 rounded-3xl p-12 md:p-16 shadow-sm animate-fade-in-up max-w-2xl">
            <div className="space-y-12">
              <div className="space-y-6">
                <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-normal tracking-wider uppercase rounded-lg border border-accent/20">
                  {getTranslation(language, "hero_label")}
                </span>
                <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-medium text-foreground leading-tight">
                  {getTranslation(language, "hero_title")}
                </h1>
              </div>
              <p className="text-lg md:text-xl text-muted-foreground leading-loose animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                {getTranslation(language, "hero_subtitle")}
              </p>
              <Button 
                asChild
                size="lg" 
                className="bg-accent hover:bg-accent/80 text-white px-10 py-6 text-base animate-fade-in-up"
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
