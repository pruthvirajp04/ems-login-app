import React, { useState } from "react";
import axios from "axios";
import {
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import './App.css'
function App() {
  const [loginweb, setloginweb] = useState("");
  const [passweb, setpassweb] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        loginweb,
        passweb,
      });
      if (response.data.success) {
        setMessage(response.data.message);
        // Redirect to the home page or perform other actions upon successful login
      } else {
        setMessage(response.data.message);
      }
    }
    catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1 className="mainTitle">
        Welcome to <span> Coding Circle Academy</span>
      </h1>
      <h4 className="loginTitle">Login with your credentials🔑 </h4>

      <div fluid className="p-3 mainContainer">
        <div className="subContainer">
          <div col="" md="">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              height={500}
              width={500}
            />
          </div>

          <div col="" md="">
            <MDBInput
              wrapperClass="mb-4"
              label="Branch Name"
              type="email"
              size="lg"
              value={loginweb}
              onChange={(e) => setloginweb(e.target.value)}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              type="password"
              size="lg"
              value={passweb}
              onChange={(e) => setpassweb(e.target.value)}
            />

            <MDBBtn className="mb-4 w-100" size="lg" onClick={handleLogin}>
              Sign in
            </MDBBtn>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
