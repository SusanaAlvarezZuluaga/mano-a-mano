import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";
import paypal from "../../components/images/paypal.png";
import DeliveryInput from "../DeliveryInput/Index";
import DiscountInput from "../DiscountInput";
import PriceContext from "../../contexts/PriceContext";
function Summary({ totalPrice }) {
  const { price } = useContext(PriceContext);

  const navigate = useNavigate();

  return (
    <div className='side-wrapper'>
      <aside className='pay-checkout'>
        <div className='center-pay'>
          <h2 className='summary'>Summary</h2>

          <div className='total-con'>
            <h4>Items: </h4>
            <h4 className='total-price'>${totalPrice}</h4>
          </div>

          <DiscountInput totalPrice={totalPrice} />
          <DeliveryInput totalPrice={totalPrice} />

          <div className='final-con'>
            <h4 className='final-cost'> Total cost: </h4>
            <h4 className='final-price'>${price.toFixed(2)}</h4>
          </div>

          <button
            onClick={() => navigate("/authenticate")}
            className='delivery-btn'
          >
            CHECKOUT
          </button>
          <div className='paypal-con'>
            <img className='paypal' src={paypal} alt='paypal' />
            <h5 className=''>
              <span className=''>
                <span className=''>Pay in 3 interest-free payments</span>
                <span className=''> of $86.61. Buy now, pay later.</span>
              </span>
            </h5>
          </div>
          <div className='secure-payment-con'>
            <h5>Secure payment</h5>
            <h3 className='secure-icons'>
              <FaCcVisa /> <FaCcMastercard /> <FaCcPaypal />
            </h3>
          </div>
        </div>
      </aside>
      <div className='contact-info'>
        <div className='inner-conn'>
          <div>
            <h4>Need help?</h4>
            <h4>We'll answer your questions!</h4>
          </div>

          <h4>+44 (0)1766 808005</h4>
          <h6>
            From Monday to Friday from 8am to 8pm, Saturday from 9am to 6pm and
            on Sunday from 9am to 3pm. Local network charges apply.
          </h6>
          <button className='chat-btn'> Chat online</button>
        </div>
      </div>
    </div>
  );
}

export default Summary;
