import React, { useContext, useState } from "react";
import classes from "./Payment.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { axiosInstance } from "../../Api/axios";

function Payment() {
  const [{ user, basket }] = useContext(DataContext);
  const totalItem = basket.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const [cardError, setCardError] = useState(null);
  const stripe = useStripe();
  const element = useElements();

  const handleChange = (e) => {
  
    e?.error?.message ? setCardError(e.error?.message) : setCardError('');
  };

  const handelePayment = async (e) => {
    e.preventDefault();
        
    try {
      const response = await axiosInstance({
        method: "POST",
        url: `payment/create?total=${total}`,
      });

      console.log(response.data);
    } catch (error) {console.log(error)}
    //  1.
    // backen || functions   contact to the client  secret

    // 2.client side (react side confirmation)

    // 3. after that confitmation ---ordr firestor  database save, clear basket
  };

  return (
    <LayOut>
      {/* header */}
      <div className={classes.Payment__header}>
        checkout ({totalItem}) items
      </div>

      {/* payment method */}
      <section className={classes.Payment}>
        {/* address */}
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>user?.email.com</div>
            <div>123 React line</div>
            <div>Chicago, IL</div>
          </div>
        </div>
        <hr />
        {/* product */}
        <div className={classes.flex}>
          <h3>Review item and delivery</h3>
          <div>
            {basket?.map((item,i) => (
              <ProductCard key={i}product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />

        {/* card form */}
        <div className={classes.flex}>
          <h3>Payment methods</h3>
          <div className={classes.Payment__card__container}>
            <div className={classes.Payment__details}>
              <form onSubmit={handelePayment}>
                {/* error */}
                {cardError && (
                  <small style={{ color: "darkred" }}>{cardError}</small>
                )}
                {/* card element */}
                <CardElement onChange={handleChange} />

                {/* price */}
                <div className={classes.Payment__price}>
                  <div>
                    <span style={{ display: "flex", gap: "10px" }}>
                      Total Order | <CurrencyFormat amount={total} />
                    </span>
                  </div>
                  <button type="submit">Pay Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Payment;
