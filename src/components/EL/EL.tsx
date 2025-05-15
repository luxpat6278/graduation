// src/components/EventLocation/EventLocation.tsx
import React from 'react';
import './EL.css';

const EventLocation: React.FC = () => {
    return (
        <div className="event-location">
            <h3>Место проведения:</h3>
            <p>г. Астана, ул. Туран 27, ресторан “Portofino”</p>
            <a
                href="https://2gis.kz/astana/firm/70000001022291208?m=71.409194%2C51.140698%2F16"
                target="_blank"
                rel="noopener noreferrer"
                className="location-button"
            >
                Открыть в 2GIS
            </a>
        </div>
    );
};

export default EventLocation;