import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import { AuthContext } from "../../provider/AuthProvider";
const WriteReview = (products) => {
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const axios = useAxiosPublic();
    const { user } = useContext(AuthContext);
    const handleReviewSubmit = async (e) => {
        e.preventDefault();
        const stars = e.target["rating-2"].value; // Access the selected rating
        const text = e.target.text.value; // Access the review text
        const writeReviewData = {
            name: user.displayName, // Replace with actual user name
            stars,
            email:user.email,
            text,
            date: new Date().toISOString(),
        };
        console.log(writeReviewData);
        try {
            const id=products.products._id
            await axios.post(`api/products/${id}/reviews`, writeReviewData);
            toast.success("Review added successfully!");
        } catch (error) {
            toast.error("Failed to add review");
        }

        // Close the modal after submission
        setIsModalOpen(false);
    };
    const handleOpenModal = () => {
        if (user) {
            setIsModalOpen(true);
        } else {
            toast.error("Please log in to give a review.");
        }
    };

    return (
        <div>
            {/* Button to open the modal */}
            <ToastContainer />
            <button
                className="btn mt-1 bg-orange-400 hover:bg-orange-600 text-white"
                onClick={handleOpenModal}
            >
                Write a Review
            </button>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <h2 className="text-2xl font-bold mb-4 text-center">
                            Your opinion matters!
                        </h2>
                        <form onSubmit={handleReviewSubmit}>
                            {/* Rating Section */}
                            <div className="flex justify-center mb-4">
                                <div className="rating">
                                    {[1, 2, 3, 4, 5].map((value) => (
                                        <input
                                            key={value}
                                            type="radio"
                                            name="rating-2"
                                            value={value}
                                            className="mask mask-star-2 bg-orange-400"
                                            defaultChecked={value === 2}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Review Text Section */}
                            <textarea
                                name="text"
                                rows="3"
                                placeholder="Write your review..."
                                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 mb-4"
                            ></textarea>

                            {/* Submit Button */}
                            <div className="flex justify-between">
                                <button
                                    type="button"
                                    className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                                    onClick={() => setIsModalOpen(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
                                >
                                    Submit Review
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WriteReview;
