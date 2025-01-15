import React from 'react';

const Recomand = [
  {
    image: ' https://i.ibb.co.com/swNrFb9/3095df99e905b164718348af952a0f64.png',
    title: 'Polo with Contrast Trims',
    rating: 4.0,
    price: '$212',
    original_price: '$242',
    discount: '-20%',
  },
  {
    image: 'https://i.ibb.co.com/MBYLt2y/b094f9a20c2328f54a31b153619784f3.png',
    title: 'Gradient Graphic T-shirt',
    rating: 3.5,
    price: '$145',
    original_price: null,
    discount: null,
  },
  {
    image: 'https://i.ibb.co.com/p1hPRh4/485b30fd30b3226e09bb8f8e494c260b.png',
    title: 'Polo with Tipping Details',
    rating: 4.5,
    price: '$180',
    original_price: null,
    discount: null,
  },
  {
    image: 'https://i.ibb.co.com/cJbRLgr/12942762aefb7c7ac954e78b76284504.png',
    title: 'Black Striped T-shirt',
    rating: 5.0,
    price: '$120',
    original_price: '$150',
    discount: '-30%',
  },
];

// Helper function to render stars
const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<span key={i} className="text-yellow-400">&#9733;</span>); // Full star
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(<span key={i} className="text-yellow-400">&#9734;</span>); // Half star
    } else {
      stars.push(<span key={i} className="text-gray-300">&#9734;</span>); // Empty star
    }
  }
  return stars;
};

const YouMayLike = () => {
  return (
    <div className="mt-4">
      <h1 className="text-4xl text-center font-bold">You might also like</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {Recomand.map((item, index) => (
          <div
            key={index}
            className=" rounded-lg p-4 flex flex-col items-center transition"
          >
            <img src={item.image} alt={item.title} className="w-60 h-60 rounded-lg object-cover mb-4" />
            <h2 className="text-lg font-semibold text-center">{item.title}</h2>
            <div className="flex items-center mt-2">
              {renderStars(item.rating)}
              <span className="ml-2 text-sm text-gray-500">({item.rating}/5)</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xl font-bold text-black">{item.price}</span>
              {item.original_price && (
                <span className="text-sm line-through text-gray-500">
                  {item.original_price}
                </span>
              )}
              {item.discount && (
                <span className="text-sm text-red-500">{item.discount}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouMayLike;
