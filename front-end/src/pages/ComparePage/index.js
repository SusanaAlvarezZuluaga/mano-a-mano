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
          <div key={id} className='productCompare'>
            <div className='productName'>{title}</div>
            <img src={src} alt='' />
            <br></br>
            <img src={specs} alt='' />
          </div>
        ))}
      </div>
    </>
  );
};

export default ComparePage;
