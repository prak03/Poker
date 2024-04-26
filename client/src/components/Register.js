import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

function Register() {
    const [username,setUsername] = useState('')

    const [password,setPassword] = useState('')
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:3000/register',{ username, password }) 
            console.log(response)
            if (response.status==201){
                navigate("/")
            }
           
        }
        catch(error){
            console.log(error.response)
            if(error.response.status===500){
            window.alert("User already exits")}  
        }
    }
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
            <button type="submit">Create Account</button>
          </div>
        </form>
      );
}

export default Register