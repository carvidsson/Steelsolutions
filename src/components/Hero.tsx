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
      
      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-background/20 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-8 lg:px-16 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center min-h-screen py-32">
          {/* Text Content - Scandinavian Minimal Design */}
          <div className="max-w-2xl animate-fade-in-up">
            <div className="space-y-16">
              <div className="space-y-8">
                <span className="inline-block text-accent text-sm tracking-[0.3em] uppercase font-light">
                  AB STEEL<span className="font-semibold">SOLUTIONS</span>
                </span>
                <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-medium text-foreground leading-[1.1] tracking-tight [text-shadow:_0_2px_20px_rgb(0_0_0_/_60%)]">
                  {getTranslation(language, "hero_title")}
                </h1>
              </div>
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed max-w-xl text-balance [text-shadow:_0_1px_10px_rgb(0_0_0_/_50%)] animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                {getTranslation(language, "hero_subtitle")}
              </p>
              <Button 
                asChild
                variant="outline"
                size="lg" 
                className="border-2 border-foreground/20 bg-background/10 backdrop-blur-sm text-foreground hover:bg-foreground hover:text-background px-10 py-6 text-base rounded-lg animate-fade-in-up transition-all duration-300"
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
