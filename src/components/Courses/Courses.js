import React from "react";
import styled from "styled-components";
import "./Courses.css";
import Navbar from "../Navbar/Navbar";
import SideBar from "../SideBar/SideBar";

const DashboardContainer = styled.div`
  display: flex;
`;

const Courses = () => {
  return (
    <>
      <Navbar />
      <DashboardContainer>
        <SideBar />
        <div className="mainOmrBox">
          <h1>Courses Section</h1>
        </div>
      </DashboardContainer>
    </>
  );
};

export default Courses;
