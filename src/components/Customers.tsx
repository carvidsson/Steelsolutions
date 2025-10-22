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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4">
                {getTranslation(language, "customers_partners_label")}
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
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
          
          <div className="bg-muted rounded-sm p-12 lg:p-16">
            <blockquote className="space-y-6">
              <p className="text-xl md:text-2xl font-light text-foreground leading-relaxed italic">
                "{getTranslation(language, clients[selectedClient].testimonialKey)}"
              </p>
              <footer className="text-sm text-muted-foreground">
                <div className="font-medium text-foreground">
                  {getTranslation(language, clients[selectedClient].authorKey)}
                </div>
                {getTranslation(language, clients[selectedClient].positionKey)}
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
