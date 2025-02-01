import Link from "next/link"
import { Car } from "lucide-react"

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Car className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-primary">ShareTrip</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="#" className="text-gray-600 hover:text-primary">
                How it works
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-primary">
                About us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

