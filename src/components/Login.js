import React from 'react';
import './Login.css';

function Login(props) {
    return (
        <div>
            <form className="login-form" onSubmit={props.handleSubmit}>
                {props.error.length > 0 &&
                    <span aria-live="polite" className='error'>{props.error}</span>
                }
                <input type="text" onChange={props.handleUsernameChange} placeholder="Username"/>
                <input type="email" onChange={props.handleEmailChange} placeholder="Email"/>
                <input type="submit" value="Sign in" className="login-button"/>
            </form>
        </div>
    )
}

export default Login;