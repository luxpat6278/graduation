// src/components/Header.tsx
import React, { useState } from 'react';
import "./Header.css";

const Header: React.FC = () => {
    const [loaded, setLoaded] = useState(false);
    return (
        <header className="header">
            <img
                src="/photo.jpg"
                alt="Классное фото"
                className={`header-photo${loaded ? ' loaded' : ''}`}
                onLoad={() => setLoaded(true)}
            />
            <div className="header-text">
                <p className="h__txt">11 «А» класс</p>
                <p className="h__txt">Выпускной</p>
                <p className="h__txt">21.06.2025</p>
            </div>
        </header>
    );
};

export default Header;
