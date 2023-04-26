import moment from 'moment';
import React from 'react';
import Marquee from 'react-fast-marquee';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import logo2 from '../assets/the-new-york-times-logo.svg'


const Header = () => {
    return (
        <div>
            <div className='text-center space-y-4 my-5'>
                <img src={logo2} className='mx-auto w-[480px] opacity-80' />
                <p className='text-secondary'>Journalism Without Fear or Favour</p>
                <p className='text-primary'>{moment().format("dddd, MMMM Do, YYYY")}</p>
            </div>
            <div className='flex bg-neutral py-4 ps-4 pe-24 gap-4 rounded-md'>
                <button className='btn btn-error btn-sm px-4 pt-3 pb-6'>Latest</button>
                <Marquee className='font-semibold text-lg text-accent' pauseOnHover speed={80} gradient={true} gradientColor={[30, 40, 46]}>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as.....
                    Match Highlights: Germany vs Spain — as it happened   !
                </Marquee>
            </div>
            <nav>
                <nav className="navbar bg-base shadow-md rounded-md my-5 px-3">
                    <div className="container mx-auto ">

                        <ul className="navbar-nav flex mx-auto">
                            <li className="nav-item">
                                <NavLink to="/home" className="nav-link text-secondary mx-4 hover:text-indigo-500">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link text-secondary mx-4 hover:text-indigo-500">
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/career" className="nav-link text-secondary mx-4 hover:text-indigo-500">
                                    Career
                                </NavLink>
                            </li>
                        </ul>
                        <div className=' flex items-center rounded-md'>
                            <p className='text-secondary mx-4'>Profile</p>
                            <button className="btn  btn-info ">
                                Login
                            </button>
                        </div>
                    </div>
                </nav>
            </nav>
        </div>
    );
};

export default Header;