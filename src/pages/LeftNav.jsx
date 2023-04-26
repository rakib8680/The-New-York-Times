import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(categories => setCategories(categories))
            .catch(err => console.error(err))
    }, [])




    return (
        <div>
            <h1 className='text-left text-2xl font-bold mb-7 text-secondary '>All Category</h1>
            <div className='text-left bg-slate-100 px-3 py-5 rounded-lg gap-7'>
                {categories.map(category => (
                    <div key={category.id} className="mb-5 text-lg bg-secondary bg-opacity-10 px-4 py-1 rounded-md ">
                        <Link to={`/category/${category.id}`} className=' link-secondary' >{category.name}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LeftNav;