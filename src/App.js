import React from "react";
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'
import { Routes , Route} from "react-router-dom";
import OmrChecking from "./components/OmrChecking/OmrChecking";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/omr" element={<OmrChecking />} />
      </Routes>
    </>
  );
}

export default App;
