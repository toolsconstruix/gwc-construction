import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rotate-12" />
        <div className="absolute bottom-10 right-10 w-40 h-40 border-2 border-white -rotate-12" />
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white mb-6">
            Get Your Organized, On-Time Remodel
          </h2>
          <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto">
            Ready to transform your kitchen or bathroom with a contractor who actually shows up on time 
            and delivers exactly what they promise?
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild variant="cta" size="xl">
              <Link to="/contact">Request a Precise Estimate</Link>
            </Button>
            <Button asChild variant="outlineLight" size="xl">
              <a href="tel:+15555555555">
                <Phone className="w-5 h-5 mr-2" />
                Call (555) 555-5555
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
              <span className="text-white/90">No-pressure consultation</span>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
              <span className="text-white/90">Detailed project timeline</span>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
              <span className="text-white/90">Transparent pricing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
