
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const InsightsSection = () => {
  return (
    <section id="insights" className="py-24 bg-tactical-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient mb-6">Insights Vault</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Exclusive analytics, quarterly dispatches, and elite industry interviews
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="glass-effect p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-tactical-gold mb-6">Featured Content</h3>
            
            <div className="space-y-6">
              <div className="border-b border-tactical-gold pb-4">
                <h4 className="text-lg font-semibold text-white mb-2">The Future of Football Analytics</h4>
                <p className="text-gray-400 text-sm">Exclusive quarterly analysis • Elite subscribers only</p>
              </div>
              
              <div className="border-b border-tactical-gold pb-4">
                <h4 className="text-lg font-semibold text-white mb-2">Transfer Market Intelligence</h4>
                <p className="text-gray-400 text-sm">Market insights and valuation models • Premium access</p>
              </div>
              
              <div className="border-b border-tactical-gold pb-4">
                <h4 className="text-lg font-semibold text-white mb-2">Elite Agent Interviews</h4>
                <p className="text-gray-400 text-sm">Behind-the-scenes with industry leaders • Video series</p>
              </div>
            </div>
          </div>

          <div className="glass-effect p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-tactical-gold mb-6">Exclusive Access</h3>
            <p className="text-gray-300 mb-6">
              Join our elite network for privileged insights, market intelligence, 
              and strategic analysis reserved for industry leaders.
            </p>
            
            <div className="space-y-4">
              <Input 
                placeholder="Email Address" 
                className="bg-tactical-dark border-tactical-gold text-white"
              />
              <Input 
                placeholder="Organization" 
                className="bg-tactical-dark border-tactical-gold text-white"
              />
              <Button className="w-full bg-gradient-gold text-black hover:opacity-90">
                Request Access
              </Button>
            </div>
            
            <p className="text-xs text-gray-500 mt-4">
              * Access subject to qualification and approval
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
