import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReviewCard from './ReviewCard';
import Faqs from './Faqs';


const Reviews = ({products}) => {
  const {productDetails,reviews,faqs }=products
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
        {/* Product Details Tab */}
        <TabPanel>
          <div className="p-4">
            <ul className="list-disc list-inside space-y-2">
              {productDetails.map((detail, index) => (
                <li key={index} className="text-gray-700">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </TabPanel>

        <TabPanel>
          <div>
            <ReviewCard  product_name={products.productName} reviews={reviews}></ReviewCard>
          </div>
        </TabPanel>
        <TabPanel>
          <Faqs faqs={faqs}></Faqs>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Reviews;
