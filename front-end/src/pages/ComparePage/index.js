import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const ComparePage = ({ compare }) => {
  console.log({ compare });

  return (
    <>
      <Link to='/'>
        <button>Back</button>
      </Link>

      <div>
        {compare.map(({ id, title, src, specs }) => (
          <div key={id} className='product-compare'>
            <div className='product-name'>{title}</div>
            <img className='image-1' src={src} alt='' />
            <br></br>
            <img className='image-2' src={specs} alt='' />
          </div>
        ))}
      </div>
    </>
  );
};

export default ComparePage;
