import Link from "next/link"
import { Car } from "lucide-react"

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Car className="h-6 w-6 text-blue-600" />
          <span className="text-xl font-bold text-blue-600">ShareTrip</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="#" className="text-gray-600 hover:text-blue-600">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-blue-600">
                My Trips
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-blue-600">
                Profile
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

