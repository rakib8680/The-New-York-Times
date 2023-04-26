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
            <h1 className=''>All Category</h1>
            <div className='text-left'>
                {categories.map(category => (
                    <div key={category.id}>
                        <Link className='link link-secondary' >{category.name}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LeftNav;