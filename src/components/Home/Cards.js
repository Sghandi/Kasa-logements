import React from 'react';
import Card from './Card'; 
// import { Link } from 'react-router-dom'; 
import propertiesData from './location.json';

function HomePage() {
  return (
    <div className="home-page">
      {propertiesData.map((property, index) => (
        <Card
          key={property.id}
          title={property.title}
          imageSrc={property.cover}
          id={property.id} 
        />
      ))}
    </div>
  );
}


export default HomePage;


