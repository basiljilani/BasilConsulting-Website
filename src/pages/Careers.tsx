import { motion } from 'framer-motion';
import { Briefcase, Users, Rocket, ExternalLink } from 'lucide-react';

export default function Careers() {
  const openPositions = [
    {
      title: "Database Engineer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
      description: "Design, implement, and maintain robust database solutions while ensuring optimal performance and scalability."
    },
    {
      title: "Backend Engineer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
      description: "Develop and maintain server-side applications, APIs, and services using modern backend technologies."
    },
    {
      title: "Cloud Engineer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
      description: "Architect and implement cloud-native solutions, manage infrastructure, and optimize cloud resources."
    },
    {
      title: "Full-Stack iOS/Android Developer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
      description: "Create and maintain cross-platform mobile applications for iOS and Android using modern frameworks and best practices."
    }
  ];

  const benefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaborative Culture",
      description: "Work with talented individuals in a supportive environment"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Growth Opportunities",
      description: "Continuous learning and career development programs"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Flexible Work",
      description: "Remote-first approach with flexible hours"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Join Our Team
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Be part of a dynamic team working on cutting-edge consulting projects. 
            We're always looking for talented individuals who share our passion for excellence.
          </p>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-24"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Join Us?
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-blue-600 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-500">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Open Positions Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-24"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Open Positions
          </h2>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{position.title}</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        {position.department}
                      </span>
                      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        {position.type}
                      </span>
                      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                        {position.location}
                      </span>
                    </div>
                    <p className="mt-2 text-gray-500">{position.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Application Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-24 mb-24 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Apply?
          </h2>
          <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
            We're excited to learn more about you! Submit your resume through our application form.
          </p>
          <div className="inline-block">
            <a
              href="https://forms.gle/LBkg855JcY5zoSj98"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
            >
              Submit Your Application
              <ExternalLink className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Note: You will be redirected to our application form
          </p>
        </motion.div>
      </div>
    </div>
  );
}
