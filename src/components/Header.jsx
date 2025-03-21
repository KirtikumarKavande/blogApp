import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 bg-white z-10 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Blog Platform
        </Link>
        <nav>
          <ul className="flex gap-6">
            <li><Link href="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
            <li><Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link></li>
            <li><Link href="/about" className="hover:text-blue-600 transition-colors">About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}