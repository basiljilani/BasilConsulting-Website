import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

interface FooterProps {
  show?: boolean;
}

export function Footer({ show = true }: FooterProps) {
  if (!show) return null;
  
  return (
    <footer className="bg-gray-950 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <div className="flex items-start">
                <span className="text-2xl font-bold tracking-tight">
                  Basil Consulting
                </span>
                <span className="footer-dot bg-orange-500"></span>
              </div>
            </Link>
            <p className="text-gray-400 max-w-md mb-8 leading-relaxed">
              Innovative digital solutions and strategic insights for businesses seeking technology-driven transformation.
            </p>
            <div className="flex space-x-5">
              {[
                { Icon: Facebook, href: '#' },
                { Icon: Twitter, href: '#' },
                { Icon: Linkedin, href: '#' },
                { Icon: Instagram, href: '#' }
              ].map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-500 hover:text-orange-500 transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Info - Positioned absolutely to the right */}
        <div className="absolute top-16 right-4 sm:right-6 lg:right-8 text-gray-400 space-y-4">
          <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-orange-500" />
              <a href="mailto:info@basilconsulting.net" className="text-gray-600 hover:text-orange-600">
                info@basilconsulting.net
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-orange-500" />
              <a href="tel:+925189555777" className="text-gray-600 hover:text-orange-600">
                +92 51 89 55 777
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-orange-500" />
              <span className="text-gray-600">
                Evacuee Trust Complex.
                <br />
                Agha Khan Rd, F-5/1, Islamabad, Pakistan
              </span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            {new Date().getFullYear()} Basil Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}