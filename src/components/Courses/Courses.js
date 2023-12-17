import React from "react";
import "./Courses.css";
import Navbar from "../Navbar/Navbar";
import SideBar from "../SideBar/SideBar";

const Courses = () => {
  return (
    <>
      <Navbar />
      <div className="mainBox">
        <SideBar />
        <div className="mainOmrBox">
          <h1>Courses</h1>
          
        </div>
      </div>
    </>
  );
};

export default Courses;
