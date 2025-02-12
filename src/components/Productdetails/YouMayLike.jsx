import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import { Link } from "react-router-dom";

const YouMayLike = () => {
  const [products, setProducts] = useState([]);
  const axios = useAxiosPublic();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/products");
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [axios]);

  // Function to render star ratings
  const renderStars = (rating) => {
    const fullStars = "★".repeat(Math.floor(rating));
    const halfStar = rating % 1 !== 0 ? "½" : "";
    return (
      <span className="text-yellow-400 text-lg">
        {fullStars}
        {halfStar}
      </span>
    );
  };

  return (
    <div className="mt-6">
      <h1 className="text-3xl font-bold text-center">You Might Also Like</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {products?.map((item) => {
          // Calculate average rating
          const totalReviews = item.reviews?.length || 0;
          const averageRating =
            totalReviews > 0
              ? item.reviews.reduce((acc, review) => acc + review.stars, 0) / totalReviews
              : 0;

          return (
            <Link
              to={`/details/${item._id}`}
              key={item._id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center transition duration-300 hover:shadow-lg"
            >
              <img
                src={item.productImages?.[0] || "https://via.placeholder.com/240"}
                alt={item.productName}
                className="w-60 h-60 rounded-lg object-cover mb-4"
              />
              <h2 className="text-lg font-semibold text-center">{item.productName}</h2>
              <div className="flex items-center mt-2">
                {renderStars(averageRating)}
                <span className="ml-2 text-sm text-gray-500">
                  ({averageRating.toFixed(1)}/5, {totalReviews} reviews)
                </span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xl font-bold text-black">${item.productPrice}</span>
                {item.productOriginalPrice && (
                  <span className="text-sm line-through text-gray-500">
                    ${item.productOriginalPrice}
                  </span>
                )}
                {item.productDiscount && (
                  <span className="text-sm text-red-500">({item.productDiscount}% OFF)</span>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default YouMayLike;
