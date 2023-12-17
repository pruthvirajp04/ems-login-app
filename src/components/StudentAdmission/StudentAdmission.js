import React from "react";
import "./StudentAdmission.css";
import Navbar from "../Navbar/Navbar";
import SideBar from "../SideBar/SideBar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const StudentAdmission = () => {
  return (
    <>
      <Navbar />
      <div className="mainBox">
        <SideBar />
        <div className="mainOmrBox">
          <h1>Student Admission</h1>
          <div className="formBox">
            <h3>Add Details</h3>
            <form>
              <div className="flexDiv">
                <Form.Control
                  type="text"
                  className="nameInput"
                  placeholder="Enter Full Name"
                />
                <Form.Control
                  type="email"
                  className="nameInput"
                  placeholder="Enter Email Address"
                />
              </div>
              <div className="flexDiv">
                <Form.Control
                  type="number"
                  className="nameInput"
                  placeholder="Enter Mobile Number"
                />
                <Form.Select className="selectInput">
                  <option>Select Gender</option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                </Form.Select>
              </div>
              <div className="flexDiv">
                <Form.Control
                  type="text"
                  className="nameInput"
                  placeholder="Enter Parents Name"
                />
                <Form.Control
                  type="text"
                  className="nameInput"
                  placeholder="Enter Parents Occupation"
                />
              </div>
              <div className="flexDiv">
                <Form.Control
                  type="number"
                  className="nameInput"
                  placeholder="Enter Aadhar Number"
                />
                <Form.Control
                  type="text"
                  className="nameInput"
                  placeholder="Enter Parents Mobile"
                />
              </div>
              <div className="dobDiv">
                <h6>Date of Birth</h6>
                <Form.Control
                  type="date"
                  className=" dobInput"
                  placeholder="Enter Parents Mobile"
                />
              </div>
              <hr />
              <h3>Address & Education</h3>
              <Form.Control
                as="textarea"
                placeholder="Enter your full address"
                style={{ height: "60px", margin: "1rem" }}
              />
              <Form.Control
                as="textarea"
                placeholder="Enter your education details"
                style={{ height: "60px", margin: "1rem" }}
              />
              <Form.Select style={{ height: "60px", margin: "1rem" }}>
                <option>Enter College Year</option>
                <option value="1">FY</option>
                <option value="2">SY</option>
                <option value="2">TY</option>
                <option value="2">LY</option>
              </Form.Select>
              <hr />
              <h3>Course Details</h3>
              <Form.Select style={{ height: "60px", margin: "1rem" }}>
                <option>Select Course Interested</option>
              </Form.Select>
              <div className="btnBox">
                <Button type="submit" variant="success">
                  ADD COURSE
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

export default StudentAdmission;
