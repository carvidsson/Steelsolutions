import productsImage from "@/assets/products-warehouse.jpg";
import beamsImage from "@/assets/product-beams.jpg";

const NewsGrid = () => {
  const news = [
    {
      category: "Innovation",
      title: "New High-Strength Steel Alloy Development",
      date: "October 15, 2025",
      image: beamsImage,
      large: true
    },
    {
      category: "Sustainability",
      title: "Carbon-Neutral Manufacturing Initiative",
      date: "September 28, 2025",
    },
    {
      category: "Expansion",
      title: "Opening Nordic Production Facility",
      date: "September 12, 2025",
    },
    {
      category: "Technology",
      title: "Advanced CNC Automation Systems Deployed",
      date: "August 30, 2025",
      image: productsImage,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4">
            Latest Updates
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            News & Insights
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <article
              key={index}
              className={`group cursor-pointer ${
                item.large ? "md:col-span-2 md:row-span-2" : ""
              } ${item.image ? "relative overflow-hidden" : "bg-muted p-8"} rounded-sm transition-all hover:scale-[1.02]`}
            >
              {item.image ? (
                <>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite/90 via-graphite/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <span className="text-xs font-medium tracking-widest uppercase text-taupe mb-3 block">
                      {item.category}
                    </span>
                    <h3 className="font-heading text-2xl md:text-3xl font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-warmGray">{item.date}</p>
                  </div>
                </>
              ) : (
                <>
                  <span className="text-xs font-medium tracking-widest uppercase text-accent mb-4 block">
                    {item.category}
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.date}</p>
                </>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsGrid;
