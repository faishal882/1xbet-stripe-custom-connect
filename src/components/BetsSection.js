import React from "react";
import "../CSS/BetsSection.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js/pure";
import CheckoutForm from "./Payments/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51JSmb6SG3mGdVODu4Tim4cgYVmxzIfKalNNTNVUPbsbL5xgQohY6sENq9UzIbKfn2HtDQWPeLf1UoO5la8vdbRPT00OZWhRYfj"
);

function BetsSection() {
  return (
    <container className="bets-section">
      <Elements stripe={stripePromise}>
        <container className="bet-slip">
          <h3>Bet Slip</h3>
          <h5>India Vs Pakistan</h5>
          <p>Bet Description: India won</p>
          <p>Odds: 2.84</p>
        </container>
        <CheckoutForm />
      </Elements>
    </container>
  );
}

export default BetsSection;
