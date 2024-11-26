import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-slate-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold tracking-tight text-white hover:text-blue-300 transition-colors">
                Basil Consulting<span className="logo-dot bg-orange-500 w-1.5 h-1.5" aria-hidden="true" />
              </span>
            </Link>
            <p className="mt-4 text-gray-300">
              Forward-thinking digital solutions and strategic insights for businesses seeking technology-driven transformation.
            </p>
            <div className="mt-8 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/docs" className="text-gray-300 hover:text-blue-300 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/newsletter" className="text-gray-300 hover:text-blue-300 transition-colors">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-blue-300 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-base text-gray-300 text-center">
            © {new Date().getFullYear()} Basil Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}