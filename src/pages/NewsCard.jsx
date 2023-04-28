import React from 'react';
import { Link } from 'react-router-dom';
import { FaBookmark, FaEye, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import moment from 'moment';
import Rating from 'react-rating';

const NewsCard = ({ item }) => {

    const { _id, title, details, image_url, author, total_view, rating } = item

    return (
        <div >
            <div className="flex flex-wrap text-left mb-9 " >
                <div className="overflow-hidden shadow-md  rounded-lg h-90 w-60  md:w-[700px]  m-auto ">
                    <div className='bg-slate-100 flex justify-between items-center'>
                        <div className='flex items-center ps-5 py-3 gap-2'>
                            <img src={author?.img} className="rounded-full w-10 h-10" />
                            <div>
                                <h1 className='text-lg font-semibold'>{author.name}</h1>
                                <p className='text-sm font-medium text-slate-400'>{moment(author.published_date).format('YYYY-MM-D')}</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4 me-7'>
                            <FaBookmark className='fill-slate-400 w-[25px] h-[25px]' />
                            <FaShareAlt className='fill-slate-400 w-[25px] h-[25px]' />
                        </div>
                    </div>
                    <div className="bg-white w-full p-4">
                        <p className="text-secondary text-2xl font-bold pt-2 pb-5">
                            {title}
                        </p>
                        <img src={image_url} className="max-h-full w-full object-cover mb-4" />

                        <p className="text-slate-500 font-normal text-md leading-relaxed">
                            {details.length < 300 ? details : <>{details.slice(0, 300)}..... </>}
                            <Link to={`/news/${_id}`} className='text-info underline hover:text-primary transition duration-300'>Read More</Link>
                        </p>
                        <div className="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium">
                            <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                                #online
                            </span>
                            <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                                #internet
                            </span>
                            <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                                #education
                            </span>
                        </div>
                        <div className="flex justify-between items-center mt-2 ">
                            <div className='flex items-center'>
                                <Rating
                                    readonly
                                    placeholderRating={rating.number}
                                    emptySymbol={<FaRegStar />}
                                    placeholderSymbol={<FaStar />}
                                    fullSymbol={<FaStar />}
                                />
                                <span className="text-base text-slate-500 ms-2">
                                    {rating.number}
                                </span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <FaEye /> {total_view}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;