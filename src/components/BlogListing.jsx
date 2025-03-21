import BlogCard from './BlogCard';
import Pagination from './Pagination';

export default function BlogListing({ blogs, currentPage, totalPages }) {
  if (!blogs || blogs.length === 0) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <p className="text-gray-500">No blogs found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="h-full">
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </div>
  );
}