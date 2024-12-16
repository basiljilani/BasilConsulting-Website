import { ChevronDown, Users, Eye, Clock, Globe, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export function Analytics() {
  const metrics = [
    {
      title: 'Total Users',
      value: '12,345',
      change: '+12%',
      trend: 'up',
      icon: Users,
    },
    {
      title: 'Page Views',
      value: '48,768',
      change: '-3%',
      trend: 'down',
      icon: Eye,
    },
    {
      title: 'Avg. Session',
      value: '2m 45s',
      change: '+8%',
      trend: 'up',
      icon: Clock,
    },
    {
      title: 'Bounce Rate',
      value: '42.3%',
      change: '-5%',
      trend: 'up',
      icon: Globe,
    },
  ];

  const topPages = [
    { page: '/home', views: '5,123', bounce: '35%', duration: '2m 12s' },
    { page: '/blog', views: '3,845', bounce: '42%', duration: '1m 35s' },
    { page: '/products', views: '2,987', bounce: '38%', duration: '1m 48s' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-white">Analytics Overview</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#1E293B] text-gray-400 rounded-lg hover:text-white transition-colors">
          Last 7 Days
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-[#1E293B] rounded-xl p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-gray-400 text-sm">{metric.title}</p>
                <h3 className="text-2xl font-semibold text-white mt-1">{metric.value}</h3>
              </div>
              <div className="p-2 bg-[#0F172A] rounded-lg">
                <metric.icon className="h-5 w-5 text-emerald-500" />
              </div>
            </div>
            <div className="flex items-center gap-1">
              {metric.trend === 'up' ? (
                <ArrowUpRight className="h-4 w-4 text-emerald-500" />
              ) : (
                <ArrowDownRight className="h-4 w-4 text-red-500" />
              )}
              <span className={metric.trend === 'up' ? 'text-emerald-500' : 'text-red-500'}>
                {metric.change}
              </span>
              <span className="text-gray-400 text-sm">vs last period</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#1E293B] rounded-xl p-6">
          <h2 className="text-lg font-medium text-white mb-6">Traffic Overview</h2>
          <div className="h-64 flex items-center justify-center text-gray-500">
            {/* Chart will be implemented later */}
            <p>Traffic chart will be displayed here</p>
          </div>
        </div>

        <div className="bg-[#1E293B] rounded-xl p-6">
          <h2 className="text-lg font-medium text-white mb-6">Top Pages</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Page</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Views</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Bounce Rate</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Avg. Duration</th>
                </tr>
              </thead>
              <tbody>
                {topPages.map((page, index) => (
                  <tr key={index} className="border-b border-gray-700 hover:bg-[#0F172A] transition-colors">
                    <td className="py-3 px-4 text-white">{page.page}</td>
                    <td className="py-3 px-4 text-gray-300">{page.views}</td>
                    <td className="py-3 px-4 text-gray-300">{page.bounce}</td>
                    <td className="py-3 px-4 text-gray-300">{page.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
