import { fetchBlogById } from '@/utils/blogApi';
import Header from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import DOMPurify from 'isomorphic-dompurify';
import { ALLOWED_ATTR, ALLOWED_TAGS } from '@/utils/constant';

export default async function BlogDetailPage({ params }) {
  const blog = await fetchBlogById(params.id);
  
  if (!blog) {
    notFound();
  }

  const sanitizedContent = DOMPurify.sanitize(blog.content_html, {
    USE_PROFILES: { html: true },
    ALLOWED_TAGS: ALLOWED_TAGS,
    ALLOWED_ATTR: ALLOWED_ATTR 
  });

  const fallbackImage = '/asset/images/fallback.png';
  const imageUrl = blog.photo_url || fallbackImage;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <article className="container mx-auto px-4 py-8 max-w-4xl">
          <Link href="/blog" className="text-blue-600 hover:underline mb-4 inline-block">
            ← Back to blogs
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold mt-6 mb-4">{blog.title}</h1>
          
          <div className="flex items-center gap-4 text-gray-600 mb-6">
            <time dateTime={blog.created_at}>
              {new Date(blog.created_at).toLocaleDateString()}
            </time>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
              {blog.category}
            </span>
          </div>
          
          <div className="relative w-full h-48 sm:h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
            <Image
              src={imageUrl}
              alt={blog.title || "Blog post"}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 100vw"
              className="object-cover"
              priority
              quality={80}
            />
          </div>
          
          <div className="prose max-w-none">
            <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
          </div>
        </article>
      </main>
    </div>
  );
}