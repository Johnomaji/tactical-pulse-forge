
const Footer = () => {
  return (
    <footer className="bg-tactical-dark py-12 border-t border-tactical-gold">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="text-3xl font-bold text-gradient mb-4">
            TACTICAL MASTER
          </div>
          <p className="text-gray-400 mb-8">
            Elite Football & Talent Management
          </p>
          
          <div className="flex justify-center space-x-8 mb-8">
            <a href="#" className="text-gray-400 hover:text-tactical-gold transition-colors">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-tactical-gold transition-colors">Terms</a>
            <a href="#" className="text-gray-400 hover:text-tactical-gold transition-colors">Contact</a>
          </div>

          <div className="border-t border-tactical-gold pt-8">
            <p className="text-gray-500 text-sm">
              © 2024 Tactical Master. All rights reserved. Elite services for qualified clients only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
