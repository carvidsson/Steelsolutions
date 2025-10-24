import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/translations/translations";
import heroImage from "@/assets/hero-manufacturing.jpg";
import SEO from "@/components/SEO";
import AnimatedLogo from "@/components/AnimatedLogo";

const About = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen">
      <SEO 
        titleKey="seo_about_title"
        descriptionKey="seo_about_description"
        keywordsKey="seo_about_keywords"
        path="/about"
      />
      <Header />
      
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 lg:px-12 py-32">
          <p className="text-sm font-medium text-accent tracking-widest uppercase mb-4">
            {getTranslation(language, "about_page_title")}
          </p>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-foreground">
            AB Steelsolutions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            {getTranslation(language, "about_page_subtitle")}
          </p>
        </div>
      </section>

      {/* Company Identity with Animated Logo */}
      <section className="py-20 bg-gradient-to-b from-transparent via-background/50 to-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content - Left Column */}
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                {getTranslation(language, "about_identity_title")}
              </h2>
              <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                <p>{getTranslation(language, "about_identity_text")}</p>
              </div>
            </div>
            
            {/* Animated Logo - Right Column */}
            <div className="flex items-center justify-center lg:justify-end">
              <AnimatedLogo />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 animate-fade-in">
            <div className="lg:order-2">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                {getTranslation(language, "about_environment_title")}
              </h2>
              <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                <p>{getTranslation(language, "about_environment_text")}</p>
              </div>
            </div>
            <div className="lg:order-1">
              <div className="bg-muted p-12 rounded-sm">
                <blockquote className="text-2xl font-light text-foreground italic leading-relaxed">
                  "{getTranslation(language, "about_promise_text")}"
                </blockquote>
              </div>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              {getTranslation(language, "about_vision_title")}
            </h2>
            <div className="text-lg text-muted-foreground leading-relaxed space-y-4 max-w-4xl mx-auto">
              <p>{getTranslation(language, "about_vision_text")}</p>
            </div>
          </div>

          <div className="p-16 lg:p-24 rounded-sm" style={{ backgroundColor: '#efebe7' }}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-16 lg:mb-20 text-center text-graphite">
              {getTranslation(language, "about_stats_title")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 max-w-6xl mx-auto">
              <div className="text-center space-y-2 px-2">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-accent max-w-[16ch] mx-auto">
                  {getTranslation(language, "about_stat1")}
                </div>
                <div className="text-xs md:text-sm text-graphite leading-relaxed">
                  {getTranslation(language, "about_stat1_desc")}
                </div>
              </div>
              <div className="text-center space-y-2 px-2">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-accent max-w-[16ch] mx-auto">
                  {getTranslation(language, "about_stat2")}
                </div>
                <div className="text-xs md:text-sm text-graphite leading-relaxed">
                  {getTranslation(language, "about_stat2_desc")}
                </div>
              </div>
              <div className="text-center space-y-2 px-2">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-accent max-w-[16ch] mx-auto">
                  {getTranslation(language, "about_stat3")}
                </div>
                <div className="text-xs md:text-sm text-graphite leading-relaxed">
                  {getTranslation(language, "about_stat3_desc")}
                </div>
              </div>
              <div className="text-center space-y-2 px-2">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-accent max-w-[16ch] mx-auto">
                  {getTranslation(language, "about_stat4")}
                </div>
                <div className="text-xs md:text-sm text-graphite leading-relaxed">
                  {getTranslation(language, "about_stat4_desc")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
