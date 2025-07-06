
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ContactSection = () => {
  return (
    <section className="py-24 bg-tactical-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient mb-6">Entry Portal</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Secure access for qualified clubs, players, investors, and partners
          </p>
        </div>

        <div className="max-w-2xl mx-auto glass-effect p-8 rounded-lg">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input 
                placeholder="First Name" 
                className="bg-tactical-dark border-tactical-gold text-white"
              />
              <Input 
                placeholder="Last Name" 
                className="bg-tactical-dark border-tactical-gold text-white"
              />
            </div>

            <Input 
              placeholder="Email Address" 
              type="email"
              className="bg-tactical-dark border-tactical-gold text-white"
            />

            <Select>
              <SelectTrigger className="bg-tactical-dark border-tactical-gold text-white">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent className="bg-tactical-dark border-tactical-gold">
                <SelectItem value="club">Club Representative</SelectItem>
                <SelectItem value="player">Professional Player</SelectItem>
                <SelectItem value="investor">Investor/Partner</SelectItem>
                <SelectItem value="agent">Licensed Agent</SelectItem>
              </SelectContent>
            </Select>

            <Input 
              placeholder="Organization/Club" 
              className="bg-tactical-dark border-tactical-gold text-white"
            />

            <Textarea 
              placeholder="Message (Please include relevant credentials and specific interests)"
              className="bg-tactical-dark border-tactical-gold text-white min-h-32"
            />

            <div className="flex items-center space-x-2">
              <input type="checkbox" id="privacy" className="rounded" />
              <label htmlFor="privacy" className="text-sm text-gray-400">
                I agree to the confidentiality terms and privacy policy
              </label>
            </div>

            <Button 
              type="submit"
              className="w-full bg-gradient-gold text-black text-sm md:text-lg py-4 md:py-6 hover:opacity-90 transform hover:scale-105 transition-all duration-300 px-4"
            >
              Submit Secure Application
            </Button>
          </form>

          <div className="text-center mt-8 text-sm text-gray-500">
            <p>All applications are reviewed within 48 hours</p>
            <p>Qualified candidates will receive secure access credentials</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
