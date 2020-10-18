import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG24.png"
          alt="amazon-logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form action="">
          <h5>E-mail </h5>
          <input type="text" />
          <h5>Password </h5>
          <input type="password" />

          <button className="login__signInButton">Sign In</button>
        </form>

        <p>
          By signing in you agree to the Amazon fake clone Condition of Use and
          Sale. Please see our Privacy Notice, aout Cookies Notice and Our
          Interest Base Ads Notice.
        </p>
        <button className="login__registerButton">Create Amazon Account</button>
      </div>
    </div>
  )
}

export default Login
