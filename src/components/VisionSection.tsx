import { motion } from 'framer-motion';
import { Rocket, Zap, Target } from 'lucide-react';
import { CheckeredBackground } from './CheckeredBackground';

export function VisionSection() {
  return (
    <section className="relative py-24 bg-white">
      <CheckeredBackground />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Architects of the Future
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't just adapt to the future—we create it. Through revolutionary strategies and bold partnerships,
            we transform possibilities into breakthroughs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Rocket,
              title: "Revolutionary Strategies",
              description: "We design ecosystems, not just systems. From AI-driven insights to blockchain-backed transparency."
            },
            {
              icon: Target,
              title: "Bold Partnerships",
              description: "Bringing Silicon Valley ingenuity with global accessibility to transform industries."
            },
            {
              icon: Zap,
              title: "Regulatory Confidence",
              description: "Turning compliance from a headache into your competitive advantage."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-100 mb-6">
                <item.icon className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}