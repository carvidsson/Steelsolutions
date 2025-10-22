import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-manufacturing.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-16 bg-graphite text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <p className="text-sm font-medium text-taupe tracking-widest uppercase mb-4">About Us</p>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            Nordic Precision<br />Engineering Excellence
          </h1>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div>
              <img
                src={heroImage}
                alt="Manufacturing facility"
                className="w-full h-[600px] object-cover rounded-sm"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Identity
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Founded in Stockholm, AB Steelsolutions represents the pinnacle of Nordic engineering tradition combined with cutting-edge manufacturing technology.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We specialize in precision steel manufacturing and engineering solutions for industries where quality and reliability are non-negotiable.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
            <div className="space-y-6">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Vision & Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the leading provider of precision steel solutions in Northern Europe, setting the standard for quality, innovation, and sustainability in manufacturing.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed italic">
                "We believe that precision is not just about measurements—it's about commitment to excellence in every aspect of our work."
              </p>
            </div>
            
            <div className="space-y-6">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Our Promise
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every component, every beam, every solution we deliver carries our commitment to precision, quality, and reliability. We stand behind our work with comprehensive quality assurance and full material traceability.
              </p>
            </div>
          </div>

          <div className="bg-muted p-12 lg:p-16 rounded-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              <div>
                <div className="font-heading text-5xl font-bold text-foreground mb-2">25+</div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Years Experience</p>
              </div>
              <div>
                <div className="font-heading text-5xl font-bold text-foreground mb-2">500+</div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Active Clients</p>
              </div>
              <div>
                <div className="font-heading text-5xl font-bold text-foreground mb-2">15k+</div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Projects Delivered</p>
              </div>
              <div>
                <div className="font-heading text-5xl font-bold text-foreground mb-2">ISO</div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">9001 Certified</p>
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
