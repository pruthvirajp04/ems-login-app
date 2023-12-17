import React from "react";
import styled from "styled-components";
import "./Batch.css";
import Navbar from "../Navbar/Navbar";
import SideBar from "../SideBar/SideBar";

const DashboardContainer = styled.div`
  display: flex;
`;

const Batch = () => {
  return (
    <>
      <Navbar />
      <DashboardContainer>
        <SideBar />
        <div className="mainOmrBox">
          <h1>Batch Section</h1>
        </div>
      </DashboardContainer>
    </>
  );
};

export default Batch;
