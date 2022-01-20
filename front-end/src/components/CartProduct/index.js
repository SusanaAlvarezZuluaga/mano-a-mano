import React from "react";
import pic from "../images/pic.jpg";

function CartProduct() {
  return (
    <>
      <div className='product-compo'>
        <img className='img-product' alt='kitchen tap' src={pic}></img>
        <div>
          <h5>Sauber Kitchen Mixer Tap Dual Spout with Pull Out</h5>
          <h6 className='subtitle'>Spray Sold by Plumbworld</h6>
        </div>

        <input className='input-num' defaultValue='1' type='number' />
        <div className='price'>$47.47</div>
        <button className='aside-btn'>Set aside for later</button>
        <button className='delete-btn'>Delete</button>
      </div>
    </>
  );
}

export default CartProduct;
