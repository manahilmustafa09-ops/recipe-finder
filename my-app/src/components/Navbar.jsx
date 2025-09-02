import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClass = (path) =>
    location.pathname === path
      ? "text-green-700 border-b-2 border-green-700 pb-1 font-semibold"
      : "text-gray-700 hover:text-green-700 transition-colors duration-200";

  const mobileLinkClass = (path) =>
    location.pathname === path
      ? "text-green-700 bg-green-50 font-semibold"
      : "text-gray-700 hover:text-green-700 hover:bg-gray-50";

  return (
    <nav className="bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex-shrink-0 flex items-center"
            aria-label="RecipeFinder Home"
          >
            <h1 className="text-2xl font-bold text-green-700 hover:text-green-800 transition-colors duration-200">
              RecipeFinder
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className={linkClass("/")}
                aria-current={location.pathname === "/" ? "page" : undefined}
              >
                Home
              </Link>
              <Link
                to="/recipes"
                className={linkClass("/recipes")}
                aria-current={location.pathname === "/recipes" ? "page" : undefined}
              >
                Recipes
              </Link>
              <Link
                to="/favorites"
                className={linkClass("/favorites")}
                aria-current={location.pathname === "/favorites" ? "page" : undefined}
              >
                Favorites
              </Link>
            </div>
          </div>

          {/* User section */}
          <div className="hidden md:block">
            <button
              className="flex items-center text-gray-700 hover:text-green-700 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-50"
              aria-label="User account"
            >
              <FaUser className="w-5 h-5" />
              <span className="ml-2 text-sm font-medium">Account</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 transition-colors duration-200"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? (
                <FaTimes className="block h-6 w-6" />
              ) : (
                <FaBars className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link
                to="/"
                className={`block px-3 py-2 rounded-md text-base font-medium ${mobileLinkClass("/")}`}
                onClick={() => setIsMenuOpen(false)}
                aria-current={location.pathname === "/" ? "page" : undefined}
              >
                Home
              </Link>
              <Link
                to="/recipes"
                className={`block px-3 py-2 rounded-md text-base font-medium ${mobileLinkClass("/recipes")}`}
                onClick={() => setIsMenuOpen(false)}
                aria-current={location.pathname === "/recipes" ? "page" : undefined}
              >
                Recipes
              </Link>
              <Link
                to="/favorites"
                className={`block px-3 py-2 rounded-md text-base font-medium ${mobileLinkClass("/favorites")}`}
                onClick={() => setIsMenuOpen(false)}
                aria-current={location.pathname === "/favorites" ? "page" : undefined}
              >
                Favorites
              </Link>
              <div className="border-t border-gray-200 pt-3">
                <button
                  className="flex items-center w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-700 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FaUser className="w-5 h-5 mr-3" />
                  Account
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
