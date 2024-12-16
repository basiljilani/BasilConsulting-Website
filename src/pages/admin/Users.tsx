import { Plus, Search, Filter, MoreVertical, Mail, Edit2, Trash2 } from 'lucide-react';

export function Users() {
  const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Admin',
      status: 'Active',
      lastActive: '2 hours ago',
      avatar: 'https://ui-avatars.com/api/?name=John+Doe&background=0D9488&color=fff',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'Editor',
      status: 'Offline',
      lastActive: '5 days ago',
      avatar: 'https://ui-avatars.com/api/?name=Jane+Smith&background=0D9488&color=fff',
    },
    // Add more sample users as needed
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-white">User Management</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
          <Plus className="h-4 w-4" />
          Add User
        </button>
      </div>

      <div className="bg-[#1E293B] rounded-xl p-6">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search users..."
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
                <th className="text-left py-3 px-4 text-gray-400 font-medium">User</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Role</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Status</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Last Active</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-gray-700 hover:bg-[#0F172A] transition-colors">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="h-8 w-8 rounded-full"
                      />
                      <div>
                        <div className="text-white">{user.name}</div>
                        <div className="text-gray-400 text-sm">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-[#0F172A] text-emerald-500 rounded-full text-sm">
                      {user.role}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      user.status === 'Active' 
                        ? 'bg-emerald-500/10 text-emerald-500' 
                        : 'bg-gray-500/10 text-gray-400'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-300">{user.lastActive}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <button className="p-1 hover:bg-[#0F172A] rounded-lg text-gray-400 hover:text-white transition-colors">
                        <Mail className="h-4 w-4" />
                      </button>
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
          <p className="text-gray-400 text-sm">Showing 1-10 of 50 users</p>
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
