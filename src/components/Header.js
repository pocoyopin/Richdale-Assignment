import React from 'react';
import './Header.css';

function Header(props) {
    return (
        <div className='header'>
            <a href='/'>Company A</a>
            { props.isLoggedIn ?
                <div className="header-right">
                    <p>Hello, {props.name}</p>
                    <button onClick={props.handleSignOut}>Sign Out</button>
                </div>
                : <button>Login</button>
            }
        </div>
    );
}

export default Header;
