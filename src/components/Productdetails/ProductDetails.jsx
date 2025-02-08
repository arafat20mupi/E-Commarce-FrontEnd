import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Reviews from "./Reviews";
import YouMayLike from "./YouMayLike";
import useAxiosPublic from "../../Hook/useAxiosPublic";

const ProductDetails = () => {
  const { id } = useParams();
  const axios = useAxiosPublic();
  const [products, setProducts] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const result = await axios.get(`/api/products/${id}`);
        setProducts(result.data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    };
    fetchProduct();
  }, [id, axios]);

  if (!products) {
    return <div className="max-w-6xl mx-auto mt-20">Loading...</div>;
  }

  const { productImages, productName, productPrice, productOriginalPrice, productDiscount, productDescription, productColors, productSizes } = products;

  return (
    <div className="max-w-6xl mx-auto mt-20">
      {/* Product Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Images Section */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex lg:flex-row-reverse flex-col">
            <div>
              <img
                src={productImages[selectedImage]} // Display selected image
                alt={productName}
                className="w-80 object-cover m-2 h-[440px] rounded-lg border shadow-sm"
              />
            </div>
            <div>
              <div className="flex lg:flex-col">
                {productImages?.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className={`lg:w-36 w-24 object-cover m-2 h-[136px] rounded-lg border shadow-sm cursor-pointer ${
                      index === selectedImage
                        ? "border-blue-500"
                        : "border-gray-200"
                    }`}
                    onClick={() => setSelectedImage(index)} 
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="space-y-4 px-3">
          {/* Product Name and Rating */}
          <h1 className="text-2xl font-bold uppercase">
            {productName}
          </h1>
          <div className="flex items-center space-x-2">
            <div className="rating rating-sm">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <input
                    key={index}
                    type="radio"
                    name="rating"
                    className={`mask mask-star-2 ${
                      index < 4 ? "bg-yellow-500" : "bg-gray-300"
                    }`}
                    defaultChecked={index === 3}
                  />
                ))}
            </div>
            <p className="text-sm text-gray-500">product_rating</p>
          </div>

          {/* Pricing */}
          <div className="flex items-center space-x-4">
            <p className="text-2xl font-bold text-red-500">
              {productPrice + ' ' + 'Tk'}
            </p>
            <p className="text-gray-500 line-through">
              {productOriginalPrice +' ' +  'Tk'}
            </p>
            <span className="text-red-500 text-sm font-semibold">
              {productDiscount + "%"} 
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600">{productDescription}</p>

          {/* Colors */}
          <div>
            <h4 className="text-sm font-semibold mb-2">Select Colors</h4>
            <div className="flex space-x-4">
              {productColors.map((color, index) => (
                <button
                  key={index}
                  className={`w-8 h-8 rounded-full border border-gray-200 ${
                    color === "Green"
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
              {productSizes.map((size, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSize(size)}
                  className={`btn btn-sm ${
                    selectedSize === size
                      ? "btn bg-orange-400 hover:bg-orange-600 text-white"
                      : "btn-outline"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            {selectedSize && (
              <p className="text-sm text-gray-600 mt-2">
                Selected Size:{" "}
                <span className="font-semibold">{selectedSize}</span>
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
            <button className="btn bg-orange-400 hover:bg-orange-600 text-white px-6">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div>
        <Reviews products={products} />
        <YouMayLike />
      </div>
    </div>
  );
};

export default ProductDetails;


