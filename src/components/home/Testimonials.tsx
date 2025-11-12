import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Thompson",
      location: "Wellesley, MA",
      rating: 5,
      text: "GWC transformed our dated kitchen into a stunning, modern space. They were punctual, professional, and kept the job site immaculate every single day. We couldn't be happier!",
      project: "Kitchen Remodeling",
    },
    {
      name: "Michael Chen",
      location: "Newton, MA",
      rating: 5,
      text: "The attention to detail was incredible. Our master bathroom is now a spa-like retreat. Communication was excellent throughout the entire process.",
      project: "Bathroom Remodeling",
    },
    {
      name: "Jennifer Rodriguez",
      location: "Brookline, MA",
      rating: 5,
      text: "They finished exactly on schedule—no surprise delays or endless excuses like we've experienced with other contractors. The quality speaks for itself.",
      project: "Kitchen & Bath Remodel",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-6">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it—hear from homeowners who've experienced the GWC difference
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 relative border-border/50 hover:shadow-strong transition-all duration-300">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-muted-foreground/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="pt-6 border-t border-border">
                <div className="font-bold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                <div className="text-sm text-primary font-medium mt-1">{testimonial.project}</div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/reviews"
            className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors"
          >
            Read More Reviews →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
