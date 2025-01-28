import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

interface FooterProps {
  show?: boolean;
}

export function Footer({ show = true }: FooterProps) {
  if (!show) return null;
  
  return (
    <footer className="bg-gray-950 text-gray-100 font-display">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <div className="flex items-start">
                <span className="text-xl sm:text-2xl font-bold tracking-tight">
                  Basil Consulting
                </span>
                <span className="footer-dot bg-orange-500"></span>
              </div>
            </Link>
            <p className="text-gray-400 max-w-md mb-6 leading-relaxed text-sm sm:text-base">
              Innovative digital solutions and strategic insights for businesses seeking technology-driven transformation.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, href: '#', label: 'Facebook' },
                { Icon: Twitter, href: '#', label: 'Twitter' },
                { Icon: Linkedin, href: '#', label: 'LinkedIn' },
                { Icon: Instagram, href: '#', label: 'Instagram' }
              ].map(({ Icon, href, label }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-400 hover:text-orange-500 transition-colors p-2"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { text: 'About Us', href: '/about' },
                { text: 'Services', href: '/services' },
                { text: 'Products', href: '/products' },
                { text: 'Documentation', href: '/docs' },
                { text: 'Support', href: '/support' },
                { text: 'Careers', href: '/careers' }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <div className="space-y-3">
              <a 
                href="mailto:info@basilconsulting.net" 
                className="flex items-center space-x-3 text-gray-400 hover:text-orange-500 transition-colors group"
              >
                <Mail className="h-5 w-5 text-orange-500 group-hover:text-orange-400" />
                <span className="text-sm">info@basilconsulting.net</span>
              </a>
              <a 
                href="tel:+925189555777" 
                className="flex items-center space-x-3 text-gray-400 hover:text-orange-500 transition-colors group"
              >
                <Phone className="h-5 w-5 text-orange-500 group-hover:text-orange-400" />
                <span className="text-sm">+92 51 89 55 777</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin className="h-5 w-5 text-orange-500 flex-shrink-0 mt-1" />
                <div className="text-sm">
                  Evacuee Trust Complex,<br />
                  Agha Khan Rd, F-5/1,<br />
                  Islamabad, Pakistan
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm text-center">
            &copy; {new Date().getFullYear()} Basil Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}