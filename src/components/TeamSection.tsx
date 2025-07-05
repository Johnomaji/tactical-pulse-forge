
const TeamSection = () => {
  const team = [
    { 
      name: "Marcus Chamberlain", 
      role: "Principal Agent",
      bio: "Former Premier League executive with 15+ years in elite negotiations."
    },
    { 
      name: "Dr. Sarah Chen", 
      role: "Head of Analytics",
      bio: "Data science leader specializing in sports performance optimization."
    },
    { 
      name: "Antonio Rivera", 
      role: "Performance Director",
      bio: "Elite conditioning coach for multiple international squads."
    },
    { 
      name: "Emma Thompson", 
      role: "Brand Strategist",
      bio: "Global marketing expert building athlete empires worldwide."
    }
  ];

  return (
    <section id="team" className="py-24 bg-tactical-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient mb-6">The Team</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            World-class experts in sports management, data science, and performance optimization
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {team.map((member, index) => (
            <div 
              key={index}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-32 h-32 bg-tactical-gray-light rounded-full mx-auto mb-4 flex items-center justify-center text-4xl group-hover:gold-glow transition-all duration-300">
                👤
              </div>
              <h3 className="text-xl font-bold text-tactical-gold mb-2">{member.name}</h3>
              <div className="text-gray-400 text-sm mb-3">{member.role}</div>
              <p className="text-gray-300 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>

        {/* Partnership Logos */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Elite Partnerships</h3>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="text-lg font-bold">FIFA</div>
            <div className="text-lg font-bold">UEFA</div>
            <div className="text-lg font-bold">Premier League</div>
            <div className="text-lg font-bold">LaLiga</div>
            <div className="text-lg font-bold">Bundesliga</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
