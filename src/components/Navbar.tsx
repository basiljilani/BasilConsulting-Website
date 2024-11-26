import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [showCategories, setShowCategories] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (showCategories) {
        const target = e.target as HTMLElement;
        if (!target.closest('.categories-menu')) {
          setShowCategories(false);
        }
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [showCategories]);

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowCategories(!showCategories);
  };

  return (
    <>
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-[100] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="text-2xl font-russo tracking-tight text-gray-900">
              Basil Consulting<span className="logo-dot bg-orange-500" />
            </Link>

            <div className="flex items-center space-x-8">
              <div className="relative categories-menu">
                <button
                  onClick={handleButtonClick}
                  className="flex items-center text-gray-600 hover:text-blue-600 py-2"
                >
                  Categories
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${showCategories ? 'rotate-180' : ''}`} />
                </button>
              </div>

              <Link to="/team" className="text-gray-600 hover:text-blue-600">
                Our Team
              </Link>

              <Link to="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                Let's Connect!
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {showCategories && (
          <div className="fixed inset-0 flex items-start justify-center pt-16 z-[90]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20"
              onClick={() => setShowCategories(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-7xl mx-4 bg-white rounded-lg shadow-xl categories-menu"
            >
              <div className="flex">
                <div className="w-64 bg-gray-50 p-6 rounded-l-lg border-r border-gray-100">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Solutions</h3>
                      <div className="mt-3 space-y-3">
                        <Link 
                          to="/products" 
                          className="block text-base text-gray-900 hover:text-blue-600 transition-colors duration-150"
                          onClick={() => setShowCategories(false)}
                        >
                          Products
                        </Link>
                        <Link 
                          to="/services" 
                          className="block text-base text-gray-900 hover:text-blue-600 transition-colors duration-150"
                          onClick={() => setShowCategories(false)}
                        >
                          Services
                        </Link>
                        <Link 
                          to="/partners" 
                          className="block text-base text-gray-900 hover:text-blue-600 transition-colors duration-150"
                          onClick={() => setShowCategories(false)}
                        >
                          Partners
                        </Link>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Resources</h3>
                      <div className="mt-3 space-y-3">
                        <Link 
                          to="/newsletter" 
                          className="block text-base text-gray-900 hover:text-blue-600 transition-colors duration-150"
                          onClick={() => setShowCategories(false)}
                        >
                          Newsletter
                        </Link>
                        <Link 
                          to="/docs" 
                          className="block text-base text-gray-900 hover:text-blue-600 transition-colors duration-150"
                          onClick={() => setShowCategories(false)}
                        >
                          Documentation
                        </Link>
                        <Link 
                          to="/support" 
                          className="block text-base text-gray-900 hover:text-blue-600 transition-colors duration-150"
                          onClick={() => setShowCategories(false)}
                        >
                          Support
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-1 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Featured Products</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <Link 
                      to="/products/orbit" 
                      className="group"
                      onClick={() => setShowCategories(false)}
                    >
                      <div className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-150">
                        <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <span className="text-xl">🚀</span>
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-blue-600">Orbit Platform</p>
                          <p className="mt-0.5 text-xs text-gray-500">Enterprise management solution</p>
                        </div>
                      </div>
                    </Link>
                    <Link 
                      to="/products/nova" 
                      className="group"
                      onClick={() => setShowCategories(false)}
                    >
                      <div className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-150">
                        <div className="flex-shrink-0 h-10 w-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <span className="text-xl">⚡</span>
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-blue-600">Nova Analytics</p>
                          <p className="mt-0.5 text-xs text-gray-500">Advanced data insights</p>
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <Link
                      to="/contact"
                      className="inline-flex items-center text-sm text-blue-600 hover:text-blue-500 transition-colors duration-150"
                      onClick={() => setShowCategories(false)}
                    >
                      Contact our experts
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}