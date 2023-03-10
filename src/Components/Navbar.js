import React from 'react';
import './Navbar.css';
import { FaUtensils } from 'react-icons/fa';

function Navbar() {
  return (
   <nav className="navbar">
    <div className='userProfile'>
    <div className='navbar__profile-pic'></div>
    <h3 className="navbar__profile-name">John Doe</h3>
    </div>
    <div className='navbar__logo'>
      <div className='navbar__logoin'>
        FWSM</div>
        <FaUtensils className="navbar__logo-icon" />
      
      </div>
    </nav>
  )
}

export default Navbar