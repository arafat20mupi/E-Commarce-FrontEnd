import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const ReviewForm = ({ onSubmit }) => {
    const [rating, setRating] = useState(5); // Default rating
    const [comment, setComment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (comment.trim() === "") {
            alert("Please enter a comment.");
            return;
        }
        // Call onSubmit with review data
        onSubmit({ rating, comment });
        setComment(""); // Reset the comment field after submission
    };

    return (
        <div className="mt-8">
            <details className="dropdown">
                <summary className="btn w-screen m-1 flex justify-between"><h2 className="text-xl text-center font-semibold">Write a Review</h2><h2><FaAngleDown /></h2></summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-screen p-2 shadow">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="flex justify-between mx-20">
                            {/* Comment */}
                            <div>
                                <label className="block font-medium text-xl mb-2">Your Review</label>
                                <textarea
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    className="h-10 w-64  p-2 border-gray-300 rounded-md"
                                    placeholder="Write your review here..."
                                />
                            </div>
                            {/* Rating */}
                            <div>
                                <label className="block font-medium text-xl mb-2">Rating</label>
                                <div className="flex items-center gap-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <label key={star} className="cursor-pointer">
                                            <input
                                                type="radio"
                                                name="rating"
                                                value={star}
                                                checked={rating === star}
                                                onChange={() => setRating(star)}
                                                className="hidden"
                                            />
                                            <span
                                                className={`text-${star <= rating ? "yellow" : "gray"}-500 text-xl`}
                                            >
                                                ★
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>


                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="w-64 bg-orange-400 text-white py-2 rounded-md"
                            >
                                Submit Review
                            </button>
                        </div>
                    </form>
                </ul>
            </details>

        </div>
    );
};

export default ReviewForm;
