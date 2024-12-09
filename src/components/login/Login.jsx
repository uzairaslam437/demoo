import React from "react";
import axios from "axios";

const Login = async () => {
    try{
        const response = await axios.post(`http://localhost:3001/Login`)
    }
    catch(err){

    }
}

export default Login;