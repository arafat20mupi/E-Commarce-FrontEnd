import { useState } from "react";
import Reviews from "./Reviews";

const ProductDetails = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedSize, setSelectedSize] = useState(null);
    const products = {
        product_name: "ONE LIFE GRAPHIC T-SHIRT",
        product_rating: "4.5/5",
        product_price: "$260",
        product_original_price: "$300",
        product_discount: "-40%",
        product_description:
            "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        product_colors: ["Green", "Dark Green", "Dark Blue"],
        product_sizes: ["Small", "Medium", "Large", "X-Large"],
        product_images: [
            "https://i.ibb.co.com/cCq51pN/533545a2b1e10e90b8059bc1bc97eab5.png",
            " https://i.ibb.co.com/BLt15jh/b417beff6f8fa6310534f3755fd23c5a.png",
            " https://i.ibb.co.com/hHtC44h/9d8d7ff6e33f95a574450e07218fc909.png",
        ],
    };

    return (
        <div className="max-w-6xl mx-auto">
            {/* Product Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Images Section */}
                <div className="flex flex-col items-center justify-center">
                    <div className="flex lg:flex-row-reverse flex-col">

                        <div>
                            <img
                                src={products.product_images[selectedImage]} // Display selected image
                                alt={products.product_name}
                                className="w-80 object-cover m-2 h-[420px] rounded-lg border shadow-sm"
                            />
                        </div>
                        <div>
                            <div className="flex lg:flex-col">
                                {products.product_images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`Thumbnail ${index + 1}`}
                                        className={`lg:w-36 w-24 object-cover m-2 h-[136px] rounded-lg border shadow-sm cursor-pointer ${index === selectedImage ? "border-blue-500" : "border-gray-200"
                                            }`}
                                        onClick={() => setSelectedImage(index)} // Update selected image
                                    />
                                ))}
                            </div>

                        </div>
                    </div>
                </div>

                {/* Product Details Section */}
                <div className="space-y-4">
                    {/* Product Name and Rating */}
                    <h1 className="text-2xl font-bold">{products.product_name}</h1>
                    <div className="flex items-center space-x-2">
                        <div className="rating rating-sm">
                            {Array(5)
                                .fill(0)
                                .map((_, index) => (
                                    <input
                                        key={index}
                                        type="radio"
                                        name="rating"
                                        className={`mask mask-star-2 ${index < 4 ? "bg-yellow-500" : "bg-gray-300"
                                            }`}
                                        defaultChecked={index === 3}
                                    />
                                ))}
                        </div>
                        <p className="text-sm text-gray-500">{products.product_rating}</p>
                    </div>

                    {/* Pricing */}
                    <div className="flex items-center space-x-4">
                        <p className="text-2xl font-bold text-red-500">
                            {products.product_price}
                        </p>
                        <p className="text-gray-500 line-through">
                            {products.product_original_price}
                        </p>
                        <span className="text-red-500 text-sm font-semibold">
                            {products.product_discount}
                        </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600">{products.product_description}</p>

                    {/* Colors */}
                    <div>
                        <h4 className="text-sm font-semibold mb-2">Select Colors</h4>
                        <div className="flex space-x-4">
                            {products.product_colors.map((color, index) => (
                                <button
                                    key={index}
                                    className={`w-8 h-8 rounded-full border border-gray-200 ${color === "Green"
                                        ? "bg-green-700"
                                        : color === "Dark Green"
                                            ? "bg-teal-900"
                                            : "bg-gray-900"
                                        }`}
                                    title={color}
                                ></button>
                            ))}
                        </div>
                    </div>

                    {/* Sizes */}
                    <div>
                        <h4 className="text-sm font-semibold mb-2">Choose Size</h4>
                        <div className="flex space-x-4">
                            {products.product_sizes.map((size, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedSize(size)}
                                    className={`btn btn-sm ${selectedSize === size ? "btn-primary" : "btn-outline"}`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                        {selectedSize && (
                            <p className="text-sm text-gray-600 mt-2">
                                Selected Size: <span className="font-semibold">{selectedSize}</span>
                            </p>
                        )}
                    </div>

                    {/* Quantity and Add to Cart */}
                    <div className="flex items-center space-x-4">
                        {/* Quantity */}
                        <div className="flex items-center space-x-2">
                            <button className="btn btn-circle btn-sm">-</button>
                            <span className="text-lg font-semibold">1</span>
                            <button className="btn btn-circle btn-sm">+</button>
                        </div>
                        {/* Add to Cart */}
                        <button className="btn btn-primary px-6">Add to Cart</button>
                    </div>
                </div>
            </div>
            <div>
                <Reviews></Reviews>
            </div>
        </div>
    );
};

export default ProductDetails;
