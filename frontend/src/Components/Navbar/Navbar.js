import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ text }) => {

  return (
   <div className='navbar'> 
      <Link to ='/' className='home-navbar'>
        {text}
      </Link>
   </div>
  );
}

export default Navbar;