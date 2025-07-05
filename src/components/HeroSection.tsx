
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-dark">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-tactical-gold rounded-full animate-pulse-gold"></div>
        <div className="absolute bottom-40 right-32 w-24 h-24 border border-tactical-gold rounded-full animate-float"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-tactical-gold rounded-full animate-pulse-gold"></div>
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gradient leading-tight">
            Crafting Global Superstars
          </h1>
          <h2 className="text-4xl md:text-6xl font-light mb-8 text-white">
            Through Precision Performance
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Tailored strategies, advanced tech, and world-class networks for the best in the game.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center mb-16">
            <Button 
              size="lg"
              className="bg-gradient-gold text-black text-xl px-12 py-6 hover:opacity-90 transform hover:scale-105 transition-all duration-300"
            >
              Request Private Preview
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-tactical-gold text-tactical-gold text-xl px-12 py-6 hover:bg-tactical-gold hover:text-black transform hover:scale-105 transition-all duration-300"
            >
              Exclusive Client Login
            </Button>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-tactical-gold mb-2">250+</div>
              <div className="text-gray-300">Elite Players Represented</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-tactical-gold mb-2">45</div>
              <div className="text-gray-300">Global Leagues</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-tactical-gold mb-2">120+</div>
              <div className="text-gray-300">Club Partnerships</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
