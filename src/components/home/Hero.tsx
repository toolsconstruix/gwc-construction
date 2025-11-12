import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Star, Clock } from "lucide-react";
import heroImage from "@/assets/hero-kitchen.jpg";

const Hero = () => {
  const badges = [
    { icon: Clock, label: "On-Time Guarantee" },
    { icon: Shield, label: "Clean Jobsite" },
    { icon: Star, label: "5-Star Experience" },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern luxury kitchen remodeling"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:container-padding relative z-10 pt-16 sm:pt-20">
        <div className="max-w-3xl text-center sm:text-left">
          <h1 className="text-white mb-6 text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            On-Time. Organized. Remarkable Results.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-6 sm:mb-8 font-light text-balance">
            Kitchen & Bathroom Remodeling for Massachusetts' Finest Homes.
          </p>
          
          {/* Trust Badges */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 sm:px-4 py-2"
              >
                <badge.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                <span className="text-xs sm:text-sm font-medium text-white">{badge.label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 mb-8 sm:mb-0">
            <Button asChild variant="cta" size="lg" className="w-full sm:w-auto">
              <Link to="/contact">Request a Quote</Link>
            </Button>
            <Button asChild variant="outlineLight" size="lg" className="w-full sm:w-auto">
              <Link to="/projects">See Our Projects</Link>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-white/20">
            <div className="text-center sm:text-left">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">500+</div>
              <div className="text-xs sm:text-sm text-white/80">Projects Completed</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">98%</div>
              <div className="text-xs sm:text-sm text-white/80">On-Time Delivery</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">4.9★</div>
              <div className="text-xs sm:text-sm text-white/80">Average Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
