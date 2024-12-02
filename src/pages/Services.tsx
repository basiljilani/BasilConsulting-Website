import { motion } from 'framer-motion';
import { Code, Shield, Lightbulb, LineChart, Cloud, Database, Cpu, Users, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const serviceCategories = [
  {
    title: "Strategic Consulting",
    description: "Transformative strategies that drive business growth and innovation.",
    icon: Lightbulb,
    services: [
      "Business Transformation",
      "Digital Strategy",
      "Innovation Workshops",
      "Market Analysis"
    ],
    gradientFrom: "from-blue-600",
    gradientTo: "to-purple-600",
    backgroundPattern: "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-blue-50 to-white",
    iconBgColor: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    title: "Technology Solutions",
    description: "Cutting-edge technological implementations to modernize your business.",
    icon: Cpu,
    services: [
      "Cloud Migration",
      "AI Integration",
      "Custom Software Development",
      "System Architecture"
    ],
    gradientFrom: "from-green-600",
    gradientTo: "to-teal-600",
    backgroundPattern: "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-100 via-green-50 to-white",
    iconBgColor: "bg-green-100",
    iconColor: "text-green-600"
  },
  {
    title: "Cybersecurity & Compliance",
    description: "Comprehensive security solutions to protect your digital assets.",
    icon: Shield,
    services: [
      "Security Audits",
      "Risk Management",
      "Compliance Frameworks",
      "Threat Detection"
    ],
    gradientFrom: "from-red-600",
    gradientTo: "to-orange-600",
    backgroundPattern: "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-100 via-red-50 to-white",
    iconBgColor: "bg-red-100",
    iconColor: "text-red-600"
  }
];

const clientTestimonials = [
  {
    quote: "Basil Consulting transformed our digital strategy with unprecedented insight and precision.",
    name: "Emily Rodriguez",
    company: "TechNova Innovations",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    quote: "Their cybersecurity solutions have been a game-changer for our enterprise security.",
    name: "Michael Chen",
    company: "GlobalSync Systems",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg"
  }
];

export function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 pt-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTJWMGgydjMwem0tMiAwSDJ2MmgzMnYtMnptMCAydjI4aDJ2LTI4aC0yem0yLTJ2LTI4aC0ydjI4aDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </motion.div>
        </div>
      </div>

      {/* Service Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg 
                transition-all duration-300 
                hover:shadow-2xl 
                hover:scale-[1.01]
                border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className={`${category.iconBgColor} p-4 rounded-full mr-4`}>
                  <category.icon className={`h-12 w-12 ${category.iconColor}`} />
                </div>
                <h2 className={`text-2xl font-bold 
                  bg-clip-text text-transparent 
                  bg-gradient-to-r ${category.gradientFrom} ${category.gradientTo}`}>
                  {category.title}
                </h2>
              </div>
              <p className="text-lg mb-6 text-gray-600">{category.description}</p>
              <div className="space-y-3">
                {category.services.map((service, i) => (
                  <div key={i} className="flex items-center">
                    <Check className="h-5 w-5 mr-3 text-gray-500" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from industry leaders who have transformed their businesses with our expertise
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {clientTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <p className="text-lg italic text-gray-700 mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Business?</h2>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-10">
              Let's create a tailored strategy that drives your business forward
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-10 py-4 bg-white text-indigo-600 rounded-xl hover:bg-indigo-50 transition-colors font-semibold shadow-lg"
              >
                Schedule Consultation
                <ArrowRight className="ml-3 h-5 w-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}