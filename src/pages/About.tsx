import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Award, Users, Clock } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Clock,
      title: "Punctuality",
      description: "We show up when we say we will. Every. Single. Time. Your project starts on schedule and finishes on schedule—or we make it right.",
    },
    {
      icon: Users,
      title: "Communication",
      description: "No ghosting, no vague updates. You'll always know what's happening, who's on site, and what's next.",
    },
    {
      icon: CheckCircle,
      title: "Organization",
      description: "Military-grade planning. Every material ordered in advance, every trade coordinated, every detail tracked.",
    },
    {
      icon: Award,
      title: "Craftsmanship",
      description: "We're not the cheapest—we're the best. Premium materials, skilled tradespeople, and standards that exceed code.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-card">
          <div className="container mx-auto container-padding">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="mb-6">We're Obsessed With Schedules, Cleanliness, and Communication</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                GWC Construction was founded on a simple frustration: too many contractors over-promise and under-deliver. 
                We built our business to be different—radically transparent, obsessively organized, and genuinely committed 
                to making the remodeling process pleasant for homeowners who demand excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="section-padding bg-background">
          <div className="container mx-auto container-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 2015 by three childhood friends from Newton, GWC Construction started with a mission 
                    to bring professional-grade project management to residential remodeling. We were tired of seeing 
                    homeowners get burned by contractors who treated timelines as suggestions and jobsite cleanliness as optional.
                  </p>
                  <p>
                    Today, we're the go-to remodeling partner for discerning homeowners across Greater Boston and MetroWest. 
                    We've completed over 500 projects, maintaining a 98% on-time delivery rate and a 4.9-star average rating. 
                    Our reputation speaks for itself.
                  </p>
                  <p>
                    We specialize in kitchen and bathroom remodels because that's where precision, coordination, and 
                    client communication matter most. These are complex projects with multiple trades, tight timelines, 
                    and zero room for error. That's our sweet spot.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-card">
          <div className="container mx-auto container-padding">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-center mb-12">Why Homeowners Choose GWC</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "On-Time Guarantee",
                    description: "If we miss our completion date without prior agreement, we'll refund 5% of your project cost for every week of delay. We've only invoked this twice in 8 years.",
                  },
                  {
                    title: "Daily Jobsite Cleanup",
                    description: "Your home stays livable. We clean up at the end of every workday—no sawdust on your furniture, no debris tracked through the house.",
                  },
                  {
                    title: "Transparent Pricing",
                    description: "No surprise charges. Our detailed estimates break down every material and labor cost. Changes? We discuss them before proceeding.",
                  },
                  {
                    title: "Licensed & Insured",
                    description: "Fully licensed (CSL #123456), bonded, and insured with $2M general liability. Your home and investment are protected.",
                  },
                  {
                    title: "Local Expertise",
                    description: "We know Greater Boston building codes inside and out. We have established relationships with inspectors and permit offices in every town we serve.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 p-6 bg-background rounded-lg border border-border">
                    <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container mx-auto container-padding text-center">
            <h2 className="text-white mb-6">Ready to Experience the Difference?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss your kitchen or bathroom remodeling project. No pressure, just honest advice and a clear path forward.
            </p>
            <Button asChild variant="cta" size="xl">
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
