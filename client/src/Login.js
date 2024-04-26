import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login', { username, password });
      if (response.status === 200) {
        navigate('/home'); // Navigate to '/home' on success
      }
    } catch (error) {
      console.error('Login error', error.response);
      window.alert(error.response?.data?.message || 'Login failed'); 
    }
  };

  const handleRegisterRedirect = (e) => {
    e.preventDefault(); 
    navigate('/register'); // Redirect to the registration page
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className='flex gap-4'>
        <button type="submit">Login</button>
        <button onClick={handleRegisterRedirect}>Don't Have an Account?</button> {/* Changed behavior */}
      </div>
    </form>
  );
};

export default Login;
