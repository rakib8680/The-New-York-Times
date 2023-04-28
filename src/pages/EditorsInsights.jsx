import React from 'react';
import image1 from '../assets/1.png'
import image2 from '../assets/2.png'
import image3 from '../assets/3.png'



const EditorsInsights = () => {
    return (
        <div className="text-left mt-10 ">
            <h1 className='text-left mb-5 text-2xl font-bold text-secondary'>Editors Insights</h1>
            <div className="flex flex-wrap justify-start">
                <div className="max-w-xs rounded overflow-hidden shadow-lg m-2">
                    <img className="w-full" src={image1} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">21 The Most Stylish Wedding Guest Dresses For Spring</div>
                        <p className="text-gray-700 text-base">April 28, 2023</p>
                    </div>
                </div>
                <div className="max-w-xs rounded overflow-hidden shadow-lg m-2">
                    <img className="w-full" src={image2}/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">21 The Most Stylish Wedding Guest Dresses For Spring</div>
                        <p className="text-gray-700 text-base">April 27, 2023</p>
                    </div>
                </div>
                <div className="max-w-xs rounded overflow-hidden shadow-lg m-2">
                    <img className="w-full" src={image3} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">21 The Most Stylish Wedding Guest Dresses For Spring</div>
                        <p className="text-gray-700 text-base">April 26, 2023</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditorsInsights;