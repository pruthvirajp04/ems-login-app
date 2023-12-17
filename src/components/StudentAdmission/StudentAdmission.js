import React from "react";
import styled from "styled-components";
import "./StudentAdmission.css";
import Navbar from "../Navbar/Navbar";
import SideBar from "../SideBar/SideBar";

const DashboardContainer = styled.div`
  display: flex;
`;

const StudentAdmission = () => {
  return (
    <>
      <Navbar />
      <DashboardContainer>
        <SideBar />
        <div className="mainOmrBox">
          <h1>StudentAdmission Section</h1>
        </div>
      </DashboardContainer>
    </>
  );
};

export default StudentAdmission;
