import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './pages/Footer';
import Header from './pages/Header';

const App = () => {
  return (
    <div className=' container mx-auto'>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;