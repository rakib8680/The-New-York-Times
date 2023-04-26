import React, { useEffect, useState } from 'react';

const LeftNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(categories => console.log(categories))
        .catch(err => console.error(err))
    }, [])




    return (
        <div>
            Left Nav
        </div>
    );
};

export default LeftNav;