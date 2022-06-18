import React from 'react';

export default function Card ({title, location, startDate, endDate, description, imageUrl}) {
    return (
        <div>
            <img src={imageUrl} alt={title} />
            {location}
            {startDate}
            {endDate}
            {description}
        </div>
    );
}