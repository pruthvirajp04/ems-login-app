import React from "react";
import styled from "styled-components";
import "./OmrChecking.css";
import Navbar from "../Navbar/Navbar";
import SideBar from "../SideBar/SideBar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const DashboardContainer = styled.div`
  display: flex;
 
`;

const OmrChecking = () => {
  return (
    <>
      <Navbar />
      <DashboardContainer>
        <SideBar />
        <div className="mainOmrBox">
          <h1>OMR Checking Section</h1>
          <div className="formOmr">
            <Form.Group controlId="formFileLg" className="mb-3">
              {/* <Form.Label>Large file input example</Form.Label> */}
              <Form.Control type="file" size="lg" />
            </Form.Group>
            <Button variant="success">Evaluate OMR</Button>
          </div>
        </div>
      </DashboardContainer>
    </>
  );
};

export default OmrChecking;
