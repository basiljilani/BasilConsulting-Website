import { motion } from 'framer-motion';
import { Zap, Shield, Sparkles } from 'lucide-react';

export function Products() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 pt-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTJWMGgydjMwem0tMiAwSDJ2MmgzMnYtMnptMCAydjI4aDJ2LTI4aC0yem0yLTJ2LTI4aC0ydjI4aDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              FinTech Pulse Network
            </h1>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Elevate Your <span className="text-blue-300">Financial</span><br/>
              <span className="text-purple-300">Intelligence</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Harness the power of AI-driven insights, curated knowledge, and strategic analysis to transform your financial decision-making.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 rounded-xl bg-white text-blue-600 hover:bg-blue-50 transition-all duration-300 font-semibold"
              >
                Coming Soon
              </motion.button>
              <a 
                href="https://fintechpulse.net/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 rounded-xl border-2 border-white text-white hover:bg-white/10 transition-all duration-300 font-semibold"
                >
                  Explore Features
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Core Capabilities Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Core Capabilities</h2>
          <p className="text-gray-600 text-lg">
            Innovative technologies designed to empower your financial journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            {
              title: "FinTech Pulse Network",
              description: "Comprehensive financial intelligence platform",
              icon: Sparkles
            },
            {
              title: "Market Insights",
              description: "Real-time financial trend analysis and forecasting",
              icon: Zap
            },
            {
              title: "Strategic Solutions",
              description: "Tailored financial strategies for dynamic markets",
              icon: Shield
            }
          ].map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <capability.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{capability.title}</h3>
              <p className="text-gray-600">{capability.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}