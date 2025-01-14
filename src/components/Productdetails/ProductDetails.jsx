import { useEffect, useState, useMemo } from "react";
import { FaAngleDown } from "react-icons/fa";

const ProductDetails = () => {
    const [reviewRating, setReviewRating] = useState(5);
    const [comment, setComment] = useState("");
    const [currentSlider, setCurrentSlider] = useState(0);

    const images = product.images || [];
    const reviews = product.reviews || [];

    const discountedPrice = useMemo(() => {
        return product.discount?.value
            ? (product.price - (product.price * product.discount.value) / 100).toFixed(2)
            : product.price;
    }, [product.price, product.discount]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!comment.trim()) {
            alert("Please enter a comment.");
            return;
        }
        console.log({ rating: reviewRating, comment });
        setComment("");
    };

    useEffect(() => {
        const intervalId = setInterval(
            () => setCurrentSlider((prev) => (prev === images.length - 1 ? 0 : prev + 1)),
            5000
        );
        return () => clearInterval(intervalId);
    }, [images]);

    return (
        <div className="mt-10 bg-white shadow-lg rounded-lg p-6">
            {/* Product Content */}
            <div className="flex flex-col lg:flex-row justify-between gap-6">
                {/* Image Slider */}
                <div className="w-full">

                    <div className="flex items-center m-5 justify-center">
                    <img src={images[currentSlider]} alt="" className="w-2/3 rounded-2xl h-80 " />
                    </div>

                    {/* Slider Thumbnails */}
                    <div className="flex justify-center items-center gap-3 p-2">
                        {images.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                onClick={() => setCurrentSlider(idx)}
                                className={`w-10 md:w-20 h-6 sm:h-8 md:h-12 rounded-md cursor-pointer ${currentSlider === idx ? "border-2 border-black" : ""
                                    }`}
                                alt={`Slide ${idx}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Product Info */}
                <div className="w-full lg:w-1/2">
                    <h1 className="text-3xl font-bold">{product.name}</h1>
                    <p className="text-gray-600 mt-2">{product.description}</p>

                    {/* Pricing */}
                    <div className="mt-4 flex items-center gap-4">
                        <p className="text-xl font-semibold text-green-600">${discountedPrice}</p>
                        {product.discount && (
                            <p className="text-gray-500 line-through">${product.price}</p>
                        )}
                    </div>

                    {/* Stock Info */}
                    <p className={`mt-2 ${product.stock > 0 ? "text-green-500" : "text-red-500"}`}>
                        {product.stock > 0
                            ? `In Stock (${product.stock} available)`
                            : "Out of Stock"}
                    </p>

                    {/* Additional Info */}
                    <div className="mt-4">
                        <p>Product Type: {product.productType}</p>
                        <p>Brand: {product.brand}</p>
                        <div className="flex items-center gap-2 mt-2">
                            <p>Sizes:</p>
                            <div className="flex gap-2">
                                {product.sizes.map((size, idx) => (
                                    <span key={idx} className="px-3 py-1 border rounded-md bg-gray-200">
                                        {size}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Add to Cart Button */}
                    <button className="btn bg-orange-400 text-white mt-5">ADD to Cart</button>
                </div>
            </div>

            {/* Review Form */}
            <div className="mt-8 w-full">
                <details className="dropdown w-full">
                    <summary className="btn bg-gray-100 text-black flex justify-between items-center px-4 py-2 rounded-lg shadow-md hover:bg-gray-100">
                        <h2 className="text-lg sm:text-xl font-semibold">Write a Review</h2>
                        <FaAngleDown className="text-lg" />
                    </summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-lg mt-2 shadow-md z-10 w-full p-4">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label
                                    className="block font-medium text-lg"
                                    htmlFor="comment"
                                >
                                    Your Review
                                </label>
                                <textarea
                                    id="comment"
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    className="h-20 w-full border p-3 rounded-md text-gray-700 focus:ring-2 focus:ring-orange-400 focus:outline-none"
                                    placeholder="Write your review here..."
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="block font-medium text-lg">Rating</label>
                                <div className="flex items-center gap-3 justify-center">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <label key={star} className="cursor-pointer">
                                            <input
                                                type="radio"
                                                name="rating"
                                                value={star}
                                                checked={reviewRating === star}
                                                onChange={() => setReviewRating(star)}
                                                className="hidden"
                                                aria-label={`Rating ${star}`}
                                            />
                                            <span
                                                className={
                                                    star <= reviewRating
                                                        ? "text-yellow-400 text-2xl"
                                                        : "text-gray-400 text-2xl"
                                                }
                                            >
                                                ★
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="w-full sm:w-2/3 bg-orange-400 text-white py-2 px-4 rounded-lg font-medium text-lg hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                >
                                    Submit Review
                                </button>
                            </div>
                        </form>
                    </ul>
                </details>
            </div>

            {/* Reviews Section */}
            <details className="dropdown w-full mt-6">
                <summary className="btn flex justify-between items-center w-full bg-gray-100 px-4 py-2 rounded-lg shadow-md hover:bg-gray-200">
                    <h2 className="text-lg font-semibold">Reviews</h2>
                    <FaAngleDown />
                </summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box p-4 shadow-md">
                    <div className="mt-4">
                        {product.reviews && product.reviews.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {product.reviews.map((review) => (
                                    <div
                                        key={review.review_id}
                                        className="p-4 border rounded-lg bg-gray-50"
                                    >
                                        <p className="font-medium">{review.user}</p>
                                        <p className="text-gray-600 text-sm">
                                            {review.comment}
                                        </p>
                                        <p className="text-yellow-500 text-sm">
                                            Rating: {review.rating} / 5
                                        </p>
                                        <p className="text-xs text-gray-400">
                                            {review.date}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-600">No reviews yet.</p>
                        )}
                    </div>
                </ul>
            </details>
        </div>
    );
};

export default ProductDetails;

const product = {
    id: 1,
    name: "Men's Casual Shirt",
    price: 29.99,
    discount: { type: "percentage", value: 15 },
    description: "A stylish casual shirt made from high-quality cotton.",
    stock: 50,
    productType: "Clothing",
    brand: "FashionHub",
    sizes: ["S", "M", "L", "XL"],
    images: [
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    ],
    reviews: [
        { review_id: 1, user: "John Doe", rating: 5, comment: "Great fit!", date: "2025-01-01" },
    ],
};
