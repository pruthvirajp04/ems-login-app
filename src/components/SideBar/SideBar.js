
import React from "react";
import styled from "styled-components";
import "./SideBar.css";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
const Sidebar = styled.div`
  width: 170px;
  background-color: #3498db;
  transition: width 0.3s ease;
`;


const SideBar = () => {
  return (
    <>
      <Sidebar>
        <div className="dashboardIconBox">
          <Link to="/" className="linkIcon">
            <FontAwesome className="iconClass" name="home" size="1x" />
            {/* <span>Dashboard </span> */}
          </Link>
        </div>
        <div className="dashboardIconBox">
          <FontAwesome className="" name="male" size="1x" />
          <Link to="/dashboard" className="linkIcon">
            <span className="stuTitle">Student Admission </span>
          </Link>
        </div>
        <div className="dashboardIconBox">
          <FontAwesome className="" name="male" size="1x" />
          <Link to="/dashboard" className="linkIcon">
            <span className="stuStatusTitle">Student Status </span>
          </Link>
        </div>
        <div className="dashboardIconBox">
          <FontAwesome className="" name="male" size="1x" />
          <Link to="/dashboard" className="linkIcon">
            <span className="teacherTitle">Teacher Registration </span>
          </Link>
        </div>
        <div className="dashboardIconBox">
          <FontAwesome className="" name="book" size="1x" />
          <Link to="/dashboard" className="linkIcon">
            <span className="courseTitle">Courses </span>
          </Link>
        </div>
        <div className="dashboardIconBox">
          <FontAwesome className="" name="book" size="1x" />
          <Link to="/dashboard" className="linkIcon">
            <span className="courseTitle">Create Courses </span>
          </Link>
        </div>
        <div className="dashboardIconBox">
          <FontAwesome className="" name="city" size="1x" />
          <Link to="/dashboard" className="linkIcon">
            <span className="courseTitle">Batch </span>
          </Link>
        </div>
        <div className="dashboardIconBox">
          <FontAwesome className="" name="check" size="1x" />
          <Link to="/dashboard" className="linkIcon">
            <span className="omrTitle">OMR Checking </span>
          </Link>
        </div>
      </Sidebar>
    </>
  );
};

export default SideBar;