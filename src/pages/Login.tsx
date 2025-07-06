import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
    // Handle login logic here
  };

  return (
    <div className="min-h-screen bg-tactical-dark flex items-center justify-center p-4">
      <Card className="w-full max-w-md glass-effect border-tactical-gold">
        <CardHeader className="text-center">
          <div className="text-2xl font-bold text-gradient mb-2">
            TACTICAL MASTER
          </div>
          <CardTitle className="text-xl text-white">Elite Access Portal</CardTitle>
          <CardDescription className="text-gray-400">
            Enter your credentials to access the platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Email</label>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-tactical-dark border-tactical-gold text-white"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Password</label>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-tactical-dark border-tactical-gold text-white pr-10"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-tactical-gold"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="rounded border-tactical-gold"
                />
                <label htmlFor="remember" className="text-sm text-gray-400">
                  Remember me
                </label>
              </div>
              <Link 
                to="/forgot-password" 
                className="text-sm text-tactical-gold hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-gold text-black hover:opacity-90 py-3"
            >
              Access Platform
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              Don't have access?{' '}
              <Link to="/contact" className="text-tactical-gold hover:underline">
                Request invitation
              </Link>
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-tactical-gold/30">
            <Link 
              to="/" 
              className="text-sm text-tactical-gold hover:underline flex items-center justify-center"
            >
              ← Back to main site
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;