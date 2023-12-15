import React from "react";
import "./Navbar.css"; // You can create a separate CSS file for styling
import logo from './logocca.png'
const Navbar = () => {


  return (
      <>
          <nav className="navbar">
  <div className="navContainer">
          <img className="logoImg navChild" src={logo} alt='' />
          <h3 className='navChild'>Coding Circle Academy</h3>
        </div>
        <div className="logoutContainer">
          <h5 >Logout</h5>
        </div>
</nav>
      </>
  );
};

export default Navbar;
