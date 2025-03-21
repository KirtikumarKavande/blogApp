import { fetchBlogs } from '@/utils/blogApi';
import Header from '@/components/Header';
import BlogListing from '@/components/BlogListing';


export default async function BlogPage({ searchParams }) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  
  try {
    const { blogs, totalPages, currentPage } = await fetchBlogs({
      page,
      limit: 9
    });
    
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Our Blog</h1>
            <BlogListing 
              blogs={blogs} 
              currentPage={currentPage} 
              totalPages={totalPages} 
            />
          </div>
        </main>
      </div>
    );
  } catch (error) {
    console.error('Error in BlogPage:', error);
    throw new Error('Failed to load blog posts');
  }
}