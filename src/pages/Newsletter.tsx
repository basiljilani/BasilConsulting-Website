import { motion } from 'framer-motion';
import { Bell, Zap, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: "Industry Insights",
    description: "Stay ahead with expert analysis of emerging trends and technologies"
  },
  {
    icon: Sparkles,
    title: "Success Stories",
    description: "Learn from real-world transformation success stories"
  },
  {
    icon: Bell,
    title: "Latest Updates",
    description: "Get notified about new services, features, and opportunities"
  }
];

const topics = [
  "Digital Transformation",
  "Cloud Solutions",
  "AI & Machine Learning",
  "Enterprise Strategy",
  "Tech Innovation",
  "Industry Trends"
];

export function Newsletter() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Stay Ahead of the Curve
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our newsletter for exclusive insights, industry trends, and innovation strategies
              delivered directly to your inbox.
            </p>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Features */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-100 text-blue-600">
                    <feature.icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right Column - Subscribe Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Subscribe Now</h2>
              <p className="text-gray-600">Join 10,000+ professionals receiving our weekly insights</p>
            </div>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-0"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-0"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Topics of Interest
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {topics.map((topic, index) => (
                    <label key={index} className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-0" />
                      <span className="text-sm text-gray-600">{topic}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none transition-all duration-300 hover:scale-[1.02]"
              >
                Subscribe Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Section - Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-blue-50 rounded-2xl p-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <CheckCircle className="h-6 w-6 text-blue-600" />
              <span className="text-lg font-semibold text-gray-900">Join Our Growing Community</span>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trusted by industry leaders and innovators worldwide. Our newsletter provides actionable insights
              that drive real business results.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}