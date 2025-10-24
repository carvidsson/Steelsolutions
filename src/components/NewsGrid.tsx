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
    <section className="py-40 bg-background">
      <div className="container mx-auto px-8 lg:px-12 max-w-7xl">
        <div className="max-w-2xl mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground mb-8 leading-tight">
            {getTranslation(language, "news_title")}
          </h2>
          <p className="text-lg text-muted-foreground leading-loose">
            {getTranslation(language, "news_subtitle")}
          </p>
        </div>

        {/* Desktop: Grid layout with Bento-style */}
        <div className="hidden lg:grid grid-cols-3 gap-10">
          {news.map((item, index) => (
            <div
              key={index}
              className={`group bg-background overflow-hidden rounded-3xl cursor-pointer animate-fade-in border border-border/50 hover:border-accent/30 transition-all duration-300 ${
                item.large ? "col-span-2 row-span-2" : "col-span-1"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6 bg-muted">
                <div className={`overflow-hidden rounded-2xl border border-border/30 ${item.large ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
                  <img
                    src={item.image}
                    alt={getTranslation(language, item.titleKey)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className={`${item.large ? "p-12" : "p-8"} space-y-4`}>
                <span className="inline-block px-3 py-1.5 bg-accent/10 text-accent text-xs font-normal tracking-wide uppercase rounded-lg">
                  {getTranslation(language, item.categoryKey)}
                </span>
                <h3 className={`font-heading font-medium text-foreground ${item.large ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"}`}>
                  {getTranslation(language, item.titleKey)}
                </h3>
                <p className="text-muted-foreground leading-loose text-sm md:text-base">
                  {getTranslation(language, item.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet: Carousel */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {news.map((item, index) => (
                <div 
                  key={index}
                  className="flex-[0_0_100%] min-w-0"
                >
                  <div className="group bg-background overflow-hidden rounded-3xl border border-border/50">
                    <div className="p-6 bg-muted">
                      <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border/30">
                        <img
                          src={item.image}
                          alt={getTranslation(language, item.titleKey)}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="p-8 space-y-4">
                      <span className="inline-block px-3 py-1.5 bg-accent/10 text-accent text-xs font-normal tracking-wide uppercase rounded-lg">
                        {getTranslation(language, item.categoryKey)}
                      </span>
                      <h3 className="font-heading text-2xl font-medium text-foreground">
                        {getTranslation(language, item.titleKey)}
                      </h3>
                      <p className="text-muted-foreground leading-loose text-sm">
                        {getTranslation(language, item.descKey)}
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

export default NewsGrid;
