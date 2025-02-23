import { motion } from 'framer-motion';
import { Bike, UtensilsCrossed, Clock, Star, Search, MapPin, Headphones } from 'lucide-react';

export function Foodo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 pt-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-600 to-rose-600 text-white py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTJWMGgydjMwem0tMiAwSDJ2MmgzMnYtMnptMCAydjI4aDJ2LTI4aC0yem0yLTJ2LTI4aC0ydjI4aDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <Bike className="h-16 w-16 text-white" />
              </motion.div>
              <h1 className="text-4xl lg:text-6xl font-bold">
                Foodo
              </h1>
            </div>
            <h2 className="text-2xl lg:text-4xl font-bold mb-6">
              Your Ultimate <span className="text-red-300">Restaurant</span>{" "}
              <span className="text-rose-300">Marketplace</span>
            </h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8">
              Discover and order from the best local restaurants. Fresh food, fast delivery, 
              and amazing deals all in one place.
            </p>
            <a 
              href="https://hifoodo.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-white text-red-600 hover:bg-red-50 transition-all duration-300 font-semibold"
              >
                Explore Platform
              </motion.button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Core Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Core Features
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg"
          >
            The best food delivery experience for restaurants and customers alike
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Curated Restaurants",
              description: "Hand-picked selection of top-rated local restaurants serving quality food",
              icon: UtensilsCrossed
            },
            {
              title: "Fast Delivery",
              description: "Quick and reliable delivery service right to your doorstep",
              icon: Bike
            },
            {
              title: "Real-time Tracking",
              description: "Track your order in real-time from restaurant to delivery",
              icon: Clock
            },
            {
              title: "Wide Coverage",
              description: "Extensive network of restaurants across multiple locations",
              icon: MapPin
            },
            {
              title: "24/7 Support",
              description: "Round-the-clock customer support for a seamless experience",
              icon: Headphones
            },
            {
              title: "Verified Reviews",
              description: "Authentic ratings and feedback from real customers",
              icon: Star
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
