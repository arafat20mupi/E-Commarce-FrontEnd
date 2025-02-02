import React, { useState } from "react";
import { FaHome, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 text-center text-2xl font-bold border-b border-gray-700">
          Dashboard
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button
            className={`flex items-center gap-4 p-3 w-full text-left rounded-md hover:bg-gray-700 transition ${
              activeTab === "Home" ? "bg-gray-700" : ""
            }`}
            onClick={() => handleTabClick("Home")}
          >
            <FaHome /> Home
          </button>
          <button
            className={`flex items-center gap-4 p-3 w-full text-left rounded-md hover:bg-gray-700 transition ${
              activeTab === "Profile" ? "bg-gray-700" : ""
            }`}
            onClick={() => handleTabClick("Profile")}
          >
            <FaUser /> Profile
          </button>
          <button
            className={`flex items-center gap-4 p-3 w-full text-left rounded-md hover:bg-gray-700 transition ${
              activeTab === "Settings" ? "bg-gray-700" : ""
            }`}
            onClick={() => handleTabClick("Settings")}
          >
            <FaCog /> Settings
          </button>
        </nav>
        <div className="p-4 border-t border-gray-700">
          <button className="flex items-center gap-4 p-3 w-full text-left rounded-md hover:bg-gray-700 transition">
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-6">{activeTab}</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600">
            This is the {activeTab} section. Replace this content with your
            desired content for the selected tab.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
