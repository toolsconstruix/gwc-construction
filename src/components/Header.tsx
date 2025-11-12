import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/assets/logo_gwc_600x287.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/projects", label: "Projects" },
    { to: "/reviews", label: "Reviews" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-card shadow-medium" : "bg-card/95 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto container-padding">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={Logo} alt="GWC Construction" className="h-12 xl-1366:h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl-1366:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === link.to ? "text-primary" : "text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          {/* 1366px Navigation - Reduced spacing */}
          <nav className="hidden lg:flex xl-1366:hidden items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "text-xs font-medium transition-colors hover:text-primary",
                  location.pathname === link.to ? "text-primary" : "text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden xl-1366:flex items-center space-x-4">
            <a href="tel:+15555555555" className="flex items-center text-sm font-medium text-primary hover:text-primary/80">
              <Phone className="w-4 h-4 mr-2" />
              (555) 555-5555
            </a>
            <Button asChild variant="cta" size="lg">
              <Link to="/contact">Request a Quote</Link>
            </Button>
          </div>
          
          {/* 1366px CTA Buttons - Smaller */}
          <div className="hidden lg:flex xl-1366:hidden items-center space-x-3">
            <a href="tel:+15555555555" className="flex items-center text-xs font-medium text-primary hover:text-primary/80">
              <Phone className="w-3 h-3 mr-1" />
              (555) 555-5555
            </a>
            <Button asChild variant="cta" size="sm">
              <Link to="/contact">Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "block py-3 text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === link.to ? "text-primary" : "text-foreground"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 space-y-3">
              <a
                href="tel:+15555555555"
                className="flex items-center text-sm font-medium text-primary hover:text-primary/80"
              >
                <Phone className="w-4 h-4 mr-2" />
                (555) 555-5555
              </a>
              <Button asChild variant="cta" size="lg" className="w-full">
                <Link to="/contact">Request a Quote</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
