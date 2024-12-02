import { motion } from 'framer-motion';
import { useState } from 'react';
import { Book, Code, Terminal, FileText, Search, ArrowRight, BookOpen, Bookmark, Coffee, Layers, Database, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

// Terminology Data
const terminologyCategories = [
  {
    title: "FinTech Terminologies",
    icon: Database,
    description: "Comprehensive glossary of Financial Technology terms",
    terms: [
      { 
        name: "Banking-as-a-Service (BaaS)", 
        definition: "A model that integrates banking services into non-banking businesses via APIs."
      },
      { 
        name: "Blockchain", 
        definition: "A decentralized digital ledger that records transactions across multiple computers securely and transparently."
      },
      // Add more terms from the previous list
    ]
  },
  {
    title: "Machine Learning Terminologies",
    icon: Brain,
    description: "Key concepts and techniques in Machine Learning",
    terms: [
      { 
        name: "Supervised Learning", 
        definition: "A type of machine learning where the model is trained on labeled data."
      },
      { 
        name: "Neural Network", 
        definition: "A series of algorithms that mimic the way the human brain operates to recognize patterns."
      },
      // Add more terms from the previous list
    ]
  },
  {
    title: "FinTech + ML Crossovers",
    icon: Layers,
    description: "Innovative intersections of Finance and Machine Learning",
    terms: [
      { 
        name: "Fraud Detection", 
        definition: "Using ML models to identify fraudulent activities in financial transactions."
      },
      { 
        name: "Credit Scoring", 
        definition: "AI models evaluating creditworthiness based on diverse datasets."
      },
      // Add more terms from the previous list
    ]
  }
];

const guides = [
  {
    title: "Getting Started",
    icon: BookOpen,
    description: "Begin your journey with comprehensive setup guides",
    topics: ["Quick Start", "Installation", "Basic Configuration"]
  },
  {
    title: "API Reference",
    icon: Code,
    description: "Detailed API documentation and integration guides",
    topics: ["Authentication", "Endpoints", "Rate Limits"]
  },
  {
    title: "Best Practices",
    icon: Bookmark,
    description: "Learn industry standards and optimization techniques",
    topics: ["Security", "Performance", "Architecture"]
  },
  {
    title: "Terminologies",
    icon: Layers,
    description: "Comprehensive glossary of FinTech, ML, and Industry Terms",
    topics: ["FinTech", "Machine Learning", "Crossover Concepts"]
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

export function Documentation() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredTerms = selectedCategory 
    ? terminologyCategories
        .find(cat => cat.title === selectedCategory)?.terms
        .filter(term => 
          term.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
          term.definition.toLowerCase().includes(searchTerm.toLowerCase())
        )
    : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl lg:text-5xl font-bold mb-6"
              >
                Documentation Center
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-indigo-100"
              >
                Everything you need to build something incredible
              </motion.p>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="lg:w-1/3"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {guides.map((guide, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-indigo-100 rounded-lg">
                  <guide.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 ml-4">{guide.title}</h2>
              </div>
              <p className="text-gray-600 mb-6">{guide.description}</p>
              <ul className="space-y-3 mb-6">
                {guide.topics.map((topic, topicIndex) => (
                  <li key={topicIndex} className="flex items-center text-gray-700">
                    <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-3" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
              {guide.title === "Terminologies" ? (
                <Link
                  to="/terminologies"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              ) : (
                <div className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Terminology Modal */}
        {selectedCategory && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCategory(null)}
          >
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold">{selectedCategory}</h2>
                <button 
                  onClick={() => setSelectedCategory(null)}
                  className="text-white hover:bg-white/20 rounded-full p-2"
                >
                  ✕
                </button>
              </div>
              
              <div className="p-6">
                <div className="mb-4 relative">
                  <input 
                    type="text"
                    placeholder="Search terms..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[50vh] overflow-y-auto">
                  {filteredTerms?.map((term, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                    >
                      <h3 className="font-bold text-indigo-600 mb-2">{term.name}</h3>
                      <p className="text-gray-700">{term.definition}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Interactive Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 lg:p-12"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Interactive Learning</h2>
              <p className="text-lg text-gray-600">
                Take your skills to the next level with our interactive tutorials and hands-on exercises.
              </p>
            </div>
            <div className="flex space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
              >
                <Coffee className="mr-2 h-5 w-5" />
                Start Tutorial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition-colors"
              >
                <Book className="mr-2 h-5 w-5" />
                View Examples
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Documentation;