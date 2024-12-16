import { Mail, Send, Plus, Search, Filter, MoreVertical, Edit2, Trash2 } from 'lucide-react';

export function Newsletter() {
  const campaigns = [
    {
      id: 1,
      title: 'December Newsletter',
      status: 'Sent',
      recipients: 2845,
      openRate: '68%',
      clickRate: '24%',
      sentDate: '2023-12-15',
    },
    {
      id: 2,
      title: 'Product Launch Update',
      status: 'Draft',
      recipients: 2840,
      openRate: '-',
      clickRate: '-',
      sentDate: '-',
    },
    // Add more sample campaigns as needed
  ];

  const stats = [
    {
      title: 'Total Subscribers',
      value: '2,845',
      change: '+15% vs last month',
    },
    {
      title: 'Avg. Open Rate',
      value: '68%',
      change: '+5% vs last month',
    },
    {
      title: 'Avg. Click Rate',
      value: '24%',
      change: '+3% vs last month',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-white">Newsletter Management</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
          <Plus className="h-4 w-4" />
          New Campaign
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-[#1E293B] rounded-xl p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-gray-400 text-sm">{stat.title}</p>
                <h3 className="text-2xl font-semibold text-white mt-1">{stat.value}</h3>
              </div>
              <div className="p-2 bg-[#0F172A] rounded-lg">
                <Mail className="h-5 w-5 text-emerald-500" />
              </div>
            </div>
            <p className="text-sm text-emerald-500">{stat.change}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#1E293B] rounded-xl p-6">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search campaigns..."
              className="w-full pl-10 pr-4 py-2 bg-[#0F172A] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#0F172A] text-gray-400 rounded-lg hover:text-white transition-colors">
            <Filter className="h-4 w-4" />
            Filters
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Campaign</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Status</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Recipients</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Open Rate</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Click Rate</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Sent Date</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign) => (
                <tr key={campaign.id} className="border-b border-gray-700 hover:bg-[#0F172A] transition-colors">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-emerald-500" />
                      <span className="text-white">{campaign.title}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      campaign.status === 'Sent' 
                        ? 'bg-emerald-500/10 text-emerald-500' 
                        : 'bg-yellow-500/10 text-yellow-500'
                    }`}>
                      {campaign.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-300">{campaign.recipients}</td>
                  <td className="py-3 px-4 text-gray-300">{campaign.openRate}</td>
                  <td className="py-3 px-4 text-gray-300">{campaign.clickRate}</td>
                  <td className="py-3 px-4 text-gray-300">{campaign.sentDate}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      {campaign.status === 'Draft' && (
                        <button className="p-1 hover:bg-[#0F172A] rounded-lg text-gray-400 hover:text-emerald-500 transition-colors">
                          <Send className="h-4 w-4" />
                        </button>
                      )}
                      <button className="p-1 hover:bg-[#0F172A] rounded-lg text-gray-400 hover:text-white transition-colors">
                        <Edit2 className="h-4 w-4" />
                      </button>
                      <button className="p-1 hover:bg-[#0F172A] rounded-lg text-gray-400 hover:text-red-500 transition-colors">
                        <Trash2 className="h-4 w-4" />
                      </button>
                      <button className="p-1 hover:bg-[#0F172A] rounded-lg text-gray-400 hover:text-white transition-colors">
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-6">
          <p className="text-gray-400 text-sm">Showing 1-10 of 25 campaigns</p>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 bg-[#0F172A] text-gray-400 rounded-lg hover:text-white transition-colors">
              Previous
            </button>
            <button className="px-3 py-1 bg-[#0F172A] text-gray-400 rounded-lg hover:text-white transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
