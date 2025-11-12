import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqs = [
    {
      question: "How long does a typical kitchen remodel take?",
      answer: "Most kitchen remodels take 4-6 weeks from demolition to final walkthrough. We provide a detailed timeline during the estimate phase and stick to it—that's our guarantee. Larger or more complex projects may take 8-10 weeks.",
    },
    {
      question: "Do I need to move out during the remodel?",
      answer: "Not usually. We set up temporary kitchens for cooking, protect living spaces with plastic barriers, and clean thoroughly at the end of each day. Many clients stay home during bathroom remodels. For full-home renovations, we discuss options during planning.",
    },
    {
      question: "What's included in your estimate?",
      answer: "Everything. Materials, labor, permits, dumpster rental, cleanup—all broken down line by line. If something isn't in the estimate, we don't charge for it unless you approve a change order first.",
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes. We're fully licensed (Massachusetts CSL #123456), bonded, and carry $2M general liability insurance. We also carry workers' comp for all employees and subcontractors.",
    },
    {
      question: "What happens if you miss your deadline?",
      answer: "If we miss our agreed-upon completion date without prior approval, we refund 5% of your project cost for every week of delay. This has only happened twice in 8 years, both due to unforeseen structural issues we discovered mid-project.",
    },
    {
      question: "Can I make changes once the project starts?",
      answer: "Yes, but we document everything. If you want to upgrade countertops or add features, we provide a written change order with updated cost and timeline before proceeding. No surprise charges.",
    },
    {
      question: "Do you handle permits?",
      answer: "Absolutely. We pull all necessary permits and coordinate inspections with local building departments. We're familiar with code requirements in every town we serve.",
    },
    {
      question: "What brands do you use?",
      answer: "We source materials from premium suppliers and work with brands like KitchenAid, Bosch, Kohler, Delta, MSI, Cambria, and custom cabinet makers. You'll see all options during the design phase.",
    },
    {
      question: "How do payments work?",
      answer: "We require a 10% deposit to schedule your project, 40% at project start, 40% at the midpoint, and the final 10% upon completion and your approval. No payment is due until you're satisfied with the work.",
    },
    {
      question: "What warranty do you offer?",
      answer: "We provide a 2-year workmanship warranty on all labor. Manufacturers' warranties cover materials and appliances (typically 1-10 years depending on the product). We also offer annual maintenance check-ups.",
    },
    {
      question: "What areas do you serve?",
      answer: "We serve Greater Boston and MetroWest Massachusetts, including Wellesley, Weston, Winchester, Newton, Lexington, Needham, Brookline, Belmont, and surrounding communities.",
    },
    {
      question: "How far in advance should I book?",
      answer: "We're typically booked 6-8 weeks out. For large projects or specific start dates (like summer breaks for teachers), we recommend reaching out 3-4 months in advance.",
    },
    {
      question: "Do you do design work, or do I need an architect?",
      answer: "We offer in-house design services for most kitchen and bathroom remodels. For structural changes or whole-home renovations, we can recommend trusted architects and collaborate seamlessly with them.",
    },
    {
      question: "What if I'm not happy with something during the project?",
      answer: "Tell us immediately. We do daily check-ins and weekly walkthroughs specifically to address concerns before they become problems. If something isn't right, we fix it—no questions asked.",
    },
    {
      question: "Can you work with my existing layout?",
      answer: "Yes, though moving plumbing or walls can unlock better functionality. During the consultation, we'll discuss whether your current layout serves your needs or if adjustments would add value.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-card">
          <div className="container mx-auto container-padding text-center">
            <h1 className="mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to know about working with GWC Construction. 
              Still have questions? We're here to help.
            </p>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="section-padding bg-background">
          <div className="container mx-auto container-padding">
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border border-border rounded-lg px-6 bg-card"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container mx-auto container-padding text-center">
            <h2 className="text-white mb-6">Still Have Questions?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's talk. We're happy to answer any questions and discuss your project—no pressure, just honest advice.
            </p>
            <Button asChild variant="cta" size="xl">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
