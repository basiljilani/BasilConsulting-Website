import { Users, Eye, Mail, FileText, ChevronDown } from 'lucide-react';

export function DashboardHome() {
  const stats = [
    {
      title: 'Total Visitors',
      value: '12,345',
      change: '+12% vs last month',
      icon: Users,
    },
    {
      title: 'Page Views',
      value: '48,768',
      change: '+8% vs last month',
      icon: Eye,
    },
    {
      title: 'Newsletter Subscribers',
      value: '2,845',
      change: '+15% vs last month',
      icon: Mail,
    },
    {
      title: 'Blog Posts',
      value: '156',
      change: '+5% vs last month',
      icon: FileText,
    },
  ];

  const recentActivity = [
    { action: 'New user registered', time: '1 hour ago' },
    { action: 'Blog post published', time: '2 hours ago' },
    { action: 'Newsletter sent', time: '3 hours ago' },
    { action: 'Settings updated', time: '4 hours ago' },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold text-white">Dashboard Overview</h1>
        <button className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
          Generate Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="p-6 rounded-xl bg-[#1E293B] text-white">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-gray-400 text-sm">{stat.title}</p>
                <h3 className="text-2xl font-semibold mt-1">{stat.value}</h3>
              </div>
              <div className="p-2 bg-[#0F172A] rounded-lg">
                <stat.icon className="h-5 w-5 text-emerald-500" />
              </div>
            </div>
            <p className="text-sm text-emerald-500">{stat.change}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 p-6 rounded-xl bg-[#1E293B]">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-medium text-white">Traffic Overview</h2>
            <button className="flex items-center gap-2 px-3 py-1.5 bg-[#0F172A] rounded-lg text-sm text-gray-400">
              Last 7 days
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
          <div className="h-64 flex items-center justify-center text-gray-500">
            {/* Chart will be implemented later */}
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M7 20L21 20" strokeLinecap="round"/>
              <path d="M4 20L4 4" strokeLinecap="round"/>
              <path d="M4 17.5L21 17.5" strokeWidth="0.5" strokeLinecap="round"/>
              <path d="M4 15L21 15" strokeWidth="0.5" strokeLinecap="round"/>
              <path d="M4 12.5L21 12.5" strokeWidth="0.5" strokeLinecap="round"/>
              <path d="M4 10L21 10" strokeWidth="0.5" strokeLinecap="round"/>
              <path d="M4 7.5L21 7.5" strokeWidth="0.5" strokeLinecap="round"/>
              <path d="M4 5L21 5" strokeWidth="0.5" strokeLinecap="round"/>
              <path d="M7 20C7 20 10.5 16 12 12C13.5 8 15.5 7 17 4" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        <div className="p-6 rounded-xl bg-[#1E293B]">
          <h2 className="text-lg font-medium text-white mb-6">Recent Activity</h2>
          <div className="space-y-6">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="p-2 bg-[#0F172A] rounded-lg">
                  <Users className="h-4 w-4 text-emerald-500" />
                </div>
                <div>
                  <p className="text-white text-sm">{activity.action}</p>
                  <p className="text-gray-400 text-sm">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}