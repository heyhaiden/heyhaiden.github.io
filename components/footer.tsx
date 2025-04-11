import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-center gap-8">
          <Link
            href="https://github.com/heyhaiden"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/haidenmcgill/"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
          <Link
            href="https://devpost.com/heyhaiden"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Devpost
          </Link>
        </div>
      </div>
    </footer>
  )
}
