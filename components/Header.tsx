import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gray-800 border-b border-gray-700">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          <span className="text-[#0154fa]">DeApe.fi</span>
        </Link>
        <div>
          <a 
            href="https://x.com/ApeEliteClub" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-300 hover:text-white transition-colors"
          >
            <svg 
              viewBox="0 0 24 24" 
              className="h-6 w-6 fill-current"
              aria-hidden="true"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>
      </nav>
    </header>
  )
}