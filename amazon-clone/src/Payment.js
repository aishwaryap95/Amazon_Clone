//rfce
import React, { useEffect, useState } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";
import { useElements } from "@stripe/react-stripe-js";
import { CardElement, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
  
function Payment() {
  let navigate = useNavigate();
  const [{ basket, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [processing , setProcessing] = useState("");
  const [suceeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [disabled, setDisabled ] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);
  
  useEffect(() => {
    //generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async() => {
      const response = await axios({
        method: 'post',
        // stripe expects the total in a currencies subunits
        url: `/payments/create?total=${getBasketTotal} * 100`
      });
      setClientSecret(response.data.clientSecret)
    }
    getClientSecret();
  }, [basket]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({ paymentIntent }) => {
      //paymentIntent = payment confirmation
      setSucceeded(true);
      setError(null);
      setProcessing(false);

      navigate('/orders')
    })

  }

  const handleChange = event => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  }

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout (<Link to="/checkout"> {basket?.length} items</Link>)
        </h1>

        {/* delivery address */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>

        {/* delivery address */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment_items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* delivery address */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange}/>

              <div className="payment_priceContainer">
              <CurrencyFormat

                renderText={(value) => (
                    <h3>Order Total : {value} </h3>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"₹"}

              />
              <button disabled={ processing || disabled || suceeded }>
                <span>{ processing ? <p>Processing</p> : "Buy Now" }</span>
              </button>
              </div>

              {}error && <div>{error}</div>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
