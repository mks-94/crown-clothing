import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Gw0XpCBl8Z2Tk5s40NWUTc7lTGak3iUKQ4czvbN5UOhAxtuZp53fLEkqh9eE1Yfh6n12GqSriw0vtzxDMDaElGi009ENvQfUg";

  const onToken = (token) => {
    console.log(token, "Find token here");
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing Ltd."
      billingAddress
      shippingAddress
      image="http://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
export default StripeCheckoutButton;
