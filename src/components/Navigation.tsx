
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass-effect py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="text-lg md:text-2xl font-bold text-gradient truncate">
          TACTICAL MASTER
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {['Services', 'Process', 'Team', 'Insights'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-white hover:text-tactical-gold transition-colors duration-300"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          <Button 
            variant="outline" 
            className="border-tactical-gold text-tactical-gold hover:bg-tactical-gold hover:text-black"
            onClick={() => window.location.href = '/login'}
          >
            Log In
          </Button>
          <Button 
            className="bg-gradient-gold text-black hover:opacity-90"
            onClick={() => scrollToSection('contact')}
          >
            Private Preview
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors z-50 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-effect mx-4 rounded-lg p-6 mt-2 shadow-lg">
          <div className="flex flex-col space-y-6">
            {['Services', 'Process', 'Team', 'Insights'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-white hover:text-tactical-gold transition-colors duration-300 text-left py-2 text-lg"
              >
                {item}
              </button>
            ))}
            <div className="flex flex-col space-y-3 pt-6 border-t border-tactical-gold/30">
              <Button 
                variant="outline" 
                className="border-tactical-gold text-tactical-gold hover:bg-tactical-gold hover:text-black w-full py-3"
                onClick={() => window.location.href = '/login'}
              >
                Log In
              </Button>
              <Button 
                className="bg-gradient-gold text-black hover:opacity-90 w-full py-3"
                onClick={() => scrollToSection('contact')}
              >
                Private Preview
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
