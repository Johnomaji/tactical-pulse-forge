
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="mt-16 relative min-h-screen flex items-center justify-center bg-gradient-to-br from-tactical-dark via-tactical-gray to-tactical-dark overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-tactical-gold rounded-full blur-3xl animate-pulse-gold"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tactical-gold-light rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Crafting Global Superstars</span>
            <br />
            <span className="text-white">Through Precision Performance</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Tailored strategies, advanced tech, and world-class networks for the best in the game
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-16">
            <Button 
              size="lg"
              className="bg-gradient-gold text-black text-lg sm:text-xl px-6 sm:px-8 py-4 sm:py-6 hover:opacity-90 transform hover:scale-105 transition-all duration-300"
              onClick={scrollToContact}
            >
              Request Private Preview
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-tactical-gold text-tactical-gold hover:bg-tactical-gold hover:text-black text-lg sm:text-xl px-6 sm:px-8 py-4 sm:py-6 transform hover:scale-105 transition-all duration-300"
              onClick={scrollToContact}
            >
              Log In
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="glass-effect p-4 sm:p-6 rounded-lg animate-slide-in-right">
              <div className="text-2xl sm:text-3xl font-bold text-gradient mb-2">250+</div>
              <div className="text-gray-300">Elite Players</div>
            </div>
            <div className="glass-effect p-4 sm:p-6 rounded-lg animate-slide-in-right" style={{animationDelay: '0.2s'}}>
              <div className="text-2xl sm:text-3xl font-bold text-gradient mb-2">40+</div>
              <div className="text-gray-300">Global Leagues</div>
            </div>
            <div className="glass-effect p-4 sm:p-6 rounded-lg animate-slide-in-right" style={{animationDelay: '0.4s'}}>
              <div className="text-2xl sm:text-3xl font-bold text-gradient mb-2">180+</div>
              <div className="text-gray-300">Club Partnerships</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToServices}
            className="text-tactical-gold hover:text-tactical-gold-light transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
