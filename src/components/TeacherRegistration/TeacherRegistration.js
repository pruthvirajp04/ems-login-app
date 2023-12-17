import React from "react";
import styled from "styled-components";
import "./TeacherRegistration.css";
import Navbar from "../Navbar/Navbar";
import SideBar from "../SideBar/SideBar";

const DashboardContainer = styled.div`
  display: flex;
`;

const TeacherRegistration = () => {
  return (
    <>
      <Navbar />
      <DashboardContainer>
        <SideBar />
        <div className="mainOmrBox">
          <h1>TeacherRegistration Section</h1>
        </div>
      </DashboardContainer>
    </>
  );
};

export default TeacherRegistration;
