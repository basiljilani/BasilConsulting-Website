import { User, Mail, PencilLine, Send, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export function Contact() {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50 flex items-center justify-center py-16 px-4">
      <div className="max-w-6xl w-full mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Welcome message */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:pr-12"
        >
          <div className="relative">
            <div className="relative">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Let's Create Something 
                <span className="text-emerald-600"> Amazing</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you have a groundbreaking idea or a challenging problem,
                we're here to help transform your vision into reality. Your journey to success begins with a simple message.
              </p>
              <div className="flex items-center space-x-6 text-gray-500">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-emerald-600" />
                  <span>Quick Response</span>
                </div>
                <div className="flex items-center">
                  <User className="h-5 w-5 mr-2 text-emerald-600" />
                  <span>Personal Touch</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right side - Contact form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white rounded-2xl shadow-sm p-8 relative">
            <div className="relative">
              <form className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="group"
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      className="block w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all duration-200"
                      placeholder="John Doe"
                    />
                    <User className="absolute right-3 top-3.5 h-5 w-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="group"
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      className="block w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all duration-200"
                      placeholder="john@example.com"
                    />
                    <Mail className="absolute right-3 top-3.5 h-5 w-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="group"
                >
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <div className="relative">
                    <input
                      type="text"
                      id="subject"
                      className="block w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all duration-200"
                      placeholder="What's this about?"
                    />
                    <FileText className="absolute right-3 top-3.5 h-5 w-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="group"
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <div className="relative">
                    <textarea
                      id="message"
                      rows={4}
                      className="block w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all duration-200 min-h-[120px]"
                      placeholder="Share your thoughts..."
                    />
                    <PencilLine className="absolute right-3 top-3.5 h-5 w-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-emerald-500 text-white py-3 px-6 rounded-xl hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-100 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <span className="relative flex items-center">
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </span>
                  </motion.button>
                </motion.div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}