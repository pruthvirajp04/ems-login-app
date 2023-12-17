import React from "react";
import "./TeacherRegistration.css";
import Navbar from "../Navbar/Navbar";
import SideBar from "../SideBar/SideBar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const TeacherRegistration = () => {
  return (
    <>
      <Navbar />
      <div className="mainBox">
        <SideBar />
        <div className="mainRegBox">
          <h1>Teacher Registration </h1>
          <div className="formBox">
            <form>
              <Form.Control
                type="text"
                className="nameInput"
                placeholder="Enter Full Name"
              />

              <Form.Control
                type="email"
                className="emailInput"
                placeholder="Enter Email Address"
              />
              <Form.Control
                type="number"
                className="mobileInput"
                placeholder="Enter Mobile Number"
              />
              <Form.Select className="selectInput">
                <option>Select Gender</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
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

export default TeacherRegistration;
