import React, { useState } from "react";
import axios from "axios";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
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
    <MDBContainer fluid className="p-3 my-5">
      <MDBRow>
        <MDBCol col="10" md="6">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            className="img-fluid"
          />
        </MDBCol>

        <MDBCol col="4" md="6">
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
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default App;
