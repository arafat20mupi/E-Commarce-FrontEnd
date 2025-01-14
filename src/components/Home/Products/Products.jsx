import {
    IoIosArrowDown,
    IoIosArrowDroprightCircle
} from "react-icons/io";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Casual T-Shirt",
      description:
        "Comfortable and breathable cotton t-shirt, available in multiple colors.",
      price: 14.99,
      image: "https://i.ibb.co.com/WK5YPy6/Casual-T-Shirt.webp",
      category: "Men's Clothing",
      size: ["S", "M", "L", "XL"],
      rating: 4.5,
      stock: 50,
    },
    {
      id: 2,
      name: "Formal Shirt",
      description:
        "Stylish formal shirt perfect for office wear, made with premium fabric.",
      price: 29.99,
      image: "https://i.ibb.co.com/mzgZL9N/Formal-Shirt.webp",
      category: "Men's Clothing",
      size: ["S", "M", "L", "XL", "XXL"],
      rating: 4.6,
      stock: 35,
    },
    {
      id: 3,
      name: "Denim Jacket",
      description:
        "Classic denim jacket with a modern fit, ideal for casual outings.",
      price: 49.99,
      image: "https://i.ibb.co.com/y4wj727/Denim-Jacket.webp",
      category: "Unisex Clothing",
      size: ["M", "L", "XL"],
      rating: 4.7,
      stock: 20,
    },
    {
      id: 4,
      name: "Women's Maxi Dress",
      description:
        "Elegant floral maxi dress, perfect for summer parties and casual events.",
      price: 39.99,
      image: "https://i.ibb.co.com/MfV0kkf/Women-s-Maxi-Dress.webp",
      category: "Women's Clothing",
      size: ["S", "M", "L"],
      rating: 4.8,
      stock: 25,
    },
    {
      id: 5,
      name: "Hoodie Sweatshirt",
      description:
        "Soft and warm hoodie, great for both men and women during winter.",
      price: 34.99,
      image: "https://i.ibb.co.com/WNC1V4C/Hoodie-Sweatshirt.webp",
      category: "Unisex Clothing",
      size: ["S", "M", "L", "XL"],
      rating: 4.6,
      stock: 40,
    },
    {
      id: 6,
      name: "Chino Pants",
      description:
        "Slim-fit chino pants with a comfortable stretch, perfect for formal and casual looks.",
      price: 39.99,
      image: "https://i.ibb.co.com/8bD6c3g/Chino-Pants.webp",
      category: "Men's Clothing",
      size: ["30", "32", "34", "36", "38"],
      rating: 4.4,
      stock: 30,
    },
    {
      id: 7,
      name: "Women's Cardigan",
      description:
        "Soft knit cardigan with button closures, perfect for layering.",
      price: 29.99,
      image: "https://i.ibb.co.com/znffrq4/Women-s-Cardigan.webp",
      category: "Women's Clothing",
      size: ["S", "M", "L", "XL"],
      rating: 4.7,
      stock: 18,
    },
    {
      id: 8,
      name: "Athletic Shorts",
      description:
        "Lightweight and breathable shorts, designed for maximum comfort during workouts.",
      price: 19.99,
      image: "https://i.ibb.co.com/0YLZ4z1/Athletic-Shorts.webp",
      category: "Activewear",
      size: ["S", "M", "L", "XL"],
      rating: 4.5,
      stock: 60,
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4">
        {/* Left side bar*/}
              <div className="p-5 col-span-1 border ">
                  
          {/* Category */}
          <div className="border-b-2 p-5">
            <h3 className="mb-5 flex items-center gap-3 font-semibold text-lg cursor-pointer">
              Category
              <span className="mt-1">
                <IoIosArrowDown />
              </span>
            </h3>
            <ul>
              <li className="hover:text-orange-500 duration-200">
                <Link>Women Cardigan</Link>
              </li>
              <li className="hover:text-orange-500 duration-200">
                <Link>Activewear</Link>
              </li>
              <li className="hover:text-orange-500 duration-200">
                <Link>Unisex Clothing</Link>
              </li>
            </ul>
                  </div>
                  
          {/* Size */}
          <div className="border-b-2 p-5">
            <h3 className="text-xl font-bold mb-5">Size</h3>
            <div className="flex items-center gap-3 cursor-pointer mb-2">
              <input
                type="checkbox"
                name="M"
                className="checkbox checkbox-md checkbox-primary"
              />
              <p className="text-lg font-semibold hover:text-orange-500">S</p>
            </div>
            <div className="flex items-center gap-3 cursor-pointer mb-2">
              <input
                type="checkbox"
                name="M"
                className="checkbox checkbox-md checkbox-primary"
              />
              <p className="text-lg font-semibold hover:text-orange-500">M</p>
            </div>
            <div className="flex items-center gap-3 cursor-pointer mb-2">
              <input
                type="checkbox"
                name="M"
                className="checkbox checkbox-md checkbox-primary"
              />
              <p className="text-lg font-semibold hover:text-orange-500">L</p>
            </div>
            <div className="flex items-center gap-3 cursor-pointer mb-2">
              <input
                type="checkbox"
                name="M"
                className="checkbox checkbox-md checkbox-primary"
              />
              <p className="text-lg font-semibold hover:text-orange-500">XL</p>
            </div>
            <div className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="M"
                className="checkbox checkbox-md checkbox-primary"
              />
              <p className="text-lg font-semibold hover:text-orange-500">XXL</p>
            </div>
                  </div>
                  
          {/* Price */}
          <div className="border-b-2 p-5">
            <h3 className="text-xl font-bold mb-5">Price</h3>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Min"
                className="input input-bordered input-info w-full max-w-xs"
              />
              <span className="font-semibold px-2 text-2xl">-</span>
              <input
                type="text"
                placeholder="Max"
                className="input input-bordered input-info w-full max-w-xs"
              />
              <button className="ms-2 p-2 bg-orange-500 hover:bg-sky-500 hover:text-white duration-200 text-xl rounded-lg  ">
                <IoIosArrowDroprightCircle />
              </button>
            </div>
                  </div>

              </div>
              {/* Right side bar */}
        <div className="col-span-3">
          <h2 className="text-4xl font-bold p-5">All Products</h2>
          <div className=" p-5 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
