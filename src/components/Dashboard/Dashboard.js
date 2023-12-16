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
