
const ProcessSection = () => {
  const steps = [
    { title: "Invitation & Onboarding", description: "Exclusive client assessment and integration" },
    { title: "Discovery Phase", description: "AI-powered scouting and talent identification" },
    { title: "Deep Profiling", description: "Comprehensive psychological and physical analysis" },
    { title: "Negotiation & Placement", description: "Strategic positioning and contract optimization" },
    { title: "Brand Development", description: "Commercial growth and off-field opportunities" },
    { title: "Legacy Planning", description: "Long-term wealth and career transition strategy" }
  ];

  return (
    <section id="process" className="py-24 bg-tactical-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-4 md:mb-6">Our Process</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            A systematic six-step journey from discovery to legacy
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-tactical-gold opacity-30"></div>

          {steps.map((step, index) => (
            <div 
              key={index}
              className={`flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="glass-effect p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-tactical-gold mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>

              {/* Timeline Node */}
              <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center text-black font-bold text-lg relative z-10">
                {index + 1}
              </div>

              <div className="w-1/2"></div>
            </div>
          ))}
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0 mt-1">
                  {index + 1}
                </div>
                <div className="glass-effect p-4 rounded-lg flex-1">
                  <h3 className="text-lg font-bold text-tactical-gold mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="w-px h-8 bg-tactical-gold opacity-30 ml-5 mt-2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
