import { motion } from 'framer-motion';
import { FileText, Bookmark, Coffee, Layers, Database, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

// Terminology Data
const terminologyCategories = [
  {
    title: "FinTech Terminologies",
    icon: Database,
    description: "Comprehensive glossary of Financial Technology terms",
    categoryId: "fintech"
  },
  {
    title: "Machine Learning Terminologies",
    icon: Brain,
    description: "Key concepts and techniques in Machine Learning",
    categoryId: "ml"
  },
  {
    title: "FinTech + ML Crossovers",
    icon: Layers,
    description: "Innovative intersections of Finance and Machine Learning",
    categoryId: "crossover"
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

export function MobileDocumentation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 lg:hidden">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(40deg,rgba(0,0,0,0.6),rgba(0,0,0,0.3))]" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="w-full px-4">
            <div className="flex flex-col items-center text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold mb-4"
              >
                Documentation Center
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-100 max-w-sm"
              >
                Everything you need to build something incredible
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-4 py-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          {/* Guides & Tutorials */}
          <motion.div variants={item} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-900">Guides & Tutorials</h3>
            </div>
            <p className="text-gray-600 mb-4">Learn through comprehensive guides and practical examples.</p>
            <Link to="/docs" className="text-green-600 hover:text-green-700 font-medium inline-flex items-center">
              Browse Guides
              <Bookmark className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>

          {/* Terminology Categories */}
          {terminologyCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={item}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <category.icon className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="ml-3 text-lg font-semibold text-gray-900">{category.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <Link 
                to={{
                  pathname: "/glossary",
                  search: `?category=${category.categoryId}`
                }}
                className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
              >
                Learn More
                <Coffee className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default MobileDocumentation;
