import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from './NewsCard';

const Category = () => {

    const { id } = useParams()

    const category = useLoaderData()

    return (
        <div>
            This is category {category.length}
            {
                category.map((item) => <NewsCard item={item} key={item._id}></NewsCard>)
            }
        </div>
    );
};

export default Category;