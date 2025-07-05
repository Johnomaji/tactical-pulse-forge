
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      title: "Alpha Scouting",
      description: "Elite talent identification through AI-powered global networks",
      icon: "🔍"
    },
    {
      title: "Performance Command",
      description: "Real-time biometric monitoring and tactical optimization",
      icon: "⚡"
    },
    {
      title: "Career Sovereignty",
      description: "Strategic career planning and elite club positioning",
      icon: "👑"
    },
    {
      title: "Brand Empire",
      description: "Global brand development and commercial partnerships",
      icon: "🌟"
    },
    {
      title: "Holistic Guardianship",
      description: "Complete lifestyle management and personal development",
      icon: "🛡️"
    },
    {
      title: "Legacy Strategy",
      description: "Long-term wealth preservation and post-career planning",
      icon: "🏛️"
    }
  ];

  return (
    <section id="services" className="py-24 bg-tactical-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient mb-6">Exclusive Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Six curated offerings designed for the world's elite football talent
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass-effect p-8 rounded-lg hover:gold-glow transition-all duration-500 group animate-slide-in-right"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-6 group-hover:animate-float">{service.icon}</div>
              <h3 className="text-2xl font-bold text-tactical-gold mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              <Button 
                variant="outline"
                className="w-full border-tactical-gold text-tactical-gold hover:bg-tactical-gold hover:text-black transition-all duration-300"
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
