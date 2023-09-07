import React from 'react'
import './Location.scss'
import { useParams } from 'react-router-dom';
import locationData from './location.json';
import Collapsible from '../About/Collapsible';


function Location() {
    const { id } = useParams(); 
    const card = locationData.find((card) => card.id === id);
  
    return (
      <div className='location-info'>
        <h1>{card.title}</h1>
        <p>{card.location}</p>
        <p>{card.tags}</p>
        <p>{card.description}</p>
        <p>{card.equipments}</p>
        <Collapsible/>
        <Collapsible/>
      </div>
    );
  }
  
  export default Location;