import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/translations/translations";
import productsImage from "@/assets/products-warehouse.jpg";
import beamsImage from "@/assets/product-beams.jpg";
import heroImage from "@/assets/hero-manufacturing.jpg";

const NewsGrid = () => {
  const { language } = useLanguage();

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {news.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-sm cursor-pointer animate-fade-in ${
                item.large ? "md:col-span-2 h-[500px]" : "h-[400px]"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={item.image}
                alt={getTranslation(language, item.titleKey)}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite/90 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                <span className="text-xs font-medium text-accent tracking-widest uppercase mb-3 block">
                  {getTranslation(language, item.categoryKey)}
                </span>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3">
                  {getTranslation(language, item.titleKey)}
                </h3>
                <p className="text-offWhite leading-relaxed">
                  {getTranslation(language, item.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsGrid;
