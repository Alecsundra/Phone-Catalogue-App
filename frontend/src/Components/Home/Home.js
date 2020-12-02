import React, 
  { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import PhoneList from '../PhoneList/PhoneList';

const Home = () => {

  return (
    <div>
        <Navbar />
        <PhoneList />
    </div>

  );
}

export default Home;