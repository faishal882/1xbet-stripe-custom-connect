import React from "react";
import "../CSS/Header.css";
import { Link } from "react-router-dom";
import * as actions from "../store/actions/auth";
import { connect } from "react-redux";

function Header(props) {
  return (
    <div>
      <header>
        <container class="header container-flex">
          <div>
            <img
              src="https://v2l.cdnsfree.com/genfiles/cms/pg/70/images/09ef1ad2e0b8613684c2d1cd91f4d3a6.svg"
              alt=""
              className="logo"
            />
          </div>
          <div className="nav-links">
            <nav>
              <ul>
                <li>
                  <Link to="/casino/" className="link">
                    CASINO
                  </Link>
                </li>
                <li>
                  <Link to="/about-as/" className="link">
                    ABOUT US
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us/" className="link">
                    CONTACT US
                  </Link>
                </li>
                <li>
                  {props.isAuthenticated ? (
                    <Link to="/" className="link" onClick={props.logout}>
                      Logout
                    </Link>
                  ) : (
                    <Link to="/login/" className="link">
                      LOGIN
                    </Link>
                  )}
                </li>
                <li>
                  {props.isAuthenticated ? (
                    <Link to="/my-account/" className="link">
                      MY ACCOUNT
                    </Link>
                  ) : (
                    <Link to="/" className="link">
                      REGISTER
                    </Link>
                  )}
                </li>
              </ul>
            </nav>
          </div>
        </container>
      </header>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
  };
};

export default connect(null, mapDispatchToProps)(Header);
