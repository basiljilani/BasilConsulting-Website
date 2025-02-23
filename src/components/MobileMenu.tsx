import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X as XIcon, ArrowRight } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div 
      className={`
        fixed inset-0 bg-black/20 backdrop-blur-sm z-[200] lg:hidden
        ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        transition-opacity duration-200 ease-in-out
      `}
      onClick={onClose}
    >
      <div 
        className={`
          fixed inset-y-0 right-0 w-[80%] max-w-sm bg-white shadow-xl
          transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          transition-transform duration-200 ease-in-out
        `}
        onClick={e => e.stopPropagation()}
      >
        <div className="h-full flex flex-col">
          {/* Menu header */}
          <div className="px-6 pt-6 pb-4 flex items-center justify-between border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Menu</h2>
            <button
              onClick={onClose}
              className="rounded-md p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              <XIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Menu content */}
          <div className="flex-1 px-6 py-6 overflow-y-auto">
            {/* Solutions Section */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-blue-600 uppercase mb-4">
                SOLUTIONS
              </h3>
              <div className="space-y-4">
                <Link 
                  to="/products" 
                  className="block text-gray-600 hover:text-gray-900"
                  onClick={onClose}
                >
                  Products
                </Link>
                <Link 
                  to="/services" 
                  className="block text-gray-600 hover:text-gray-900"
                  onClick={onClose}
                >
                  Services
                </Link>
                <Link 
                  to="/partners" 
                  className="block text-gray-600 hover:text-gray-900"
                  onClick={onClose}
                >
                  Partners
                </Link>
              </div>
            </div>

            {/* Resources Section */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-purple-600 uppercase mb-4">
                RESOURCES
              </h3>
              <div className="space-y-4">
                <a 
                  href="https://basilconsulting.beehiiv.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-600 hover:text-gray-900"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open('https://basilconsulting.beehiiv.com/', '_blank', 'noopener,noreferrer');
                    onClose();
                  }}
                >
                  Newsletter
                </a>
                <Link 
                  to="/docs" 
                  className="block text-gray-600 hover:text-gray-900"
                  onClick={onClose}
                >
                  Documentation
                </Link>
                <Link 
                  to="/support" 
                  className="block text-gray-600 hover:text-gray-900"
                  onClick={onClose}
                >
                  Support
                </Link>
                <Link 
                  to="/privacy" 
                  className="block text-gray-600 hover:text-gray-900"
                  onClick={onClose}
                >
                  Privacy Policy
                </Link>
                <Link 
                  to="/terms" 
                  className="block text-gray-600 hover:text-gray-900"
                  onClick={onClose}
                >
                  Terms of Service
                </Link>
              </div>
            </div>

            {/* Featured Products Section */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Featured Products
              </h3>
              <div className="space-y-4">
                <Link 
                  to="/fintech-pulse" 
                  className="block"
                  onClick={onClose}
                >
                  <div className="rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <p className="text-blue-600 font-medium">FinTech Pulse Network</p>
                    <p className="text-gray-500 text-sm">Financial intelligence platform</p>
                  </div>
                </Link>
                <Link 
                  to="/foodo" 
                  className="block"
                  onClick={onClose}
                >
                  <div className="rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <p className="text-blue-600 font-medium">Foodo</p>
                    <p className="text-gray-500 text-sm">Restaurant marketplace</p>
                  </div>
                </Link>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <Link
                  to="/contact"
                  className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 group"
                  onClick={onClose}
                >
                  Contact our experts
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
