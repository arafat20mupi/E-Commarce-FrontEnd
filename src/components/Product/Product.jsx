import "@smastrom/react-rating/style.css";
import { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FiSliders } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import debounce from "lodash.debounce";

const Product = () => {
  const axios = useAxiosPublic();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [activeSizes, setActiveSizes] = useState([]);
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  // Fetch products with filters
  const fetchData = async () => {
    try {
      const result = await axios.get("/api/products", {
        params: { search, category, minPrice, maxPrice, page, size: activeSizes.join(","), sortBy },
      });
      setProducts(result.data.data);
      setTotalPages(result.data.pages);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    const debouncedFetch = debounce(fetchData, 500);
    debouncedFetch();
    return () => debouncedFetch.cancel();
  }, [search, category, minPrice, maxPrice, page, activeSizes, sortBy]);

  // Handle category selection
  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  // Handle size selection
  const handleSizeClick = (size) => {
    setActiveSizes((prevSizes) =>
      prevSizes.includes(size) ? prevSizes.filter((s) => s !== size) : [...prevSizes, size]
    );
  };

  // Handle page changes
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleSortChange = (sortType) => {
    setSortBy(sortType);
  };
  console.log(products)

  return (
    <div className="mt-28 container mx-auto">
      {/* responsive */}
      <div
        className={`${isOpen ? "block md:hidden" : "hidden"} absolute z-50 top-24 left-0 w-full h-full bg-white flex justify-center items-center transition-opacity duration-300 ease-in-out`}
      >
        <div className="p-10  bg-orange-50 rounded-xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'scale-100' : 'scale-95'}">
          {/* filtering */}
          <section>
            <div className="flex items-center justify-between flex-wrap mb-5 text-2xl font-bold">
              <h2>Filters</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:text-red-500 hover:bg-base-200 p-2 rounded-badge"
              >
                <RxCross1 />
              </button>
            </div>
            <hr className="mb-5" />
            <div className="text-gray-500 text-lg">
              {["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"].map((cat) => (
                <p
                  key={cat}
                  className={`cursor-pointer ${category === cat ? "text-orange-500 font-bold" : "hover:text-orange-500"}`}
                  onClick={() => handleCategorySelect(cat)}
                >
                  {cat}
                </p>
              ))}
            </div>
            <hr className="mb-5" />
          </section>
          {/* price */}
          <section>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-2xl font-bold">Price</h2>
              <IoIosArrowUp />
            </div>
            <div className="max-w-md mx-auto my-5">
              <div className="flex items-center space-x-4">
                {/* Minimum Price Input */}
                <input
                  type="number"
                  placeholder="Min"
                  className="input input-bordered w-full"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                />
                <span>-</span>
                {/* Maximum Price Input */}
                <input
                  type="number"
                  placeholder="Max"
                  className="input input-bordered w-full"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div>
            </div>
            <hr className="mb-5" />
          </section>

          <hr className="mb-5" />
          {/* size */}
          <section className="mb-5">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-2xl font-bold">Size</h2>
              <IoIosArrowUp />
            </div>
            <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
              {["XS", "S", "M", "L", "XL", "XXL", "28", "30", "32", "34"].map((size) => (
                <button
                  key={size}
                  className={`w-full p-2 border rounded-md ${activeSizes.includes(size) ? "bg-black text-white" : "bg-white text-gray-800"} hover:bg-gray-200`}
                  onClick={() => handleSizeClick(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </section>
          <hr className="mb-5" />

          <button
            className="btn w-full hover:bg-black hover:text-white font-semibold duration-200"
            onClick={() => setIsOpen(false)}
          >
            Apply Filter
          </button>
        </div>
      </div>
      <div className="flex lg:flex-row md:flex-row flex-col">
        {/* Left Sidebar - Filters */}
        <div className="w-1/3 hidden md:block lg:block">
          <div className="p-5 m-5 border rounded-xl sticky top-20">
            <section>
              <h2 className="text-2xl font-bold mb-5">Filters</h2>
              <hr className="mb-5" />
              <h2 className="text-xl font-semibold mb-2">Category</h2>
              <div className="text-gray-500 text-lg space-y-2">
                {["All", "T-shirts", "Shorts", "Shirts", "Hoodies", "Jeans"].map((cat) => (
                  <p
                    key={cat}
                    className={`cursor-pointer ${category === cat ? "text-orange-500 font-bold" : "hover:text-orange-500"}`}
                    onClick={() => handleCategorySelect(cat)}
                  >
                    {cat}
                  </p>
                ))}
              </div>
              <hr className="my-5" />
            </section>
            {/* Price Filter */}
            <section>
              <h2 className="text-xl font-semibold mb-3">Price Range</h2>
              <div className="flex gap-3">
                <input
                  type="number"
                  placeholder="Min"
                  className="input input-bordered w-full"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="input input-bordered w-full"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div>
              <hr className="my-5" />
            </section>
            {/* Size Filter */}
            <section>
              <h2 className="text-xl font-semibold mb-3">Size</h2>
              <div className="grid grid-cols-3 gap-3">
                {["XS", "S", "M", "L", "XL", "XXL", "28", "30", "32", "34"].map((size) => (
                  <button
                    key={size}
                    className={`p-2 border rounded-md ${activeSizes.includes(size) ? "bg-black text-white" : "bg-white text-gray-800"}`}
                    onClick={() => handleSizeClick(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <hr className="my-5" />
            </section>
          </div>
        </div>
        {/* Right Side - Products List */}
        <div className="w-full">
          <div className="flex flex-wrap gap-8 px-6 items-center justify-between my-5">
            <input
              type="text"
              placeholder="Search for Products..."
              className="input input-bordered"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={() => setIsOpen(true)} className="text-2xl px-3 lg:hidden">
              <FiSliders />
            </button>
            {/* Sort Dropdown */}
            <div className="flex items-center gap-3">
              <label className="text-gray-700 font-medium">Sort by:</label>
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                onChange={(e) => handleSortChange(e.target.value)}
              >
                <option value="default">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest Arrivals</option>
              </select>
            </div>
          </div>
          {/* Product Grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 p-5 grid-cols-1 gap-6">
            {products.length > 0 ? (
              products.map((item, index) => (
                <Link
                to={`/details/${item._id}`}
                  key={index}
                  className="rounded-lg p-5 bg-white shadow-md hover:shadow-xl transition-transform transform hover:scale-105 border border-gray-200"
                >
                  <div className="relative">
                    {/* Product Image */}
                    <img
                      src={item.productImages?.[0] || "/placeholder.jpg"}
                      alt={item.productName || "Product"}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    {/* Discount Badge */}
                    {item.productDiscount && (
                      <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                        {item.productDiscount}% Off
                      </span>
                    )}
                  </div>
                  {/* Product Details */}
                  <div className="mt-4 text-center">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {item.productName || "Unknown Product"}
                    </h2>
                    {/* Price Section */}
                    <div className="flex justify-center items-center gap-2 mt-2">
                      {item.productDiscount ? (
                        <>
                          <span className="text-xl font-bold text-red-600">
                            {item.productPrice}
                          </span>
                          <span className="text-sm line-through text-gray-500">
                            ${item.productOriginalPrice}
                          </span>
                        </>
                      ) : (
                        <span className="text-xl font-bold text-gray-900">
                          ${item.productOriginalPrice}
                        </span>
                      )}
                    </div>
                    <button
                      className="mt-4 bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-900 transition"
                    >
                      View Details
                    </button>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-3">No products found.</p>
            )}
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
      </div>
    </div>
  );
};

export default Product;
