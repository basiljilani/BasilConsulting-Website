import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Shield, ArrowRight, LucideIcon, Cpu, Database, Code } from 'lucide-react';
import './Products.css';

interface Capability {
  title: string;
  description: string;
  icon: LucideIcon;
}

const capabilities: Capability[] = [
  {
    title: "AI & Machine Learning",
    description: 'Cutting-edge AI solutions that transform data into actionable insights.',
    icon: Cpu
  },
  {
    title: "Data Analytics",
    description: 'Advanced analytics tools to unlock the full potential of your data.',
    icon: Database
  },
  {
    title: "Custom Development",
    description: 'Tailored software solutions designed for your unique business needs.',
    icon: Code
  }
];

const Products: React.FC = () => {
  useEffect(() => {
    if ((window as any).particlesJS) {
      (window as any).particlesJS('particles-js', {
        particles: {
          number: {
            value: 120,
            density: {
              enable: true,
              value_area: 1000
            }
          },
          color: {
            value: '#D3D3D3'
          },
          shape: {
            type: 'circle'
          },
          opacity: {
            value: 0.5,
            random: false
          },
          size: {
            value: 3,
            random: true
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#D3D3D3',
            opacity: 0.3,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'grab'
            },
            onclick: {
              enable: true,
              mode: 'push'
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 0.5
              }
            },
            push: {
              particles_nb: 4
            }
          }
        },
        retina_detect: true
      });
    }
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Neural Network Animation Background */}
      <div className="neural-network-animation">
        <div id="particles-js"></div>
      </div>

      {/* Content with overlay */}
      <div className="content-overlay min-h-screen pt-16">
        {/* Hero Section */}
        <div className="relative">
          <div className="relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="pt-32 pb-20 text-center">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                  Transformative Digital Solutions
                </h1>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12">
                  Experience the future of technology with our innovative products designed to revolutionize 
                  your business operations and drive unprecedented growth.
                </p>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* FinTech Pulse Network Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-gray-800">
                  <h3 className="text-3xl font-bold text-white mb-4 text-center">FinTech Pulse Network</h3>
                  <p className="text-gray-300 mb-8 min-h-[80px] text-center">
                    A comprehensive financial intelligence platform that transforms how businesses analyze,
                    visualize, and leverage financial data for strategic decision-making.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/fintech-pulse" className="flex-1">
                      <motion.button
                        whileHover={{ 
                          backgroundColor: "rgba(31, 41, 55, 0.8)",
                          scale: 1.02
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="w-full px-6 py-3 rounded-xl bg-gray-800 text-white font-semibold flex items-center justify-center group"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </motion.button>
                    </Link>
                    <Link to="/fintech-pulse" className="flex-1">
                      <motion.button
                        whileHover={{ 
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                          scale: 1.02,
                          borderColor: "rgba(255, 255, 255, 0.8)"
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="w-full px-6 py-3 rounded-xl border-2 border-white/50 text-white font-semibold flex items-center justify-center group"
                      >
                        Explore Platform
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Basil AI Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="relative"
              >
                <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-gray-800">
                  <h3 className="text-3xl font-bold text-white mb-4 text-center">Basil AI</h3>
                  <p className="text-gray-300 mb-8 min-h-[80px] text-center">
                    Advanced AI solutions that drive innovation and automation across your organization,
                    enabling smarter decisions and enhanced operational efficiency.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/basil-ai" className="flex-1">
                      <motion.button
                        whileHover={{ 
                          backgroundColor: "rgba(31, 41, 55, 0.8)",
                          scale: 1.02
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="w-full px-6 py-3 rounded-xl bg-gray-800 text-white font-semibold flex items-center justify-center group"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </motion.button>
                    </Link>
                    <a 
                      href="https://main.d36bfg0wwu7y8d.amplifyapp.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <motion.button
                        whileHover={{ 
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                          scale: 1.02,
                          borderColor: "rgba(255, 255, 255, 0.8)"
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="w-full px-6 py-3 rounded-xl border-2 border-white/50 text-white font-semibold flex items-center justify-center group"
                      >
                        Explore Platform
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </motion.button>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Core Capabilities Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Core Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative overflow-hidden">
                    {/* Retro Pattern Background */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_transparent_50%,_rgba(255,255,255,0.1)_50%,_rgba(255,255,255,0.1)_100%)] bg-[length:10px_10px]" />
                    
                    {/* Card Content */}
                    <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 transition-all duration-300 hover:border-white/30">
                      {/* Retro Corner Accent */}
                      <div className="absolute top-0 right-0 w-12 h-12 bg-white/10 transform rotate-45 translate-x-6 -translate-y-6" />
                      
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-white/10 mb-4 relative">
                        <capability.icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2 relative">
                        {capability.title}
                        {/* Retro Underline */}
                        <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-white/40" />
                      </h3>
                      
                      <p className="text-gray-300 relative z-10">
                        {capability.description}
                      </p>
                      
                      <motion.button
                        className="mt-4 px-4 py-2 text-white/80 flex items-center justify-center group hover:text-white"
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.2 }}
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </motion.button>
                      
                      {/* Retro Corner Lines */}
                      <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-white/20" />
                      <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-white/20" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;