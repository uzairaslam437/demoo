import React from "react";
import Signup from "../signup/Signup";
import Login from "../login/Login";

const Homepage = () =>{

    function handleLogin(){

    }
    function handleSignUp(){

    }
    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleSignUp}>Signup</button>
        </div>
    )
}

export default Homepage;