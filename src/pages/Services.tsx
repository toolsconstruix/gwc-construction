import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ChefHat, Bath, Hammer, Boxes, Paintbrush, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: ChefHat,
      title: "Kitchen Remodeling",
      slug: "kitchen",
      description: "Complete kitchen transformations—from layout redesign to custom cabinetry installation.",
      features: [
        "Custom cabinet design & installation",
        "Countertop selection & fitting (quartz, granite, marble)",
        "Premium appliance integration",
        "Lighting design & installation",
        "Flooring & backsplash",
        "Plumbing & electrical upgrades",
      ],
    },
    {
      icon: Bath,
      title: "Bathroom Remodeling",
      slug: "bathroom",
      description: "Luxury bathroom renovations that turn daily routines into spa experiences.",
      features: [
        "Walk-in shower & tub installations",
        "Custom vanity & storage solutions",
        "Tile work (floor, wall, shower)",
        "Fixture & lighting upgrades",
        "Heated floors & towel warmers",
        "Ventilation & moisture control",
      ],
    },
    {
      icon: Hammer,
      title: "Carpentry & Finish Work",
      slug: "carpentry",
      description: "Custom woodwork and finish details that add character and sophistication.",
      features: [
        "Crown molding & trim",
        "Wainscoting & wall paneling",
        "Built-in shelving & cabinetry",
        "Custom mantels & fireplace surrounds",
        "Door & window casing",
        "Coffered ceilings",
      ],
    },
    {
      icon: Boxes,
      title: "Flooring",
      slug: "flooring",
      description: "Expert installation of premium flooring materials for any room.",
      features: [
        "Hardwood (solid & engineered)",
        "Luxury vinyl plank (LVP)",
        "Ceramic & porcelain tile",
        "Natural stone",
        "Floor leveling & subfloor prep",
        "Refinishing & restoration",
      ],
    },
    {
      icon: Paintbrush,
      title: "Painting",
      slug: "painting",
      description: "Professional interior painting with premium finishes and meticulous prep work.",
      features: [
        "Color consultation",
        "Wall & ceiling painting",
        "Cabinet painting & refinishing",
        "Trim & door painting",
        "Accent walls & specialty finishes",
        "Proper surface preparation",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-card">
          <div className="container mx-auto container-padding text-center">
            <h1 className="mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive remodeling services for homeowners who expect punctuality, 
              cleanliness, and exceptional craftsmanship.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-background">
          <div className="container mx-auto container-padding">
            <div className="space-y-12">
              {services.map((service, index) => (
                <Card key={index} className="p-8 lg:p-12 border-border/50 hover:shadow-strong transition-all">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                      <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                        <service.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      <Button asChild variant="default" size="lg">
                        <Link to={`/services/${service.slug}`}>
                          View Details <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                    <div className="lg:col-span-2">
                      <h3 className="text-xl font-bold mb-4">What's Included:</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                            <span className="text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Overview */}
        <section className="section-padding bg-card">
          <div className="container mx-auto container-padding">
            <h2 className="text-center mb-12">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { step: "01", title: "Discovery Call", description: "We learn about your vision, budget, and timeline." },
                { step: "02", title: "Design & Estimate", description: "Detailed plans and transparent pricing—no surprises." },
                { step: "03", title: "Protection & Prep", description: "Jobsite setup with full home protection measures." },
                { step: "04", title: "Clean Execution", description: "Organized work with daily cleanup and regular updates." },
                { step: "05", title: "Final Walkthrough", description: "Your approval, our warranty, your satisfaction guaranteed." },
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container mx-auto container-padding text-center">
            <h2 className="text-white mb-6">Let's Discuss Your Project</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Ready for a remodel that's on time, organized, and stress-free?
            </p>
            <Button asChild variant="cta" size="xl">
              <Link to="/contact">Request Your Free Estimate</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
