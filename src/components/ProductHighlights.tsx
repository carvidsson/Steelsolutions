import productsImage from "@/assets/products-warehouse.jpg";
import beamsImage from "@/assets/product-beams.jpg";

const ProductHighlights = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4">
            Our Solutions
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Engineered for Excellence
          </h2>
        </div>

        <div className="space-y-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={beamsImage}
                alt="Structural steel beams"
                className="w-full h-[500px] object-cover rounded-sm"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Structural Steel
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                High-performance structural steel solutions designed for critical infrastructure and demanding industrial applications.
              </p>
              <ul className="space-y-3">
                {["Grade S355 & S460 certified", "Custom dimensions available", "ISO 9001 quality assurance"].map(
                  (spec) => (
                    <li key={spec} className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3" />
                      <span className="text-foreground">{spec}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Precision Components
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                CNC-machined components manufactured to exact specifications with tolerances down to ±0.01mm for aerospace and automotive industries.
              </p>
              <ul className="space-y-3">
                {["5-axis CNC machining", "Material traceability", "Rapid prototyping services"].map((spec) => (
                  <li key={spec} className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3" />
                    <span className="text-foreground">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src={productsImage}
                alt="Precision manufacturing"
                className="w-full h-[500px] object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;
