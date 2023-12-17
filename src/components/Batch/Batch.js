import React from "react";
import "./Batch.css";
import Navbar from "../Navbar/Navbar";
import SideBar from "../SideBar/SideBar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


const Batch = () => {
  return (
    <>
      <Navbar />
      <div className="mainBox">
        <SideBar />
        <div className="mainOmrBox">
          <h1>Batch Section</h1>
          <div className="formBox">
            <h3>Create Batch according to course</h3>
            <form>
              <Form.Control
                type="text"
                className="nameInput"
                placeholder="Enter Batch Name"
              />
              <Form.Select className="selectInput">
                <option>Select Course</option>
              </Form.Select>
              <Form.Select className="selectInput">
                <option>Assigned Teacher</option>
              </Form.Select>
              <div className="btnBox">
                <Button type="submit" variant="success">
                  SUBMIT
                </Button>
                <Button type="reset" variant="warning">
                  RESET
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Batch;
