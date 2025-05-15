// src/App.tsx
import React from 'react';
import { useLazyLoad } from './utils/useLazyLoad';
import './index.css';

import Header from './components/header/Header';
import AudioButton from './components/music/AudioButton';
import InvitationBlock from './components/main_txt/Main_txt';
import CalendarBlock from './components/celendarblock/CB';
import CountdownTimer from './components/GraduationDate/GraduationDate';
import EventLocation from './components/EL/EL';
import RSVPForm from './components/RSVPForm/RSVPForm';
import Footer from './components/Footer/Footer/Footer';



import musicFile from './assets/song.mp3';
import ringImage from './assets/LPG.png';
import logoImage from './assets/download.png';

const App: React.FC = () => {
  useLazyLoad();

  return (
    <main>
      <div className="lazy-item block">
        <Header />
      </div>

      <div className="lazy-item block">
        <AudioButton
          audioSrc={musicFile}
          ringSrc={ringImage}
          logoSrc={logoImage}
          size={140}
        />
      </div>

      <div className="lazy-item block">
        <InvitationBlock />
      </div>

      <div className="lazy-item block">
        <CalendarBlock />
      </div>

      <div className="lazy-item block">
        <EventLocation />
      </div>

      {/* Исправленный блок для таймера */}
      <div className="lazy-item block">
        <CountdownTimer />
      </div>

      <div className="lazy-item block">
        <RSVPForm />
      </div>

      <div className="lazy-item block">
        <Footer />
      </div>

    </main>
  );
};

export default App;

