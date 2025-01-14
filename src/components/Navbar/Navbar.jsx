import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#f2faf8] p-3 fixed top-0 left-0 right-0">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold">BrandLogo</div>

        <ul className="hidden md:flex space-x-6 ">
          <li>
            {" "}
            <Link className="cursor-pointer hover:underline">Home</Link>
          </li>
          <li>
            {" "}
            <Link to='/products' className="cursor-pointer hover:underline">Products</Link>
          </li>
          <li>
            {" "}
            <Link className="cursor-pointer hover:underline">About Us</Link>
          </li>
          <li>
            {" "}
            <Link className="cursor-pointer hover:underline">Login</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <RxCross2 /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="md:hidden mt-2 space-y-2 text-white bg-blue-500 rounded-md p-3">
          <li>
            <Link className="cursor-pointer hover:underline">Home</Link>
          </li>
          <li>
            {" "}
            <Link className="cursor-pointer hover:underline">Products</Link>
          </li>
          <li>
            {" "}
            <Link className="cursor-pointer hover:underline">About Us</Link>
          </li>
          <li>
            {" "}
            <Link className="cursor-pointer hover:underline">Login</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
