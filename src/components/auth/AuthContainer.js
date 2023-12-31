import { useState } from 'react';
import "./AuthContainer.scss";
import Login from './Login';
// ! Parent class
import Register from './Register';
import Reset from './Reset';

const AuthContainer = () => {

  const [auth, setAuth] = useState({
    login: true,
    register: false,
    reset: false,
  })

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  };

  // const [login, setLogin] = useState(true)
  // const [register, setRegister] = useState(false)
  // const [reset, setReset] = useState(false)

  const handleLogin = () => {

    setAuth( {login: true, register: false, reset: false} )
    // setReset(false)
    // setRegister(false)
    // setLogin(true)
  }

  const handleRegister = () => {
    setAuth( {login: false, register: true, reset: false} )
    // setLogin(false)
    // setReset(false)
    // setRegister(true)
  }

  const handleReset = () => {
    setAuth( {login: false, register: false, reset: true} )
    // setLogin(false)
    // setRegister(false)
    // setReset(true)
  }

  return (
    <section className='--flex-center --100vh'>
        <div className="container box">

          { auth.login && <Login onRegister={handleRegister} onReset={handleReset} onShowPassword={showPassword} onTogglePassword={handleTogglePassword}/> }
          { auth.register && <Register onLogin={handleLogin} onShowPassword={showPassword} onTogglePassword={handleTogglePassword}/> }
          { auth.reset && <Reset  onLogin={handleLogin} /> }
          
        </div>
    </section>
  )
}

export default AuthContainer