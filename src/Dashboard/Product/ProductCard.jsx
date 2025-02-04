import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdArrowUp } from "react-icons/io";


const ProductCard = ({ item }) => {
  const { image, title, description, price } = item;
  return (
    <div className="bg-white p-5 rounded-xl hover:shadow-lg transform transition duration-300">
      <div className="flex justify-between">
        <div className="flex gap-3">
        <img className="w-24 h-24 rounded-md" src={image} alt={title} />
          <div>
            <p className="font-semibold">{title}</p>
            <p className="text-lg font-bold">$ {price}</p>
          </div>
        </div>
        <span className="p-2 h-8 rounded-full hover:bg-base-200 transition duration-200">
          <BsThreeDotsVertical />
        </span>
      </div>
      <p className="text-gray-500 py-3">{description}</p>
      <div className="border rounded-lg text-sm font-semibold text-gray-500 px-3 py-4">
        <div className="flex justify-between items-center">
          <p>Sales</p>
          <div className="flex items-center gap-3">
            <IoMdArrowUp className="text-orange-500" />
            <p>1324</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p>Remaining Products</p>
          <div className="flex items-center gap-3">
            <progress
              className="progress progress-warning w-16"
              value="40"
              max="100"
            ></progress>
            <p>1324</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
