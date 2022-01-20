import React from "react";

const SingleCard = (props) => {
  const { id, title, src, description, setCompare } = props;
  const handleOnClick = (id) => setCompare((prev) => [...prev, props]);

  return (
    <div className='card-grid' onClick={() => handleOnClick(id)}>
      <div className='card-body'>
        <img src={src} className='card__image' alt='' />
        <h2 className='card__title'>{title}</h2>
      </div>
      <p className='card__description'>{description}</p>
    </div>
  );
};

export default SingleCard;
