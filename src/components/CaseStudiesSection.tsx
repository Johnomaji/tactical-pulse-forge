
const CaseStudiesSection = () => {
  return (
    <section className="py-24 bg-tactical-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient mb-6">Luminary Case Studies</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Proven results from our precision approach to talent management
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div class="glass-effect p-4 sm:p-6 md:p-8 rounded-lg w-full max-w-full overflow-hidden">
  <h3 class="text-2xl font-bold text-tactical-gold mb-4">Elite Discovery &amp; Placement</h3>
  <p class="text-gray-300 mb-6">
    Identified promising talent through AI scouting, monitored development through biometric tracking, and secured elite club placement within 18 months.
  </p>
  <div class="flex flex-wrap gap-2 text-sm">
    <span class="bg-tactical-gold text-black px-3 py-1 rounded">Scouting</span>
    <span class="bg-tactical-gold text-black px-3 py-1 rounded">Monitoring</span>
    <span class="bg-tactical-gold text-black px-3 py-1 rounded">Placement</span>
  </div>
</div>

          </div>

          <div className="glass-effect p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-tactical-gold mb-4">Performance Optimization</h3>
            <p className="text-gray-300 mb-6">
              Precision tracking and tactical analysis delivered measurable improvements 
              in key performance indicators across multiple seasons.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-tactical-gold">+12%</div>
                <div className="text-sm text-gray-400">Sprint Speed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-tactical-gold">+18%</div>
                <div className="text-sm text-gray-400">Tactical Influence</div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-lg italic text-gray-300 mb-4">
              "Tactical Master's precision approach revolutionized our scouting process."
            </div>
            <div className="text-tactical-gold font-semibold">— Premier League Director</div>
          </div>

          <div className="text-center">
            <div className="text-lg italic text-gray-300 mb-4">
              "The data insights transformed how we understand player development."
            </div>
            <div className="text-tactical-gold font-semibold">— Elite Agent</div>
          </div>

          <div className="text-center">
            <div className="text-lg italic text-gray-300 mb-4">
              "Their holistic approach secured my future both on and off the pitch."
            </div>
            <div className="text-tactical-gold font-semibold">— International Player</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
