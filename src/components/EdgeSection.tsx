
const EdgeSection = () => {
  const pillars = [
    {
      title: "Proprietary AI Algorithms",
      description: "Advanced scouting networks powered by machine learning",
      icon: "🧠"
    },
    {
      title: "Live Biometric Data",
      description: "Real-time performance tracking and tactical analysis",
      icon: "📊"
    },
    {
      title: "Elite Negotiations",
      description: "Confidential, ROI-led commercial deal structuring",
      icon: "🤝"
    }
  ];

  return (
    <section className="py-24 bg-tactical-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient mb-6">Our Competitive Edge</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From data-driven scouting to performance tracking to elite negotiation - 
            we deliver precision at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="glass-effect p-8 rounded-lg text-center hover:gold-glow transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-6xl mb-6">{pillar.icon}</div>
              <h3 className="text-2xl font-bold text-tactical-gold mb-4">{pillar.title}</h3>
              <p className="text-gray-300 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* Visual Flow */}
        <div className="mt-20 flex justify-center items-center space-x-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center text-black font-bold text-xl mb-2">1</div>
            <div className="text-sm text-gray-400">Scout</div>
          </div>
          <div className="w-20 h-1 bg-tactical-gold"></div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center text-black font-bold text-xl mb-2">2</div>
            <div className="text-sm text-gray-400">Track</div>
          </div>
          <div className="w-20 h-1 bg-tactical-gold"></div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center text-black font-bold text-xl mb-2">3</div>
            <div className="text-sm text-gray-400">Negotiate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EdgeSection;
