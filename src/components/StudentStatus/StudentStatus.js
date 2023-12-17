import React from "react";
import styled from "styled-components";
import "./StudentStatus.css";
import Navbar from "../Navbar/Navbar";
import SideBar from "../SideBar/SideBar";

const DashboardContainer = styled.div`
  display: flex;
`;

const StudentStatus = () => {
  return (
    <>
      <Navbar />
      <DashboardContainer>
        <SideBar />
        <div className="mainOmrBox">
          <h1>StudentStatus Section</h1>
        </div>
      </DashboardContainer>
    </>
  );
};

export default StudentStatus;
