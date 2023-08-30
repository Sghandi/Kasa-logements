import React from 'react';
import './Card.css';

function Card({ title, imageSrc, description }) {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} className="card-image" />
      {/* <div className='overlay'> */}
      <h2 className="card-title">{title}</h2>
      {/* </div> */}
      {/* <p className="card-description">{description}</p> */}
    </div>
  );
}

export default Card;