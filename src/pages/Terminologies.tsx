import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, BookOpen, Database, Brain, Layers } from 'lucide-react';

// Comprehensive Terminology Categories
const terminologyCategories = [
  {
    id: 'fintech',
    title: "FinTech Terminologies",
    icon: Database,
    terms: [
      { name: "Banking-as-a-Service (BaaS)", definition: "A model that integrates banking services into the products of non-banking businesses via APIs." },
      { name: "Blockchain", definition: "A decentralized digital ledger that records transactions across multiple computers securely and transparently." },
      { name: "Cryptocurrency", definition: "A digital or virtual currency secured by cryptography, used as a medium of exchange." },
      { name: "Decentralized Finance (DeFi)", definition: "Financial services using blockchain to remove intermediaries in transactions." },
      { name: "Digital Wallet", definition: "A software-based system that securely stores payment information for online and offline transactions." },
      { name: "Robo-Advisors", definition: "Automated platforms providing financial planning services with minimal human supervision." },
      { name: "Peer-to-Peer (P2P) Lending", definition: "A method of lending where individuals lend money to others directly via online platforms." },
      { name: "Know Your Customer (KYC)", definition: "A process where financial institutions verify the identity of their clients." },
      { name: "Anti-Money Laundering (AML)", definition: "Policies and procedures to detect and prevent money laundering activities." },
      { name: "Open Banking", definition: "A system allowing third-party developers to access financial data using APIs." },
      { name: "Smart Contracts", definition: "Self-executing contracts with the terms directly written into code." },
      { name: "Payment Gateway", definition: "A service that authorizes credit card payments for online transactions." },
      { name: "RegTech", definition: "Technology designed to help businesses comply with regulations efficiently." },
      { name: "InsurTech", definition: "The use of technology to enhance insurance products and services." },
      { name: "Contactless Payment", definition: "Transactions using RFID technology or NFC, enabling payment without physical contact." },
      { name: "Artificial Intelligence (AI) in Finance", definition: "AI applications like fraud detection, customer service chatbots, and personalized banking." },
      { name: "Big Data Analytics", definition: "Analysis of large data sets to uncover patterns, trends, and insights in finance." },
      { name: "API (Application Programming Interface)", definition: "A set of rules enabling interaction between different software applications." },
      { name: "Tokenization", definition: "The process of replacing sensitive data with unique identifiers or tokens." },
      { name: "Stablecoin", definition: "A type of cryptocurrency designed to minimize price volatility by pegging its value to an external asset." },
      { name: "Embedded Finance", definition: "Integration of financial services into non-financial products or platforms." },
      { name: "Initial Coin Offering (ICO)", definition: "A fundraising method for new cryptocurrencies or blockchain-based projects." },
      { name: "Digital Banking", definition: "Online or mobile banking services without physical branches." },
      { name: "FinTech Sandbox", definition: "A regulatory framework allowing companies to test new products under relaxed requirements." },
      { name: "Virtual Card", definition: "A digital version of a payment card used for online transactions." }
    ]
  },
  {
    id: 'ml',
    title: "Machine Learning Terminologies",
    icon: Brain,
    terms: [
      { name: "Supervised Learning", definition: "A type of machine learning where the model is trained on labeled data." },
      { name: "Unsupervised Learning", definition: "A machine learning method using unlabeled data to find hidden patterns." },
      { name: "Reinforcement Learning", definition: "Learning through trial and error where the agent receives rewards or penalties." },
      { name: "Neural Network", definition: "A series of algorithms that mimic the way the human brain operates to recognize patterns." },
      { name: "Deep Learning", definition: "A subset of machine learning using neural networks with multiple layers." },
      { name: "Gradient Descent", definition: "An optimization algorithm used to minimize a loss function in machine learning models." },
      { name: "Overfitting", definition: "When a model learns the training data too well, including noise, reducing its generalization ability." },
      { name: "Underfitting", definition: "When a model is too simple to capture the complexity of the data." },
      { name: "Hyperparameter Tuning", definition: "The process of optimizing model parameters to improve performance." },
      { name: "Natural Language Processing (NLP)", definition: "A field of AI focused on enabling machines to understand and process human language." },
      { name: "Support Vector Machine (SVM)", definition: "A supervised learning algorithm used for classification and regression tasks." },
      { name: "K-Nearest Neighbors (KNN)", definition: "A simple algorithm that classifies data points based on the proximity of their neighbors." },
      { name: "Decision Tree", definition: "A model that uses a tree-like structure to make decisions." },
      { name: "Random Forest", definition: "An ensemble learning method using multiple decision trees to improve accuracy." },
      { name: "Convolutional Neural Network (CNN)", definition: "A neural network architecture mainly used for image recognition." },
      { name: "Recurrent Neural Network (RNN)", definition: "A neural network for sequential data like time series or natural language." },
      { name: "Feature Engineering", definition: "The process of selecting, modifying, or creating input variables for a model." },
      { name: "Clustering", definition: "Grouping similar data points in unsupervised learning." },
      { name: "Dimensionality Reduction", definition: "Reducing the number of variables in a dataset while retaining key information." },
      { name: "Activation Function", definition: "A function in a neural network determining the output of a neuron." }
    ]
  },
  {
    id: 'crossover',
    title: "FinTech + Machine Learning Crossovers",
    icon: Layers,
    terms: [
      { name: "Fraud Detection", definition: "Using ML models to identify fraudulent activities in financial transactions." },
      { name: "Credit Scoring", definition: "AI models evaluating creditworthiness based on diverse datasets." },
      { name: "Predictive Analytics", definition: "Techniques using historical data to make future predictions." },
      { name: "Sentiment Analysis", definition: "NLP to gauge consumer sentiment in financial markets." },
      { name: "Robo-Advisory Optimization", definition: "Using ML to improve the performance of automated financial advisors." },
      { name: "Algorithmic Trading", definition: "Using ML to create and execute trading strategies automatically." },
      { name: "Portfolio Optimization", definition: "Applying ML to maximize returns while minimizing risk." },
      { name: "Chatbots in Banking", definition: "AI-powered bots handling customer inquiries efficiently." },
      { name: "Customer Segmentation", definition: "Clustering customers based on behavior to personalize financial services." },
      { name: "AML Monitoring", definition: "ML models detecting patterns indicative of money laundering." }
    ]
  }
];

export function Terminologies() {
  const [activeCategory, setActiveCategory] = useState(terminologyCategories[0].id);
  const [searchTerm, setSearchTerm] = useState('');

  const currentCategory = useMemo(() => 
    terminologyCategories.find(cat => cat.id === activeCategory), 
    [activeCategory]
  );

  const filteredTerms = useMemo(() => {
    if (!currentCategory) return [];
    return currentCategory.terms.filter(term => 
      term.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [currentCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            Technology Terminologies
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-indigo-100 max-w-3xl mx-auto"
          >
            Comprehensive glossary of FinTech, Machine Learning, and Innovative Technology Terms
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Category Sidebar */}
          <div className="space-y-4">
            {terminologyCategories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * terminologyCategories.findIndex(c => c.id === category.id) }}
                className={`
                  flex items-center p-4 rounded-lg cursor-pointer transition-all duration-300
                  ${activeCategory === category.id 
                    ? 'bg-indigo-600 text-white shadow-lg' 
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'}
                `}
                onClick={() => setActiveCategory(category.id)}
              >
                <div className={`
                  p-2 rounded-lg mr-4 
                  ${activeCategory === category.id 
                    ? 'bg-white/20' 
                    : 'bg-indigo-100'}
                `}>
                  <category.icon className={`
                    h-6 w-6 
                    ${activeCategory === category.id ? 'text-white' : 'text-indigo-600'}
                  `} />
                </div>
                <span className="font-semibold">{category.title}</span>
              </motion.div>
            ))}
          </div>

          {/* Terms Content */}
          <div className="md:col-span-2">
            {/* Search Bar */}
            <div className="mb-8 relative">
              <input 
                type="text"
                placeholder="Search terms..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            {/* Terms Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTerms.map((term, index) => (
                <motion.div
                  key={term.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="font-bold text-indigo-600 mb-3 text-lg">{term.name}</h3>
                  <p className="text-gray-700">{term.definition}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terminologies;
