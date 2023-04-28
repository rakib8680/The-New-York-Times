import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from './NewsCard';

const Category = () => {

    const { id } = useParams()

    const category = useLoaderData()

    return (
        <div>
            {id && <h1 className='mb-6 text-sm text-slate-400 font-medium'>This category has  {category.length} items</h1>}
            {
                category.map((item) => <NewsCard item={item} key={item._id}></NewsCard>)
            }
        </div>
    );
};

export default Category;