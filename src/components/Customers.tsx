import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/translations/translations";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const Customers = () => {
  const { language } = useLanguage();
  const [selectedClient, setSelectedClient] = useState(0);

  const clients = [
    {
      name: "Rheinmetall",
      testimonialKey: "client_rheinmetall",
      authorKey: "client_rheinmetall_author",
      positionKey: "client_rheinmetall_position"
    },
    {
      name: "Volvo Group",
      testimonialKey: "client_volvo",
      authorKey: "client_volvo_author",
      positionKey: "client_volvo_position"
    },
    {
      name: "ABB",
      testimonialKey: "client_abb",
      authorKey: "client_abb_author",
      positionKey: "client_abb_position"
    },
    {
      name: "Scania",
      testimonialKey: "client_scania",
      authorKey: "client_scania_author",
      positionKey: "client_scania_position"
    },
    {
      name: "Sandvik",
      testimonialKey: "client_sandvik",
      authorKey: "client_sandvik_author",
      positionKey: "client_sandvik_position"
    },
    {
      name: "Atlas Copco",
      testimonialKey: "client_atlascopco",
      authorKey: "client_atlascopco_author",
      positionKey: "client_atlascopco_position"
    }
  ];

  return (
    <section className="py-40 bg-background">
      <div className="container mx-auto px-8 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div>
              <p className="text-sm font-normal text-muted-foreground tracking-wider uppercase mb-6">
                {getTranslation(language, "customers_partners_label")}
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground mb-8 leading-tight">
                {getTranslation(language, "customers_title")}
              </h2>
            </div>
            
            {/* Desktop: Vertical list */}
            <ul className="hidden md:flex md:flex-col space-y-4">
              {clients.map((client, index) => (
                <li 
                  key={client.name}
                  onClick={() => setSelectedClient(index)}
                  className={`text-2xl font-heading font-medium transition-colors cursor-pointer animate-slide-in ${
                    selectedClient === index ? 'text-accent' : 'text-foreground hover:text-accent'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {client.name}
                </li>
              ))}
            </ul>

            {/* Mobile: Horizontal scroll */}
            <ScrollArea className="md:hidden w-full whitespace-nowrap">
              <div className="flex gap-4 pb-4">
                {clients.map((client, index) => (
                  <button
                    key={client.name}
                    onClick={() => setSelectedClient(index)}
                    className={`text-xl font-heading font-medium transition-colors px-6 py-3 rounded-sm ${
                      selectedClient === index 
                        ? 'text-accent bg-accent/10' 
                        : 'text-foreground hover:text-accent hover:bg-accent/5'
                    }`}
                  >
                    {client.name}
                  </button>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
          
          <div className="bg-background rounded-3xl p-12 lg:p-16 border border-border/50">
            <blockquote className="space-y-8">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-accent fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <svg className="w-14 h-14 text-accent/15 mb-6" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-xl md:text-2xl font-light text-foreground leading-loose">
                {getTranslation(language, clients[selectedClient].testimonialKey)}
              </p>
              <footer className="flex items-center gap-5 pt-6 border-t border-border/30">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-heading text-lg font-medium">
                    {getTranslation(language, clients[selectedClient].authorKey).charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-foreground text-lg">
                    {getTranslation(language, clients[selectedClient].authorKey)}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {getTranslation(language, clients[selectedClient].positionKey)}
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
