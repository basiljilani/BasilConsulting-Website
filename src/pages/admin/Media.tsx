import { Upload, Search, Filter, Grid, List, MoreVertical, Download, Trash2 } from 'lucide-react';

export function Media() {
  const files = [
    {
      id: 1,
      name: 'hero-image.jpg',
      type: 'image',
      size: '2.4 MB',
      modified: '2023-12-15',
      url: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 2,
      name: 'product-demo.mp4',
      type: 'video',
      size: '15.8 MB',
      modified: '2023-12-14',
      url: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    },
    // Add more sample files as needed
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-white">Media Library</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
          <Upload className="h-4 w-4" />
          Upload Files
        </button>
      </div>

      <div className="bg-[#1E293B] rounded-xl p-6">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search files..."
              className="w-full pl-10 pr-4 py-2 bg-[#0F172A] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-[#0F172A] text-gray-400 rounded-lg hover:text-white transition-colors">
              <Filter className="h-4 w-4" />
              Filters
            </button>
            <button className="p-2 bg-[#0F172A] text-gray-400 rounded-lg hover:text-white transition-colors">
              <Grid className="h-4 w-4" />
            </button>
            <button className="p-2 bg-[#0F172A] text-emerald-500 rounded-lg hover:text-emerald-400 transition-colors">
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3 px-4 text-gray-400 font-medium">File</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Type</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Size</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Modified</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {files.map((file) => (
                <tr key={file.id} className="border-b border-gray-700 hover:bg-[#0F172A] transition-colors">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg overflow-hidden">
                        <img
                          src={file.url}
                          alt={file.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <span className="text-white">{file.name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-[#0F172A] text-emerald-500 rounded-full text-sm">
                      {file.type}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-300">{file.size}</td>
                  <td className="py-3 px-4 text-gray-300">{file.modified}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <button className="p-1 hover:bg-[#0F172A] rounded-lg text-gray-400 hover:text-white transition-colors">
                        <Download className="h-4 w-4" />
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
          <p className="text-gray-400 text-sm">Showing 1-10 of 48 files</p>
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
