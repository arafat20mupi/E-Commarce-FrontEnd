import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping, FaUserInjured } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow px-6 py-4 fixed top-0 left-0 right-0 z-10">
      <div className="flex items-center justify-between">
        {/* Logo and Menu */}
        <div className="flex items-center space-x-6">
          <h1 className="text-2xl font-bold text-blue-600">KaporLagbe.com</h1>
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link to="/" className="hover:text-blue-500 transition">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/onsale" className="hover:text-blue-500 transition">
                On Sale
              </Link>
            </li>
            <li>
              <Link to="/arrivals" className="hover:text-blue-500 transition">
                New Arrivals
              </Link>
            </li>
            <li>
              <Link to="/brands" className="hover:text-blue-500 transition">
                Brands
              </Link>
            </li>
          </ul>
        </div>

        {/* Search Bar and Icons */}
        <div className="flex items-center justify-between gap-72">
          <div className="relative w-full max-w-sm">
            <FaSearch className="absolute left-3 text-gray-400 mt-3" />
            <input
              type="text"
              placeholder="Search"
              className="w-full border border-gray-300 pl-10 pr-3 py-2 rounded-lg focus:outline-none focus:border-blue-500 transition"
            />
          </div>
          <div className="flex space-x-4 mr-8">
            <p>
              <FaCartShopping className="text-xl text-gray-600 hover:text-gray-800 transition" />
            </p>
            <p>
              <FaUserInjured className="text-xl text-gray-600 hover:text-gray-800 transition" />
            </p>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <RxCross2 className="text-2xl" />
          ) : (
            <GiHamburgerMenu className="text-2xl" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="md:hidden mt-4 bg-blue-500 text-white rounded-lg p-4 space-y-3">
          <li>
            <Link to="/" className="block hover:underline">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/onsale" className="block hover:underline">
              On Sale
            </Link>
          </li>
          <li>
            <Link to="/arrivals" className="block hover:underline">
              New Arrivals
            </Link>
          </li>
          <li>
            <Link to="/brands" className="block hover:underline">
              Brands
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
