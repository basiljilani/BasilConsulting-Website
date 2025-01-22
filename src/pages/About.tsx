import { motion } from 'framer-motion';
import { Rocket, Target, Sparkles, ArrowRight, Brain, Globe, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 pt-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTJWMGgydjMwem0tMiAwSDJ2MmgzMnYtMnptMCAydjI4aDJ2LTI4aC0yem0yLTJ2LTI4aC0ydjI4aDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Where Vision Meets Innovation</h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              At Basil Consulting, we believe the future isn't something to wait for—it's something we build.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Founded by Basil Jilani, we're on a mission to redefine the relationship between technology and business. 
              Our journey began in the dynamic world of Banking as a Service (BaaS), where we cultivated a profound 
              understanding of complex financial systems and the technologies driving their evolution.
            </p>
            <div className="space-y-4">
              {[
                "Digital Transformation",
                "Strategic Innovation",
                "Technology Excellence"
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-indigo-600 rounded-full" />
                  <span className="text-gray-700">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl shadow-lg"
          >
            <blockquote className="text-xl text-gray-800 italic">
              "I believe every challenge is an opportunity to rewrite the rules of what's possible. 
              At Basil Consulting, we don't just solve problems—we cultivate pathways for a better future."
            </blockquote>
            <div className="mt-4 text-gray-600">
              Basil Jilani, Founder & CEO
            </div>
          </motion.div>
        </div>

        {/* About the Founder Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="relative overflow-hidden bg-gradient-to-br from-white to-indigo-50 rounded-3xl shadow-xl border border-indigo-100">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2MzY2ZjEiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDMwaC0yVjBoMnYzMHptLTIgMEgydjJoMzJ2LTJ6bTAgMnYyOGgydi0yOGgtMnptMi0ydi0yOGgtMnYyOGgyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
            
            <div className="relative p-8 sm:p-12">
              <div className="flex flex-col items-center mb-10">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mb-6"
                >
                  <span className="text-4xl text-white font-bold">B</span>
                </motion.div>
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-2 font-lexend">About the Founder</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
              </div>

              <div className="space-y-6 text-gray-600 leading-relaxed max-w-3xl mx-auto font-lato">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-lg font-semibold"
                >
                  At Basil Consulting, the story starts with an unconventional path—a story of grit, determination, and an unwavering belief in possibilities. Founded by a self-taught FinTech and AI visionary, the company embodies the spirit of breaking barriers and building bridges between the complex world of technology and the practical needs of businesses.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-lg font-semibold"
                >
                  The founder's journey is nothing short of inspiring. With a non-technical background in finance, he didn't let a lack of formal training hold him back. Instead, he embraced the challenge head-on, teaching himself programming, artificial intelligence, and cutting-edge tools from scratch. It wasn't easy, but that's exactly what makes the foundation of Basil Consulting so unique—an unshakable resolve to turn challenges into opportunities and complexity into clarity.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-lg font-semibold"
                >
                  This same energy fuels Basil Consulting. It's not just about solving problems; it's about creating possibilities. From helping businesses navigate the fast-evolving FinTech landscape to crafting innovative AI-powered solutions, the company thrives on delivering meaningful, impactful results.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                  className="text-lg font-semibold"
                >
                  At its core, Basil Consulting is more than a company; it's a promise—a promise that no matter your starting point, transformation is always within reach. Whether you're a business looking to innovate or someone seeking inspiration, the story behind Basil Consulting is proof that grit and determination can achieve extraordinary things.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                  className="text-lg font-semibold"
                >
                  Here, we approach every project with high energy, deep care, and a commitment to creating something that truly matters. Welcome to Basil Consulting, where possibilities come alive.
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Innovation First",
                description: "Pushing boundaries and reimagining possibilities through cutting-edge solutions"
              },
              {
                icon: Shield,
                title: "Trust & Excellence",
                description: "Building lasting relationships through uncompromising quality and integrity"
              },
              {
                icon: Globe,
                title: "Global Impact",
                description: "Creating solutions that drive positive change across industries and borders"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-indigo-100 rounded-lg">
                    <value.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-2">{value.title}</h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-6">Join Us on This Journey</h2>
          <p className="text-lg text-indigo-100 max-w-2xl mx-auto mb-8">
            Whether you're a forward-thinking company looking to redefine your potential, 
            or an individual inspired to explore new possibilities, we invite you to connect with us.
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 rounded-lg bg-white text-indigo-600 hover:bg-indigo-50 transition-colors"
            >
              Start a Conversation
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default About;