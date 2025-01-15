
const Reviews = () => {
  return (
    <div className="w-full border-b border-gray-300">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        {/* Tabs */}
        <div className="flex space-x-8">
          <button className="text-gray-500 hover:text-black">Product Details</button>
          <button className="text-black font-semibold border-b-2 border-black">
            Rating & Reviews
          </button>
          <button className="text-gray-500 hover:text-black">FAQs</button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          {/* Sort Dropdown */}
          <div className="dropdown dropdown-end">
            <button
              tabIndex={0}
              className="btn btn-outline btn-sm btn-neutral flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16h6m-3-3v3m7 3h6m-3-3v3m-3-6h6m-3-3v3M4 4h16c.553 0 1 .448 1 1v14c0 .552-.447 1-1 1H4c-.553 0-1-.448-1-1V5c0-.552.447-1 1-1z"
                />
              </svg>
              Latest
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-4 h-4 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 9l6 6 6-6"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-white rounded-box w-32"
            >
              <li>
                <a>Latest</a>
              </li>
              <li>
                <a>Oldest</a>
              </li>
              <li>
                <a>Highest Rating</a>
              </li>
              <li>
                <a>Lowest Rating</a>
              </li>
            </ul>
          </div>

          {/* Write a Review Button */}
          <button className="btn btn-primary btn-sm">Write a Review</button>
        </div>
      </div>
    </div>
    // <div className="container mx-auto px-4 py-8">
    //   <h1 className="text-2xl font-bold mb-6">All Reviews (6)</h1>

    //   <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    //     {reviews.map((review, index) => (
    //       <div
    //         key={index}
    //         className="border rounded-lg p-4 shadow-md bg-white"
    //       >
    //         <div className="flex items-center justify-between mb-2">
    //           <h2 className="text-lg font-semibold">{review.name}</h2>
    //           <div className="flex">
    //             {Array.from({ length: review.rating }, (_, i) => (
    //               <svg
    //                 key={i}
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 fill="currentColor"
    //                 className="w-5 h-5 text-yellow-500"
    //                 viewBox="0 0 24 24"
    //               >
    //                 <path d="M12 .587l3.668 7.568L24 9.423l-6 5.92 1.417 8.327L12 18.897l-7.417 4.773L6 15.343l-6-5.92 8.332-1.268z" />
    //               </svg>
    //             ))}
    //           </div>
    //         </div>
    //         <p className="text-sm text-gray-600 mb-2">Posted on {review.date}</p>
    //         <p className="text-gray-800">{review.review}</p>
    //       </div>
    //     ))}
    //   </div>

    //   <div className="mt-8 flex justify-center">
    //     <button className="btn btn-outline btn-primary">Load More Reviews</button>
    //   </div>
    // </div>
  );
};

export default Reviews;
