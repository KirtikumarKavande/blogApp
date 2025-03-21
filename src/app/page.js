import Header from '@/components/Header';
import { fetchBlogs } from '@/utils/blogApi';
import BlogListing from '@/components/BlogListing';
import Link from 'next/link';
import { limit, page } from '@/utils/constant';


export default async function HomePage() {
  try {
    const { blogs, totalPages, currentPage } = await fetchBlogs({
      page: page,
      limit: limit
    });
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <section className="bg-blue-600 py-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 animate-gradient"></div>

            <div className="absolute inset-0">
              <div className="particle particle1"></div>
              <div className="particle particle2"></div>
              <div className="particle particle3"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
                Welcome to Our Blog Platform
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-fade-in-up animation-delay-200">
                Discover the latest stories, insights, and ideas from our community.
              </p>
              <Link
                href="/blog"
                className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg hover:translate-y-[-2px] animate-fade-in-up animation-delay-400"
              >
                Explore All Blogs
              </Link>
            </div>
          </section>
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold">Featured Posts</h2>
                <Link
                  href="/blog"
                  className="text-blue-600 hover:underline"
                >
                  View All →
                </Link>
              </div>
              <BlogListing
                blogs={blogs}
                currentPage={currentPage}
                totalPages={totalPages}
              />
            </div>
          </section>
        </main>
      </div>
    );
  } catch (error) {
    console.error('Error in HomePage:', error);
    throw new Error('Failed to load blog posts');
  }
}