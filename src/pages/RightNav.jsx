import React from 'react';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzone from './Qzone';
import bg from '../assets/bg.png'

const RightNav = () => {
    return (
        <div className='space-y-10'>
            <div>
                <h1 className='text-left text-xl font-bold mb-5 text-secondary'>Login With</h1>
                <button className='btn btn-sm btn-outline btn-primary mb-2 rounded-lg w-full'><FaGoogle className='text-xl mr-2' /> Login with google</button> <br />
                <button className='btn btn-sm btn-outline btn-secondary rounded-lg w-full'><FaGithub className='text-xl mr-2' /> Login with github</button>
            </div>
            <div>
                <h1 className='text-left text-xl font-bold mb-5 text-secondary'>Find Us On</h1>
                <div className="btn-group btn-group-vertical rounded-lg w-full ">
                    <button className="btn btn-outline btn-primary "><FaFacebook className='text-xl mr-2' /> Facebook</button>
                    <button className="btn btn-outline btn-info"><FaTwitter className='text-xl mr-2' />  Twitter</button>
                    <button className="btn btn-outline btn-error" ><FaInstagram className='text-xl mr-2' />  Instagram</button>
                </div>
            </div>
            <Qzone></Qzone>
            <div className='relative'>
                <div>
                    <img src={bg} className="rounded-xl" />
                </div>  
                <div className='absolute top-16 text-slate-100 p-4 space-y-7'>
                    <h1 className='text-3xl font-black leading-relaxed'>Create an Amazing Newspaper</h1>
                    <p className='text-slate-200'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <button className='btn btn-info text-white hover:btn-primary'>Learn More</button>
                </div>
            </div>
        </div >
    );
};

export default RightNav;