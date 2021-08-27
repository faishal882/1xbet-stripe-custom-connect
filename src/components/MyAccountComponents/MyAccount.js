import React, { useState } from "react";
import "../../CSS/MyAccountCSS/MyAccount.css";
import PersonalProfile from "./PersonalProfile";
import AccountSettings from "./AccountSettings";

function MyAccount() {
  const [component, setComponent] = useState("personal-profile");
  // const [active, setActive] = useState("personal-profile")

  return (
    <div>
      <container className="my-account">
        <container className="my-account-options">
          <button
            className="my-account-link active"
            onClick={() => setComponent("personal-profile")}
          >
            PERSONAL PROFILE
          </button>
          <button
            className="my-account-link active"
            onClick={() => setComponent("account-settings")}
          >
            ACCOUNT SETTINGS
          </button>
          <button
            className="my-account-link active"
            onClick={() => setComponent("withdraw-funds")}
          >
            WITHDRAW FUNDS
          </button>
          <button
            className="my-account-link active"
            onClick={() => setComponent("deposit-funds")}
          >
            DEPOSIT FUNDS
          </button>
          <button
            className="my-account-link active"
            onClick={() => setComponent("bet-history")}
          >
            BET HISTORY
          </button>
          <button
            className="my-account-link active"
            onClick={() => setComponent("logout")}
          >
            LOGOUT
          </button>
        </container>
        <container className="options-body">
          {component === "personal-profile" && <PersonalProfile />}
          {component === "account-settings" && <AccountSettings />}
          {component === "withdraw-funds" && <h1>withdraw funds</h1>}
          {component === "deposit-funds" && <h1>Deposit funds</h1>}
          {component === "bet-history" && <h1>Bet history</h1>}
          {component === "logout" && <h1>logout</h1>}
        </container>
      </container>
    </div>
  );
}

export default MyAccount;
