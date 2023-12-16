// src/Dashboard.js
import React from "react";
import styled from "styled-components";
import "./Dashboard.css";
import Navbar from "../Navbar/Navbar";
import SideBar from "../SideBar/SideBar";
const DashboardContainer = styled.div`
  display: flex;
  height: 100vh;
`;


const MainContent = styled.div`
  flex: 1;
  padding: 20px;
`;
//  <h2 className="homeIconBox">
//    <FontAwesome className="homeIcon" name="home" size="1x" />
//    <Link to="/dashboard" className="linkIcon">
//      <span>Dashboard </span>
//    </Link>
//  </h2>;
const Dashboard = () => {
  return (
    <>
      <Navbar />
      <DashboardContainer>
      <SideBar />
        <MainContent>
          <h1>Welcome to the Dashboard</h1>
        </MainContent>
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
