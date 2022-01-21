import React from "react";
import "./style.css"

const SingleCard = (props) => {
  const { id, title, src, description, setCompare } = props;
  const handleOnClick = (id) => setCompare((prev) => [...prev, props]);

  return (
    <div className='card-grid'>
      <div className='card-body'>
        <img src={src} className='card__image' alt='' />
        <h2 className='card-title'>{title}</h2>
      </div>
      <p className='card-description'>{description}</p>
      <button className="btn" onClick={() => handleOnClick(id)}>Compare</button>
    </div>
  );
};

export default SingleCard;
