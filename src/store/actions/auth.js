import * as actionTypes from "./actionType";
import axios from "axios";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("token");
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

const checkAuthTimeout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const authLogin = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    axios
      .post("http://127.0.0.1:8000/rest-auth/login/", {
        email: email,
        password: password,
      })
      .then((res) => {
        const token = res.data.key,
          expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem("token", token);
        localStorage.setItem("expirationDate", expirationDate);
        dispatch(authSuccess(token));
        dispatch(checkAuthTimeout(3600));
      })
      .catch((err) => {
        dispatch(authFail(err));
      });
  };
};

export const authSignup = (email, password1, password2) => {
  return (dispatch) => {
    dispatch(authStart());
    axios
      .post("http://127.0.0.1:8000/rest-auth/registration/", {
        email: email,
        password1: password1,
        password2: password2,
      })
      .then((res) => {
        const token = res.data.key,
          expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem("token", token);
        localStorage.setItem("expirationDate", expirationDate);
        dispatch(authSuccess(token));
        dispatch(checkAuthTimeout(3600));
      })
      .catch((err) => {
        dispatch(authFail(err));
      });
  };
};

export const authPasswordChange = (
  old_password,
  new_password1,
  new_password2
) => {
  return (dispatch) => {
    dispatch(authStart());
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: "Token " + localStorage.getItem("token"),
    };
    console.log(localStorage.getItem("token"));
    axios
      .post("http://127.0.0.1:8000/rest-auth/password/change/", {
        old_password: old_password,
        new_password1: new_password1,
        new_password2: new_password2,
      })
      .then((res) => {
        // dispatch(authSuccess(token));
        console.log(res);
      })
      .catch((err) => {
        dispatch(authFail(err));
        console.log(err);
      });
  };
};

export const authUserProfile = (first_name, last_name) => {
  return (dispatch) => {
    dispatch(authStart());
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: "Token " + localStorage.getItem("token"),
    };
    console.log(localStorage.getItem("token"));
    axios
      .post("http://127.0.0.1:8000/rest-auth/user/", {
        first_name: first_name,
        last_name: last_name,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        dispatch(authFail(err));
        console.log(err);
      });
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (token === undefined) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        dispatch(authSuccess(token));
        dispatch(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};
