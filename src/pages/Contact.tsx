import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    toast.success("Thank you! We'll contact you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      city: "",
      service: "",
      budget: "",
      message: "",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-card">
          <div className="container mx-auto container-padding text-center">
            <h1 className="mb-6">Let's Start Your Project</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready for a remodel that's on time, organized, and stress-free? 
              Get your free, no-pressure estimate today.
            </p>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container mx-auto container-padding">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="p-8 border-border/50">
                  <h2 className="text-2xl font-bold mb-6">Request Your Free Estimate</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          required
                          placeholder="John Smith"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          required
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          required
                          placeholder="(555) 555-5555"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={(e) => handleChange("city", e.target.value)}
                          required
                          placeholder="Wellesley"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Type *</Label>
                        <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                          <SelectTrigger id="service">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="kitchen">Kitchen Remodeling</SelectItem>
                            <SelectItem value="bathroom">Bathroom Remodeling</SelectItem>
                            <SelectItem value="both">Kitchen & Bathroom</SelectItem>
                            <SelectItem value="other">Other Services</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="budget">Budget Range *</Label>
                        <Select value={formData.budget} onValueChange={(value) => handleChange("budget", value)}>
                          <SelectTrigger id="budget">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="30-50k">$30,000 - $50,000</SelectItem>
                            <SelectItem value="50-75k">$50,000 - $75,000</SelectItem>
                            <SelectItem value="75-100k">$75,000 - $100,000</SelectItem>
                            <SelectItem value="100k+">$100,000+</SelectItem>
                            <SelectItem value="unsure">Not Sure Yet</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Tell Us About Your Project *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        required
                        rows={6}
                        placeholder="Describe your vision, timeline, and any specific requirements..."
                      />
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      Submit Request
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      * We typically respond within 24 hours on business days
                    </p>
                  </form>
                </Card>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <Card className="p-6 border-border/50">
                  <h3 className="text-lg font-bold mb-4">Get In Touch</h3>
                  <div className="space-y-4">
                    <a href="tel:+15555555555" className="flex items-start gap-3 text-foreground hover:text-primary transition-colors group">
                      <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold group-hover:underline">(555) 555-5555</div>
                        <div className="text-sm text-muted-foreground">Mon-Fri 8am-6pm</div>
                      </div>
                    </a>
                    <a href="mailto:leads@gwcconstruction.com" className="flex items-start gap-3 text-foreground hover:text-primary transition-colors group">
                      <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold group-hover:underline break-all">leads@gwcconstruction.com</div>
                        <div className="text-sm text-muted-foreground">We respond within 24hrs</div>
                      </div>
                    </a>
                    <div className="flex items-start gap-3 text-foreground">
                      <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold">Service Area</div>
                        <div className="text-sm text-muted-foreground">Greater Boston & MetroWest MA</div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-border/50 bg-primary text-primary-foreground">
                  <h3 className="text-lg font-bold mb-4 text-white">Prefer to Text?</h3>
                  <p className="text-white/90 mb-4 text-sm">
                    Send us a quick message via WhatsApp and we'll get back to you right away.
                  </p>
                  <Button asChild variant="outlineLight" className="w-full">
                    <a href="https://wa.me/15555555555" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Chat on WhatsApp
                    </a>
                  </Button>
                </Card>

                <Card className="p-6 border-border/50">
                  <h3 className="text-lg font-bold mb-4">Office Hours</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="font-semibold">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="font-semibold">9:00 AM - 3:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="font-semibold">Closed</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
