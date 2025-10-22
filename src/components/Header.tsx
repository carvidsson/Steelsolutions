import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/translations/translations";
import logo from "@/assets/ab_logo.svg";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: getTranslation(language, "nav_home"), path: "/" },
    { name: getTranslation(language, "nav_products"), path: "/products" },
    { name: getTranslation(language, "nav_about"), path: "/about" },
    { name: getTranslation(language, "nav_contact"), path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} alt="AB Steelsolutions" className="h-8 w-auto" />
        </Link>

        <div className="flex items-center space-x-8">
          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`text-sm font-medium tracking-wide transition-colors hover:text-accent ${
                    location.pathname === item.path ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center space-x-2 border border-border rounded-sm">
            <button
              onClick={() => setLanguage('sv')}
              className={`px-3 py-1.5 text-xs font-medium tracking-wide transition-colors rounded-sm ${
                language === 'sv' 
                  ? 'bg-accent text-white' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              SV
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1.5 text-xs font-medium tracking-wide transition-colors rounded-sm ${
                language === 'en' 
                  ? 'bg-accent text-white' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              EN
            </button>
          </div>
        </div>

        <button className="md:hidden text-foreground">
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;
