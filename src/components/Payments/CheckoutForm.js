import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState } from "react";
import "../../CSS/CheckoutForm.css";

const CheckoutForm = () => {
  const [error, setError] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [amount, setAmount] = useState();

  const stripe = useStripe();
  const elements = useElements();

  // Handle real-time validation errors from the CardElement.
  const handleChange = (event) => {
    if (event.error) {
      setError(event.error.message);
    } else {
      setError(null);
    }
  };

  // Handle form submission.
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    // add these lines
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card: card,
    });
    console.log(paymentMethod);
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: "Token " + localStorage.getItem("token"),
    };
    axios
      .post(
        "https://betting-app-1xbet.herokuapp.com/payments/accept-payment/",
        {
          payment_method_id: paymentMethod.id,
          amount: amount * 100,
        }
      )
      .then((res) => {
        setClientSecret(res.data.clientSecret);
        //  stripe.confirmCardPayment(clientSecret, {
        //  payment_method: paymentMethod.id
        //  })
        alert("Payment Succesfull");
        setAmount("");
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };
  return (
    <form onSubmit={handleSubmit} className="stripe-form">
      <div className="form-row">
        <input
          className="card-input"
          type="number"
          step="any"
          placeholder="$ amount"
          required
          value={amount}
          onChange={(event) => {
            setAmount(event.target.value);
          }}
        />
      </div>
      <div className="form-row">
        <CardElement id="card-element" onChange={handleChange} />
        <div className="card-errors" role="alert">
          {error}
        </div>
      </div>
      <button type="submit" className="submit-btn">
        Submit Payment
      </button>
    </form>
  );
};
export default CheckoutForm;
