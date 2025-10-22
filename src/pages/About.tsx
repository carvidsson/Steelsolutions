import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/translations/translations";
import heroImage from "@/assets/hero-manufacturing.jpg";

const About = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-16 bg-graphite text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <p className="text-sm font-medium text-taupe tracking-widest uppercase mb-4">
            {getTranslation(language, "about_page_title")}
          </p>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            AB Steelsolutions
          </h1>
          <p className="text-xl text-offWhite max-w-3xl leading-relaxed">
            {getTranslation(language, "about_page_subtitle")}
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                {getTranslation(language, "about_identity_title")}
              </h2>
              <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                {getTranslation(language, "about_identity_text").split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div>
              <img 
                src={heroImage} 
                alt="AB Steelsolutions facility" 
                className="w-full h-[500px] object-cover rounded-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="lg:order-2">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                {getTranslation(language, "about_vision_title")}
              </h2>
              <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                {getTranslation(language, "about_vision_text").split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
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

          <div className="bg-graphite text-white p-12 lg:p-16 rounded-sm">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">
              {getTranslation(language, "about_stats_title")}
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {getTranslation(language, "about_stat1")}
                </div>
                <div className="text-sm text-offWhite">
                  {getTranslation(language, "about_stat1_desc")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {getTranslation(language, "about_stat2")}
                </div>
                <div className="text-sm text-offWhite">
                  {getTranslation(language, "about_stat2_desc")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {getTranslation(language, "about_stat3")}
                </div>
                <div className="text-sm text-offWhite">
                  {getTranslation(language, "about_stat3_desc")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {getTranslation(language, "about_stat4")}
                </div>
                <div className="text-sm text-offWhite">
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
