import { motion } from 'framer-motion';
import { Shield, Award, Users, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const partners = [];

const achievements = [
  {
    icon: Shield,
    value: "100+",
    label: "Joint Projects"
  },
  {
    icon: Award,
    value: "15+",
    label: "Partnership Awards"
  },
  {
    icon: Users,
    value: "50K+",
    label: "Clients Served"
  },
  {
    icon: Globe,
    value: "30+",
    label: "Countries"
  }
];

export function Partners() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 pt-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Strategic Partners</h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Collaborating with industry leaders to deliver exceptional solutions
            </p>
          </motion.div>
        </div>
      </div>

      {/* Partners Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center text-gray-600">
          No partners currently listed.
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white mb-4">
                <achievement.icon className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {achievement.value}
              </div>
              <div className="text-gray-600">{achievement.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-6">Become a Partner</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join our ecosystem of innovation and help shape the future of technology
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 rounded-xl hover:bg-indigo-50 transition-colors"
            >
              Partner With Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Partners;