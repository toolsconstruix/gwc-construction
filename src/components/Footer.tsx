import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import LogoWhite from "@/assets/logo_gwc_white_600x267.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { to: "/services/kitchen", label: "Kitchen Remodeling" },
    { to: "/services/bathroom", label: "Bathroom Remodeling" },
    { to: "/services/carpentry", label: "Carpentry & Finish Work" },
    { to: "/services/flooring", label: "Flooring" },
    { to: "/services/painting", label: "Painting" },
  ];

  const companyLinks = [
    { to: "/about", label: "About Us" },
    { to: "/projects", label: "Our Projects" },
    { to: "/reviews", label: "Reviews" },
    { to: "/blog", label: "Blog" },
    { to: "/faq", label: "FAQ" },
  ];

  const serviceAreas = [
    "Wellesley", "Weston", "Winchester", "Newton", 
    "Lexington", "Needham", "Brookline", "Belmont"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto container-padding section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="text-left">
            <div className="flex flex-col mb-6 items-start">
              <img src={LogoWhite} alt="GWC Construction" className="h-10 w-auto object-contain" />
            </div>
            <p className="text-sm opacity-90 mb-6">
              On-time, organized kitchen & bathroom remodeling for Massachusetts' finest homes.
            </p>
            <div className="space-y-3">
              <a href="tel:+15555555555" className="flex items-center text-sm hover:opacity-80 transition-opacity">
                <Phone className="w-4 h-4 mr-2" />
                (555) 555-5555
              </a>
              <a href="mailto:leads@gwcconstruction.com" className="flex items-center text-sm hover:opacity-80 transition-opacity">
                <Mail className="w-4 h-4 mr-2" />
                leads@gwcconstruction.com
              </a>
              <div className="flex items-start text-sm">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <span>Serving Greater Boston & MetroWest Massachusetts</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-bold mb-6">Service Areas</h3>
            <ul className="grid grid-cols-2 gap-2">
              {serviceAreas.map((area) => (
                <li key={area}>
                  <Link to={`/service-areas/${area.toLowerCase()}`} className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/service-areas" className="inline-block mt-4 text-sm font-semibold hover:opacity-80 transition-opacity">
              View All Areas →
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-90">
              © {currentYear} GWC Construction. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                Terms of Service
              </Link>
            </div>
          </div>
          <p className="text-xs opacity-75 mt-4 text-center md:text-left">
            Licensed & Insured • CSL #123456 • Fully Bonded
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
