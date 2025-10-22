import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Customers from "@/components/Customers";
import ProductHighlights from "@/components/ProductHighlights";
import NewsGrid from "@/components/NewsGrid";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        titleKey="seo_home_title"
        descriptionKey="seo_home_description"
        keywordsKey="seo_home_keywords"
        path="/"
      />
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
