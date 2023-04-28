import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsights from './EditorsInsights';

const NewsDetails = () => {

    const news = useLoaderData()
    const { title, details, image_url, category_id } = news

    return (
        <div>
            <div
                className="overflow-hidden rounded-md p-8 border border-gray-100 bg-white shadow-sm mr-8 text-left"
            >
                <img
                    alt="Office"
                    src={image_url}
                    className="h-full w-auto mx-auto "
                />

                <div className="p-4 sm:p-6">
                    <a href="#">
                        <h3 className="text-3xl font-medium text-gray-900">
                            {title}
                        </h3>
                    </a>

                    <p
                        className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400"
                    >
                        {details}
                    </p>

                    <Link
                        to={`/category/${category_id}`}
                        className="group mt-4 inline-flex items-center gap-1 text-base font-medium text-blue-600"
                    >
                        All News in this category

                        <span
                            aria-hidden="true"
                            className="block transition-all group-hover:ms-0.5 rtl:rotate-180 "
                        >
                            &rarr;
                        </span>
                    </Link>
                </div>
            </div>
            <EditorsInsights></EditorsInsights>
        </div>

    );
};

export default NewsDetails;