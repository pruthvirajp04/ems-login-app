// src/Dashboard.js
import React from "react";
import "./Dashboard.css";
import Navbar from "../Navbar/Navbar";
import SideBar from "../SideBar/SideBar";


const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="mainBox">
        <SideBar />
        <div className="mainOmrBox">

          <h1>Welcome to the Dashboard</h1>
        </div>
      
      </div>
    </>
  );
};

export default Dashboard;
