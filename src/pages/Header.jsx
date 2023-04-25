import moment from 'moment';
import React from 'react';
import Marquee from 'react-fast-marquee';
import logo from '../assets/logo.png'
const Header = () => {
    return (
        <div>
            <div className='text-center space-y-4 my-5'>
                <img src={logo} className='mx-auto' />
                <p className='text-secondary'>Journalism Without Fear or Favour</p>
                <p className='text-warning'>{moment().format("dddd, MMMM Do, YYYY")}</p>
            </div>
            <div className='flex bg-neutral py-4 ps-4 pe-24 gap-4 '>
                <button className='btn btn-error btn-sm px-4 pt-3 pb-6'>Latest</button>
                <Marquee className='font-semibold text-lg text-accent' pauseOnHover speed={80} gradient={true} gradientColor={[30, 40, 46]}>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as.....
                    Match Highlights: Germany vs Spain — as it happened   !
                </Marquee>
            </div>
        </div>
    );
};

export default Header;