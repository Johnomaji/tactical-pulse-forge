
import { Button } from '@/components/ui/button';

const TechSection = () => {
  return (
    <section className="py-24 bg-tactical-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient mb-6">Tech Command Deck</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced technology interfaces for real-time decision making
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="glass-effect p-6 rounded-lg">
            <h3 className="text-xl font-bold text-tactical-gold mb-4">Live Scout Feeds</h3>
            <div className="bg-tactical-dark p-4 rounded h-32 flex items-center justify-center">
              <div className="text-gray-400">📹 Real-time match analysis</div>
            </div>
          </div>

          <div className="glass-effect p-6 rounded-lg">
            <h3 className="text-xl font-bold text-tactical-gold mb-4">Biomechanical Overlays</h3>
            <div className="bg-tactical-dark p-4 rounded h-32 flex items-center justify-center">
              <div className="text-gray-400">🏃‍♂️ Performance metrics</div>
            </div>
          </div>

          <div className="glass-effect p-6 rounded-lg">
            <h3 className="text-xl font-bold text-tactical-gold mb-4">Contract Simulation</h3>
            <div className="bg-tactical-dark p-4 rounded h-32 flex items-center justify-center">
              <div className="text-gray-400">📊 Deal optimization</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gradient-gold text-black text-xl px-12 py-6 hover:opacity-90 transform hover:scale-105 transition-all duration-300"
          >
            Secure Access to the Deck
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
