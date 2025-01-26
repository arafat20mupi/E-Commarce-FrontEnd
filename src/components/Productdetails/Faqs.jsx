import React from 'react';

const Faqs = ({ faqs }) => {
    return (
        <div>
            <h2 className="text-2xl text-center my-10 font-bold mb-4">Frequently Asked Questions</h2>
            <div className="my-8 p-4  rounded-lg shadow-md">
                <div>
                    {faqs.map((faq, index) => (
                        <div key={index}>
                            <div className="collapse collapse-arrow bg-base-200 border-b-2">
                                <input type="radio" name="my-accordion-2" defaultChecked />
                                <div className="collapse-title text-xl font-medium"><h3 className="text-lg font-semibold">{faq.question}</h3></div>
                                <div className="collapse-content">
                                    <p className="text-gray-600 mt-2">{faq.answer}</p>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>

    );
};

export default Faqs;