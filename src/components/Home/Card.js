import React from 'react';
import './Card.scss';

function Card({ title, imageSrc }) {
  return (
    <div className="card">
      <a href="/Location/:id">
      <img src={imageSrc} alt={title} className="card-image"/>
      <h2 className="card-title">{title}</h2>
      </a>
    </div>
  );
}

export default Card;