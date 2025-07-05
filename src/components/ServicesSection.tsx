
import { Button } from '@/components/ui/button';
import { Eye, Activity, Crown, Briefcase, Shield, Star } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Eye,
      title: "Alpha Scouting",
      description: "Proprietary AI algorithms combined with our global scout network to identify tomorrow's superstars before the competition."
    },
    {
      icon: Activity,
      title: "Performance Command",
      description: "Live biometric tracking and tactical analysis providing real-time insights to optimize on-field performance and market value."
    },
    {
      icon: Crown,
      title: "Career Sovereignty",
      description: "Strategic career planning with exclusive access to top-tier clubs and negotiation expertise that maximizes every opportunity."
    },
    {
      icon: Briefcase,
      title: "Brand Empire",
      description: "Comprehensive brand development and protection services that transform athletes into global commercial powerhouses."
    },
    {
      icon: Shield,
      title: "Holistic Guardianship",
      description: "Complete lifestyle management including security, wellness, education, and family support for total peace of mind."
    },
    {
      icon: Star,
      title: "Legacy Strategy",
      description: "Long-term wealth preservation and post-career planning ensuring generational success and lasting impact."
    }
  ];

  const handleInquiry = (serviceName: string) => {
    // Scroll to contact section
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    console.log(`Inquiry for ${serviceName} service`);
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-tactical-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gradient mb-6">Exclusive Services</h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Six pillars of excellence designed for the world's elite athletes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="glass-effect p-6 sm:p-8 rounded-lg hover:gold-glow transition-all duration-300 transform hover:scale-105"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <service.icon className="w-10 h-10 sm:w-12 sm:h-12 text-tactical-gold mb-4 sm:mb-6" />
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">{service.description}</p>
              <Button 
                className="w-full bg-gradient-gold text-black hover:opacity-90 transition-all duration-300 text-sm sm:text-base"
                onClick={() => handleInquiry(service.title)}
              >
                Begin Inquiry
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
