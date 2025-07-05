
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-tactical-dark text-white">
      <Navigation />
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-8">Privacy Policy</h1>
          
          <div className="max-w-4xl mx-auto space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-tactical-gold mb-4">Data Protection</h2>
              <p className="mb-4">
                At Tactical Master, we maintain the highest standards of data protection and confidentiality. 
                All client information, performance data, and strategic insights are encrypted and stored 
                using military-grade security protocols.
              </p>
              <p>
                We employ zero-knowledge architecture ensuring that sensitive data remains accessible 
                only to authorized personnel on a need-to-know basis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-tactical-gold mb-4">Information We Collect</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Performance metrics and biometric data</li>
                <li>Contract negotiations and financial arrangements</li>
                <li>Career development strategies and brand partnerships</li>
                <li>Communication logs with clubs and partners</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-tactical-gold mb-4">Data Usage</h2>
              <p className="mb-4">
                Your data is used exclusively for enhancing your career prospects and maximizing 
                commercial opportunities. We never share personal information with third parties 
                without explicit consent.
              </p>
              <p>
                Our AI algorithms analyze performance data to identify improvement opportunities 
                and predict market value fluctuations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-tactical-gold mb-4">Your Rights</h2>
              <p>
                You have the right to access, modify, or request deletion of your personal data 
                at any time. Contact our privacy team for any data-related inquiries.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
