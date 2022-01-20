import React from "react";
import CartProduct from "../../components/CartProduct";
import "./style.css";
import { MdOutlineContentCopy } from "react-icons/md";
import Summary from "../../components/Summary";

function MyCartPage() {
  return (
    <>
      <header className='header'> HEADER</header>
      <div className='layout-wrap'>CONTINUE SHOPPING</div>
      <div className='center'>
        {" "}
        <div className='main-side-wrapper'>
          {/* {
          <h5 className='copy-basket'>
            <MdOutlineContentCopy /> copy your basket
          </h5>
        } */}
          <main className='cart-content-wrap'>
            {<CartProduct />}
            {<CartProduct />}
            {<CartProduct />}
            {<CartProduct />}
            {<CartProduct />}
            {<CartProduct />}
          </main>
          <Summary />
        </div>
      </div>

      <footer className='footer'>NEWSLETTERS ADVERTISMENTS</footer>
      <footer className='footer'>FOOOTER</footer>
    </>
  );
}
export default MyCartPage;
