import React from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const RightNav = () => {
    return (
        <div>
            <div>
                <h1 className='text-left text-xl font-bold mb-5 text-secondary'>Login With</h1>
                <button className='btn btn-sm btn-outline btn-primary mb-2 rounded-lg w-full'><FaGoogle className='text-xl mr-2' /> Login with google</button> <br />
                <button className='btn btn-sm btn-outline btn-secondary rounded-lg w-full'><FaGithub className='text-xl mr-2' /> Login with github</button>
            </div>
        </div>
    );
};

export default RightNav;