import React, { useEffect, useState } from "react";
import { shipCost } from "../../data";

function DeliveryInput({ price, setPrice }) {
  const [active, setActive] = useState(false);
  const [addedDel, setAddedDel] = useState(false);
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [delivVal, setDelivVal] = useState("");
  const [alertDeliv, setAlertDeliv] = useState("");
  let shippingCost;

  useEffect(() => {
    if (active) setAlertDeliv("");
    else setZip("");
    setCity("");
  }, [active]);

  function revertCost() {
    setAddedDel(false);
    setPrice((parseInt(price) - shippingCost.cost).toFixed(2));
    setDelivVal("");
    setAlertDeliv("");
  }

  function onSubmitShip(e) {
    e.preventDefault();

    shippingCost = shipCost.find(({ town, zipCode }) => {
      return town === city && zipCode === zip;
    });

    if (shippingCost) {
      setActive(false);
      setPrice((parseInt(price) + shippingCost.cost).toFixed(2));
      setDelivVal(shippingCost.cost);
      setAddedDel(true);
      setCity("");
      setZip("");
    } else {
      setCity("");
      setZip("");
      setAlertDeliv("no match");
      setActive(false);
    }
  }
  return (
    <>
      {addedDel ? (
        <div className='delivery-added' onClick={revertCost}>
          <h5>Shipping cost</h5>
          <h5 className='deliv-val'>{`$${delivVal}`}</h5>
        </div>
      ) : (
        <div className='add-shipping' onClick={() => setActive(!active)}>
          <h5>Shipping cost {">"}</h5>

          <h6 className='alert'>{alertDeliv}</h6>
        </div>
      )}
      {active && (
        <form className='delivery-form' onSubmit={onSubmitShip}>
          <input
            type='text'
            className='zip-code'
            placeholder='zip code'
            value={zip}
            onChange={(e) => setZip(e.target.value)}
          />
          <input
            type='text'
            className='city-code'
            placeholder='city'
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input className='submit-btn-deliv' type='submit' />
        </form>
      )}
    </>
  );
}

export default DeliveryInput;
