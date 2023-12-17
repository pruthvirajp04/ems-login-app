import React from "react";
import "./StudentAdmission.css";
import Navbar from "../Navbar/Navbar";
import SideBar from "../SideBar/SideBar";


const StudentAdmission = () => {
  return (
    <>
      <Navbar />
      <div className="mainBox">
        <SideBar />
        <div className="mainOmrBox">
          <h1>StudentAdmission Section</h1>
        </div>
      </div>
    </>
  );
};

export default StudentAdmission;
