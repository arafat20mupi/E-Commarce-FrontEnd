import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import WriteReview from "./WriteReview";

const ReviewCard = ({ products, reviews }) => {
    const [visibleReviews, setVisibleReviews] = useState(9);
    const [sortOrder, setSortOrder] = useState("latest");

    const handleLoadMore = () => {
        setVisibleReviews(reviews.length); // Show all reviews
    };

    // Format Date (Feb 12, 2025)
    const formatDate = (isoString) => {
        const date = new Date(isoString);
        return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    };

    // Sorting Logic
    const sortedReviews = [...reviews].sort((a, b) => {
        return sortOrder === "latest" 
            ? new Date(b.date) - new Date(a.date) // Newest first
            : new Date(a.date) - new Date(b.date); // Oldest first
    });

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-6">
            {/* Header Section */}
            <div className="flex justify-between items-center border-b pb-4">
                <div className="flex items-center space-x-2">
                    <h1 className="font-extrabold text-3xl text-gray-800">All Reviews</h1>
                    <p className="text-gray-500 text-lg">{`(${reviews.length})`}</p>
                </div>
                <div className="flex items-center space-x-3">
                    {/* Sorting Dropdown */}
                    <div className="dropdown dropdown-bottom">
                        <button className="btn bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center px-4 py-2 rounded-md shadow">
                            {sortOrder === "latest" ? "Latest" : "Oldest"} <FaAngleDown className="ml-1" />
                        </button>
                        <ul className="dropdown-content menu shadow bg-white rounded-md w-32 p-2">
                            <li><button onClick={() => setSortOrder("latest")}>Latest</button></li>
                            <li><button onClick={() => setSortOrder("oldest")}>Oldest</button></li>
                        </ul>
                    </div>
                    {/* Write Review Button */}
                    <WriteReview products={products} />
                </div>
            </div>

            {/* Review Cards */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {sortedReviews.slice(0, visibleReviews).map((review, index) => (
                    <div 
                        key={index} 
                        className="bg-white shadow-lg rounded-xl p-5 transition duration-300 hover:shadow-xl"
                    >
                        <div className="flex items-center space-x-4">
                            <img
                                src={review.userPhoto}
                                alt="User"
                                className="w-14 h-14 rounded-full object-cover shadow-md"
                            />
                            <div>
                                <h4 className="font-semibold text-lg">{review.name}</h4>
                                <span className="text-xs text-gray-500">{formatDate(review.date)}</span>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="flex items-center text-yellow-400 text-xl">
                                {"★".repeat(Math.floor(review.stars))}
                                {review.stars % 1 !== 0 && "½"}
                                <span className="text-gray-800 font-bold ml-2">{review.stars}</span>
                            </div>
                            <p className="text-gray-600 mt-3 leading-relaxed">{review.text}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Load More Button */}
            {visibleReviews < reviews.length && (
                <div className="text-center mt-8">
                    <button
                        className="btn bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
                        onClick={handleLoadMore}
                    >
                        Load More Reviews
                    </button>
                </div>
            )}
        </div>
    );
};

export default ReviewCard;
