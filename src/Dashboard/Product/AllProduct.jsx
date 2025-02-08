import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hook/useAxiosPublic";

const AllProducts = () => {
  const [page, setPage] = useState(1);
  const axios = useAxiosPublic()
  const [products, setProducts] = useState([])
  const [totalPages, setTotalPages] = useState(1);

  const fetchData = async () => {
    try {
      const result = await axios.get("/api/products");
      setProducts(result.data.data);
      setTotalPages(result.data.pages);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [])

  // Handle page changes
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };
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
        {products?.map((item) => (
          <ProductCard item={item} />
        ))}
      </div>
      {/* Pagination */}
      <div className="flex justify-center mt-10">
        <button className="btn" onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <span className="mx-5">{page} of {totalPages}</span>
        <button className="btn" onClick={() => handlePageChange(page + 1)} disabled={page === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default AllProducts;
