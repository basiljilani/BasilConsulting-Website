import { MessageCircle, Phone, Mail, FileQuestion } from 'lucide-react';

const supportOptions = [
  {
    title: "Live Chat",
    description: "Get instant help from our support team",
    icon: MessageCircle,
    action: "Start Chat",
    availability: "Available 24/7"
  },
  {
    title: "Phone Support",
    description: "Speak directly with a support specialist",
    icon: Phone,
    action: "Call Now",
    availability: "Mon-Fri, 9AM-6PM PST"
  },
  {
    title: "Email Support",
    description: "Send us your questions or concerns",
    icon: Mail,
    action: "Send Email",
    availability: "Response within 24 hours"
  },
  {
    title: "FAQ",
    description: "Find answers to common questions",
    icon: FileQuestion,
    action: "Browse FAQ",
    availability: "Self-service"
  }
];

export function Support() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Support Center</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're here to help. Choose how you'd like to get in touch with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {supportOptions.map((option, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <option.icon className="h-8 w-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900 ml-3">{option.title}</h2>
              </div>
              <p className="text-gray-600 mb-4">{option.description}</p>
              <p className="text-sm text-gray-500 mb-6">{option.availability}</p>
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-150">
                {option.action}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Common Topics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="#" className="block p-4 rounded-lg hover:bg-gray-50 transition-colors duration-150">
              <h4 className="font-semibold text-gray-900 mb-2">Getting Started</h4>
              <p className="text-gray-600 text-sm">New to our platform? Start here</p>
            </a>
            <a href="#" className="block p-4 rounded-lg hover:bg-gray-50 transition-colors duration-150">
              <h4 className="font-semibold text-gray-900 mb-2">Account Settings</h4>
              <p className="text-gray-600 text-sm">Manage your account preferences</p>
            </a>
            <a href="#" className="block p-4 rounded-lg hover:bg-gray-50 transition-colors duration-150">
              <h4 className="font-semibold text-gray-900 mb-2">Billing</h4>
              <p className="text-gray-600 text-sm">Questions about your subscription</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}