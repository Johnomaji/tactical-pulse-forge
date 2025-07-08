
import { useState, useEffect } from 'react';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-tactical-dark z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-20 h-20 mx-auto animate-spin">
            {/* <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="#D4AF37"
                stroke="#F4E19C"
                strokeWidth="2"
              />
              <path
                d="M20 30 Q50 10 80 30 Q50 50 20 30"
                fill="none"
                stroke="#0A0A0B"
                strokeWidth="3"
              />
              <path
                d="M20 70 Q50 90 80 70 Q50 50 20 70"
                fill="none"
                stroke="#0A0A0B"
                strokeWidth="3"
              />
              <path
                d="M30 20 Q50 50 30 80"
                fill="none"
                stroke="#0A0A0B"
                strokeWidth="3"
              />
              <path
                d="M70 20 Q50 50 70 80"
                fill="none"
                stroke="#0A0A0B"
                strokeWidth="3"
              />
            </svg> */}
            <img src="ball.png" alt="ball" />
          </div>
        </div>
        <div className="text-2xl font-bold text-gradient mb-4">TACTICAL MASTER</div>
        <div className="text-tactical-gold text-sm">Loading Elite Experience...</div>
      </div>
    </div>
  );
};

export default Preloader;
