import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/translations/translations";
import productsImage from "@/assets/products-warehouse.jpg";
import beamsImage from "@/assets/product-beams.jpg";
import heroImage from "@/assets/hero-manufacturing.jpg";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const NewsGrid = () => {
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

  const news = [
    {
      categoryKey: "news1_category",
      titleKey: "news1_title",
      descKey: "news1_desc",
      image: heroImage,
      large: true
    },
    {
      categoryKey: "news2_category",
      titleKey: "news2_title",
      descKey: "news2_desc",
      image: productsImage,
      large: false
    },
    {
      categoryKey: "news3_category",
      titleKey: "news3_title",
      descKey: "news3_desc",
      image: beamsImage,
      large: false
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            {getTranslation(language, "news_title")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {getTranslation(language, "news_subtitle")}
          </p>
        </div>

        {/* Desktop: Grid layout with Bento-style */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {news.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer animate-fade-in border border-border/20 shadow-lg hover:shadow-2xl transition-all duration-500 ${
                item.large ? "col-span-2 row-span-2 h-[600px]" : "col-span-1 h-[290px]"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={item.image}
                alt={getTranslation(language, item.titleKey)}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite/95 via-graphite/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <div className="backdrop-blur-sm bg-background/10 rounded-xl p-4 border border-white/10">
                  <span className="inline-block px-3 py-1 bg-accent/90 text-white text-xs font-medium tracking-widest uppercase rounded-full mb-3 shadow-lg">
                    {getTranslation(language, item.categoryKey)}
                  </span>
                  <h3 className={`font-heading font-bold text-white mb-2 ${item.large ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"}`}>
                    {getTranslation(language, item.titleKey)}
                  </h3>
                  <p className="text-offWhite leading-relaxed text-sm md:text-base">
                    {getTranslation(language, item.descKey)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet: Carousel */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {news.map((item, index) => (
                <div 
                  key={index}
                  className="flex-[0_0_100%] min-w-0 px-2"
                >
                  <div className="group relative overflow-hidden rounded-2xl cursor-pointer h-[400px] border border-border/20 shadow-lg">
                    <img
                      src={item.image}
                      alt={getTranslation(language, item.titleKey)}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-graphite/95 via-graphite/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="backdrop-blur-sm bg-background/10 rounded-xl p-4 border border-white/10">
                        <span className="inline-block px-3 py-1 bg-accent/90 text-white text-xs font-medium tracking-widest uppercase rounded-full mb-3 shadow-lg">
                          {getTranslation(language, item.categoryKey)}
                        </span>
                        <h3 className="font-heading text-2xl font-bold text-white mb-2">
                          {getTranslation(language, item.titleKey)}
                        </h3>
                        <p className="text-offWhite leading-relaxed text-sm">
                          {getTranslation(language, item.descKey)}
                        </p>
                      </div>
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

export default NewsGrid;
