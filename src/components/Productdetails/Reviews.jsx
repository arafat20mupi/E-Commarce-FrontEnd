import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const reviewsData = [
  {
    review_id: "1",
    user: {
      name: "John Doe",
      avatar: "https://i.ibb.co/MBYLt2y/b094f9a20c2328f54a31b153619784f3.png"
    },
    rating: 4.5,
    review: "The product quality is amazing, and delivery was super fast. Highly recommended!",
    timestamp: "2025-01-15T14:35:00Z",
    replies: []
  },
  {
    review_id: "2",
    user: {
      name: "Jane Smith",
      avatar: "https://i.ibb.co/swNrFb9/3095df99e905b164718348af952a0f64.png"
    },
    rating: 3.0,
    review: "The product is good but could be better in terms of durability.",
    timestamp: "2025-01-14T10:20:00Z",
    replies: [
      {
        reply_id: "201",
        owner: {
          name: "Store Owner",
          avatar: "https://i.ibb.co/cJbRLgr/12942762aefb7c7ac954e78b76284504.png"
        },
        reply: "Thank you for your feedback! We’ll work on improving durability.",
        timestamp: "2025-01-14T11:00:00Z"
      }
    ]
  }
];

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<span key={i} className="text-yellow-400">&#9733;</span>);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(<span key={i} className="text-yellow-400">&#9734;</span>);
    } else {
      stars.push(<span key={i} className="text-gray-300">&#9734;</span>);
    }
  }
  return stars;
};

const Reviews = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="w-full">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        {/* Tabs */}
        <div className="flex justify-around w-full space-x-8">
          <button className="text-gray-500 hover:text-black"></button>
          <button className="text-black font-semibold border-b-2 border-black">

          </button>
          <button className="text-gray-500 hover:text-black"></button>
        </div>

      </div>
      <Tabs>
        <TabList className="flex justify-around border-b-2">
          {["Product Details", "Rating & Reviews", "FAQs"].map((tab, index) => (
            <Tab
              key={index}
              className={`cursor-pointer px-4 py-2 ${activeTab === index ? "border-b-2 p-8 border-black font-bold" : ""
                }`}
              onClick={() => handleTabClick(index)}
            >
              {tab}
            </Tab>
          ))}
        </TabList>
        <div className='flex justify-end'>
          <div>
            <div className="dropdown dropdown-bottom">
              <div tabIndex={0} role="button" className="btn m-1"><AiOutlineMenuUnfold /></div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
              </ul>
            </div>
          </div>
          <div>
            <div className="dropdown dropdown-bottom">
              <div tabIndex={0} role="button" className="btn m-1">Latest <FaAngleDown /></div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-32 p-2 shadow">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
              </ul>
            </div>
          </div>
          <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn mt-1" onClick={() => document.getElementById('my_modal_5').showModal()}>Write a Review</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Press ESC key or click the button below to close</p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl font-semibold mb-4">Customer Ratings and Reviews</h2>
          <div>
            {reviewsData.map((review) => (
              <div key={review.review_id} className="border-b py-4">
                <div className="flex items-center gap-4">
                  <img src={review.user.avatar} alt={review.user.name} className="w-12 h-12 rounded-full" />
                  <div>
                    <div className="font-semibold">{review.user.name}</div>
                    <div className="flex items-center gap-2">
                      {renderStars(review.rating)}
                      <span className="text-sm text-gray-500">({review.rating}/5)</span>
                    </div>
                    <div className="mt-2 text-gray-700">{review.review}</div>
                  </div>
                </div>
                {review.replies.length > 0 && (
                  <div className="mt-4 pl-12">
                    {review.replies.map((reply) => (
                      <div key={reply.reply_id} className="flex items-center gap-4">
                        <img src={reply.owner.avatar} alt={reply.owner.name} className="w-10 h-10 rounded-full" />
                        <div>
                          <div className="font-semibold">{reply.owner.name}</div>
                          <div className="mt-2 text-gray-700">{reply.reply}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Reviews;
