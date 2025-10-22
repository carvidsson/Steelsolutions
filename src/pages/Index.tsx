import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Customers from "@/components/Customers";
import ProductHighlights from "@/components/ProductHighlights";
import NewsGrid from "@/components/NewsGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Customers />
      <ProductHighlights />
      <NewsGrid />
      <Footer />
    </div>
  );
};

export default Index;
