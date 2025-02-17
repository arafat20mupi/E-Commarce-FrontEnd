import {
  FaChartArea,
  FaReplyAll,
  FaSignOutAlt,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdProductionQuantityLimits, MdCallToAction } from "react-icons/md";

import { Link, Outlet } from "react-router-dom";
import useAdmin from "../Hook/useadmin";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";


const Dashboard = () => {
  const { logOut } = useContext(AuthContext)
  const { role, loading } = useAdmin();
  if (!role) {
    return <div className="justify-center text-center flex items-center mt-40 w-full">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  }

  if (loading) {
    return <div className="justify-center text-center flex items-center mt-40 w-full">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  }


  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 flex justify-between items-center text-2xl font-bold border-b border-gray-700">
          <Link
            to="/"
            data-tip="Back to home"
            className="pt-2 hover:text-green-400 tooltip tooltip-right transition-all duration-200 transform hover:-translate-x-2 active:scale-95"
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
            to="/dashboard/mychart"
            className={`flex items-center gap-4 p-3 w-full text-left rounded-md hover:bg-gray-700 transition`}
          >
            <FaChartArea /> My Chart
          </Link>
          {role === 'admin' &&
            <>
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
            </>
          }
          {
            role === 'user' &&
            <>
              <Link
                to="/dashboard/myOrder"
                className={`flex items-center gap-4 p-3 w-full text-left rounded-md hover:bg-gray-700 transition `}
              >
                <MdCallToAction />
                My Order
              </Link>
            </>
          }
          <button onClick={() => {
            logOut()
            toast.success('Successfully logged out')
          }} className="flex items-center gap-4 p-3 w-full text-left rounded-md hover:bg-gray-700 hover:text-red-500  transition duration-200">
            <FaSignOutAlt /> Logout
          </button>
        </nav>

      </div>

      {/* Content Area */}
      <div className="flex-1 bg-gray-100 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
