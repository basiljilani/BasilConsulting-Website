import { Activity, Users, FileText, ArrowUp } from 'lucide-react';

const stats = [
  {
    name: 'Total Visitors',
    value: '89,400',
    change: '+14.6%',
    changeType: 'increase',
    icon: Activity
  },
  {
    name: 'Team Members',
    value: '12',
    change: '+2.3%',
    changeType: 'increase',
    icon: Users
  },
  {
    name: 'Blog Posts',
    value: '24',
    change: '+5.4%',
    changeType: 'increase',
    icon: FileText
  },
];

export function DashboardHome() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6"
          >
            <dt>
              <div className="absolute rounded-md bg-blue-500 p-3">
                <stat.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500">{stat.name}</p>
            </dt>
            <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              <p className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                <ArrowUp className="h-5 w-5 flex-shrink-0 self-center text-green-500" aria-hidden="true" />
                <span className="sr-only">Increased by</span>
                {stat.change}
              </p>
            </dd>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Recent Activity</h3>
        </div>
        <div className="border-t border-gray-200">
          <div className="divide-y divide-gray-200">
            <div className="px-4 py-4 sm:px-6">
              <p className="text-sm text-gray-900">New team member added</p>
              <p className="mt-1 text-sm text-gray-500">2 hours ago</p>
            </div>
            <div className="px-4 py-4 sm:px-6">
              <p className="text-sm text-gray-900">Blog post published</p>
              <p className="mt-1 text-sm text-gray-500">5 hours ago</p>
            </div>
            <div className="px-4 py-4 sm:px-6">
              <p className="text-sm text-gray-900">Website content updated</p>
              <p className="mt-1 text-sm text-gray-500">1 day ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}