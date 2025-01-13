import { FaAngleDown } from "react-icons/fa";
import ReviewForm from "./ReviewForm";


const ProductDetails = () => {
    const {
        name,
        price,
        discount,
        description,
        images,
        stock,
        rating,
        reviews,
        brand,
        productType,
        sizes,
    } = product;


    const discountedPrice = discount
        ? (price - (price * discount.value) / 100).toFixed(2)
        : price;

    return (
        <div className="mt-10 bg-white shadow-lg rounded-lg">
            <div className="flex justify-around">
                {/* Product Images */}
                <div className="flex gap-4">
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={name}
                            className="w-[500] h-[500] object-cover rounded-lg border"
                        />
                    ))}
                </div>

                {/* Product Info */}
                <div className="mt-6">
                    <h1 className="text-3xl font-bold">{name}</h1>
                    <p className="text-gray-600 mt-2">{description}</p>

                    {/* Price and Discount */}
                    <div className="mt-4">
                        <p className="text-lg font-semibold text-green-600">
                            ${discountedPrice}
                        </p>
                        {discount && (
                            <p className=" text-gray-500 line-through">
                                ${price}
                            </p>
                        )}
                    </div>

                    {/* Stock Info */}
                    <p
                        className={`mt-2 ${stock > 0 ? 'text-green-500' : 'text-red-500'
                            }`}
                    >
                        {stock > 0 ? `In Stock (${stock} available)` : 'Out of Stock'}
                    </p>

                    {/* Rating */}
                    <div className="mt-2">
                        <p className="text-sm text-yellow-500">
                            Rating: {rating} / 5
                        </p>
                    </div>
                    
                    <div>
                        <p>Product Type : {productType}</p>
                        <p>Brand : {brand}</p>
                        <div className="flex gap-5">
                            <p className="mt-2">Sizes: </p>
                            <div className="flex gap-4 mt-2">
                                {sizes.map((size, index) => (
                                    <span key={index} className="px-3 py-1 border rounded-md bg-gray-200">
                                        {size}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                    <div>
                        <button className="btn text-xl bg-orange-400 text-white border-none mt-5">ADD to Chart</button>
                    </div>
                </div>
            </div>
            <ReviewForm></ReviewForm>
            {/* Reviews */}
            <details className="dropdown">
               <summary className="btn w-screen m-1 flex justify-between"><h2 className="text-xl text-center font-semibold">Reviews</h2><h2><FaAngleDown /></h2></summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-screen p-2 shadow">
                    <div className="mt-6 mx-auto text-center">
                        <h2 className="text-xl font-semibold mb-4">Reviews</h2>
                        <div className="lg:grid grid-cols-4 lg:gap-10">
                        {reviews && reviews.length > 0 ? (
                            reviews.map((review) => (
                                <div
                                    key={review.review_id}
                                    className="border-b pb-4 mb-4"
                                >
                                    <p className="font-medium">{review.user}</p>
                                    <p className="text-sm text-gray-600">
                                        {review.comment}
                                    </p>
                                    <p className="text-sm text-yellow-500">
                                        {review.rating} / 5
                                    </p>
                                    <p className="text-xs text-gray-400">
                                        {review.date}
                                    </p>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-600">No reviews yet.</p>
                        )}
                        </div>
                    </div>
                </ul>
            </details>
        </div>
    );
};

export default ProductDetails;

const product = {
    "id": 1,
    "name": "Men's Casual Shirt",
    "price": 29.99,
    "discount": {
        "type": "percentage",
        "value": 15
    },
    "description": "A stylish casual shirt perfect for everyday wear, made from high-quality cotton fabric.",
    "category": "men",
    "sizes": ["S", "M", "L", "XL"],
    "colors": ["blue", "white", "black"],
    "images": [
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    ],
    "stock": 50,
    "rating": 4.5,
    "reviews": [
        {
            "review_id": 1,
            "user": "John Doe",
            "rating": 5,
            "comment": "Great fit and comfortable material!",
            "date": "2025-01-10"
        },
        {
            "review_id": 1,
            "user": "John Doe",
            "rating": 5,
            "comment": "Great fit and comfortable material!",
            "date": "2025-01-10"
        },
        {
            "review_id": 1,
            "user": "John Doe",
            "rating": 5,
            "comment": "Great fit and comfortable material!",
            "date": "2025-01-10"
        },
        {
            "review_id": 2,
            "user": "Jane Smith",
            "rating": 4,
            "comment": "Good quality but the size runs a bit small.",
            "date": "2025-01-12"
        }
    ],
    "brand": "FashionHub",
    "productType": "Clothing",
    "tags": ["casual", "shirt", "men's wear"],
    "availableLocations": ["Online", "Store #12"],
    "warranty": "30-day return policy",
    "material": "100% Cotton"
};
