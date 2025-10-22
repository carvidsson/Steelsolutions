import { Link } from "react-router-dom";
import logo from "@/assets/ab_logo.svg";

const Footer = () => {
  return (
    <footer className="bg-graphite text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <img src={logo} alt="AB Steelsolutions" className="h-10 w-auto mb-6 brightness-0 invert" />
            <p className="text-sm text-warmGray leading-relaxed">
              Precision engineering and steel manufacturing solutions for demanding applications.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-heading font-semibold mb-4 tracking-wide">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-warmGray hover:text-taupe transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-warmGray hover:text-taupe transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-warmGray hover:text-taupe transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-heading font-semibold mb-4 tracking-wide">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://linkedin.com" className="text-sm text-warmGray hover:text-taupe transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:info@absteelsolutions.com" className="text-sm text-warmGray hover:text-taupe transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-heading font-semibold mb-4 tracking-wide">Location</h3>
            <p className="text-sm text-warmGray leading-relaxed">
              Stockholm, Sweden<br />
              Precision Manufacturing District
            </p>
          </div>
        </div>

        <div className="border-t border-warmGray/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-warmGray">
            © {new Date().getFullYear()} AB Steelsolutions. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-warmGray hover:text-taupe transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-warmGray hover:text-taupe transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
