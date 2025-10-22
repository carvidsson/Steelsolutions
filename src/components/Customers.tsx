const Customers = () => {
  const clients = [
    "Rheinmetall",
    "Volvo Group",
    "ABB",
    "Scania",
    "Sandvik",
    "Atlas Copco"
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
                  key={client}
                  className="text-2xl font-heading font-medium text-foreground hover:text-accent transition-colors cursor-pointer animate-slide-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {client}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-muted rounded-sm p-12 lg:p-16">
            <blockquote className="space-y-6">
              <p className="text-xl md:text-2xl font-light text-foreground leading-relaxed italic">
                "AB Steelsolutions delivers uncompromising quality and precision. Their engineering expertise has been instrumental in our advanced manufacturing processes."
              </p>
              <footer className="text-sm text-muted-foreground">
                <div className="font-medium text-foreground">Henrik Johansson</div>
                Chief Engineering Officer, Volvo Group
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
