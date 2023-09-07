import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

function Card({ title, imageSrc, id }) {
  return (
    <div className="card">
      <Link to={`/Location/${id}`}>
        <div className="overlay">
      <img src={imageSrc} alt={title} className="card-image"/>
      </div>
      <h2 className="card-title">{title}</h2>
      
      </Link>
    </div>
  );
}

export default Card;