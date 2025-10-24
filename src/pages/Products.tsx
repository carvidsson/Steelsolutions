import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/translations/translations";
import productsImage from "@/assets/products-warehouse.jpg";
import beamsImage from "@/assets/product-beams.jpg";
import SEO from "@/components/SEO";

const Products = () => {
  const { language } = useLanguage();

  const products = [
    {
      nameKey: "product_beam_name",
      categoryKey: "product_beam_category",
      descKey: "product_beam_desc",
      specs: ["product_beam_spec1", "product_beam_spec2", "product_beam_spec3"],
      image: beamsImage
    },
    {
      nameKey: "product_machined_name",
      categoryKey: "product_machined_category",
      descKey: "product_machined_desc",
      specs: ["product_machined_spec1", "product_machined_spec2", "product_machined_spec3"],
      image: productsImage
    },
    {
      nameKey: "product_plates_name",
      categoryKey: "product_plates_category",
      descKey: "product_plates_desc",
      specs: ["product_plates_spec1", "product_plates_spec2", "product_plates_spec3"],
      image: productsImage
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        titleKey="seo_products_title"
        descriptionKey="seo_products_description"
        keywordsKey="seo_products_keywords"
        path="/products"
      />
      <Header />
      
      <section className="bg-[#efebe7] py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <p className="text-sm font-medium text-accent tracking-widest uppercase mb-4">
            {getTranslation(language, "products_page_title")}
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {getTranslation(language, "products_page_hero")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {getTranslation(language, "products_page_subtitle")}
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="space-y-24">
            {products.map((product, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <img
                    src={product.image}
                    alt={getTranslation(language, product.nameKey)}
                    className="w-full h-[500px] object-cover rounded-sm"
                  />
                </div>
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div>
                    <span className="text-sm font-medium text-accent tracking-widest uppercase">
                      {getTranslation(language, product.categoryKey)}
                    </span>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
                      {getTranslation(language, product.nameKey)}
                    </h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {getTranslation(language, product.descKey)}
                  </p>
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">
                      {getTranslation(language, "products_specs_title")}
                    </h3>
                    <ul className="space-y-2">
                      {product.specs.map((specKey) => (
                        <li key={specKey} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3" />
                          <span className="text-foreground">{getTranslation(language, specKey)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button asChild className="bg-primary hover:bg-primary/90">
                    <Link to="/contact">
                      {getTranslation(language, "products_cta")}
                    </Link>
                  </Button>
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
