import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './pages/Footer';
import Header from './pages/Header';
import LeftNav from './pages/LeftNav';
import RightNav from './pages/RightNav';

const App = () => {
  return (
    <div className=' container mx-auto my-20'>
      <Header></Header>
      <div className='mt-14 mb-14'>
        <div className='grid md:grid-cols-12 text-center p-4 md:p-0'>
          <div className='md:col-span-2 '>
            <LeftNav></LeftNav>
          </div>
          <div className='md:col-span-8'>
            <Outlet></Outlet>
          </div>
          <div className='md:col-span-2'>
            <RightNav></RightNav>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;