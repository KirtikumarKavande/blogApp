import Link from 'next/link';
export default function Pagination({ currentPage, totalPages }) {
  if (totalPages <= 1) return null;

  const getPageLinks = () => {
    let pages = [];
    const maxPagesToShow = 5;
    
    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);
      
      if (startPage > 2) {
        pages.push('...');
      }
      
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      
      if (endPage < totalPages - 1) {
        pages.push('...');
      }
      
      pages.push(totalPages);
    }
    
    return pages;
  };

  return (
    <div className="flex justify-center items-center space-x-2">
      {currentPage > 1 && (
        <Link 
          href={`/blog?page=${currentPage - 1}`}
          className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
        >
          Previous
        </Link>
      )}
      
      {getPageLinks().map((page, index) => (
        page === '...' ? (
          <span key={`ellipsis-${index}`} className="px-3 py-1">...</span>
        ) : (
          <Link
            key={`page-${page}`}
            href={`/blog?page=${page}`}
            className={`px-3 py-1 rounded ${
              currentPage === page 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 hover:bg-gray-200 transition-colors'
            }`}
          >
            {page}
          </Link>
        )
      ))}
      
      {currentPage < totalPages && (
        <Link 
          href={`/blog?page=${currentPage + 1}`}
          className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
        >
          Next
        </Link>
      )}
    </div>
  );
}