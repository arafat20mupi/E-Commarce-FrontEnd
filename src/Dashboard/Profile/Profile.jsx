import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const Profile = () => {
  const { user , logOut } = useContext(AuthContext) 

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  console.log(user);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm text-center">
       
        <div className="relative w-32 h-32 mx-auto mb-4">
          <img
            src={user.photoURL || "https://via.placeholder.com/100"}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r  rounded-full opacity-50"></div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800">{user.displayName || "No Name Provided"}</h2>
        <p className="text-gray-500">{user.email || "No Email Provided"}</p>

        <div className="mt-4">
          <p className="text-gray-600 text-sm">Member since: <span className="font-medium">{user?.metadata?.creationTime || "N/A"}</span></p>
        </div>

        <div className="mt-6 flex gap-3 justify-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
            Edit Profile
          </button>
          <button onClick={() => {
            logOut()
            toast.success('Successfully logged out')
          }} className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
