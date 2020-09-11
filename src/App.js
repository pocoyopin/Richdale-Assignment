import React, {useState} from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Posts from './components/Posts';

function App() {
  const [loginForm, setLoginForm] = useState({
    id: null,
    username: "",
    email: ""
  });
  const [isAuthenticated, setAuthentication] = useState(false);
  const [error, setError] = useState('');

  const handleUsernameChange = e => {
    setLoginForm({...loginForm, username: e.target.value});
  }

  const handleEmailChange = e => {
    setLoginForm({...loginForm, email: e.target.value});
  }

  const handleLogin = e => {
    e.preventDefault();
    const validateLogin = async() => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      data.filter(user => {
        if (user.username === loginForm.username) {
          if (user.email === loginForm.email) {
            setLoginForm({...loginForm, id: user.id});
            setAuthentication(true);
          }
        } else {
          setError('Username and email does not match!');
        }
        return null;
      })
    }
    validateLogin();
  }

  const handleSignOut = () => {
    setError('');
    setAuthentication(false);
  }

  return (
    <div className="App">
      <Header isLoggedIn={isAuthenticated} handleSignOut={handleSignOut} name={loginForm.username} />
      <div className="main-body">
        {isAuthenticated ?
          <Posts userId={loginForm.id}/>
          : <Login error={error} handleUsernameChange={handleUsernameChange} handleEmailChange={handleEmailChange} handleSubmit={handleLogin} />
        }
      </div>
      <Footer />
    </div>
  );
}

export default App;
