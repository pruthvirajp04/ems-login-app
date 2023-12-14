import React from "react";
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'
import { Routes , Route} from "react-router-dom";

function App() {

  return (
    <>
     <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>

      </Routes>
    
    </>
  );
}

export default App;
