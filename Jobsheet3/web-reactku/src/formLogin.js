import React from 'react';
import './formLogin.css';

const FormLogin = () => {
    return(
        <React.Fragment>
            <h2 className="login-p"> Form Login</h2>
            <div className="login-card">
                <h1 className="login-p-dua">Tugas Pertemuan Ketiga</h1>
                <div className="login-insert">
                    <div className="username">
                        <h4>Username</h4>
                        <input type="username" className="username-box" placeholder="Username..." required/>
                    </div>
                    <div className="password">
                        <h4>Password</h4>
                        <input type="password" className="password-box" placeholder="Password..." required/>
                    </div>
                </div>
                <div className="login-accept">
                    <button className="button-login" type="submit">Login</button>
                    <div className="remember-me">
                        <input className="checkbox" type="checkbox" id="check"/>   
                        <h4>Remember me</h4>  
                    </div>
                </div>
                <button className="cancel">Cancel</button>
            </div>
        </React.Fragment>
    )
}

export default FormLogin;