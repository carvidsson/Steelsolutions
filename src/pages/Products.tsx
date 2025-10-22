import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import productsImage from "@/assets/products-warehouse.jpg";
import beamsImage from "@/assets/product-beams.jpg";

const Products = () => {
  const products = [
    {
      name: "Structural Steel Beams",
      category: "Construction",
      description: "High-strength structural beams for buildings and infrastructure projects. Available in various profiles including I-beams, H-beams, and custom sections.",
      specs: ["Grade: S355, S460", "Length: Up to 18m", "Custom fabrication available"],
      image: beamsImage
    },
    {
      name: "Precision Machined Components",
      category: "Manufacturing",
      description: "CNC-machined parts with exceptional tolerances for aerospace, automotive, and industrial applications.",
      specs: ["Tolerance: ±0.01mm", "Materials: Steel, aluminum, titanium", "5-axis machining capability"],
      image: productsImage
    },
    {
      name: "Steel Plates & Sheets",
      category: "Materials",
      description: "Premium quality steel plates and sheets in various thicknesses and grades for diverse industrial applications.",
      specs: ["Thickness: 3-100mm", "Surface: Hot rolled, cold rolled", "Certified materials"],
      image: productsImage
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-16 bg-graphite text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <p className="text-sm font-medium text-taupe tracking-widest uppercase mb-4">Our Products</p>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            Engineered Solutions
          </h1>
          <p className="text-xl text-offWhite max-w-3xl leading-relaxed">
            Comprehensive range of steel products and precision manufacturing services designed for the most demanding applications
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="space-y-24">
            {products.map((product, index) => (
              <div
                key={product.name}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[500px] object-cover rounded-sm"
                  />
                </div>
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div>
                    <span className="text-sm font-medium text-accent tracking-widest uppercase">
                      {product.category}
                    </span>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
                      {product.name}
                    </h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Technical Specifications</h3>
                    <ul className="space-y-2">
                      {product.specs.map((spec) => (
                        <li key={spec} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3" />
                          <span className="text-foreground">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90">Request Quote</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
