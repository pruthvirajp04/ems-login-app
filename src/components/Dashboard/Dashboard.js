import React from "react";
import Navbar from "../Navbar/Navbar";
import SideBar from "../SideBar/SideBar";

const OmrChecking = () => {
  return (
    <>
      <Navbar />
      <div className="mainBox">
        <SideBar />
        <div className="mainOmrBox">
          <h1>Dashboard</h1>
        </div>
      </div>
    </>
  );
};

export default OmrChecking;
