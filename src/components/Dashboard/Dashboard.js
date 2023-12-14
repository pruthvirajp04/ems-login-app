// src/Dashboard.js
import React, { useState } from 'react';
import styled from 'styled-components';
import './Dashboard.css'
const DashboardContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const Sidebar = styled.div`
  width: ${(props) => (props.isOpen ? '250px' : '70px')};
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
    <DashboardContainer>
      <Sidebar isOpen={isOpen}>
        <ToggleButton onClick={toggleSidebar}>
          {isOpen ? 'Close' : 'Open'}
        </ToggleButton>
      
      </Sidebar>
      <MainContent>
        
        <h1>Welcome to the Dashboard</h1>
      </MainContent>
    </DashboardContainer>
  );
};

export default Dashboard;
