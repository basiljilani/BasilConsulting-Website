import { Mail, Search, Filter, Send, Edit2, Trash2, MoreVertical, Users } from 'lucide-react';

export function NewsletterSection() {
  const campaigns = [
    {
      id: 1,
      title: 'December Newsletter',
      status: 'Sent',
      recipients: 2500,
      openRate: '45%',
      clickRate: '12%',
      sentDate: '2023-12-15',
    },
    {
      id: 2,
      title: 'Product Update',
      status: 'Draft',
      recipients: 2800,
      openRate: '-',
      clickRate: '-',
      sentDate: '-',
    },
    {
      id: 3,
      title: 'Weekly Digest',
      status: 'Scheduled',
      recipients: 2600,
      openRate: '-',
      clickRate: '-',
      sentDate: '2023-12-20',
    },
  ];

  const subscribers = [
    {
      email: 'john@example.com',
      status: 'Active',
      joinDate: '2023-11-01',
      lastOpened: '2023-12-15',
    },
    {
      email: 'jane@example.com',
      status: 'Active',
      joinDate: '2023-11-15',
      lastOpened: '2023-12-14',
    },
    {
      email: 'mike@example.com',
      status: 'Unsubscribed',
      joinDate: '2023-10-01',
      lastOpened: '2023-11-30',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-white">Newsletter Management</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
          <Mail className="h-4 w-4" />
          New Campaign
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#1E293B] rounded-xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <Users className="h-5 w-5 text-emerald-500" />
            <h3 className="text-lg font-medium text-white">Total Subscribers</h3>
          </div>
          <p className="text-3xl font-semibold text-white">2,845</p>
          <p className="text-gray-400 mt-1">+145 this month</p>
        </div>

        <div className="bg-[#1E293B] rounded-xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <Mail className="h-5 w-5 text-emerald-500" />
            <h3 className="text-lg font-medium text-white">Avg. Open Rate</h3>
          </div>
          <p className="text-3xl font-semibold text-white">45.2%</p>
          <p className="text-gray-400 mt-1">Last 30 days</p>
        </div>

        <div className="bg-[#1E293B] rounded-xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <Send className="h-5 w-5 text-emerald-500" />
            <h3 className="text-lg font-medium text-white">Avg. Click Rate</h3>
          </div>
          <p className="text-3xl font-semibold text-white">12.8%</p>
          <p className="text-gray-400 mt-1">Last 30 days</p>
        </div>
      </div>

      <div className="bg-[#1E293B] rounded-xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Campaigns</h2>
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
                  <td className="py-3 px-4 text-white">{campaign.title}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      campaign.status === 'Sent' 
                        ? 'bg-emerald-500/10 text-emerald-500'
                        : campaign.status === 'Draft'
                        ? 'bg-gray-500/10 text-gray-500'
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
      </div>

      <div className="bg-[#1E293B] rounded-xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-white">Recent Subscribers</h2>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search subscribers..."
                className="pl-10 pr-4 py-2 bg-[#0F172A] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#0F172A] text-gray-400 rounded-lg hover:text-white transition-colors">
              <Filter className="h-4 w-4" />
              Filters
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Email</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Status</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Join Date</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Last Opened</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {subscribers.map((subscriber, index) => (
                <tr key={index} className="border-b border-gray-700 hover:bg-[#0F172A] transition-colors">
                  <td className="py-3 px-4 text-white">{subscriber.email}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      subscriber.status === 'Active' 
                        ? 'bg-emerald-500/10 text-emerald-500' 
                        : 'bg-gray-500/10 text-gray-500'
                    }`}>
                      {subscriber.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-300">{subscriber.joinDate}</td>
                  <td className="py-3 px-4 text-gray-300">{subscriber.lastOpened}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <button className="p-1 hover:bg-[#0F172A] rounded-lg text-gray-400 hover:text-white transition-colors">
                        <Mail className="h-4 w-4" />
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
      </div>
    </div>
  );
}
