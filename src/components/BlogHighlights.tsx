import { ArrowRight } from 'lucide-react';

const blogs = [
  {
    title: "The Future of Digital Transformation",
    excerpt: "Exploring how AI and machine learning are reshaping business operations...",
    date: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
    category: "Technology"
  },
  {
    title: "Building Resilient Systems",
    excerpt: "Best practices for creating robust and scalable enterprise architectures...",
    date: "March 10, 2024",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80",
    category: "Engineering"
  },
  {
    title: "Strategic Innovation in 2024",
    excerpt: "Key trends and insights shaping the future of business strategy...",
    date: "March 5, 2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    category: "Strategy"
  }
];

export function BlogHighlights() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Latest Insights</h2>
          <p className="mt-4 text-xl text-gray-600">
            Stay informed with our latest thoughts on technology, strategy, and innovation
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <article
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-2">
                  {blog.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {blog.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{blog.date}</span>
                  <button className="text-blue-600 hover:text-blue-800 inline-flex items-center text-sm font-medium">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}