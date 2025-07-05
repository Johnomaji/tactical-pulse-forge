
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass-effect py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-gradient">
          TACTICAL MASTER
        </div>
        
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

        <div className="flex space-x-4">
          <Button 
            variant="outline" 
            className="border-tactical-gold text-tactical-gold hover:bg-tactical-gold hover:text-black"
          >
            Log In
          </Button>
          <Button className="bg-gradient-gold text-black hover:opacity-90">
            Private Preview
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
