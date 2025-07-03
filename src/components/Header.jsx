import { useState } from "react";
import logo from "../assets/image.png";
import { Link } from "react-router-dom";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/teacher", label: "Teacher" },
  ];

  return (
    <header className="bg-white flex items-center justify-between h-20 px-6 md:px-16 lg:px-24 py-4 shadow-md sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center">
        <img
          className="h-10 md:h-12 w-auto"
          src="https://cdn.niceonesa.com/web/assets/images/rtl_logo.svg?v=2.0.18(2)%202x"
          alt="Company Logo"
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Auth Buttons - Desktop */}
      <div className="hidden lg:flex items-center space-x-4">
        {loggedIn ? (
          <>
            <span className="text-gray-600">Welcome, User</span>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg transition-colors">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to={"/signup"}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Login
            </Link>
          </>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-gray-700 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 mt-20"
          onClick={closeMenu}
        >
          <div
            className="bg-white shadow-xl rounded-b-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col p-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-lg"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-4 border-t border-gray-200">
                {loggedIn ? (
                  <>
                    <div className="px-4 py-2 text-gray-600">Welcome back!</div>
                    <button
                      onClick={() => {
                        toggleLogin();
                        closeMenu();
                      }}
                      className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/signup"
                      className="block px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                      onClick={closeMenu}
                    >
                      Sign Up
                    </Link>
                    <Link
                      href="/login"
                      onClick={() => {
                        toggleLogin();
                        closeMenu();
                      }}
                      className="block px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg mt-2 text-center"
                    >
                      Login
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
