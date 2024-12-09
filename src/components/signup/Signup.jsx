import React, { useState } from "react";
import axios from "axios";



const Signup = () => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");


    const handleSubmit= async() =>{
        try{
            const response = await axios.post(`http://localhost:3001/register`,{username,email,password});
            setMessage(response.data.message);
        }
        catch(err){

        }
        
            
    }


    return(
        <div>
        <h1>Signup</h1>
        <form onSubmit={handleSubmit} className="login-form">
        <input
          className="input-field"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          className="input-field"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          className="input-field"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit" className="submit-button">Login</button>
      </form>
      <h4>Message: {message}</h4>
      

    </div>
    )
}

export default Signup;