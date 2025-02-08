import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdArrowUp } from "react-icons/io";


const ProductCard = ({ item }) => {
  const { productImages, productName, productDescription, productPrice , remainingProducts , sales} = item;
  console.log(item);
  return (
    <div className="bg-white p-5 rounded-xl hover:shadow-lg transform transition duration-300">
      <div className="flex justify-between">
        <div className="flex gap-3">
          <img className="w-24 h-24 rounded-md" src={productImages[0]} alt={productName} />
          <div>
            <p className="font-semibold">{productName}</p>
            <p className="text-lg font-bold">$ {productPrice}</p>
          </div>
        </div>
        <span className="p-2 h-8 rounded-full hover:bg-base-200 transition duration-200">
          <BsThreeDotsVertical />
        </span>
      </div>
      <p className="text-gray-500 py-3">  {productDescription.length > 150 ? productDescription.slice(0, 150) + '...' : productDescription}</p>
      <div className="border rounded-lg text-sm font-semibold text-gray-500 px-3 py-4">
        <div className="flex justify-between items-center">
          <p>Sales</p>
          <div className="flex items-center gap-3">
            <IoMdArrowUp className="text-orange-500" />
            <p>{sales}</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p>Remaining Products</p>
          <div className="flex items-center gap-3">
            <progress
              className="progress progress-warning w-16"
              value={sales}
              max={remainingProducts}
            ></progress>
            <p>{remainingProducts}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
