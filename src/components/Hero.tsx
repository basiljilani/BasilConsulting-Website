import { Link } from 'react-router-dom';
import { TypewriterText } from './TypewriterText';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <div className="relative h-[100vh] flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#000000' }}>
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center mt-[-64px]"> {/* Offset for navbar */}
          <div className="min-h-[3rem] sm:min-h-[4rem] md:min-h-[5rem] mb-6">
            <TypewriterText 
              text="Where Strategy Meets Technology"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-russo text-white tracking-tight inline-block"
              cursorColor="#F97316"
            />
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-white leading-relaxed px-4 sm:px-0 mb-8 sm:mb-10"
          >
            We combine technical expertise and strategic insights to deliver scalable solutions 
            that drive growth and transformation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-lg text-white overflow-hidden transition-all duration-300"
            >
              <motion.div
                className="absolute inset-0 w-full h-full bg-orange-500"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#EA580C"
                }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative tracking-wide">Start Your Journey</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}