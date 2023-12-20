import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import SideBar from "../SideBar/SideBar";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

const DashboardContainer = styled.div`
  display: flex;
`;
const StudentStatus = () => {
  const jsonData = [
    { id: 1, firstName: "Mark", lastName: "Otto", handle: "@mdo" },
    { id: 2, firstName: "John", lastName: "Doe", handle: "@john_doe" },
    // Add more data as needed
  ];
  return (
    <>
      <Navbar />
      <DashboardContainer>
        <SideBar />
        <div className="mainOmrBox">
          <h1>StudentStatus Section</h1>
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
      </DashboardContainer>
    </>
  );
};

export default StudentStatus;
