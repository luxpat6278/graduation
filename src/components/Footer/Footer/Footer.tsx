// src/components/Footer.tsx
import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black">
      <div className="container">
        <p className="text-sm">
          © {new Date().getFullYear()} Graduation Party. Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
