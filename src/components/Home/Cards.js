import React from 'react';
import Card from './Card'; 
import propertiesData from './location.json';

function HomePage() {
  return (
    <div className="home-page">
      {propertiesData.map((property, index) => (
        <Card
          key={property.id}
          title={property.title}
          imageSrc={property.cover}
          description={property.description}
        />
      ))}
    </div>
  );
}

export default HomePage;
