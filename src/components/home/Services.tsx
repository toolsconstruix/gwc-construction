import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChefHat, Bath, Hammer, Boxes, Paintbrush } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: ChefHat,
      title: "Kitchen Remodeling",
      description: "Transform your kitchen into the heart of your home with custom cabinetry, premium countertops, and flawless execution.",
      link: "/services/kitchen",
    },
    {
      icon: Bath,
      title: "Bathroom Remodeling",
      description: "Create your personal spa retreat with luxury fixtures, elegant tile work, and meticulous attention to detail.",
      link: "/services/bathroom",
    },
    {
      icon: Hammer,
      title: "Carpentry & Finish Work",
      description: "Custom built-ins, crown molding, wainscoting, and finish carpentry that adds character and value.",
      link: "/services/carpentry",
    },
    {
      icon: Boxes,
      title: "Flooring",
      description: "Hardwood, tile, luxury vinyl—expertly installed flooring that complements your design vision.",
      link: "/services/flooring",
    },
    {
      icon: Paintbrush,
      title: "Painting",
      description: "Professional interior painting with premium finishes that complete your remodel beautifully.",
      link: "/services/painting",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-6">Our Services</h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive remodeling solutions for every space in your home
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-8 hover:shadow-strong transition-all duration-300 group border-border/50">
              <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                <service.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
              <Button asChild variant="link" className="p-0 h-auto font-semibold group/btn">
                <Link to={service.link}>
                  Learn More 
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
