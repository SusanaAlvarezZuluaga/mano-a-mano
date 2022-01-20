import React from "react";
// import pic from "../images/pic.jpg";

function CartProduct({ title, subtitle, image, price }) {
  return (
    <>
      <div className='product-compo'>
        <img className='img-product' alt='kitchen tap' src={image}></img>
        <div className='title-item'>
          <h5>{title}</h5>
          <h6 className='subtitle'>{subtitle}</h6>
        </div>

        <input className='input-num' defaultValue='1' type='number' />
        <h4 className='price'>${price}</h4>
        <button className='aside-btn'>Set aside for later</button>
        <button className='delete-btn'>Delete</button>
      </div>
    </>
  );
}

export default CartProduct;
