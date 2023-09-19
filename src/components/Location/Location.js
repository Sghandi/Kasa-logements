import React, { useState, useEffect } from 'react';
import './Location.scss'
import { useParams } from 'react-router-dom';
import locationData from '../../Data/location.json';
import Collapse from './Collapse';
import { useNavigate } from "react-router-dom";
import RatingStars from './Stars';

function Location() {
  const { id } = useParams(); 
  const card = locationData.find((card) => card.id === id);
  const images = card ? card.pictures : [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (!card || images.length === 0) {
      navigate("/NotFound");
    }
  }, [card, images, navigate]);

  if (!card) {
    return null;
  }

  const PreviousImage = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? images.length - 1 : prevIndex - 1;
      console.log('Previous Image: ', newIndex);
      return newIndex;
    });
  };

  const NextImage = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === images.length - 1 ? 0 : prevIndex + 1;
      console.log('Next Image: ', newIndex);
      return newIndex;
    });
  };

  const totalImages = images.length;
  const currentImageNumber = currentIndex + 1;

  return (
    <div className='location-info'>
      <div className="image-container">
        {totalImages > 1 && (
          <div className="image-with-navigation">
            <button
              className="arrow-button-left"
              onClick={PreviousImage}
            >
              <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
              </svg>
            </button>
            <img src={images[currentIndex]} alt={`Image ${currentIndex}`} />
            <button
              className="arrow-button-right"
              onClick={NextImage}
            >
              <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
              </svg>
            </button>
            <div className="image-indicator">
              {currentImageNumber}/{totalImages}
            </div>
          </div>
        )}
        {totalImages === 1 && (
          <div className="single-image">
            <img src={images[0]} alt={`Image 0`} />
          </div>
        )}
      </div>
    
<div className="host-container">
      <h1>{card.title}</h1>
      <div className='host-div'>
        <p>{card.host.name}</p>
        <img src={card.host.picture} alt={`Image de ${card.host.name}`} />
        <RatingStars rating={card.rating} />
      </div>
    </div>
      <p>{card.location}</p>
      <div className='tags-container'>
        {card.tags.map((tag, index) => (
          <button key={index}>{tag}</button>
        ))}
      </div>
      <div className="collapsible-container">
        <div className='test'>
        <Collapse label="Description" >
          {card.description}
        </Collapse>
        </div>
        <div className='test2'>
        <Collapse label="Equipements" >
          <ul>
            {card.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
        </div>
      </div>
    </div>
  );
}

export default Location;
