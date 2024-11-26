import { motion } from 'framer-motion';
import { Shield, Lock, Eye, UserCheck, Server, Bell } from 'lucide-react';

const sections = [
  {
    icon: Shield,
    title: "Data Protection",
    content: "We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction."
  },
  {
    icon: Lock,
    title: "Information Security",
    content: "Your data is encrypted using advanced protocols both in transit and at rest. We regularly update our security measures to ensure maximum protection."
  },
  {
    icon: Eye,
    title: "Data Collection",
    content: "We collect only essential information needed to provide our services, including contact details, usage data, and communication preferences."
  },
  {
    icon: UserCheck,
    title: "Your Rights",
    content: "You have the right to access, modify, or delete your personal information at any time. We ensure transparency in all our data handling practices."
  },
  {
    icon: Server,
    title: "Data Storage",
    content: "All data is stored in secure, certified data centers with redundant backups and strict access controls to ensure data integrity and availability."
  },
  {
    icon: Bell,
    title: "Updates & Notifications",
    content: "We'll notify you of any significant changes to our privacy policy and ensure you're always informed about how we handle your data."
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your privacy is our priority. Learn how we protect and manage your data.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <section.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 ml-3">{section.title}</h2>
              </div>
              <p className="text-gray-600">{section.content}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Have Questions?</h2>
          <p className="text-gray-600 mb-6">
            If you have any questions about our privacy policy or how we handle your data, please don't hesitate to contact us.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-150"
            >
              Contact Us
            </a>
            <button className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-150">
              Download Policy PDF
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}