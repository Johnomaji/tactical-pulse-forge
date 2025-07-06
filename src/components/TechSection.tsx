
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const TechSection = () => {
  const scoutData = [
    { name: 'Jan', scouts: 24, matches: 145 },
    { name: 'Feb', scouts: 28, matches: 167 },
    { name: 'Mar', scouts: 32, matches: 189 },
    { name: 'Apr', scouts: 35, matches: 203 },
    { name: 'May', scouts: 38, matches: 221 },
    { name: 'Jun', scouts: 42, matches: 245 },
  ];

  const performanceData = [
    { metric: 'Speed', value: 87, change: 12 },
    { metric: 'Agility', value: 92, change: 8 },
    { metric: 'Endurance', value: 84, change: 15 },
    { metric: 'Tactical', value: 89, change: 18 },
    { metric: 'Technical', value: 91, change: 6 },
  ];

  const contractData = [
    { name: 'Salary', value: 45, color: '#D4AF37' },
    { name: 'Bonuses', value: 25, color: '#F4E19C' },
    { name: 'Image Rights', value: 20, color: '#B8941F' },
    { name: 'Other', value: 10, color: '#8B7355' },
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="tech" className="py-24 bg-tactical-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-6">Tech Command Deck</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced technology interfaces for real-time decision making
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="glass-effect p-6 rounded-lg">
            <h3 className="text-xl font-bold text-tactical-gold mb-4">Live Scout Feeds</h3>
            <div className="bg-tactical-dark p-4 rounded h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={scoutData}>
                  <CartesianGrid strokeDasharray="3,3" stroke="#2A2A2A" />
                  <XAxis dataKey="name" stroke="#D4AF37" />
                  <YAxis stroke="#D4AF37" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1A1A1A', 
                      border: '1px solid #D4AF37',
                      color: '#FFFFFF'
                    }} 
                  />
                  <Bar dataKey="matches" fill="#D4AF37" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="glass-effect p-6 rounded-lg">
            <h3 className="text-xl font-bold text-tactical-gold mb-4">Biomechanical Overlays</h3>
            <div className="bg-tactical-dark p-4 rounded h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3,3" stroke="#2A2A2A" />
                  <XAxis dataKey="metric" stroke="#D4AF37" />
                  <YAxis stroke="#D4AF37" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1A1A1A', 
                      border: '1px solid #D4AF37',
                      color: '#FFFFFF'
                    }} 
                  />
                  <Line type="monotone" dataKey="value" stroke="#D4AF37" strokeWidth={2} />
                  <Line type="monotone" dataKey="change" stroke="#F4E19C" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="glass-effect p-6 rounded-lg">
            <h3 className="text-xl font-bold text-tactical-gold mb-4">Contract Simulation</h3>
            <div className="bg-tactical-dark p-4 rounded h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={contractData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {contractData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1A1A1A', 
                      border: '1px solid #D4AF37',
                      color: '#FFFFFF'
                    }} 
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="text-center px-4">
          <Button 
            size="lg"
            className="bg-gradient-gold text-black text-sm md:text-xl px-6 md:px-12 py-4 md:py-6 hover:opacity-90 transform hover:scale-105 transition-all duration-300 w-full md:w-auto"
            onClick={scrollToContact}
          >
            Secure Access to the Deck
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
