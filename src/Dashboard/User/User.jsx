import React, { useEffect, useState } from "react";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import Swal from 'sweetalert2';

const User = () => {
  // State for managing filter values
  const [roleFilter, setRoleFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);
  const axiosPublic = useAxiosPublic();

  const filteredUsers = users.filter((user) => {
    const roleMatch = roleFilter === "All" || user.role === roleFilter;
    const nameMatch = user.name.toLowerCase().includes(searchTerm.toLowerCase());
    return roleMatch && nameMatch;
  });

  useEffect(() => {
    axiosPublic.get('/api/users')
      .then(response => {
        setUsers(response.data.users);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleUserDelete = (uid) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/api/delete/user/${uid}`)
          .then(res => {
            Swal.fire({
              title: "Deleted!",
              text: "The user has been deleted.",
              icon: "success"
            });
            setUsers(users.filter(user => user.uid !== uid));
          })
          .catch(error => {
            Swal.fire({
              title: "Error!",
              text: "There was a problem deleting the user.",
              icon: "error"
            });
            console.error("Delete error:", error);
          });
      }
    });
  };

  const handleUpdateRole = (uid, newrole) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You are about to change the user's role to ${newrole}.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, Make ${newrole.charAt(0).toUpperCase() + newrole.slice(1)}`
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.patch(`/api/update-role`, { uid, role: newrole })
          .then(res => {
            Swal.fire({
              title: "Success!",
              text: `User role has been updated to ${newrole}.`,
              icon: "success"
            });
            setUsers(users.map(user => user.uid === uid ? { ...user, role: newrole } : user));
          })
          .catch(error => {
            Swal.fire({
              title: "Error!",
              text: "There was a problem updating the role.",
              icon: "error"
            });
          });
      }
    });
  };

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen flex flex-col p-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">All Users</h1>

      {/* Search and Filter Section */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Users"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex space-x-4">
          {/* Filter by Role */}
          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="px-4 py-2 border rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All Roles</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="editor">Editor</option>
          </select>
        </div>
      </div>

      {/* Users Table */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Email
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Role
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Last Active
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-900">{user.name}</td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {user.email}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{user.role}</td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${user.lastActive === "Active"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                      }`}
                  >
                    {user.lastActive}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  <button
                    onClick={() => handleUpdateRole(user.uid, 'admin')}
                    className={`${user.role === 'admin' ? 'text-transparent' : 'text-blue-600 hover:text-blue-800'} mr-4`}
                    disabled={user.role === 'admin'}
                  >
                    Make Admin
                  </button>
                  <button onClick={() => handleUserDelete(user.uid)} className="text-red-600 hover:text-red-800">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Section */}
      <div className="mt-6 flex justify-between items-center">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="btn btn-primary"
        >
          Previous
        </button>
        <div className="text-sm ">
          <span>Page {currentPage} of {Math.ceil(filteredUsers.length / usersPerPage)}</span>
        </div>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === Math.ceil(filteredUsers.length / usersPerPage)}
          className="btn btn-primary"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default User;
