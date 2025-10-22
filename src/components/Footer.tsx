import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/translations/translations";
import logo from "@/assets/ab_logo.svg";

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-graphite text-white">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <img src={logo} alt="AB Steelsolutions" className="h-8 w-auto mb-4" />
            <p className="text-sm text-muted-foreground max-w-xs">
              {getTranslation(language, "footer_tagline")}
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold text-foreground mb-4 tracking-wide uppercase">
              {getTranslation(language, "nav_about")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  {getTranslation(language, "footer_about")}
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  {getTranslation(language, "footer_products")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  {getTranslation(language, "footer_contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold text-foreground mb-4 tracking-wide uppercase">
              {getTranslation(language, "nav_contact")}
            </h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://www.linkedin.com/company/ab-steelsolutions" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@absteelsolutions.se"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold text-foreground mb-4 tracking-wide uppercase">
              {getTranslation(language, "footer_location")}
            </h3>
            <p className="text-sm text-muted-foreground">
              {getTranslation(language, "footer_location")}
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} AB Steelsolutions. {getTranslation(language, "footer_rights")}.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                {getTranslation(language, "footer_privacy")}
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                {getTranslation(language, "footer_terms")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
