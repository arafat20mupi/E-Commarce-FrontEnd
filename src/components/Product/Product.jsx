import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { useState } from "react";
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowUp,
} from "react-icons/io";

import { FiSliders } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

const Product = () => {
  const [rating, setRating] = useState(0);

  const [activeSize, setActiveSize] = useState("");

  const sizes = ["XS", "S", "M", "L", "XL", "XXL", "28", "30", "32", "34"];

  const handleSizeClick = (size) => {
    setActiveSize(size === activeSize ? "" : size); // Toggle size selection
  };

  const [isOpen, setIsOpen] = useState(false);

 const toggleFilter = () => {
   setIsOpen(!isOpen);
 };

  const products = [
    {
      image:
        " https://i.ibb.co.com/swNrFb9/3095df99e905b164718348af952a0f64.png",
      title: "Polo with Contrast Trims",
      rating: 4.0,
      price: "$212",
      original_price: "$242",
      discount: "-20%",
    },
    {
      image:
        "https://i.ibb.co.com/MBYLt2y/b094f9a20c2328f54a31b153619784f3.png",
      title: "Gradient Graphic T-shirt",
      rating: 3.5,
      price: "$145",
      original_price: null,
      discount: null,
    },
    {
      image:
        "https://i.ibb.co.com/p1hPRh4/485b30fd30b3226e09bb8f8e494c260b.png",
      title: "Polo with Tipping Details",
      rating: 4.5,
      price: "$180",
      original_price: null,
      discount: null,
    },
    {
      image:
        "https://i.ibb.co.com/cJbRLgr/12942762aefb7c7ac954e78b76284504.png",
      title: "Black Striped T-shirt",
      rating: 5.0,
      price: "$120",
      original_price: "$150",
      discount: "-30%",
    },
    {
      image:
        " https://i.ibb.co.com/swNrFb9/3095df99e905b164718348af952a0f64.png",
      title: "Polo with Contrast Trims",
      rating: 4.0,
      price: "$212",
      original_price: "$242",
      discount: "-20%",
    },
    {
      image:
        "https://i.ibb.co.com/MBYLt2y/b094f9a20c2328f54a31b153619784f3.png",
      title: "Gradient Graphic T-shirt",
      rating: 3.5,
      price: "$145",
      original_price: null,
      discount: null,
    },
    {
      image:
        "https://i.ibb.co.com/p1hPRh4/485b30fd30b3226e09bb8f8e494c260b.png",
      title: "Polo with Tipping Details",
      rating: 4.5,
      price: "$180",
      original_price: null,
      discount: null,
    },
    {
      image:
        "https://i.ibb.co.com/cJbRLgr/12942762aefb7c7ac954e78b76284504.png",
      title: "Black Striped T-shirt",
      rating: 5.0,
      price: "$120",
      original_price: "$150",
      discount: "-30%",
    },
  ];

  return (
    <div className="mt-28 container mx-auto">
      {/* responsive */}
      <div
        className={`${
          isOpen && isOpen ? "block md:hidden" : "hidden"
        } absolute z-50 top-80 left-0 w-full h-full flex justify-center items-center transition-opacity duration-300 ease-in-out`}
      >
        <div className="p-10 bg-orange-50 rounded-xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'scale-100' : 'scale-95'}">
          {/* filtering */}
          <section>
            <div className="flex items-center justify-between flex-wrap mb-5 text-2xl font-bold">
              <h2>Filters</h2>
              <button
                onClick={toggleFilter}
                className="hover:text-red-500 hover:bg-base-200 p-2 rounded-badge"
              >
                <RxCross1 />
              </button>
            </div>
            <hr className="mb-5" />
            <div className="text-gray-500 text-lg">
              <p className="flex items-center justify-between mb-2 hover:text-orange-500 duration-200">
                T-shirts <IoIosArrowForward />
              </p>
              <p className="flex items-center justify-between mb-2 hover:text-orange-500 duration-200">
                Shorts <IoIosArrowForward />
              </p>
              <p className="flex items-center justify-between mb-2 hover:text-orange-500 duration-200">
                Shirts <IoIosArrowForward />
              </p>
              <p className="flex items-center justify-between mb-2 hover:text-orange-500 duration-200">
                Hoodie <IoIosArrowForward />
              </p>
              <p className="flex items-center justify-between mb-5 hover:text-orange-500 duration-200">
                Jeans <IoIosArrowForward />
              </p>
            </div>
            <hr className="mb-5" />
          </section>
          {/* price */}
          <section>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-2xl font-bold">Price</h2>
              <IoIosArrowUp />
            </div>
            <div className="max-w-md mx-auto my-5">
              <div className="flex items-center space-x-4">
                {/* Minimum Price Input */}
                <input
                  type="number"
                  placeholder="Min"
                  className="input input-bordered w-full"
                />{" "}
                <span>-</span>
                {/* Maximum Price Input */}
                <input
                  type="number"
                  placeholder="Max"
                  className="input input-bordered w-full"
                />{" "}
                <span>=</span>
                {/* Submit Button */}
                <button className="btn btn-primary">Send</button>
              </div>
            </div>
            <hr className="mb-5" />
          </section>
          {/* color */}
          <section className="mb-5">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-2xl font-bold">Colors</h2>
              <IoIosArrowUp />
            </div>
            <div className="flex flex-wrap gap-3">
              <input
                type="checkbox"
                className="checkbox checkbox-lg bg-primary checkbox-primary rounded-full"
              />
              <input
                type="checkbox"
                className="checkbox checkbox-lg bg-secondary checkbox-secondary rounded-full"
              />
              <input
                type="checkbox"
                className="checkbox checkbox-lg bg-accent checkbox-accent rounded-full"
              />
              <input
                type="checkbox"
                className="checkbox checkbox-lg bg-success checkbox-success rounded-full"
              />
              <input
                type="checkbox"
                className="checkbox checkbox-lg bg-warning checkbox-warning rounded-full"
              />
              <input
                type="checkbox"
                className="checkbox checkbox-lg bg-error checkbox-error rounded-full"
              />
              <input
                type="checkbox"
                className="checkbox checkbox-lg bg-info checkbox-info rounded-full"
              />
              <input
                type="checkbox"
                className="checkbox checkbox-lg bg-white checkbox-base-300 rounded-full"
              />
              <input
                type="checkbox"
                className="checkbox checkbox-lg bg-indigo-500 rounded-full"
              />
              <input
                type="checkbox"
                className="checkbox checkbox-lg bg-rose-500 rounded-full"
              />
            </div>
          </section>
          <hr className="mb-5" />
          {/* size */}
          <section className="mb-5">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-2xl font-bold">Size</h2>
              <IoIosArrowUp />
            </div>
            <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`w-full p-2 border rounded-md 
            ${
              activeSize === size
                ? "bg-black text-white"
                : "bg-white text-gray-800"
            }
            hover:bg-gray-200`}
                  onClick={() => handleSizeClick(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </section>
          <hr className="mb-5" />
          {/* dress Style */}
          <section>
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-2xl font-bold">Dress Style</h2>
              <IoIosArrowUp />
            </div>
            <hr className="mb-5" />
            <div className="text-gray-500 text-lg">
              <p className="flex items-center justify-between mb-2 hover:text-orange-500 duration-200">
                Casual <IoIosArrowForward />
              </p>
              <p className="flex items-center justify-between mb-2 hover:text-orange-500 duration-200">
                Formal <IoIosArrowForward />
              </p>
              <p className="flex items-center justify-between mb-2 hover:text-orange-500 duration-200">
                Party <IoIosArrowForward />
              </p>
              <p className="flex items-center justify-between mb-2 hover:text-orange-500 duration-200">
                Gym <IoIosArrowForward />
              </p>
              <p className="flex items-center justify-between mb-5 hover:text-orange-500 duration-200">
                Jeans <IoIosArrowForward />
              </p>
            </div>
          </section>
          <button
            className="btn w-full hover:bg-black hover:text-white font-semibold duration-200"
            onClick={toggleFilter}
          >
            Apply Filter
          </button>
        </div>
      </div>
      <div className="flex lg:flex-row md:flex-row flex-col">
        {/* left side */}
        <div className="w-1/3 hidden md:block lg:block">
          <div className="p-5 m-5 border rounded-xl sticky top-20">
            {/* filtering */}
            <section>
              <div className="flex items-center justify-between flex-wrap mb-5 text-2xl font-bold">
                <h2 className="">Filters</h2>
                <FiSliders
                  title="Only for small device available!!"
                  className="hover:cursor-not-allowed"
                />
              </div>
              <hr className="mb-5" />

              <div className="text-gray-500 text-lg">
                <p className="flex items-center justify-between mb-2 hover:text-orange-500 duration-200">
                  T-shirts <IoIosArrowForward />
                </p>
                <p className="flex items-center justify-between mb-2 hover:text-orange-500 duration-200">
                  Shorts <IoIosArrowForward />
                </p>
                <p className="flex items-center justify-between mb-2 hover:text-orange-500 duration-200">
                  Shirts <IoIosArrowForward />
                </p>
                <p className="flex items-center justify-between mb-2 hover:text-orange-500 duration-200">
                  Hoodie <IoIosArrowForward />
                </p>
                <p className="flex items-center justify-between mb-5 hover:text-orange-500 duration-200">
                  Jeans <IoIosArrowForward />
                </p>
              </div>
              <hr className="mb-5" />
            </section>

            {/* price */}
            <section>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-2xl font-bold">Price</h2>
                <IoIosArrowUp />
              </div>
              <div className="mb-5">
                <div className="flex items-center gap-3">
                  {/* Minimum Price Input */}
                  <input
                    type="number"
                    placeholder="Min"
                    className="input input-bordered w-full"
                  />
                  {/* Maximum Price Input */}
                  <input
                    type="number"
                    placeholder="Max"
                    className="input input-bordered w-full"
                  />
                  {/* Submit Button */}
                  <button className="btn btn-primary">Send</button>
                </div>
              </div>
              <hr className="mb-5" />
            </section>

            {/* color */}
            <section className="mb-5">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-2xl font-bold">Colors</h2>
                <IoIosArrowUp />
              </div>
              <div class="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-3 ">
                <input
                  type="checkbox"
                  class="checkbox checkbox-lg bg-primary checkbox-primary rounded-full"
                />
                <input
                  type="checkbox"
                  class="checkbox checkbox-lg bg-secondary checkbox-secondary rounded-full"
                />
                <input
                  type="checkbox"
                  class="checkbox checkbox-lg bg-accent checkbox-accent rounded-full"
                />
                <input
                  type="checkbox"
                  class="checkbox checkbox-lg bg-success checkbox-success rounded-full"
                />
                <input
                  type="checkbox"
                  class="checkbox checkbox-lg bg-warning checkbox-warning rounded-full"
                />
                <input
                  type="checkbox"
                  class="checkbox checkbox-lg bg-error checkbox-error rounded-full"
                />
                <input
                  type="checkbox"
                  class="checkbox checkbox-lg bg-info checkbox-info rounded-full"
                />
                <input
                  type="checkbox"
                  class="checkbox checkbox-lg bg-white checkbox-base-300 rounded-full"
                />
                <input
                  type="checkbox"
                  class="checkbox checkbox-lg bg-indigo-500 rounded-full"
                />
                <input
                  type="checkbox"
                  class="checkbox checkbox-lg bg-rose-500 rounded-full"
                />
              </div>
            </section>
            <hr className="mb-5" />

            {/* size */}
            <section className="mb-5">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-2xl font-bold">Size</h2>
                <IoIosArrowUp />
              </div>
              <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`w-full p-2 border rounded-md 
            ${
              activeSize === size
                ? "bg-black text-white"
                : "bg-white text-gray-800"
            }
            hover:bg-gray-200`}
                    onClick={() => handleSizeClick(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </section>
            <hr className="mb-5" />

            {/* dress Style */}
            <section>
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-2xl font-bold">Dress Style</h2>
                <IoIosArrowUp />
              </div>
              <hr className="mb-5" />

              <div className="text-gray-500 text-lg">
                <p className="flex items-center justify-between mb-2 hover:text-orange-500 duration-200">
                  Casual <IoIosArrowForward />
                </p>
                <p className="flex items-center justify-between mb-2 hover:text-orange-500 duration-200">
                  Formal <IoIosArrowForward />
                </p>
                <p className="flex items-center justify-between mb-2 hover:text-orange-500 duration-200">
                  Party <IoIosArrowForward />
                </p>
                <p className="flex items-center justify-between mb-2 hover:text-orange-500 duration-200">
                  Gym <IoIosArrowForward />
                </p>
                <p className="flex items-center justify-between mb-5 hover:text-orange-500 duration-200">
                  Jeans <IoIosArrowForward />
                </p>
              </div>
            </section>
            <button className="btn w-full hover:bg-black hover:text-white font-semibold duration-200">
              Apply Filter
            </button>
          </div>
        </div>
        {/* right side */}
        <div className="w-full">
          <div className="flex items-center justify-between my-5">
            <h2 className="text-3xl font-bold lg:p-0 ps-5">Casual</h2>
            <div className="flex gap-3">
              <p className="text-gray-500">Showing 1-10 of 100 Products</p>
              <span className="flex items-center">
                <p className="lg:block md:hidden hidden">
                  Short By: <strong className="text-black">Most Popular</strong>
                </p>
                <IoIosArrowDown className="text-lg mt-1 ms-1 lg:block md:hidden hidden" />
                <button
                  onClick={() => setIsOpen(true)}
                  className="hover:text-orange-500 text-2xl px-3 lg:hidden md:hidden block"
                >
                  <FiSliders />
                </button>
              </span>
            </div>
          </div>
          {/* Product Container */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
            {products.map((item, index) => (
              <div
                key={index}
                className="rounded-lg p-4 flex flex-col items-center hover:shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-60 h-60 rounded-2xl object-cover mb-4"
                />
                <h2 className="text-xl font-semibold text-center">
                  {item.title}
                </h2>
                <div className="flex items-center mt-2">
                  <span className="text-base ml-2 text-gray-500">
                    <Rating
                      style={{ maxWidth: 150 }}
                      value={item.rating}
                      onChange={setRating}
                    />
                  </span>
                  /5
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xl font-bold text-black">
                    {item.price}
                  </span>
                  {item.original_price && (
                    <span className="text-sm line-through text-gray-500">
                      {item.original_price}
                    </span>
                  )}
                  {item.discount && (
                    <span className="text-sm text-red-500">
                      {item.discount}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
