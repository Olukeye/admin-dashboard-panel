import React, {useState, useContext} from 'react';
import {login} from "../../context/authContext/apiCall";
import {AuthContext} from "../../context/authContext/AuthContext";
import './login.css';


 const Login = () => {
     const [email, setEmail] = useState("");
     const [password, setPasswod] = useState("");
     const { isFetching , dispatch } = useContext(AuthContext);

     const handleLogin = (e) => {
         e.preventDefault();
         login({email, password}, dispatch)
     }

    return (
        <div className="login">
            <form className="loginForm">
                <input type="text" placeholder="email" className="loginInput" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" className="loginInput" placeholder="password" onChange={(e) => setPasswod(e.target.value)} />
                <button className="loginButton" onClick={handleLogin} disabled={isFetching}>Login</button>
            </form>
        </div>
    )
}

export default Login
