import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [loginweb, setloginweb] = useState('');
  const [passweb, setpassweb] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        loginweb,
        passweb,
      });

      if (response.data.success) {
        setMessage(response.data.message);
        // Redirect to the home page or perform other actions upon successful login
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error(error);
      setMessage('An error occurred');
    }
  };

  return (
    <div className="App">
      <h1>Login Page</h1>
      <div>
        <label>Login ID:</label>
        <input type="text" value={loginweb} onChange={(e) => setloginweb(e.target.value)} />
      </div>
      <div>
        <label>passweb:</label>
        <input type="passweb" value={passweb} onChange={(e) => setpassweb(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
