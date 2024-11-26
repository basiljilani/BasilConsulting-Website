import { User, Mail, PencilLine, Send, Sparkles, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export function Contact() {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-cyan-50 flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="bg-white rounded-3xl p-12 shadow-xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center"
          >
            <div className="flex justify-center mb-4">
              <Sparkles className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Ready to Transform Your Business?</h2>
            <p className="text-gray-600 mb-2">
              Let's create something extraordinary together! Whether you have a groundbreaking idea or a challenging problem,
              we're here to turn your vision into reality.
            </p>
            <p className="text-sm text-blue-600 font-medium mb-8">
              Your success story begins with a simple message
            </p>
          </motion.div>

          <form className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <label htmlFor="name" className="sr-only">Full Name</label>
              <div className="form-input-group">
                <User className="h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  id="name"
                  placeholder="Full Name"
                  className="block w-full border-0 border-b border-transparent bg-transparent pl-3 text-gray-900"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <label htmlFor="email" className="sr-only">Email Address</label>
              <div className="form-input-group">
                <Mail className="h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  className="block w-full border-0 border-b border-transparent bg-transparent pl-3 text-gray-900"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <label htmlFor="subject" className="sr-only">Subject</label>
              <div className="form-input-group">
                <FileText className="h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  className="block w-full border-0 border-b border-transparent bg-transparent pl-3 text-gray-900"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <label htmlFor="message" className="sr-only">Your Message</label>
              <div className="form-input-group">
                <PencilLine className="h-5 w-5 text-gray-400" />
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Share your vision with us..."
                  className="block w-full border-0 border-b border-transparent bg-transparent pl-3 text-gray-900 resize-none"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <button
                type="submit"
                className="w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none transition-all duration-300 hover:scale-[1.02]"
              >
                Let's Make It Happen
                <Send className="ml-2 h-4 w-4" />
              </button>
            </motion.div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}