import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import beforeKitchen from "@/assets/before-kitchen.jpg";
import afterKitchen from "@/assets/after-kitchen.jpg";
import bathroomModern from "@/assets/bathroom-modern.jpg";

const BeforeAfter = () => {
  const projects = [
    {
      title: "Modern Kitchen Transformation",
      location: "Wellesley, MA",
      before: beforeKitchen,
      after: afterKitchen,
    },
  ];

  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-6">See the Transformation</h2>
          <p className="text-lg text-muted-foreground">
            Real projects, real results. Every remodel is a testament to our commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {projects.map((project, index) => (
            <div key={index} className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground">{project.location}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="relative overflow-hidden rounded-lg shadow-medium group">
                    <img
                      src={project.before}
                      alt="Before remodeling"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-muted-foreground/90 text-white px-3 py-1 rounded-md text-sm font-semibold">
                      Before
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="relative overflow-hidden rounded-lg shadow-medium group">
                    <img
                      src={project.after}
                      alt="After remodeling"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 rounded-md text-sm font-semibold">
                      After
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Luxury Bathroom Remodel</h3>
              <p className="text-muted-foreground">Newton, MA</p>
            </div>
            
            <Card className="overflow-hidden shadow-medium">
              <img
                src={bathroomModern}
                alt="Modern luxury bathroom"
                className="w-full h-full object-cover"
              />
            </Card>
          </div>
        </div>

        <div className="text-center">
          <Button asChild variant="hero" size="xl">
            <Link to="/projects">View Full Project Gallery</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
