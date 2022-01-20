import React, { useState } from "react";
import CartProduct from "../../components/CartProduct";
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";
import paypal from "../../components/images/paypal.png";
import "./style.css";
import Navbar from "../../components/CartSlider/Navbar";

function MyCartPage() {
  const [active, setActive] = useState(false);
  console.log(active);
  return (
    <>
      <header className='header'>HEADER
      <Navbar />
      </header>
      <div className='layout-wrap'>CONTINUE SHOPPING</div>
      <div className='main-side-wrapper'>
        <main className='cart-content-wrap'>
          {<CartProduct />}
          {<CartProduct />}
          {<CartProduct />}
          {<CartProduct />}
          {<CartProduct />}
          {<CartProduct />}
          {<CartProduct />}
          {<CartProduct />}
          {<CartProduct />}
          {<CartProduct />}
        </main>
        <sidebar className='pay-checkout'>
          <div className='center-pay'>
            <h2 className='summary'>Summary</h2>

            <div className='total-con'>
              <h4>Items: </h4>
              <h4 className='total-price'>$257.41</h4>
            </div>

            <h5 className='add-promo' onClick={() => setActive(!active)}>
              Shipping cost {">"}
            </h5>

            {active && (
              <input
                type='text'
                className='zip-code'
                placeholder='Input your zip code'
              />
            )}
            <h5 className='add-promo' onClick={() => setActive(!active)}>
              Add promo code {">"}
            </h5>
            {active && (
              <input
                type='text'
                className='promo-code'
                placeholder='Input your promo code'
              />
            )}

            <div className='final-con'>
              <h4 className='final-cost'> Total cost: </h4>
              <h4 className='final-price'>$257.41</h4>
            </div>

            <button className='delivery-btn'>CHECKOUT</button>
            {/* <img className='paypal' src={paypal} alt='paypal' /> */}
          </div>
          <div className='secure-payment-con'>
            <h4>Secure payment</h4>
            <h3 className='secure-icons'>
              <FaCcVisa /> <FaCcMastercard /> <FaCcPaypal />
            </h3>
          </div>
        </sidebar>
      </div>
      <footer className='footer'>NEWSLETTERS ADVERTISMENTS</footer>
      <footer className='footer'>FOOOTER</footer>
    </>
  );
}
export default MyCartPage;
