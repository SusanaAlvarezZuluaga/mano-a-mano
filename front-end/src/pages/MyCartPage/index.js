import React, { useState } from 'react';
import CartProduct from '../../components/CartProduct';
import './style.css';
import Summary from '../../components/Summary';
import Navbar from '../../components/CartSlider';
import { items } from '../../data';
import PriceContext from '../../contexts/PriceContext';

function MyCartPage() {
  const totalPrice = items.reduce((a, b) => a + b.price, 0);
  const [price, setPrice] = useState(totalPrice);
  const [shipActiveVal, setShipActiveVal] = useState(false);
  const [delivVal, setDelivVal] = useState('');

  return (
    <>
      <header className="header">
        HEADER
        <Navbar />
      </header>
      <div className="layout-wrap">CONTINUE SHOPPING</div>
      <div className="center">
        <div className="main-side-wrapper">
          <main className="cart-content-wrap">
            {items.map((item) => {
              return (
                <CartProduct
                  key={item.id}
                  image={item.image}
                  titl={item.title}
                  subtitle={item.subtitle}
                  price={item.price}
                />
              );
            })}
          </main>
          <PriceContext.Provider
            value={{
              price: price,
              setPrice: setPrice,
              shipActiveVal: shipActiveVal,
              setShipActiveVal: setShipActiveVal,
              delivVal: delivVal,
              setDelivVal: setDelivVal,
            }}
          >
            <Summary totalPrice={totalPrice} />
          </PriceContext.Provider>
        </div>
      </div>

      <footer className="footer">NEWSLETTERS ADVERTISMENTS</footer>
      <footer className="footer">FOOOTER</footer>
    </>
  );
}
export default MyCartPage;
