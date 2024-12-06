import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Shield, ArrowRight, LucideIcon } from 'lucide-react';
import './Products.css';

interface Capability {
  title: string;
  description: string;
  icon: LucideIcon;
}

const capabilities: Capability[] = [
  {
    title: "FinTech Solutions",
    description: "Comprehensive financial intelligence platforms powered by advanced analytics and machine learning",
    icon: Sparkles,
  },
  {
    title: "AI Innovation",
    description: "State-of-the-art artificial intelligence solutions that adapt and evolve with your business needs",
    icon: Shield,
  },
  {
    title: "Strategic Solutions",
    description: "Tailored strategies and frameworks designed to optimize your business operations and growth",
    icon: Shield,
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
    <div className="relative min-h-screen">
      <div className="neural-network-animation">
        <div id="particles-js"></div>
      </div>
      
      <div className="content-overlay">
        <div className="flex flex-col items-center justify-center min-h-screen text-white px-4">
          <h1 className="text-6xl font-bold mb-6 text-center">Transformative Digital Solutions</h1>
          <p className="text-xl text-center mb-16 max-w-4xl">
            Experience the future of technology with our innovative products designed to
            revolutionize your business operations and drive unprecedented growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl w-full">
            <div className="bg-black bg-opacity-50 backdrop-blur-sm p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">FinTech Pulse Network</h2>
              <p className="mb-8">
                A comprehensive financial intelligence platform that transforms how businesses analyze, visualize, and
                leverage financial data for strategic decision-making.
              </p>
              <div className="flex space-x-4">
                <Link to="/fintech-pulse" className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition">
                  Learn More →
                </Link>
                <Link to="/fintech-pulse" className="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-black transition">
                  Explore Platform →
                </Link>
              </div>
            </div>

            <div className="bg-black bg-opacity-50 backdrop-blur-sm p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">Basil AI</h2>
              <p className="mb-8">
                Advanced AI solutions that drive innovation and automation across your organization, enabling smarter
                decisions and enhanced operational efficiency.
              </p>
              <div className="flex space-x-4">
                <Link to="/basil-ai" className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition">
                  Learn More →
                </Link>
                <a 
                  href="https://main.d36bfg0wwu7y8d.amplifyapp.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-black transition"
                >
                  Explore Platform →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;