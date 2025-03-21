import Link from 'next/link';
import Image from 'next/image';

export default function BlogCard({ blog }) {
  if (!blog) return null;

  return (
    <Link href={`/blog/${blog.id}`} className="block h-full">
      <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col transition-transform hover:scale-[1.01] hover:shadow-lg">
        <div className="relative h-48 w-full">
          {blog.photo_url ? (
            <Image
              src={blog.photo_url}
              alt={blog.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="bg-gray-200 h-full w-full flex items-center justify-center">
              <span className="text-gray-400">No image</span>
            </div>
          )}
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <div>
            <p className="text-xs text-gray-500 mb-2">
              {new Date(blog.created_at).toLocaleDateString()}
            </p>
            <h3 className="text-lg font-semibold mb-2 line-clamp-2">{blog.title}</h3>
            <p className="text-gray-600 line-clamp-3">{blog.description}</p>
          </div>
          <div className="mt-auto pt-4 flex justify-between items-center">
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
              {blog.category}
            </span>
            <span className="text-blue-600 text-sm">Read more →</span>
          </div>
        </div>
      </div>
    </Link>
  );
}