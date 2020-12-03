import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ text }) => {

  return (
   <div className='navbars'> 
      <Link to ='/' className='homes-navbar'>
        {text}
      </Link>
   </div>
  );
}

export default Navbar;