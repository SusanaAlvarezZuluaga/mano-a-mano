import React, { useEffect, useState, useContext } from "react";
import PriceContext from "../../contexts/PriceContext";
import { promoCode } from "../../data";

function DiscountInput({ totalPrice }) {
  const { setPrice, shipActiveVal, delivVal } = useContext(PriceContext);

  const [activePromo, setActivePromo] = useState(false);
  const [promoVal, setPromoVal] = useState("");
  const [discount, setDiscount] = useState(false);
  const [discVal, setDiscVal] = useState("");
  const [alertDisc, setAlertDisc] = useState("");

  useEffect(() => {
    if (activePromo) setAlertDisc("");
    else setPromoVal("");
  }, [activePromo]);

  function onSubmit(e) {
    e.preventDefault();
    let numVal = parseInt(promoVal);
    const returnVal = promoCode.find((promo) => {
      return promo === numVal;
    });

    if (returnVal) {
      setActivePromo(false);
      setDiscVal("-5%");
      if (shipActiveVal) {
        setPrice(totalPrice * (1 - 0.05) + delivVal);
      } else {
        setPrice(totalPrice * (1 - 0.05));
      }

      setDiscount(true);
      setPromoVal("");
    } else {
      setPromoVal("");
      setActivePromo(false);
      setAlertDisc("no discount");
      setDiscVal("");
    }
  }

  function revertPromo() {
    setDiscount(false);
    // I need to know if the shipping was added
    if (shipActiveVal) {
      setPrice(totalPrice + delivVal);
    } else {
      setPrice(totalPrice);
    }
    setDiscVal("");
    setAlertDisc("");
  }
  return (
    <>
      {discount ? (
        <div onClick={revertPromo} className='promo-added'>
          <h5 style={{ cursor: "pointer" }}>promo code</h5>

          <h5 className='disc-val'>{discVal}</h5>
        </div>
      ) : (
        <div className='add-promo' onClick={() => setActivePromo(!activePromo)}>
          <h5>Add promo code {">"}</h5>
          <h6 className='alert'> {alertDisc}</h6>
        </div>
      )}
      {activePromo && (
        <form className='discount-form' onSubmit={onSubmit}>
          <input
            type='text'
            className='promo-code'
            placeholder='Input your promo code'
            value={promoVal}
            onChange={(e) => setPromoVal(e.target.value)}
          />
          <input className='submit-btn-disc' type='submit' />
        </form>
      )}
    </>
  );
}

export default DiscountInput;
