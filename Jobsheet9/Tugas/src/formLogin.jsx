import React, {useState} from 'react';
import './formLogin.css';
import {useHistory} from "react-router-dom";
import axios from 'axios';

const FormLogin = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");
let useHistory = useHistory();

const login = (e) =>{
    e.preventDefault();
    axios.post("http://localhost:3000/api/auth/login", {
        email,
        password
    }).then((response) => {
        console.log("response", response)
        localStorage.setItem("login", JSON.stringify({
            userLogin: true,
            token: response.data.access_token
        }))
        setError("");
    }).catch(error => setError(error.response.data.message));
}
    return(
        <React.Fragment>
            <body>
                <div className="hero">
                    {/* <h2 className="login-p"> Form Login</h2> */}
                    <div className="login-card">
                        <h1 className="login-p-dua">Quiz 1</h1>
                        <div className={classes.root} noValidate autocomplete="off" onSubmit={login}>
                            <div className="username">
                                <h4>Username</h4>
                                <input 
                                id="username"
                                type="text" 
                                value={email} onChange={(e) => setEmail(e.target.value)} 
                                className="username-box" 
                                placeholder="Username ...." required/>
                            </div>
                            <div className="password">
                                <h4>Password</h4>
                                <input 
                                id="password"
                                type="text"
                                value={password} onChange={(e) => setPassword(e.target.value)}
                                className="password-box" 
                                placeholder="Password ...." required/>
                            </div>
                        </div>
                        <div className="login-accept">
                            <button className="button-login" type="submit">Login</button>
                            <div className="remember-me">
                                <input className="checkbox" type="checkbox" id="check"/>   
                                <h4>Remember me</h4>  
                            </div>
                        </div>
                        <button className="cancel">Register</button>
                    </div>
                </div>
            </body>
        </React.Fragment>
    )
}

//agar component ini dapat dipakai di mana saja
export default FormLogin;