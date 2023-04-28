import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../assets/1.png'
import image2 from '../assets/2.png'
import image3 from '../assets/3.png'




const LeftNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(categories => setCategories(categories))
            .catch(err => console.error(err))
    }, [])




    return (
        <div className=''>
            <h1 className=' md:text-left text-2xl font-bold mb-7 text-secondary '>All Category</h1>
            <div className='md:text-left bg-slate-100 px-3 py-5 rounded-lg gap-7'>
                {categories.map(category => (
                    <div key={category.id} className="mb-5 text-lg bg-secondary bg-opacity-10 px-4 py-1 rounded-md ">
                        <Link to={`/category/${category.id}`} className=' link-secondary' >{category.name}</Link>
                    </div>
                ))}
            </div>
            <div className="text-left mt-10 ">
                <h1 className='text-left mb-5 text-2xl font-bold text-secondary'>Editors Insights</h1>
                <div className="flex flex-wrap justify-start">
                    <div className="max-w-xs rounded overflow-hidden shadow-sm m-2">
                        <img className="w-full" src={image1} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">21 The Most Stylish Wedding Guest Dresses For Spring</div>
                            <p className="text-gray-700 text-base">April 28, 2023</p>
                        </div>
                    </div>
                    <div className="max-w-xs rounded overflow-hidden shadow-sm m-2">
                        <img className="w-full" src={image2} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">21 The Most Stylish Wedding Guest Dresses For Spring</div>
                            <p className="text-gray-700 text-base">April 27, 2023</p>
                        </div>
                    </div>
                    <div className="max-w-xs rounded overflow-hidden shadow-sm m-2">
                        <img className="w-full" src={image3} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">21 The Most Stylish Wedding Guest Dresses For Spring</div>
                            <p className="text-gray-700 text-base">April 26, 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftNav;