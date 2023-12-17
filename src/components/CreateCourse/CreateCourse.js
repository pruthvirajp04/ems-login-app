import React from "react";
import "./CreateCourse.css";
import Navbar from "../Navbar/Navbar";
import SideBar from "../SideBar/SideBar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CreateCourse = () => {
  return (
    <>
      <Navbar />
      <div className="mainBox">
        <SideBar />
        <div className="mainOmrBox">
          <h1>Course Registration Process</h1>
          <div className="formBox">
            <h3>Course Information</h3>
            <form>
              <Form.Control
                type="text"
                className="nameInput"
                placeholder="Enter Course Name"
              />
              <Form.Control
                type="text"
                className="nameInput"
                placeholder="Enter Course Description"
              />
              <Form.Control
                type="text"
                className="nameInput"
                placeholder="Enter Course Duration"
              />
              <Form.Control
                type="number"
                className="nameInput"
                placeholder="Enter fees"
              />

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

export default CreateCourse;
