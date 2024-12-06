import { motion } from 'framer-motion';
import { Zap, Shield, Sparkles, LineChart, Globe, Lock } from 'lucide-react';

export function FinTechPulse() {
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
            <h2 className="text-2xl lg:text-4xl font-bold mb-6">
              Elevate Your <span className="text-blue-300">Financial</span>{" "}
              <span className="text-purple-300">Intelligence</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Harness the power of AI-driven insights, curated knowledge, and strategic analysis 
              to transform your financial decision-making process.
            </p>
            <a 
              href="https://fintechpulse.net/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-white text-blue-600 hover:bg-blue-50 transition-all duration-300 font-semibold"
              >
                Launch Platform
              </motion.button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Core Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Core Features
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg"
          >
            Comprehensive tools designed for modern financial analysis
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Real-time Analytics",
              description: "Advanced analytics engine providing real-time insights into market trends and financial data",
              icon: LineChart
            },
            {
              title: "Global Coverage",
              description: "Comprehensive coverage of global markets and financial instruments",
              icon: Globe
            },
            {
              title: "AI-Powered Insights",
              description: "Machine learning algorithms that identify patterns and predict market movements",
              icon: Sparkles
            },
            {
              title: "Secure Platform",
              description: "Enterprise-grade security ensuring your data remains protected",
              icon: Lock
            },
            {
              title: "Fast Processing",
              description: "High-performance infrastructure for rapid data processing and analysis",
              icon: Zap
            },
            {
              title: "Strategic Framework",
              description: "Structured approach to financial decision-making and risk management",
              icon: Shield
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
