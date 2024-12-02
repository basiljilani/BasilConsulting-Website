import { Book, Code, Terminal, FileText } from 'lucide-react';

const sections = [
  {
    title: "Getting Started",
    icon: Book,
    items: [
      "Quick Start Guide",
      "Installation",
      "Basic Configuration",
      "First Steps"
    ]
  },
  {
    title: "API Reference",
    icon: Code,
    items: [
      "Authentication",
      "Endpoints",
      "Rate Limits",
      "Error Handling"
    ]
  },
  {
    title: "CLI Tools",
    icon: Terminal,
    items: [
      "Command Reference",
      "Configuration",
      "Plugins",
      "Troubleshooting"
    ]
  },
  {
    title: "Guides",
    icon: FileText,
    items: [
      "Best Practices",
      "Security",
      "Performance",
      "Deployment"
    ]
  }
];

export function Documentation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Documentation</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our products and services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-6">
                <section.icon className="h-8 w-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900 ml-3">{section.title}</h2>
              </div>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 hover:underline transition-colors duration-150"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need More Help?</h3>
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <a
            href="/support"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-150"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}