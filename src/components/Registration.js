import React, { useState } from "react";
import { connect } from "react-redux";
import "../CSS/Registration.css";
import PhotoSlider from "./PhotoSlider";
import * as actions from "../store/actions/auth";

function Registration(props) {
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  let errorMessage = null;
  if (props.error) {
    errorMessage = <p>{props.error.message}</p>;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (email !== "" && password1 !== "" && password2 !== "") {
      props.onAuth(email, password1, password2);
    }
    setEmail("");
    setPassword1("");
    setPassword2("");
  }

  return (
    <div>
      <container className="container-flex">
        <container className="registration">
          <div className="registration-bonus">
            <p className="bonus-title">100% BONUS ON THE 1ST DEPOSIT</p>
          </div>
          {props.isAuthenticated ? (
            <div>
              <h2>Here are your offers</h2>
              <h4>Please reddem your offers</h4>
              <h3>Thank you for visiting us</h3>
            </div>
          ) : (
            <div className="registration-form">
              <h3 className="registration-header">REGISTRATION</h3>
              {errorMessage}
              <form>
                <input
                  type="email"
                  className="form-input"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  className="form-input"
                  placeholder="Password"
                  value={password1}
                  onChange={(e) => setPassword1(e.target.value)}
                />
                <input
                  type="password"
                  className="form-input"
                  placeholder="Confirm-Password"
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                />
                <button
                  class="registration-btn"
                  value="submit"
                  onClick={handleSubmit}
                >
                  REGISTER
                </button>
              </form>
            </div>
          )}
        </container>
        <PhotoSlider />
      </container>
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
    onAuth: (email, password1, password2) =>
      dispatch(actions.authSignup(email, password1, password2)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
