import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { FaPlus } from "react-icons/fa";

const AllProducts = () => {
  const products = [
    {
      title: "Contrast Trims",
      description:
        "A stylish polo shirt with contrast trims, perfect for casual outings.",
      image:
        "https://i.ibb.co.com/swNrFb9/3095df99e905b164718348af952a0f64.png",
      rating: 4.0,
      price: 212,
      original_price: 242,
      discount: "20%",
    },
    {
      title: "Gradient T-shirt",
      description: "Soft cotton t-shirt with a trendy gradient graphic design.",
      image:
        "https://i.ibb.co.com/swNrFb9/3095df99e905b164718348af952a0f64.png",
      rating: 3.5,
      price: 145,
      original_price: null,
      discount: null,
    },
    {
      title: "Polo Tipping",
      description:
        "Classic polo with elegant tipping details for a refined look.",
      image:
        "https://i.ibb.co.com/swNrFb9/3095df99e905b164718348af952a0f64.png",
      rating: 4.5,
      price: 180,
      original_price: null,
      discount: null,
    },
    {
      title: "Black Striped",
      description:
        "A black striped t-shirt that adds a touch of sophistication to your wardrobe.",
      image:
        "https://i.ibb.co.com/swNrFb9/3095df99e905b164718348af952a0f64.png",
      rating: 5.0,
      price: 120,
      original_price: 150,
      discount: "30%",
    },
    {
      title: "Denim Jacket",
      description: "A timeless denim jacket that pairs well with any outfit.",
      image:
        "https://i.ibb.co.com/swNrFb9/3095df99e905b164718348af952a0f64.png",
      rating: 4.8,
      price: 320,
      original_price: 400,
      discount: "20%",
    },
    {
      title: "White Sneakers",
      description: "Comfortable and stylish sneakers for everyday wear.",
      image:
        "https://i.ibb.co.com/swNrFb9/3095df99e905b164718348af952a0f64.png",
      rating: 4.7,
      price: 95,
      original_price: 120,
      discount: "21%",
    },
    {
      title: "Leather Jacket",
      description: "A high-quality leather jacket with a sleek design.",
      image:
        "https://i.ibb.co.com/swNrFb9/3095df99e905b164718348af952a0f64.png",
      rating: 4.9,
      price: 500,
      original_price: 650,
      discount: "23%",
    },
    {
      title: "Black Hoodie",
      description: "Cozy and warm black hoodie with a zip-up front.",
      image:
        "https://i.ibb.co.com/swNrFb9/3095df99e905b164718348af952a0f64.png",
      rating: 4.6,
      price: 80,
      original_price: 100,
      discount: "20%",
    },
  ];

  return (
    <div className="p-6 min-h-screen">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold mb-4">All Product</h2>
        <Link to="/dashboard/addProduct">
          <button className="btn btn-primary px-5">
            <FaPlus /> Add New Product
          </button>
        </Link>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
        {products.map((item) => (
          <ProductCard item={item} />
        ))}
      </div>
      {/* Pagination */}
      <div className="flex pt-10">
        <a
          href="#"
          className="flex items-center justify-center px-4 py-2 mx-1 capitalize bg-transparent hover:bg-black hover:text-white transition-colors duration-300 border border-black rounded-md rtl:-scale-x-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </a>

        <a
          href="#"
          className="hidden px-4 py-2 mx-1 text-black transform rounded-md sm:inline bg-transparent hover:bg-black hover:text-white transition-colors duration-300 border border-black"
        >
          1
        </a>

        <a
          href="#"
          className="hidden px-4 py-2 mx-1 text-black transform rounded-md sm:inline bg-transparent hover:bg-black hover:text-white transition-colors duration-300 border border-black"
        >
          2
        </a>

        <a
          href="#"
          className="hidden px-4 py-2 mx-1 text-black transform rounded-md sm:inline bg-transparent hover:bg-black hover:text-white transition-colors duration-300 border border-black"
        >
          ...
        </a>

        <a
          href="#"
          className="hidden px-4 py-2 mx-1 text-black transform rounded-md sm:inline bg-transparent hover:bg-black hover:text-white transition-colors duration-300 border border-black"
        >
          9
        </a>

        <a
          href="#"
          className="hidden px-4 py-2 mx-1 text-black transform rounded-md sm:inline bg-transparent hover:bg-black hover:text-white transition-colors duration-300 border border-black"
        >
          10
        </a>

        <a
          href="#"
          className="flex items-center justify-center px-4 py-2 mx-1 capitalize bg-transparent hover:bg-black hover:text-white transition-colors duration-300 border border-black rounded-md rtl:-scale-x-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default AllProducts;
