import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import ThreePillars from "@/components/home/ThreePillars";
import Services from "@/components/home/Services";
import BeforeAfter from "@/components/home/BeforeAfter";
import Testimonials from "@/components/home/Testimonials";
import ServiceAreas from "@/components/home/ServiceAreas";
import FinalCTA from "@/components/home/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ThreePillars />
        <Services />
        <BeforeAfter />
        <Testimonials />
        <ServiceAreas />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
