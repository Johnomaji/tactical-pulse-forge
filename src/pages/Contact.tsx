
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your inquiry. Our team will contact you within 24 hours.');
    setFormData({ name: '', email: '', category: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-tactical-dark text-white">
      <Navigation />
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">Elite Contact Portal</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Secure communication channel for exclusive partnership inquiries
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-tactical-gold font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-tactical-gray border border-tactical-gold rounded-lg focus:outline-none focus:ring-2 focus:ring-tactical-gold text-white"
                  />
                </div>
                <div>
                  <label className="block text-tactical-gold font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-tactical-gray border border-tactical-gold rounded-lg focus:outline-none focus:ring-2 focus:ring-tactical-gold text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-tactical-gold font-semibold mb-2">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-tactical-gray border border-tactical-gold rounded-lg focus:outline-none focus:ring-2 focus:ring-tactical-gold text-white"
                >
                  <option value="">Select Your Category</option>
                  <option value="player">Elite Player</option>
                  <option value="club">Club Executive</option>
                  <option value="investor">Strategic Investor</option>
                  <option value="partner">Technology Partner</option>
                </select>
              </div>

              <div>
                <label className="block text-tactical-gold font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-tactical-gray border border-tactical-gold rounded-lg focus:outline-none focus:ring-2 focus:ring-tactical-gold text-white resize-none"
                  placeholder="Describe your strategic objectives and partnership interests..."
                />
              </div>

              <div className="text-center">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-gradient-gold text-black text-xl px-12 py-6 hover:opacity-90 transform hover:scale-105 transition-all duration-300"
                >
                  Submit Secure Inquiry
                </Button>
              </div>
            </form>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="glass-effect p-6 rounded-lg">
                <h3 className="text-xl font-bold text-tactical-gold mb-2">Elite Hotline</h3>
                <p className="text-gray-300">+44 20 7000 0001</p>
              </div>
              <div className="glass-effect p-6 rounded-lg">
                <h3 className="text-xl font-bold text-tactical-gold mb-2">Secure Email</h3>
                <p className="text-gray-300">elite@tacticalmaster.com</p>
              </div>
              <div className="glass-effect p-6 rounded-lg">
                <h3 className="text-xl font-bold text-tactical-gold mb-2">London HQ</h3>
                <p className="text-gray-300">Canary Wharf Financial District</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
