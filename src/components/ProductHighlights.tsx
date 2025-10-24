import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/translations/translations";
import productsImage from "@/assets/products-warehouse.jpg";
import beamsImage from "@/assets/product-beams.jpg";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const ProductHighlights = () => {
  const { language } = useLanguage();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const products = [
    {
      titleKey: "product1_title",
      descKey: "product1_desc",
      image: beamsImage,
      category: "Specialstål"
    },
    {
      titleKey: "product2_title",
      descKey: "product2_desc",
      image: productsImage,
      category: "Bearbetning"
    },
    {
      titleKey: "product3_title",
      descKey: "product3_desc",
      image: productsImage,
      category: "Logistik"
    }
  ];

  return (
    <section className="py-40 bg-muted">
      <div className="container mx-auto px-8 lg:px-12 max-w-7xl">
        <div className="max-w-2xl mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground mb-8 leading-tight">
            {getTranslation(language, "products_title")}
          </h2>
          <p className="text-lg text-muted-foreground leading-loose">
            {getTranslation(language, "products_subtitle")}
          </p>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group bg-background rounded-3xl overflow-hidden transition-all duration-300 animate-fade-in shadow-sm hover:shadow-md"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={getTranslation(language, product.titleKey)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8 space-y-5">
                <span className="inline-block px-3 py-1.5 bg-accent/10 text-accent text-xs font-normal tracking-wide uppercase rounded-lg">
                  {product.category}
                </span>
                <h3 className="font-heading text-2xl font-medium text-foreground leading-snug">
                  {getTranslation(language, product.titleKey)}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {getTranslation(language, product.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet: Carousel */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {products.map((product, index) => (
                <div 
                  key={index}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%]"
                >
                  <div className="group bg-background rounded-3xl overflow-hidden transition-all duration-300 shadow-sm">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={getTranslation(language, product.titleKey)}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8 space-y-5">
                      <span className="inline-block px-3 py-1.5 bg-accent/10 text-accent text-xs font-normal tracking-wide uppercase rounded-lg">
                        {product.category}
                      </span>
                      <h3 className="font-heading text-2xl font-medium text-foreground leading-snug">
                        {getTranslation(language, product.titleKey)}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {getTranslation(language, product.descKey)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center gap-2 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;
