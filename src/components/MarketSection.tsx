import { motion } from 'framer-motion';
import { TrendingUp, Globe, Brain } from 'lucide-react';

export function MarketSection() {
  const markets = [
    {
      icon: TrendingUp,
      title: "FinTech Disruption",
      value: "$150B",
      description: "Market reshaping how the world banks and invests"
    },
    {
      icon: Brain,
      title: "AI Growth",
      value: "$300B",
      description: "Transforming industries by 2027"
    },
    {
      icon: Globe,
      title: "Digital Globalization",
      value: "$20T",
      description: "Opportunity in emerging markets"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Market Opportunity</h2>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Standing at the crossroads of three transformational forces
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {markets.map((market, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300"
            >
              <market.icon className="h-8 w-8 text-indigo-300 mb-6" />
              <h3 className="text-2xl font-bold mb-2">{market.title}</h3>
              <p className="text-4xl font-bold text-indigo-300 mb-4">{market.value}</p>
              <p className="text-indigo-100">{market.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}