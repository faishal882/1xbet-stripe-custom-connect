import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/auth";
import "../../CSS/MyAccountCSS/PersonalProfile.css";

function PersonalProfile(props) {
  const [disable, setDisable] = useState();
  const [old_password, setOld_password] = useState("");
  const [new_password1, setNew_password1] = useState("");
  const [new_password2, setNew_password2] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");

  const InputFieldEnabled = () => {
    if (disable === "") {
      setDisable("enable");
    } else {
      setDisable("");
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (old_password !== "" && new_password1 !== "" && new_password2 !== "") {
      props.onAuth(old_password, new_password1, new_password2);
    } if (first_name !== "" && last_name !== "")
    {
      props.UserProfile(first_name, last_name)
    }
    // setEma("");
    // setPassword1("");
    // setPassword2("");
  }

  return (
    <>
      <div className="profile-header">PERSONAL PROFILE</div>
      <div className="edit-all last-name">
        Edit all
        <button
          type="button"
          className="edit-button-profile"
          onClick={InputFieldEnabled}
        >
          edit
        </button>
      </div>
      <div className="edit-all">Personal Info</div>
      <div className="edit-personal-info">
        Email
        {disable === "enable" ? (
          <input
            type="email"
            className="profile-input"
            disabled
            placeholder="123@gmail.com"
          />
        ) : null}
      </div>
      <div className="edit-personal-info1">
        First Name
        {disable === "enable" ? (
          <input
            type="text"
            className="profile-input"
            placeholder="first-name"
            value={first_name}
            onChange={(e) => setFirst_name(e.target.value)}
          />
        ) : null}
      </div>
      <div className="edit-personal-info last-name">
        Last Name
        {disable === "enable" ? (
          <input
            type="text"
            className="profile-input"
            placeholder="last-name"
            value={last_name}
            onChange={(e) => setLast_name(e.target.value)}
          />
        ) : null}
      </div>
      <div className="edit-all">Password Change</div>
      <div className="edit-personal-info">
        Old Password
        {disable === "enable" ? (
          <input
            type="password"
            className="profile-input"
            value={old_password}
            onChange={(e) => setOld_password(e.target.value)}
          />
        ) : null}
      </div>
      <div className="edit-personal-info1">
        New Password
        {disable === "enable" ? (
          <input
            type="password"
            className="profile-input"
            value={new_password1}
            onChange={(e) => setNew_password1(e.target.value)}
          />
        ) : null}
      </div>
      <div className="edit-personal-info">
        Confirm-Password
        {disable === "enable" ? (
          <input
            type="password"
            className="profile-input"
            value={new_password2}
            onChange={(e) => setNew_password2(e.target.value)}
          />
        ) : null}
      </div>
      <button type="submit" className="profile-save-btn" onClick={handleSubmit}>
        SAVE CHANGES
      </button>
    </>
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
    onAuth: (old_password, new_password1, new_password2) =>
      dispatch(
        actions.authPasswordChange(old_password, new_password1, new_password2)
      ),
    UserProfile: (first_name, last_name) =>
      dispatch(
        actions.authUserProfile(first_name, last_name)
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalProfile);

// export default PersonalProfile;
