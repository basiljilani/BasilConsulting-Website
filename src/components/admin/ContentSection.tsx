import { FileText, Plus, Search, Filter, MoreVertical, Edit2, Trash2 } from 'lucide-react';

export function ContentSection() {
  const posts = [
    {
      id: 1,
      title: 'Getting Started with React',
      author: 'John Doe',
      category: 'Development',
      status: 'Published',
      date: '2023-12-15',
    },
    {
      id: 2,
      title: 'Understanding TypeScript',
      author: 'Jane Smith',
      category: 'Development',
      status: 'Draft',
      date: '2023-12-14',
    },
    {
      id: 3,
      title: 'Modern Web Design Principles',
      author: 'Mike Johnson',
      category: 'Design',
      status: 'Published',
      date: '2023-12-13',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-white">Content Management</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
          <Plus className="h-4 w-4" />
          New Post
        </button>
      </div>

      <div className="bg-[#1E293B] rounded-xl p-6">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search posts..."
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
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Title</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Author</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Category</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Status</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Date</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} className="border-b border-gray-700 hover:bg-[#0F172A] transition-colors">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <FileText className="h-4 w-4 text-emerald-500" />
                      <span className="text-white">{post.title}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-300">{post.author}</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-[#0F172A] text-emerald-500 rounded-full text-sm">
                      {post.category}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      post.status === 'Published' 
                        ? 'bg-emerald-500/10 text-emerald-500' 
                        : 'bg-yellow-500/10 text-yellow-500'
                    }`}>
                      {post.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-300">{post.date}</td>
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

        <div className="flex justify-between items-center mt-6">
          <p className="text-gray-400 text-sm">Showing 1-3 of 24 posts</p>
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
