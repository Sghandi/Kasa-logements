import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

function Card({ title, imageSrc, id }) {
  const cardStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.5019607843)), url(${imageSrc})`,
    backgroundSize: 'cover',
  };

  return (
    <div className="card">
      <Link to={`/Location/${id}`}>
        <div className="card-image" style={cardStyle}></div>
      </Link>
      <h2 className="card-title">{title}</h2>
    </div>
  );
}

export default Card;
