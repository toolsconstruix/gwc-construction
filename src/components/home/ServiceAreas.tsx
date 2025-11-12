import { Link } from "react-router-dom";
import { MapPin, CheckCircle } from "lucide-react";

const ServiceAreas = () => {
  const areas = [
    { name: "Wellesley", description: "Premium kitchen & bath remodeling" },
    { name: "Weston", description: "Luxury home renovations" },
    { name: "Winchester", description: "Custom remodeling services" },
    { name: "Newton", description: "Kitchen & bathroom specialists" },
    { name: "Lexington", description: "High-end home improvements" },
    { name: "Needham", description: "Professional remodeling" },
    { name: "Brookline", description: "Residential renovation experts" },
    { name: "Belmont", description: "Quality craftsmanship" },
  ];

  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6">Proudly Serving Massachusetts' Premier Communities</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We specialize in high-end remodeling for discerning homeowners in Greater Boston and MetroWest Massachusetts. 
              Our reputation for punctuality, cleanliness, and exceptional craftsmanship has made us the contractor of choice 
              in the area's most prestigious neighborhoods.
            </p>
            <div className="flex items-start gap-3 mb-4">
              <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
              <p className="text-foreground">Licensed, insured, and bonded for your protection</p>
            </div>
            <div className="flex items-start gap-3 mb-4">
              <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
              <p className="text-foreground">Local team with deep community roots</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
              <p className="text-foreground">Familiar with local building codes and permit requirements</p>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-4">
              {areas.map((area, index) => (
                <Link
                  key={index}
                  to={`/service-areas/${area.name.toLowerCase()}`}
                  className="p-4 border border-border rounded-lg hover:border-primary hover:shadow-medium transition-all duration-300 group"
                >
                  <div className="flex items-start gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                      {area.name}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{area.description}</p>
                </Link>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link
                to="/service-areas"
                className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors"
              >
                View All Service Areas →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
