import { User, Mail, Building, Send, FileText, Copy, ExternalLink, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'info@basilconsulting.net';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleEmailClick = () => {
    const subject = encodeURIComponent('Business Inquiry: [Your Project Title]');
    const body = encodeURIComponent(`Dear Basil Consulting Team,

I hope this email finds you well. I am reaching out regarding [brief description of your project or inquiry].

About Us:
- Company/Organization: [Your Company Name]
- Industry: [Your Industry]
- Location: [Your Location]

Project Details:
- Timeline: [Expected Timeline]
- Scope: [Brief Project Scope]
- Objectives: [Key Objectives]

Additional Information:
[Any other relevant details about your project or specific requirements]

I look forward to discussing this opportunity with you.

Best regards,
[Your Full Name]
[Your Position]
[Your Contact Information]`);

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-gray-50 via-white to-gray-50 flex items-center justify-center px-4 py-12 sm:py-16 overflow-hidden font-['DM_Sans']">
      <div className="max-w-6xl w-full mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Left side - Welcome message */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:pr-8"
        >
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                Let's Create<br />
                Something <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent font-extrabold">Amazing</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl font-normal">
                We're excited to hear about your project! Send us a well-structured email using our template, 
                and we'll get back to you promptly with tailored solutions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 bg-white rounded-3xl p-6 shadow-sm border border-gray-100 group hover:border-emerald-500 transition-all duration-200 w-full">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-emerald-600 mr-4" />
                  <span className="text-gray-600 text-lg font-medium">{email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleCopyEmail}
                    className="text-gray-400 hover:text-emerald-600 transition-colors duration-200"
                    title="Copy email"
                  >
                    {copied ? (
                      <CheckCircle2 className="h-5 w-5" />
                    ) : (
                      <Copy className="h-5 w-5" />
                    )}
                  </button>
                  <button
                    onClick={handleEmailClick}
                    className="text-gray-400 hover:text-emerald-600 transition-colors duration-200"
                    title="Open in email client"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right side - Email Template */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 relative border border-gray-100">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center space-x-2 mb-3">
                  <FileText className="h-5 w-5 text-emerald-600" />
                  <h3 className="text-lg font-semibold text-gray-900 tracking-tight">Email Structure</h3>
                </div>
                <div className="space-y-3 text-gray-600">
                  <div className="bg-gray-50 p-3 rounded-xl">
                    <p className="font-medium text-gray-900 mb-1 tracking-tight">Subject Line</p>
                    <p className="text-sm">Business Inquiry: [Your Project Title]</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-xl">
                    <p className="font-medium text-gray-900 mb-1 tracking-tight">Introduction</p>
                    <p className="text-sm">Brief overview of why you're reaching out</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-xl">
                    <p className="font-medium text-gray-900 mb-1 tracking-tight">Company Details</p>
                    <ul className="text-sm list-disc ml-4 space-y-1">
                      <li>Company/Organization Name</li>
                      <li>Industry</li>
                      <li>Location</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-xl">
                    <p className="font-medium text-gray-900 mb-1 tracking-tight">Project Specifics</p>
                    <ul className="text-sm list-disc ml-4 space-y-1">
                      <li>Timeline Expectations</li>
                      <li>Project Scope</li>
                      <li>Key Objectives</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="pt-2"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleEmailClick}
                  className="w-full bg-emerald-500 text-white py-3 px-6 rounded-xl hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-100 transition-all duration-200 flex items-center justify-center space-x-2 font-medium text-base sm:text-lg"
                >
                  <span className="relative flex items-center">
                    Compose Email
                    <Send className="ml-2 h-4 w-4" />
                  </span>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}