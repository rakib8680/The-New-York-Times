import React from 'react';
import QZone1 from '../assets/qZone1.png'
import QZone2 from '../assets/qZone2.png'
import QZone3 from '../assets/qZone3.png'



const Qzone = () => {
    return (
        <div className='bg-slate-100 py-5 px-4 rounded-lg flex flex-col items-center md:block'>
            <h1 className='text-left text-xl font-bold mb-5 text-secondary'>Q-Zone</h1>
            <img src={QZone1} />
            <img src={QZone2} />
            <img src={QZone3} />
        </div>
    );
};

export default Qzone;