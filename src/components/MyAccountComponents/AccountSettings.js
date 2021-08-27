import React, { useState } from "react";
import "axios";
import "../../CSS/MyAccountCSS/AccountSettings.css";
import axios from "axios";

function AccountSettings() {
  const [disable, setDisable] = useState();
  const [accountNo, setAccountNo] = useState("");
  const [routingNo, setRoutingNo] = useState("");
  const [idNo, setIdNo] = useState("");
  // const [dob, setDob] = useState({ year: "", month: "", day: "" });
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [postalcode, setPostalCode] = useState("");

  const InputFieldEnabled = () => {
    if (disable === "") {
      setDisable("enable");
    } else {
      setDisable("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      accountNo !== "" &&
      routingNo !== "" &&
      idNo !== "" &&
      state !== "" &&
      city !== "" &&
      address !== "" &&
      postalcode !== ""
    ) {
      console.log(
        accountNo,
        routingNo,
        idNo,
        state,
        city,
        address,
        postalcode,
        year,
        month,
        day
      );
      axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.getItem("token"),
      };
      axios
        .post("http://127.0.0.1:8000/payments/connect-account/", {
          accountNo: accountNo,
          routingNo: routingNo,
          idNo: idNo,
          state: state,
          city: city,
          postalcode: postalcode,
          address: address,
          year: year,
          month: month,
          day: month,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Please fill the form before submitting");
    }
  };

  return (
    <>
      <div className="account-header">ACCOUNT SETTINGS</div>
      <p className="account-text">
        Please complete your profile before connecting your bank account with us{" "}
      </p>
      <div className="edit-account last-name">
        Edit all
        <button
          type="button"
          className="edit-button-account"
          onClick={InputFieldEnabled}
        >
          edit
        </button>
      </div>
      <div className="edit-account">Bank Account Information</div>
      <div className="edit-account-info">
        Account No.
        {disable === "enable" ? (
          <input
            type="text"
            className="profile-input"
            placeholder="Account no."
            value={accountNo}
            onChange={(e) => setAccountNo(e.target.value)}
          />
        ) : null}
      </div>
      <div className="edit-account-info1">
        Routing No.
        {disable === "enable" ? (
          <input
            type="text"
            className="account-input"
            placeholder="IFSC code"
            value={routingNo}
            onChange={(e) => setRoutingNo(e.target.value)}
          />
        ) : null}
      </div>
      <div className="edit-account-info">
        ID No.
        {disable === "enable" ? (
          <input
            type="text"
            className="account-input"
            placeholder="PAN no."
            value={idNo}
            onChange={(e) => setIdNo(e.target.value)}
          />
        ) : null}
      </div>
      <div className="edit-account-info1 last-name">
        D.O.B
        {disable === "enable" ? (
          <input
            type="text"
            className="account-input"
            placeholder="day"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        ) :
        null}
        {disable === "enable" ? (
          <input
            type="text"
            className="account-input"
            placeholder="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          />
        ) : null}
        {disable === "enable" ? (
         <input
            type="text"
            className="account-input"
            placeholder="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        ) : null}

      </div>
      <div className="edit-account">Address</div>
      <div className="edit-account-info">
        State
        {disable === "enable" ? (
          <input
            type="text"
            className="account-input"
            name={state}
            placeholder=""
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        ) : null}
      </div>
      <div className="edit-account-info1">
        City
        {disable === "enable" ? (
          <input
            type="text"
            className="account-input"
            placeholder=""
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        ) : null}
      </div>
      <div className="edit-account-info">
        Address
        {disable === "enable" ? (
          <input
            type="text"
            className="account-input"
            placeholder=""
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        ) : null}
      </div>
      <div className="edit-account-info1">
        PIN
        {disable === "enable" ? (
          <input
            type="number"
            className="account-input"
            placeholder=""
            value={postalcode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
        ) : null}
      </div>
      <button type="submit" className="account-save-btn" onClick={handleSubmit}>
        SAVE CHANGES
      </button>
    </>
  );
}

export default AccountSettings;
