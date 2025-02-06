import { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping, FaUserInjured } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useContext(AuthContext);

  return (
    <nav className="bg-white shadow px-6 py-4 fixed top-0 left-0 right-0 z-40">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold">KaporLagbe</div>

        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="cursor-pointer hover:underline">Home</Link>
          </li>
          <li>
            <Link to="/products" className="cursor-pointer hover:underline">Products</Link>
          </li>
          <li>
            <Link to="/about" className="cursor-pointer hover:underline">About Us</Link>
          </li>
          {user ? (
            <>
              <li>
                <Link to="/dashboard/profile" className="cursor-pointer hover:underline">Dashboard</Link>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login" className="cursor-pointer hover:underline">LogIn</Link>
            </li>
          )}
        </ul>

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
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="block hover:underline">
              Products
            </Link>
          </li>
          <li>
            <Link to="/about" className="block hover:underline">
              About Us
            </Link>
          </li>
          {user ? (
            <>
              <li>
                <Link to="/dashboard/profile" className="block hover:underline">
                  Dashboard
                </Link>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login" className="block hover:underline">
                LogIn
              </Link>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
