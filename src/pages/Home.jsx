import React from 'react';
import LeftNav from './LeftNav';
import RightNav from './RightNav';

const Home = () => {
    return (
        <div className='mt-14 mb-14'>
            <div className='grid grid-cols-12 text-center'>
                <div className='col-span-2'>
                    <LeftNav></LeftNav>
                </div>
                <div className='col-span-8'>
                    <h1>Main</h1>
                </div>
                <div className='col-span-2'>
                    <RightNav></RightNav>
                </div>
            </div>
        </div>
    );
};

export default Home;