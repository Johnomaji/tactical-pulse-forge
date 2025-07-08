
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const TeamSection = () => {
  const team = [
    { 
      Image: "marcus.png",
      name: "Marcus Chamberlain", 
      role: "Principal Agent",
      bio: "Former Premier League executive with 15+ years in elite negotiations."
    },
    { 
      Image: "sarah.png",
      name: "Dr. Sarah Chen", 
      role: "Head of Analytics",
      bio: "Data science leader specializing in sports performance optimization."
    },
    { 
      Image: "antonio.png",
      name: "Antonio Rivera", 
      role: "Performance Director",
      bio: "Elite conditioning coach for multiple international squads."
    },
    { 
      Image: "emma.png",
      name: "Emma Thompson", 
      role: "Brand Strategist",
      bio: "Global marketing expert building athlete empires worldwide."
    }
  ];

  const partnerships = [
    { name: "FIFA", logo: "🏆" },
    { name: "UEFA", logo: "⭐" },
    { name: "Premier League", logo: "👑" },
    { name: "LaLiga", logo: "🇪🇸" },
    { name: "Bundesliga", logo: "🇩🇪" },
    { name: "Serie A", logo: "🇮🇹" },
    { name: "Ligue 1", logo: "🇫🇷" },
    { name: "MLS", logo: "🇺🇸" }
  ];

  return (
    <section id="team" className="py-16 sm:py-24 bg-tactical-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-6">The Team</h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            World-class experts in sports management, data science, and performance optimization
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {team.map((member, index) => (
            <div 
              key={index}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-tactical-gray-light rounded-full mx-auto mb-4 flex items-center justify-center text-2xl sm:text-4xl group-hover:gold-glow transition-all duration-300">
               <img 
               src={member.Image} 
               alt={member.name}
               className='w-full h-full object-cover' />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-tactical-gold mb-2">{member.name}</h3>
              <div className="text-gray-400 text-xs sm:text-sm mb-3">{member.role}</div>
              <p className="text-gray-300 text-xs sm:text-sm">{member.bio}</p>
            </div>
          ))}
        </div>

        {/* Partnership Logos Slider */}
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-8">Elite Partnerships</h3>
          <div className="max-w-4xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {partnerships.map((partner, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4">
                    <div className="flex flex-col items-center p-4 glass-effect rounded-lg hover:gold-glow transition-all duration-300">
                      <div className="text-3xl sm:text-4xl mb-3">{partner.logo}</div>
                      <div className="text-sm sm:text-base font-bold text-white">{partner.name}</div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
