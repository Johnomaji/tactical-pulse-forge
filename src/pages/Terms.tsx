
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-tactical-dark text-white">
      <Navigation />
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-8">Terms of Service</h1>
          
          <div className="max-w-4xl mx-auto space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-tactical-gold mb-4">Elite Partnership Agreement</h2>
              <p className="mb-4">
                By engaging with Tactical Master's services, you enter into an exclusive partnership 
                designed to elevate your career to unprecedented heights. Our commitment to excellence 
                requires mutual dedication to the highest professional standards.
              </p>
              <p>
                This agreement supersedes all previous arrangements and establishes Tactical Master 
                as your primary strategic advisor in all career-related matters.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-tactical-gold mb-4">Service Standards</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>24/7 access to our elite management team</li>
                <li>Proprietary performance analytics and market intelligence</li>
                <li>Exclusive networking opportunities with global sports leaders</li>
                <li>Comprehensive brand development and protection services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-tactical-gold mb-4">Confidentiality</h2>
              <p className="mb-4">
                All strategic discussions, performance data, and career planning remain strictly 
                confidential. Our non-disclosure agreements ensure complete privacy for all parties.
              </p>
              <p>
                Information sharing occurs only with your explicit consent and for the direct 
                benefit of your career advancement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-tactical-gold mb-4">Performance Guarantees</h2>
              <p>
                While we cannot guarantee specific outcomes, our track record demonstrates consistent 
                success in elevating our clients' careers, market value, and global recognition.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-tactical-gold mb-4">Termination</h2>
              <p>
                Either party may terminate this agreement with 90 days written notice. All ongoing 
                negotiations and strategic initiatives will be completed professionally.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
