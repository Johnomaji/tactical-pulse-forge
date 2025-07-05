
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "How is data privacy ensured?",
      answer: "We employ military-grade encryption and comply with GDPR standards. All client data is stored in secure, isolated environments with access restricted to authorized personnel only."
    },
    {
      question: "What regions and leagues are covered?",
      answer: "Our network spans 45+ global leagues across Europe, Americas, Asia, and Africa. We maintain direct relationships with clubs from Premier League to emerging markets."
    },
    {
      question: "Can partners integrate proprietary systems?",
      answer: "Yes, our platform offers API integration capabilities for clubs and organizations with existing systems. Custom integrations are developed on a case-by-case basis."
    },
    {
      question: "How is post-career planning approached?",
      answer: "Our Legacy Strategy service includes wealth management, business ventures, coaching transitions, and media opportunities. We plan 10+ years beyond active playing careers."
    }
  ];

  return (
    <section className="py-24 bg-tactical-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient mb-6">Discreet FAQs</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Answers to essential questions about our exclusive services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-effect border-tactical-gold rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-tactical-gold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
