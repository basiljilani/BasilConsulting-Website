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

              <Link to="/about" className="text-gray-600 hover:text-blue-600">
                About
              </Link>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Link 
                  to="/contact" 
                  className="relative inline-flex items-center px-6 py-2 rounded-lg overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-emerald-500 opacity-90 group-hover:opacity-100 transition-all duration-200"></span>
                  <motion.span 
                    className="relative flex items-center text-white font-medium"
                    initial={{ gap: '0.25rem' }}
                    whileHover={{ gap: '0.5rem' }}
                  >
                    Let's Connect
                    <motion.span
                      initial={{ x: -3, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.span>
                  </motion.span>
                </Link>
              </motion.div>
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
                <div className="w-64 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 p-6 rounded-l-lg border-r border-gray-100">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 uppercase tracking-wider">Solutions</h3>
                      <div className="mt-4 space-y-3">
                        <Link 
                          to="/products" 
                          className="group block text-base transition-all duration-300"
                          onClick={() => setShowCategories(false)}
                        >
                          <div className="text-gray-600 hover:text-blue-600 transform hover:translate-x-2 transition-all duration-300 ease-out">
                            <span className="font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-blue-500 after:to-blue-400 group-hover:after:w-full after:transition-all after:duration-300">Products</span>
                          </div>
                        </Link>
                        <Link 
                          to="/services" 
                          className="group block text-base transition-all duration-300"
                          onClick={() => setShowCategories(false)}
                        >
                          <div className="text-gray-600 hover:text-blue-600 transform hover:translate-x-2 transition-all duration-300 ease-out">
                            <span className="font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-blue-500 after:to-blue-400 group-hover:after:w-full after:transition-all after:duration-300">Services</span>
                          </div>
                        </Link>
                        <Link 
                          to="/partners" 
                          className="group block text-base transition-all duration-300"
                          onClick={() => setShowCategories(false)}
                        >
                          <div className="text-gray-600 hover:text-blue-600 transform hover:translate-x-2 transition-all duration-300 ease-out">
                            <span className="font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-blue-500 after:to-blue-400 group-hover:after:w-full after:transition-all after:duration-300">Partners</span>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400 uppercase tracking-wider">Resources</h3>
                      <div className="mt-4 space-y-3">
                        <a 
                          href="https://basilconsulting.beehiiv.com/" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group block text-base transition-all duration-300"
                          onClick={() => setShowCategories(false)}
                        >
                          <div className="text-gray-600 hover:text-purple-600 transform hover:translate-x-2 transition-all duration-300 ease-out">
                            <span className="font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-purple-500 after:to-purple-400 group-hover:after:w-full after:transition-all after:duration-300">Newsletter</span>
                          </div>
                        </a>
                        <Link 
                          to="/docs" 
                          className="group block text-base transition-all duration-300"
                          onClick={() => setShowCategories(false)}
                        >
                          <div className="text-gray-600 hover:text-purple-600 transform hover:translate-x-2 transition-all duration-300 ease-out">
                            <span className="font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-purple-500 after:to-purple-400 group-hover:after:w-full after:transition-all after:duration-300">Documentation</span>
                          </div>
                        </Link>
                        <Link 
                          to="/support" 
                          className="group block text-base transition-all duration-300"
                          onClick={() => setShowCategories(false)}
                        >
                          <div className="text-gray-600 hover:text-purple-600 transform hover:translate-x-2 transition-all duration-300 ease-out">
                            <span className="font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-purple-500 after:to-purple-400 group-hover:after:w-full after:transition-all after:duration-300">Support</span>
                          </div>
                        </Link>
                        <Link 
                          to="/privacy" 
                          className="group block text-base transition-all duration-300"
                          onClick={() => setShowCategories(false)}
                        >
                          <div className="text-gray-600 hover:text-purple-600 transform hover:translate-x-2 transition-all duration-300 ease-out">
                            <span className="font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-purple-500 after:to-purple-400 group-hover:after:w-full after:transition-all after:duration-300">Privacy Policy</span>
                          </div>
                        </Link>
                        <Link 
                          to="/terms" 
                          className="group block text-base transition-all duration-300"
                          onClick={() => setShowCategories(false)}
                        >
                          <div className="text-gray-600 hover:text-purple-600 transform hover:translate-x-2 transition-all duration-300 ease-out">
                            <span className="font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-purple-500 after:to-purple-400 group-hover:after:w-full after:transition-all after:duration-300">Terms of Service</span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-1 p-6 bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Featured Products</h3>
                  <div className="space-y-2">
                    <Link 
                      to="/fintech-pulse" 
                      className="group block"
                      onClick={() => setShowCategories(false)}
                    >
                      <div className="p-4 rounded-lg hover:bg-white transition-all duration-200 transform hover:shadow-lg hover:-translate-y-0.5">
                        <div>
                          <p className="text-sm font-medium text-blue-600 group-hover:text-blue-700">FinTech Pulse Network</p>
                          <p className="mt-1 text-sm text-gray-500 group-hover:text-gray-600">Financial intelligence platform</p>
                        </div>
                      </div>
                    </Link>

                    <Link 
                      to="/basil-ai" 
                      className="group block"
                      onClick={() => setShowCategories(false)}
                    >
                      <div className="p-4 rounded-lg hover:bg-white transition-all duration-200 transform hover:shadow-lg hover:-translate-y-0.5">
                        <div>
                          <p className="text-sm font-medium text-blue-600 group-hover:text-blue-700">Basil AI</p>
                          <p className="mt-1 text-sm text-gray-500 group-hover:text-gray-600">Advanced AI solutions</p>
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <Link
                      to="/contact"
                      className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 transition-colors duration-200 group"
                      onClick={() => setShowCategories(false)}
                    >
                      Contact our experts
                      <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
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