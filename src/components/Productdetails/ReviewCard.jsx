import React, { useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa";
import WriteReview from "./WriteReview";

const ReviewCard = ({products, reviews }) => {

    const [visibleReviews, setVisibleReviews] = useState(9)
    const handleLoadMore = () => {
        setVisibleReviews(reviews.length); // Show all reviews
    };

    return (
        <div>
            <div className='flex justify-between w-full'>
                <div className="flex">
                    <h1 className='font-bold lg:text-2xl sm:text-xl pt-3 pl-1'>All Reviews</h1> <p className="pt-4 pl-1 text-slate-500 lg:text-2xl sm:text-xl">{`(${reviews.length})`}</p>
                </div>
                <div className='flex justify-end'>
                    <div>
                        <div className="dropdown dropdown-bottom">
                            <div tabIndex={0} role="button" className="btn m-1">Latest <FaAngleDown /></div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-32 p-2 shadow">
                                <li><a>Latest</a></li>
                                <li><a>Oldest</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <WriteReview products={products}></WriteReview>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap gap-6 justify-center mt-10">
                {reviews.slice(0, visibleReviews).map((review, index) => (
                    <div
                        key={index}
                        className="card bg-base-100 shadow-md p-5 rounded-lg w-80"
                    >
                        <div className="flex items-center justify-between">
                            {/* Star Rating */}
                            <div className="text-yellow-400 text-lg">
                                {"★".repeat(Math.floor(review.stars))}
                                {review.stars % 1 !== 0 && "½"}
                            </div>
                            {/* User Info */}
                            <div className="font-semibold">
                                {review.name}{" "}
                                {review.verified && (
                                    <span className="text-green-500 text-sm">✔</span>
                                )}
                            </div>
                        </div>
                        {/* Review Text */}
                        <p className="text-sm text-gray-600 mt-3">{review.text}</p>
                        {/* Review Date */}
                        <div className="text-gray-400 text-xs mt-2">Posted on {review.date}</div>
                    </div>
                ))}
                {visibleReviews < reviews.length && (
                    <div className="mt-6">
                        <button
                            className="btn bg-orange-400 hover:bg-orange-600 text-white"
                            onClick={handleLoadMore}
                        >
                            Load More Reviews
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ReviewCard;
