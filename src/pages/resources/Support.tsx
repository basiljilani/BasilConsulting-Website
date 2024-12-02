import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail, FileQuestion, Clock, Users, CheckCircle, ArrowRight } from 'lucide-react';

const supportChannels = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Get instant help from our support team",
    availability: "24/7 Support",
    action: "Start Chat"
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with a support specialist",
    availability: "Mon-Fri, 9AM-6PM EST",
    action: "Call Now"
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us your detailed inquiries",
    availability: "Response within 24h",
    action: "Send Email"
  }
];

const commonIssues = [
  "Account Setup & Configuration",
  "Integration Guidelines",
  "Billing & Subscriptions",
  "API Documentation",
  "Security Concerns",
  "Performance Optimization"
];

export function Support() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">How Can We Help?</h1>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
              Our support team is here to ensure your success
            </p>
          </motion.div>
        </div>
      </div>

      {/* Support Channels */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {supportChannels.map((channel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-indigo-100 rounded-lg">
                  <channel.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 ml-4">{channel.title}</h2>
              </div>
              <p className="text-gray-600 mb-4">{channel.description}</p>
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <Clock className="h-4 w-4 mr-2" />
                {channel.availability}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                {channel.action}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Common Issues Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Common Issues</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonIssues.map((issue, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.02 }}
                className="flex items-center p-4 rounded-lg hover:bg-indigo-50 transition-all duration-200"
              >
                <CheckCircle className="h-5 w-5 text-indigo-600 mr-3" />
                <span className="text-gray-700">{issue}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Community Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 lg:p-12"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Community</h2>
              <p className="text-lg text-gray-600">
                Connect with other users, share experiences, and get help from the community.
              </p>
            </div>
            <div className="flex space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
              >
                <Users className="mr-2 h-5 w-5" />
                Join Forum
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition-colors"
              >
                <FileQuestion className="mr-2 h-5 w-5" />
                Browse FAQs
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}