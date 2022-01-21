import React, { useEffect, useState } from "react";
import { promoCode } from "../../data";

function DiscountInput({ price, setPrice }) {
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
      setPrice((parseInt(price) * (1 - 0.05)).toFixed(2));
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
    setPrice((parseInt(price) * (1 + 0.05)).toFixed(2));
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
