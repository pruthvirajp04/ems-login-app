import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // You can create a separate CSS file for styling
import logo from './logocca.png'
import Button from "react-bootstrap/Button";
const Navbar = () => {


  return (
    <>
      <nav className="navbar">
        <div className="navContainer">
          <img className="logoImg navChild" src={logo} alt="" />
          {/* <h3 className="navChild">Coding Circle Academy</h3> */}
        </div>
        <div className="logoutContainer">
          <Link to="/">
            <Button variant="secondary">LogOut</Button>{" "}
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
