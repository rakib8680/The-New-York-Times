import React from 'react';
import LeftNav from './LeftNav';
import RightNav from './RightNav';

const Home = () => {
    return (
        <div className=''>
            <div className='grid grid-cols-12 text-center'>
                <div className='col-span-3'>
                    <LeftNav></LeftNav>
                </div>
                <div className='col-span-6'>
                    <h1>Main</h1>
                </div>
                <div className='col-span-3'>
                    <RightNav></RightNav>
                </div>

            </div>
        </div>
    );
};

export default Home;