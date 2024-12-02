import { motion } from 'framer-motion';
import { Sparkles, Shield, Workflow } from 'lucide-react';
import { CheckeredBackground } from './CheckeredBackground';

export function ApproachSection() {
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
            Our Approach
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Value beyond billable hours—we're here for transformative partnerships
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {[
            {
              icon: Sparkles,
              title: "Subscription Innovation",
              description: "Continuous innovation models ensuring sustained growth and adaptation to market changes."
            },
            {
              icon: Shield,
              title: "Risk-Sharing Partnerships",
              description: "Aligned incentives where we succeed together, fostering true collaboration and commitment."
            },
            {
              icon: Workflow,
              title: "Next-Gen Integration",
              description: "Seamlessly embedding cutting-edge technologies into your business DNA."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
              <div className="h-1 w-0 bg-gradient-to-r from-indigo-600 to-purple-600 mt-6 group-hover:w-full transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}