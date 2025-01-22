import { useState } from "react";
import Reviews from "./Reviews";
import YouMayLike from "./YouMayLike";

const ProductDetails = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedSize, setSelectedSize] = useState(null);

    return (
        <div className="max-w-6xl mx-auto mt-20">
            {/* Product Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Images Section */}
                <div className="flex flex-col items-center justify-center">
                    <div className="flex lg:flex-row-reverse flex-col">

                        <div>
                            <img
                                src={products.product_images[selectedImage]} // Display selected image
                                alt={products.product_name}
                                className="w-80 object-cover m-2 h-[440px] rounded-lg border shadow-sm"
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
                <div className="space-y-4 px-3">
                    {/* Product Name and Rating */}
                    <h1 className="text-2xl font-bold uppercase">{products.product_name}</h1>
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
                                    className={`btn btn-sm ${selectedSize === size ? "btn bg-orange-400 hover:bg-orange-600 text-white" : "btn-outline"}`}
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
                        <button className="btn bg-orange-400 hover:bg-orange-600 text-white px-6">Add to Cart</button>
                    </div>
                </div>
            </div>
            <div>
                <Reviews  products={products}></Reviews>
                <YouMayLike></YouMayLike>
            </div>
        </div>
    );
};

export default ProductDetails;

const products = {
    product_name: "One Life Graphic T-Shirt",
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
    product_details: [
        "Perfect for any occasion",
        "Crafted from a soft and breathable fabric",
        "Offering superior comfort and style",
        "Available in multiple colors and sizes",
        "A versatile choice for casual and semi-formal wear"
    ],
    faqs: [
        {
            question: "What is the material of the ONE LIFE GRAPHIC T-SHIRT?",
            answer: "The t-shirt is crafted from soft and breathable fabric, ensuring superior comfort and style.",
        },
        {
            question: "What colors are available for this t-shirt?",
            answer: "The t-shirt is available in three colors: Green, Dark Green, and Dark Blue.",
        },
        {
            question: "What sizes can I choose from?",
            answer: "The t-shirt comes in four sizes: Small, Medium, Large, and X-Large.",
        },
        {
            question: "Does this t-shirt shrink after washing?",
            answer: "Some reviews mention slight shrinkage after the first wash, so it's recommended to follow care instructions carefully.",
        },
        {
            question: "Is the print quality durable after multiple washes?",
            answer: "According to reviews, the print quality is top-notch and remains vibrant even after multiple washes.",
        },
        {
            question: "What is the discount currently being offered?",
            answer: "The t-shirt is available at a 40% discount, bringing the price down to $260 from its original price of $300.",
        },
        {
            question: "Is the size accurate to the standard size chart?",
            answer: "Most customers found the fit accurate, but a few reviews mention that the size runs slightly small.",
        },
        {
            question: "Are there any additional details about the product?",
            answer: "Yes, the t-shirt is versatile and suitable for casual or semi-formal wear. It's available in multiple colors and sizes, making it a great choice for any occasion.",
        },
        {
            question: "Can I return or exchange the t-shirt if it doesn't fit?",
            answer: "Please refer to our return and exchange policy for detailed information on returns and exchanges.",
        },
        {
            question: "Are customer reviews verified?",
            answer: "Yes, most reviews are from verified customers. Verified reviews ensure authentic feedback from genuine buyers.",
        },
    ],
    
    reviews: [
        {
            name: "Samantha D.",
            verified: true,
            stars: 4.5,
            text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
            date: "August 14, 2023",
        },
        {
            name: "Alex M.",
            verified: true,
            stars: 5,
            text: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
            date: "August 15, 2023",
        },
        {
            name: "Jessica T.",
            verified: true,
            stars: 4,
            text: "The fabric is soft and breathable. I wish it came in more colors, but overall, I'm happy with this purchase.",
            date: "September 10, 2023",
        },
        {
            name: "Mark P.",
            verified: true,
            stars: 3.5,
            text: "Decent t-shirt, but the size runs a bit small. The design is nice though!",
            date: "October 5, 2023",
        },
        {
            name: "Liam W.",
            verified: true,
            stars: 5,
            text: "Absolutely amazing! Fits perfectly and looks fantastic. Highly recommend this t-shirt.",
            date: "October 20, 2023",
        },
        {
            name: "Olivia C.",
            verified: true,
            stars: 4.5,
            text: "Comfortable and stylish. Perfect for casual outings or even lounging at home.",
            date: "November 3, 2023",
        },
        {
            name: "Ethan R.",
            verified: true,
            stars: 4,
            text: "Good quality overall, but the shipping took longer than expected.",
            date: "November 12, 2023",
        },
        {
            name: "Sophia K.",
            verified: true,
            stars: 5,
            text: "The colors are vibrant, and the print hasn't faded after multiple washes. Highly satisfied!",
            date: "November 25, 2023",
        },
        {
            name: "Ava N.",
            verified: false,
            stars: 3,
            text: "The design is great, but the fabric isn't as soft as I hoped.",
            date: "December 1, 2023",
        },
        {
            name: "Noah H.",
            verified: true,
            stars: 4.5,
            text: "This t-shirt is my new favorite. It goes well with anything and feels amazing.",
            date: "December 10, 2023",
        },
        {
            name: "Mia L.",
            verified: true,
            stars: 5,
            text: "Top-notch quality and super comfortable. I’ll be ordering more in different colors!",
            date: "December 18, 2023",
        },
        {
            name: "James B.",
            verified: true,
            stars: 4,
            text: "Good value for the price. The fit is nice, but it shrunk a little after the first wash.",
            date: "December 20, 2023",
        },
        {
            name: "Ella V.",
            verified: true,
            stars: 4.5,
            text: "Stylish and versatile. I've received so many compliments wearing this t-shirt.",
            date: "January 5, 2024",
        },
        {
            name: "Benjamin F.",
            verified: true,
            stars: 5,
            text: "Perfect in every way. I’m very impressed with the quality and the fit.",
            date: "January 10, 2024",
        },
        {
            name: "Charlotte M.",
            verified: false,
            stars: 3.5,
            text: "The shirt is okay, but it’s not as soft as I expected. The design is nice, though.",
            date: "January 14, 2024",
        },
    ]


};
