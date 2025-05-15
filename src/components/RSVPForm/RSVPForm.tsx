// src/components/RSVPForm/RSVPForm.tsx
import React, { useState } from 'react';
import './RSVPForm.css';

const RSVPForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [attendance, setAttendance] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !attendance) return;

    try {
      const response = await fetch('http://localhost:3000/api/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          attendance
        })
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error('Ошибка при отправке RSVP');
      }
    } catch (err) {
      console.error('Ошибка сети:', err);
    }
  };

  return (
    <div className="rsvp-form">
      {submitted ? (
        <p>Спасибо за ваш ответ!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <h3>Просим подтвердить ваше участие в праздничном мероприятии.</h3>

          <input
            type="text"
            placeholder="Ваше имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Ваш Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="attendance"
                value="yes"
                checked={attendance === 'yes'}
                onChange={(e) => setAttendance(e.target.value)}
              />
              Да, конечно
            </label>

            <label>
              <input
                type="radio"
                name="attendance"
                value="no"
                checked={attendance === 'no'}
                onChange={(e) => setAttendance(e.target.value)}
              />
              Нет, не смогу
            </label>
          </div>

          <button type="submit">Отправить</button>
        </form>
      )}
    </div>
  );
};

export default RSVPForm;
