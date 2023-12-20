import React from "react";
import "./Courses.css";
import Navbar from "../Navbar/Navbar";
import SideBar from "../SideBar/SideBar";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

const Courses = () => {
    const jsonData = [
      { id: 1, coursename: "Mark", lastName: "Otto", handle: "@mdo" },
      { id: 2, coursename: "John", lastName: "Doe", handle: "@john_doe" },
      // Add more data as needed
    ];
  return (
    <>
      <Navbar />
      <div className="mainBox">
        <SideBar />
        <div className="mainOmrBox">
          <h1>Courses</h1>
          <MDBTable>
            <MDBTableHead>
              <tr>
                {Object.keys(jsonData[0]).map((key) => (
                  <th key={key} scope="col">
                    {key}
                  </th>
                ))}
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {jsonData.map((item, index) => (
                <tr key={index}>
                  {Object.values(item).map((value, subIndex) => (
                    <td key={subIndex}>{value}</td>
                  ))}
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        </div>
      </div>
    </>
  );
};

export default Courses;
