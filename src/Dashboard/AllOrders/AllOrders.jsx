import { FaEdit, FaTrash } from "react-icons/fa";

const AllOrders = () => {
  // Sample order data
  const orders = [
    {
      id: 1,
      customer: "John Doe",
      product: "Laptop",
      date: "2025-02-01",
      status: "Pending",
    },
    {
      id: 2,
      customer: "Jane Smith",
      product: "Phone",
      date: "2025-01-29",
      status: "Shipped",
    },
    {
      id: 3,
      customer: "Alice Brown",
      product: "Headphones",
      date: "2025-01-27",
      status: "Delivered",
    },
    {
      id: 4,
      customer: "Michael Scott",
      product: "Monitor",
      date: "2025-01-26",
      status: "Pending",
    },
    {
      id: 5,
      customer: "Dwight Schrute",
      product: "Keyboard",
      date: "2025-01-25",
      status: "Shipped",
    },
    {
      id: 6,
      customer: "Jim Halpert",
      product: "Mouse",
      date: "2025-01-24",
      status: "Delivered",
    },
    {
      id: 7,
      customer: "Pam Beesly",
      product: "Tablet",
      date: "2025-01-23",
      status: "Pending",
    },
    {
      id: 8,
      customer: "Stanley Hudson",
      product: "Printer",
      date: "2025-01-22",
      status: "Shipped",
    },
    {
      id: 9,
      customer: "Kevin Malone",
      product: "Chair",
      date: "2025-01-21",
      status: "Delivered",
    },
    {
      id: 10,
      customer: "Angela Martin",
      product: "Desk",
      date: "2025-01-20",
      status: "Pending",
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">All Orders</h2>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3 text-left">Order ID</th>
              <th className="p-3 text-left">Customer</th>
              <th className="p-3 text-left">Product</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b hover:bg-gray-100 transition"
              >
                <td className="p-3">{order.id}</td>
                <td className="p-3">{order.customer}</td>
                <td className="p-3">{order.product}</td>
                <td className="p-3">{order.date}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-full text-white ${
                      order.status === "Pending"
                        ? "bg-yellow-500"
                        : order.status === "Shipped"
                        ? "bg-blue-500"
                        : "bg-green-500"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="p-3 flex gap-2">
                  <button className="text-blue-500 hover:text-blue-700 transition">
                    <FaEdit />
                  </button>
                  <button className="text-red-500 hover:text-red-700 transition">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllOrders;
