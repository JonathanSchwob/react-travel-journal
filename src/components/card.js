import React from 'react';
import './Card.css';
import pin from '../location.png';


export default function Card ({title, location, startDate, endDate, description, imageUrl}) {
    return (
        <div className="card">
            <img src={imageUrl} alt={title} className="cardImage" />
            <div className="cardInfo">
                {title}
                <img src={pin} alt="pin" />
                <div className='country'>
                    {location}
                </div>
                {startDate}
                {endDate}
                {description}
            </div>
            
        </div>
    );
}