import { Rating } from '@smastrom/react-rating';
import { FaHeart, FaShoppingCart } from "react-icons/fa";

import '@smastrom/react-rating/style.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { name, description, price, image, category, size, rating, stock } = product;
  return (
   <Link to='/product-details'>
    <div className="p-5 border rounded-2xl hover:shadow-md duration-200 bg-gary-50">
      <span className='flex justify-end mb-2 text-gray-200 hover:text-orange-500 duration-200'>
        <FaHeart />
      </span>
      <img className='mb-2'  src={image} alt={name} />
      <div>
              <Rating
                  style={{ maxWidth: 100 }}
                  value={rating}
                  readOnly
              />
              <h2 title={name} className="text-lg font-bold py-2">{ name.substring(0,12)}</h2>
              <p className="text-gray-500 text-sm">{description.substring(0,40)}...</p>
          </div>
          <div className='flex justify-between items-center mt-3 '>
              <h1 className='text-orange-500 font-bold text-xl'>${price}</h1>
              <span className='p-2 bg-orange-400 rounded-lg'>
                  <FaShoppingCart/>
              </span>
          </div>
    </div>
      </Link>
  );
}

export default ProductCard
