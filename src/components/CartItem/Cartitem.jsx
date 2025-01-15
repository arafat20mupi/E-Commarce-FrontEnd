const CartItem = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      description: "High-quality sound with noise cancellation.",
      image: "/images/pants1.jpg",
    },
    {
      id: 2,
      name: "Smartwatch",
      description: "Track your fitness and stay connected.",
      image: "/images/shirt3.jpg",
    },
    {
      id: 3,
      name: "Gaming Mouse",
      description: "Precision and comfort for gamers.",
      image: "/images/shirt2.jpg",
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      description: "Crisp sound with deep bass.",
      image: "/images/shirt1.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-2">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white shadow-md rounded-lg overflow-hidden max-w-lg mx-auto"
          style={{ height: "350px", width: "300px" }}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-2/5 object-cover"
          />

          <div className="p-4 flex flex-col justify-between h-3/5">
            <div>
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600 mt-2 text-sm">
                {product.description}
              </p>
            </div>

            <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
