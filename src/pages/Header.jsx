import moment from 'moment';
import React from 'react';
import logo from '../assets/logo.png'
const Header = () => {
    return (
        <div>
            <div className='text-center space-y-4 my-5'>
                <img src={logo} className='mx-auto' />
                <p className='text-secondary'>Journalism Without Fear or Favour</p>
                <p className='text-warning'>{moment().format("dddd, MMMM Do, YYYY")}</p>
            </div>
            <div>
                <button className='btn btn-error btn-sm px-4 pt-3 pb-6'>Latest</button>
            </div>
        </div>
    );
};

export default Header;