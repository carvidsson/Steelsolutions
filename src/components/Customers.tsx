import { useState } from "react";

const Customers = () => {
  const [selectedClient, setSelectedClient] = useState(0);

  const clients = [
    {
      name: "Rheinmetall",
      testimonial: "AB Steelsolutions delivers uncompromising quality and precision. Their engineering expertise has been instrumental in our defense systems manufacturing.",
      author: "Dr. Klaus Werner",
      position: "Head of Production Engineering, Rheinmetall"
    },
    {
      name: "Volvo Group",
      testimonial: "AB Steelsolutions delivers uncompromising quality and precision. Their engineering expertise has been instrumental in our advanced manufacturing processes.",
      author: "Henrik Johansson",
      position: "Chief Engineering Officer, Volvo Group"
    },
    {
      name: "ABB",
      testimonial: "The precision and reliability of AB Steelsolutions' components are exceptional. They understand the demands of high-performance industrial applications.",
      author: "Emma Andersson",
      position: "Global Sourcing Director, ABB"
    },
    {
      name: "Scania",
      testimonial: "Outstanding quality and on-time delivery. AB Steelsolutions has been a trusted partner in our heavy vehicle manufacturing for years.",
      author: "Lars Bergström",
      position: "Supply Chain Manager, Scania"
    },
    {
      name: "Sandvik",
      testimonial: "Their technical expertise and commitment to excellence align perfectly with our standards. A reliable partner for critical components.",
      author: "Sofia Lindqvist",
      position: "Materials Engineering Lead, Sandvik"
    },
    {
      name: "Atlas Copco",
      testimonial: "AB Steelsolutions consistently exceeds expectations. Their precision machining capabilities are world-class.",
      author: "Anders Svensson",
      position: "Engineering Director, Atlas Copco"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4">
                Trusted Partners
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                Industry Leaders Trust Our Precision
              </h2>
            </div>
            <ul className="space-y-4">
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
          </div>
          
          <div className="bg-muted rounded-sm p-12 lg:p-16">
            <blockquote className="space-y-6">
              <p className="text-xl md:text-2xl font-light text-foreground leading-relaxed italic">
                "{clients[selectedClient].testimonial}"
              </p>
              <footer className="text-sm text-muted-foreground">
                <div className="font-medium text-foreground">{clients[selectedClient].author}</div>
                {clients[selectedClient].position}
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
