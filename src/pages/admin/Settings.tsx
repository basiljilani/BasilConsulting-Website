import { Save, User, Bell, Lock, Globe, Palette } from 'lucide-react';

export function Settings() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-white">Settings</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
          <Save className="h-4 w-4" />
          Save Changes
        </button>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Navigation */}
        <div className="col-span-12 lg:col-span-3">
          <div className="bg-[#1E293B] rounded-xl p-4">
            <nav className="space-y-1">
              {[
                { name: 'Profile', icon: User },
                { name: 'Notifications', icon: Bell },
                { name: 'Security', icon: Lock },
                { name: 'Site Settings', icon: Globe },
                { name: 'Appearance', icon: Palette },
              ].map((item, index) => (
                <button
                  key={index}
                  className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors ${
                    index === 0
                      ? 'bg-[#0F172A] text-white'
                      : 'text-gray-400 hover:text-white hover:bg-[#0F172A]'
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="col-span-12 lg:col-span-9 space-y-6">
          {/* Profile Settings */}
          <div className="bg-[#1E293B] rounded-xl p-6">
            <h2 className="text-lg font-medium text-white mb-6">Profile Settings</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="relative">
                  <img
                    src="https://ui-avatars.com/api/?name=John+Doe&background=0D9488&color=fff"
                    alt="Profile"
                    className="h-20 w-20 rounded-full"
                  />
                  <button className="absolute bottom-0 right-0 p-1.5 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors">
                    <User className="h-4 w-4" />
                  </button>
                </div>
                <div>
                  <h3 className="text-white font-medium">Profile Photo</h3>
                  <p className="text-gray-400 text-sm mt-1">
                    Upload a new avatar or remove the current one
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-[#0F172A] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-[#0F172A] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500"
                    placeholder="Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 bg-[#0F172A] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Role
                  </label>
                  <select className="w-full px-4 py-2 bg-[#0F172A] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-emerald-500">
                    <option>Admin</option>
                    <option>Editor</option>
                    <option>Viewer</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Bio
                </label>
                <textarea
                  className="w-full px-4 py-2 bg-[#0F172A] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500"
                  rows={4}
                  placeholder="Write a short bio..."
                />
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="bg-[#1E293B] rounded-xl p-6">
            <h2 className="text-lg font-medium text-white mb-6">Notification Settings</h2>
            <div className="space-y-4">
              {[
                'Email notifications for new comments',
                'Email notifications for new followers',
                'Email notifications for new mentions',
                'Push notifications for new messages',
              ].map((item, index) => (
                <label key={index} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-700 text-emerald-500 focus:ring-emerald-500 focus:ring-offset-0 bg-[#0F172A]"
                    defaultChecked={index < 2}
                  />
                  <span className="text-white">{item}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
