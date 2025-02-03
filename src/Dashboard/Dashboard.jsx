import {
  FaReplyAll,
  FaSignOutAlt,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdProductionQuantityLimits, MdCallToAction } from "react-icons/md";

import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 flex justify-between items-center text-2xl font-bold border-b border-gray-700">
          <Link
            to="/"
            className="pt-2 hover:text-green-400 transition-all duration-200 transform hover:scale-110 active:scale-95"
          >
            <FaReplyAll />
          </Link>
          Dashboard
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link
            to="/dashboard/profile"
            className={`flex items-center gap-4 p-3 w-full text-left rounded-md hover:bg-gray-700 transition`}
          >
            <FaUser /> Profile
          </Link>
          <Link
            to="/dashboard/allProducts"
            className={`flex items-center gap-4 p-3 w-full text-left rounded-md hover:bg-gray-700 transition `}
          >
            <MdCallToAction />
            All Product
          </Link>
          <Link
            to="/dashboard/addProduct"
            className={`flex items-center gap-4 p-3 w-full text-left rounded-md hover:bg-gray-700 transition `}
          >
            <MdProductionQuantityLimits />
            Add Product
          </Link>
          <Link
            to="/dashboard/order"
            className={`flex items-center gap-4 p-3 w-full text-left rounded-md hover:bg-gray-700 transition `}
          >
            <IoDocumentTextOutline />
            All Orders
          </Link>
          <Link
            to="/dashboard/AllUsers"
            className={`flex items-center gap-4 p-3 w-full text-left rounded-md hover:bg-gray-700 transition `}
          >
            <FaUsers />
            All Users
          </Link>
        </nav>
        <div className="p-4 border-t border-gray-700">
          <button className="flex items-center gap-4 p-3 w-full text-left rounded-md hover:bg-gray-700 transition">
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 bg-gray-100 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
