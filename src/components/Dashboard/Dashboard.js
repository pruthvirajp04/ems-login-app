// src/Dashboard.js
import React, { useState } from 'react';
import styled from 'styled-components';
import './Dashboard.css'
import logo from './logo192.png'
import right from "./right.png";

import Navbar from '../Navbar/Navbar';
const DashboardContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const Sidebar = styled.div`
  width: ${(props) => (props.isOpen ? '170px' : '80px')};
  background-color: #3498db;
  transition: width 0.3s ease;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
`;

const ToggleButton = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar />
      <DashboardContainer>
        <Sidebar isOpen={isOpen}>
          <ToggleButton className='toggleClass' onClick={toggleSidebar}>
            <h2>

            {isOpen ? <> <img src={logo} className='openImg' alt="dsf" /> </> : 
            <> <img src={right} className='closeImg' alt="dsf" /> </>
          }
          </h2>
          </ToggleButton>
        </Sidebar>
        <MainContent>
          <h1>Welcome to the Dashboard</h1>
        </MainContent>
        x
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
