// src/components/celendarblock/CB.tsx
import React from 'react';
import ICalendarLink from 'react-icalendar-link';
import './CB.css';

const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
const dates = [
  '', '', '', '', '', '', '01',
  '02', '03', '04', '05', '06', '07',
  '08', '09', '10', '11', '12', '13', '14',
  '15', '16', '17', '18', '19', '20', '21',
  '22', '23', '24', '25', '26', '27', '28',
  '29', '30'
];

const event = {
  title: 'Выпускной 11 «А» класса',
  description: 'Приглашаем вас на выпускной вечер 21 июня 2025 в 18:00',
  startTime: '2025-06-21T18:00:00+06:00',
  endTime: '2025-06-21T22:00:00+06:00',
  location: 'г. Астана, ул. Туран 27, ресторан “Portofino”',
};

const CalendarBlock: React.FC = () => (
  <section className="calendar-block">
    <h2>Выпускной состоится:</h2>
    <p className="date-title">
      21 июня 2025 года<br />
      Начало в 18:00
    </p>

    <div className="calendar">
      <div className="calendar-header">
        {days.map((day, i) => (
          <div key={i} className="day-name">{day}</div>
        ))}
      </div>
      <div className="calendar-grid">
        {dates.map((date, i) => (
          <div
            key={i}
            className={`date-cell ${date === '21' ? 'highlight' : ''}`}
          >
            {date}
          </div>
        ))}
      </div>
    </div>

    <div className="add-calendar-button">
      <ICalendarLink event={event}>
        Добавить в календарь
      </ICalendarLink>
    </div>
  </section>
);

export default CalendarBlock;
