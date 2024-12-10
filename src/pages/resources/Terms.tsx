import { motion } from 'framer-motion';
import { Scale, FileCheck, AlertCircle, HelpCircle, ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const sections = [
  {
    icon: Scale,
    title: "Terms of Use",
    description: "Guidelines for using our services",
    details: [
      "Acceptable use policy",
      "User responsibilities",
      "Account management",
      "Service limitations"
    ]
  },
  {
    icon: FileCheck,
    title: "Service Agreement",
    description: "Our commitment and your rights",
    details: [
      "Service availability",
      "Payment terms",
      "Cancellation policy",
      "Service modifications"
    ]
  },
  {
    icon: AlertCircle,
    title: "Legal Compliance",
    description: "Regulatory and legal framework",
    details: [
      "Governing law",
      "Dispute resolution",
      "Intellectual property",
      "Liability limitations"
    ]
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

export function Terms() {
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
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
              Understanding our service agreement and your rights
            </p>
            <p className="text-indigo-200 mt-4">
              Effective date: {new Date().toLocaleDateString()}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-indigo-100 rounded-lg">
                  <section.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 ml-4">{section.title}</h2>
              </div>
              <p className="text-gray-600 mb-6">{section.description}</p>
              <ul className="space-y-3">
                {section.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center text-gray-700">
                    <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-3" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "What happens to my data?",
              "How can I cancel my subscription?",
              "What are the payment terms?",
              "How do you handle disputes?"
            ].map((question, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="flex items-center p-4 rounded-lg hover:bg-indigo-50 transition-all duration-200"
              >
                <HelpCircle className="h-5 w-5 text-indigo-600 mr-3" />
                <span className="text-gray-700">{question}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 lg:p-12"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Have Questions?</h2>
              <p className="text-lg text-gray-600">
                Our legal team is here to help you understand our terms of service.
              </p>
            </div>
            <div className="flex space-x-4">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
                >
                  Contact Legal Team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
              </Link>
              <a
                href="/basil-consulting-terms-of-services.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition-colors"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Terms
                </motion.button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}