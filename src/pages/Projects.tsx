import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import beforeKitchen from "@/assets/before-kitchen.jpg";
import afterKitchen from "@/assets/after-kitchen.jpg";
import bathroomModern from "@/assets/bathroom-modern.jpg";

const Projects = () => {
  const [filter, setFilter] = useState<"all" | "kitchen" | "bathroom">("all");

  const projects = [
    {
      id: 1,
      title: "Modern Wellesley Kitchen",
      category: "kitchen",
      location: "Wellesley, MA",
      duration: "4 weeks",
      budget: "$75,000 - $100,000",
      image: afterKitchen,
      description: "Complete kitchen transformation with custom white shaker cabinets, quartz countertops, and professional-grade appliances.",
      features: ["Custom Cabinetry", "Quartz Counters", "Pro Appliances", "New Flooring"],
    },
    {
      id: 2,
      title: "Newton Master Bath Spa",
      category: "bathroom",
      location: "Newton, MA",
      duration: "3 weeks",
      budget: "$50,000 - $75,000",
      image: bathroomModern,
      description: "Luxury master bathroom with walk-in shower, marble tile throughout, and custom floating vanity.",
      features: ["Walk-in Shower", "Marble Tile", "Heated Floors", "Custom Vanity"],
    },
    {
      id: 3,
      title: "Brookline Kitchen Upgrade",
      category: "kitchen",
      location: "Brookline, MA",
      duration: "5 weeks",
      budget: "$100,000+",
      image: beforeKitchen,
      description: "High-end kitchen remodel with chef-grade appliances and custom storage solutions.",
      features: ["Chef's Kitchen", "Wine Storage", "Custom Pantry", "Smart Lighting"],
    },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-card">
          <div className="container mx-auto container-padding text-center">
            <h1 className="mb-6">Our Portfolio</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Real projects from real homeowners. Every remodel represents our commitment to 
              punctuality, organization, and exceptional results.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              <Button 
                variant={filter === "all" ? "default" : "outline"}
                onClick={() => setFilter("all")}
              >
                All Projects
              </Button>
              <Button 
                variant={filter === "kitchen" ? "default" : "outline"}
                onClick={() => setFilter("kitchen")}
              >
                Kitchens
              </Button>
              <Button 
                variant={filter === "bathroom" ? "default" : "outline"}
                onClick={() => setFilter("bathroom")}
              >
                Bathrooms
              </Button>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section-padding bg-background">
          <div className="container mx-auto container-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden border-border/50 hover:shadow-strong transition-all">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
                      {project.category === "kitchen" ? "Kitchen" : "Bathroom"}
                    </Badge>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.location}</p>
                    
                    <p className="text-foreground mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-border">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Duration</div>
                        <div className="font-semibold">{project.duration}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Investment</div>
                        <div className="font-semibold">{project.budget}</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-card">
          <div className="container mx-auto container-padding text-center">
            <h2 className="mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create something beautiful together. On time. On budget. Organized every step of the way.
            </p>
            <Button asChild variant="hero" size="xl">
              <a href="/contact">Get Your Free Estimate</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
