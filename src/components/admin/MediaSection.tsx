import { Upload, Search, Filter, FolderPlus, Grid, List, Image, File, MoreVertical, Download, Trash2 } from 'lucide-react';

export function MediaSection() {
  const mediaFiles = [
    {
      id: 1,
      name: 'hero-image.jpg',
      type: 'image',
      size: '2.4 MB',
      dimensions: '1920x1080',
      uploadedBy: 'John Doe',
      uploadDate: '2023-12-15',
    },
    {
      id: 2,
      name: 'presentation.pdf',
      type: 'document',
      size: '4.8 MB',
      dimensions: '-',
      uploadedBy: 'Jane Smith',
      uploadDate: '2023-12-14',
    },
    {
      id: 3,
      name: 'product-demo.mp4',
      type: 'video',
      size: '15.2 MB',
      dimensions: '1280x720',
      uploadedBy: 'Mike Johnson',
      uploadDate: '2023-12-13',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-white">Media Library</h1>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-[#1E293B] text-gray-400 rounded-lg hover:text-white transition-colors">
            <FolderPlus className="h-4 w-4" />
            New Folder
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
            <Upload className="h-4 w-4" />
            Upload Files
          </button>
        </div>
      </div>

      <div className="bg-[#1E293B] rounded-xl p-6">
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search files..."
              className="w-full pl-10 pr-4 py-2 bg-[#0F172A] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-[#0F172A] text-gray-400 rounded-lg hover:text-white transition-colors">
              <Filter className="h-4 w-4" />
              Filters
            </button>
            <div className="flex items-center gap-2 bg-[#0F172A] rounded-lg p-1">
              <button className="p-1 text-emerald-500 hover:bg-[#1E293B] rounded">
                <Grid className="h-4 w-4" />
              </button>
              <button className="p-1 text-gray-400 hover:bg-[#1E293B] rounded hover:text-white transition-colors">
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mediaFiles.map((file) => (
            <div key={file.id} className="bg-[#0F172A] rounded-lg overflow-hidden group">
              <div className="aspect-video bg-gray-800 flex items-center justify-center relative group">
                {file.type === 'image' ? (
                  <Image className="h-12 w-12 text-gray-600" />
                ) : (
                  <File className="h-12 w-12 text-gray-600" />
                )}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <button className="p-1 bg-white/10 rounded hover:bg-white/20 text-white transition-colors">
                    <Download className="h-4 w-4" />
                  </button>
                  <button className="p-1 bg-white/10 rounded hover:bg-white/20 text-white transition-colors">
                    <Trash2 className="h-4 w-4" />
                  </button>
                  <button className="p-1 bg-white/10 rounded hover:bg-white/20 text-white transition-colors">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-white font-medium truncate">{file.name}</h3>
                <div className="flex items-center justify-between mt-2 text-sm text-gray-400">
                  <span>{file.size}</span>
                  <span>{file.dimensions}</span>
                </div>
                <div className="flex items-center justify-between mt-2 text-sm text-gray-400">
                  <span>{file.uploadedBy}</span>
                  <span>{file.uploadDate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-6">
          <p className="text-gray-400 text-sm">Showing 1-3 of 24 files</p>
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#1E293B] rounded-xl p-6">
          <h3 className="text-lg font-medium text-white mb-2">Storage Used</h3>
          <p className="text-3xl font-semibold text-white">45.8 GB</p>
          <p className="text-gray-400 mt-1">of 100 GB</p>
          <div className="w-full h-2 bg-[#0F172A] rounded-full mt-4">
            <div className="w-[45.8%] h-full bg-emerald-500 rounded-full"></div>
          </div>
        </div>

        <div className="bg-[#1E293B] rounded-xl p-6">
          <h3 className="text-lg font-medium text-white mb-2">Total Files</h3>
          <p className="text-3xl font-semibold text-white">1,248</p>
          <p className="text-gray-400 mt-1">+24 this month</p>
        </div>

        <div className="bg-[#1E293B] rounded-xl p-6">
          <h3 className="text-lg font-medium text-white mb-2">File Types</h3>
          <div className="space-y-2 mt-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Images</span>
              <span className="text-white">65%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Documents</span>
              <span className="text-white">25%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Videos</span>
              <span className="text-white">10%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
