import { BarChart2, TrendingUp, Users, Clock, ArrowUpRight, ArrowDownRight, Filter } from 'lucide-react';

export function AnalyticsSection() {
  const stats = [
    {
      title: 'Total Views',
      value: '124.4K',
      change: '+12.5%',
      increasing: true,
    },
    {
      title: 'Unique Visitors',
      value: '45.2K',
      change: '+8.3%',
      increasing: true,
    },
    {
      title: 'Bounce Rate',
      value: '28.5%',
      change: '-2.1%',
      increasing: false,
    },
    {
      title: 'Avg. Session',
      value: '4m 32s',
      change: '+0.8%',
      increasing: true,
    },
  ];

  const topPages = [
    {
      page: '/home',
      views: '32.5K',
      uniqueVisitors: '24.2K',
      bounceRate: '25%',
    },
    {
      page: '/about',
      views: '18.3K',
      uniqueVisitors: '15.1K',
      bounceRate: '32%',
    },
    {
      page: '/services',
      views: '15.7K',
      uniqueVisitors: '12.9K',
      bounceRate: '28%',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-white">Analytics Overview</h1>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-[#1E293B] text-gray-400 rounded-lg hover:text-white transition-colors">
            <Filter className="h-4 w-4" />
            Last 30 Days
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-[#1E293B] rounded-xl p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-400">{stat.title}</p>
                <h3 className="text-2xl font-semibold text-white mt-2">{stat.value}</h3>
              </div>
              <div className={`flex items-center gap-1 px-2 py-1 rounded-lg ${
                stat.increasing 
                  ? 'text-emerald-500 bg-emerald-500/10' 
                  : 'text-red-500 bg-red-500/10'
              }`}>
                {stat.increasing ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
                <span>{stat.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#1E293B] rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Traffic Overview</h2>
          <div className="h-64 flex items-center justify-center">
            <BarChart2 className="h-32 w-32 text-gray-600" />
            <p className="text-gray-400">Chart visualization goes here</p>
          </div>
        </div>

        <div className="bg-[#1E293B] rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Visitor Demographics</h2>
          <div className="h-64 flex items-center justify-center">
            <Users className="h-32 w-32 text-gray-600" />
            <p className="text-gray-400">Demographics visualization goes here</p>
          </div>
        </div>
      </div>

      <div className="bg-[#1E293B] rounded-xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Top Pages</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Page</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Views</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Unique Visitors</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Bounce Rate</th>
              </tr>
            </thead>
            <tbody>
              {topPages.map((page, index) => (
                <tr key={index} className="border-b border-gray-700 hover:bg-[#0F172A] transition-colors">
                  <td className="py-3 px-4 text-white">{page.page}</td>
                  <td className="py-3 px-4 text-gray-300">{page.views}</td>
                  <td className="py-3 px-4 text-gray-300">{page.uniqueVisitors}</td>
                  <td className="py-3 px-4 text-gray-300">{page.bounceRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
