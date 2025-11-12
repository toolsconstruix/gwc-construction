import { Clock, ClipboardCheck, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const ThreePillars = () => {
  const pillars = [
    {
      icon: Clock,
      title: "On-Time Guarantee",
      description: "We're obsessed with schedules. Your project starts and finishes when we say it will—or we make it right. No excuses, no endless delays.",
    },
    {
      icon: ClipboardCheck,
      title: "Pro-Grade Organization",
      description: "Every detail tracked, every material ordered ahead of time, every trade coordinated. You'll always know what's happening, when, and why.",
    },
    {
      icon: Award,
      title: "Client-First Experience",
      description: "Daily job site cleanup, protective coverings throughout your home, and white-glove service from start to finish. This is your home—we treat it that way.",
    },
  ];

  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-6">Why Homeowners Choose GWC</h2>
          <p className="text-lg text-muted-foreground">
            We built our reputation on three non-negotiables: punctuality, organization, and a premium client experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Card key={index} className="p-8 hover:shadow-strong transition-all duration-300 border-border/50">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <pillar.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreePillars;
