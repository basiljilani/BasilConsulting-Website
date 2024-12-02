import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, Users, Target, Award, Briefcase, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const departments = [
  {
    name: "Technology Solutions",
    description: "Driving digital transformation through innovative technology solutions",
    consultants: [
      {
        name: "Michael Chen",
        role: "Cloud Solutions Consultant",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
        expertise: ["AWS", "Azure", "Cloud Migration"],
        social: { linkedin: "#", twitter: "#", email: "michael@basilconsulting.com" }
      }
    ]
  },
  {
    name: "Business Strategy",
    description: "Crafting strategic roadmaps for sustainable business growth",
    consultants: [
      {
        name: "Emily Rodriguez",
        role: "Strategic Planning Consultant",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
        expertise: ["Strategic Planning", "Market Analysis", "Growth Strategy"],
        social: { linkedin: "#", twitter: "#", email: "emily@basilconsulting.com" }
      }
    ]
  }
];

const stats = [
  { icon: Users, value: "50+", label: "Expert Consultants" },
  { icon: Target, value: "300+", label: "Projects Delivered" },
  { icon: Award, value: "98%", label: "Client Satisfaction" },
  { icon: Briefcase, value: "15+", label: "Industries Served" }
];

export function Team() {
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50">
      {/* Founder Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-blue-900 to-blue-800 py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-w-4 aspect-h-5">
                <img
                  src="/basil-jilani.jpg"
                  alt="Basil Jilani"
                  className="rounded-2xl shadow-2xl object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-white"
            >
              <h1 className="text-4xl font-bold mb-4">Basil Jilani</h1>
              <p className="text-xl text-blue-200 mb-6">Founder & CEO</p>
              <p className="text-lg text-blue-100 mb-8">
                As the founder of Basil Consulting, I am passionate about driving digital transformation and 
                delivering innovative solutions that help businesses thrive in the modern era. With a 
                background in technology and business strategy, I lead our team in creating impactful 
                solutions for our clients.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-3">Areas of Expertise</h3>
                <div className="flex flex-wrap gap-3">
                  {["Digital Transformation", "Strategic Planning", "Technology Innovation"].map((skill, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="px-4 py-2 bg-blue-700/30 rounded-full text-blue-100"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
                <div className="flex space-x-4 pt-6">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    <Twitter className="h-6 w-6" />
                  </motion.a>
                  <motion.a
                    href="mailto:basil@basilconsulting.com"
                    whileHover={{ scale: 1.1 }}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    <Mail className="h-6 w-6" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Rest of the team sections remain the same */}
      {/* ... (rest of the existing Team component code) ... */}
    </div>
  );
}