import React, { useEffect, useState, useContext } from "react";
import PriceContext from "../../contexts/PriceContext";
import { shipCost } from "../../data";

function DeliveryInput() {
  const { price, setPrice, setShipActiveVal, delivVal, setDelivVal } =
    useContext(PriceContext);
  const [active, setActive] = useState(false);
  const [addedDel, setAddedDel] = useState(false);
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [alertDeliv, setAlertDeliv] = useState("");
  let shippingCost;

  useEffect(() => {
    if (active) setAlertDeliv("");
    else setZip("");
    setCity("");
  }, [active]);

  function revertCost() {
    setAddedDel(false);
    setPrice(price - delivVal);
    setDelivVal("");
    setAlertDeliv("");
    setShipActiveVal(false);
  }

  function onSubmitShip(e) {
    e.preventDefault();

    shippingCost = shipCost.find(({ town, zipCode }) => {
      return town === city && zipCode === zip;
    });

    if (shippingCost) {
      setActive(false);
      setPrice(price + shippingCost.cost);
      setDelivVal(shippingCost.cost);
      setShipActiveVal(true);
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
          <h5 className='deliv-val'>${delivVal}</h5>
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
