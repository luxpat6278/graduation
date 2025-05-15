import React, { useEffect, useState } from 'react';
import './GraduationDate.css';
import backgroundImage from '../../assets/XXXL.png'; // путь к вашей фотографии

const targetDate = new Date('2025-06-21T18:00:00');

function getTimeRemaining() {
  const total = targetDate.getTime() - Date.now();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours   = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days    = Math.floor(total / (1000 * 60 * 60 * 24));
  return { days, hours, minutes, seconds };
}

const CountdownTimerFullWidth: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div
      className="countdown-bg full-width-bg"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="countdown-overlay">
        <div className="countdown-content">
          <h3>До выпускного вечера осталось:</h3>
          <div className="countdown-numbers">
            <div><span>{String(days).padStart(2,'0')}</span><small>дней</small></div>
            <div><span>{String(hours).padStart(2,'0')}</span><small>часов</small></div>
            <div><span>{String(minutes).padStart(2,'0')}</span><small>минут</small></div>
            <div><span>{String(seconds).padStart(2,'0')}</span><small>секунд</small></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimerFullWidth;
