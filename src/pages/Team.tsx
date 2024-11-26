import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, Users, Target, Award, Briefcase, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const departments = [
  {
    name: "Technology Solutions",
    description: "Driving digital transformation through innovative technology solutions",
    consultants: [
      {
        name: "Sarah Johnson",
        role: "Senior Technology Consultant",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
        expertise: ["Cloud Architecture", "Digital Transformation", "Enterprise Solutions"],
        social: { linkedin: "#", twitter: "#", email: "sarah@basilconsulting.com" }
      },
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
      },
      {
        name: "David Kim",
        role: "Business Operations Consultant",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80",
        expertise: ["Process Optimization", "Change Management", "Risk Analysis"],
        social: { linkedin: "#", twitter: "#", email: "david@basilconsulting.com" }
      }
    ]
  },
  {
    name: "Data Analytics",
    description: "Transforming data into actionable business insights",
    consultants: [
      {
        name: "Lisa Chen",
        role: "Data Analytics Consultant",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80",
        expertise: ["Data Science", "Predictive Analytics", "Business Intelligence"],
        social: { linkedin: "#", twitter: "#", email: "lisa@basilconsulting.com" }
      },
      {
        name: "Alex Rivera",
        role: "Machine Learning Consultant",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
        expertise: ["AI Solutions", "ML Operations", "Predictive Modeling"],
        social: { linkedin: "#", twitter: "#", email: "alex@basilconsulting.com" }
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

  const heroVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const statsVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    })
  };

  const departmentVariants = {
    initial: { opacity: 0, y: 30 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    })
  };

  const consultantVariants = {
    initial: { opacity: 0, x: -30 },
    animate: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    })
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50">
      {/* Hero Section */}
      <motion.div 
        className="relative bg-gradient-to-r from-blue-900 to-blue-800 py-24"
        initial="initial"
        animate="animate"
        variants={heroVariants}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTJWMGgydjMwem0tMiAwSDJ2MmgzMnYtMnptMCAydjI4aDJ2LTI4aC0yem0yLTJ2LTI4aC0ydjI4aDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Meet Our Expert Consultants
            </motion.h1>
            <motion.p 
              className="text-xl text-blue-100 max-w-2xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Industry leaders dedicated to delivering exceptional results through 
              innovative solutions and strategic expertise.
            </motion.p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={statsVariants}
                  initial="initial"
                  animate="animate"
                  className="text-center"
                >
                  <motion.div 
                    className="flex justify-center mb-2"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <stat.icon className="h-8 w-8 text-blue-400" />
                  </motion.div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Departments Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {departments.map((department, deptIndex) => (
          <motion.section
            key={deptIndex}
            variants={departmentVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={deptIndex}
            className="mb-20 last:mb-0"
          >
            <motion.div 
              className="bg-white rounded-2xl shadow-lg p-8 cursor-pointer"
              onClick={() => setSelectedDepartment(selectedDepartment === department.name ? null : department.name)}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{department.name}</h2>
                  <p className="text-xl text-gray-600">{department.description}</p>
                </div>
                <ChevronDown 
                  className={`h-6 w-6 text-gray-400 transform transition-transform duration-300 ${
                    selectedDepartment === department.name ? 'rotate-180' : ''
                  }`}
                />
              </div>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: selectedDepartment === department.name ? "auto" : 0,
                  opacity: selectedDepartment === department.name ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  {department.consultants.map((consultant, index) => (
                    <motion.div
                      key={index}
                      variants={consultantVariants}
                      custom={index}
                      className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3 relative overflow-hidden">
                          <motion.img
                            src={consultant.image}
                            alt={consultant.name}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                        <div className="md:w-2/3 p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-1">
                            {consultant.name}
                          </h3>
                          <p className="text-blue-600 font-medium mb-4">{consultant.role}</p>
                          <div className="mb-4">
                            <div className="flex flex-wrap gap-2">
                              {consultant.expertise.map((skill, skillIndex) => (
                                <motion.span
                                  key={skillIndex}
                                  whileHover={{ scale: 1.05 }}
                                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700"
                                >
                                  {skill}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                          <div className="flex space-x-4">
                            {Object.entries(consultant.social).map(([platform, link], index) => (
                              <motion.a
                                key={platform}
                                href={link}
                                whileHover={{ scale: 1.2, color: '#2563eb' }}
                                className="text-gray-400 transition-colors"
                              >
                                {platform === 'linkedin' && <Linkedin className="h-5 w-5" />}
                                {platform === 'twitter' && <Twitter className="h-5 w-5" />}
                                {platform === 'email' && <Mail className="h-5 w-5" />}
                              </motion.a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}