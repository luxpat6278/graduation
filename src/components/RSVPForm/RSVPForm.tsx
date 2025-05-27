import React, { useState } from 'react';
import './RSVPForm.css';

const API_URL = import.meta.env.VITE_API_URL;

type Attendance = 'yes' | 'no';

const RSVPForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [attendance, setAttendance] = useState<Attendance | ''>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!name || !email || !attendance) {
      setError('Пожалуйста, заполните все поля.');
      return;
    }
    try {
      console.log('Отправка на URL:', `${API_URL}/rsvp`); 
      const res = await fetch(`${API_URL}/rsvp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ name, email, attendance }),
      });
      const body = await res.json();
      if (res.ok) setSubmitted(true);
      else setError(body.error || 'Ошибка отправки');
    } catch (err: any) {
      setError('Сетевая ошибка.');
    }
  };

  if (submitted) return <p>Спасибо за ваш ответ!</p>;
  return (
    <form onSubmit={handleSubmit} className="rsvp-form">
      <h3>Пожалуйста, подтвердите участие</h3>
      {error && <div className="error">{error}</div>}
      <input
        type="text"
        placeholder="Имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="radio-group">
        <label>
          <input
            type="radio"
            name="attendance"
            value="yes"
            checked={attendance === 'yes'}
            onChange={() => setAttendance('yes')}
          />
          Да
        </label>
        <label>
          <input
            type="radio"
            name="attendance"
            value="no"
            checked={attendance === 'no'}
            onChange={() => setAttendance('no')}
          />
          Нет
        </label>
      </div>
      <button type="submit">Отправить</button>
    </form>
  );
};

export default RSVPForm;
