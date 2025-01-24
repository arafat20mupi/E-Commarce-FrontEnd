import { FaCheckCircle, FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonail.css";
import { useRef } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const Testimonial = () => {
  const sliderRef = useRef(null); // Ref for the slider

  const reviews = [
    {
      name: "Emma R.",
      rating: 5,
      review:
        "Shopping here has been a game-changer for me! The variety of gadgets is amazing, and the quality is always top-notch. Every purchase feels worth it, and their customer service is impeccable!",
    },
    {
      name: "Liam T.",
      rating: 5,
      review:
        "I’ve tried many online stores, but this one truly stands out. The sleek design of the products and their functionality have exceeded my expectations. Highly recommended!",
    },
    {
      name: "Sophia W.",
      rating: 5,
      review:
        "From headphones to smartwatches, every item I’ve bought from here has been a delight. The attention to detail and value for money are unmatched!",
    },
    {
      name: "Noah P.",
      rating: 5,
      review:
        "I love how they stay ahead of the trends! I recently purchased a portable speaker, and it’s incredible. The sound quality and battery life are phenomenal. This site never disappoints!",
    },
    {
      name: "Ava C.",
      rating: 5,
      review:
        "Finding reliable gadgets was always a hassle until I found this store. The collection is vast, and the product descriptions are spot on. I’ll definitely be back for more!",
    },
  ];

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false, // Disable default arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10">
      <div className="container mb-20 mx-auto">
        <div className="flex justify-between items-center">
          <h3 className="lg:text-5xl md:text-4xl text-2xl uppercase font-bold md:px-10 lg:px-0 pl-5">OUR HAPPY CUSTOMERS</h3>
        </div>
      </div>

      {/* Manual Navigation Buttons */}
      <div className="relative">
        <button
          className="absolute -top-10 lg:right-72 md:right-44 right-20 transform -translate-y-[50%] bg-gray-800 text-white px-4 py-2 rounded-full z-20"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <MdArrowBackIos />
        </button>
        <button
          className="absolute lg:right-48 md:right-14 right-5 -top-10 transform -translate-y-[50%] bg-gray-800 text-white px-4 py-2 rounded-full z-20"
          onClick={() => sliderRef.current.slickNext()}
        >
          <MdArrowForwardIos />

        </button>
 
        {/* Slider */}
        <Slider ref={sliderRef} {...settings}>
          {reviews.map((review, index) => (
            <div
              key={index}
              className="testimonial-slide p-6 border md:max-w-[530px] md:h-[240px] h-[350px] rounded-xl flex flex-col justify-between"
            >
              {/* Stars */}
              <p
                className="flex gap-1"
                aria-label={`Rating: ${review.rating} stars`}
              >
                {Array(review.rating)
                  .fill()
                  .map((_, i) => (
                    <span key={i} className="text-yellow-500">
                      <FaStar />
                    </span>
                  ))}
              </p>
              {/* Name */}
              <h4 className="text-xl font-bold flex gap-1 items-center mt-4">
                {review.name} <FaCheckCircle className="text-green-600" />
              </h4>
              {/* Review */}
              <p className="mt-2 text-gray-600">{review.review}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>

    
  );
};

export default Testimonial;
