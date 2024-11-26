import { Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TypewriterText } from './TypewriterText';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-600/20 via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl mx-auto text-center">
          <div className="h-16 mb-8">
            <TypewriterText 
              text="Where Strategy Meets Technology"
              className="text-3xl sm:text-4xl text-white font-russo"
              cursorColor="white"
            />
          </div>
          <p className="text-xl text-gray-300 leading-relaxed animate-fadeInUp animate-delay-1">
            We combine technical expertise and strategic insights to deliver scalable solutions that drive growth and transformation.
          </p>
          <div className="flex justify-center mt-12 animate-fadeInUp animate-delay-2">
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium rounded-lg text-primary-900 overflow-hidden transition-all duration-300"
            >
              <span className="absolute inset-0 w-full h-full bg-white transition-all duration-500 ease-out group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:via-blue-400 group-hover:to-blue-500"></span>
              <span className="relative flex items-center text-primary-900 group-hover:text-white transition-colors duration-300">
                <Rocket className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Start Your Journey
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}