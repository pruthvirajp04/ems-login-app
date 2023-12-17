import React from "react";
import styled from "styled-components";
import "./CreateCourse.css";
import Navbar from "../Navbar/Navbar";
import SideBar from "../SideBar/SideBar";

const DashboardContainer = styled.div`
  display: flex;
`;

const CreateCourse = () => {
  return (
    <>
      <Navbar />
      <DashboardContainer>
        <SideBar />
        <div className="mainOmrBox">
          <h1>CreateCourse Section</h1>
        </div>
      </DashboardContainer>
    </>
  );
};

export default CreateCourse;
