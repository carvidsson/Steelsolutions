import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/translations/translations";
import productsImage from "@/assets/products-warehouse.jpg";
import beamsImage from "@/assets/product-beams.jpg";

const ProductHighlights = () => {
  const { language } = useLanguage();

  const products = [
    {
      titleKey: "product1_title",
      descKey: "product1_desc",
      image: beamsImage
    },
    {
      titleKey: "product2_title",
      descKey: "product2_desc",
      image: productsImage
    },
    {
      titleKey: "product3_title",
      descKey: "product3_desc",
      image: productsImage
    }
  ];

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            {getTranslation(language, "products_title")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {getTranslation(language, "products_subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group bg-background rounded-sm overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={getTranslation(language, product.titleKey)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                  {getTranslation(language, product.titleKey)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {getTranslation(language, product.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;
