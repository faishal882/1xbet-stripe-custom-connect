import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "../CSS/Login.css";
import loginLogo from "../login-logo.png";
import * as actions from "../store/actions/auth";

function Login(props) {
  const history = useHistory()
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  let errorMessage = null;
  if (props.error) {
    errorMessage = <p>{props.error.message}</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      props.onAuth(email, password);
      history.push("/");
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login">
      <Link to="/">
        <img src={loginLogo} alt="logo" className="login-logo" />
      </Link>

      <div className="login-container">
        <h3>LOGIN</h3>
        {errorMessage}
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="loginForm-input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="loginForm-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button class="login-btn" value="submit">
            Login
          </button>
        </form>
        <p>
          By signing-in you agree to the 1xBET Conditions of Use &
          sale. please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password) => dispatch(actions.authLogin(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
