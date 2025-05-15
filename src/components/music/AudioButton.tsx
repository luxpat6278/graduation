// src/components/AudioButton.tsx
import React, { useRef, useState } from 'react';
import './AudioButton.css';

interface AudioButtonProps {
  audioSrc: string;
  ringSrc: string;   // Внешнее вращающееся кольцо
  logoSrc: string;   // Внутренний вращающийся логотип
  size?: number;
}

const AudioButton: React.FC<AudioButtonProps> = ({
  audioSrc,
  ringSrc,
  logoSrc,
  size = 140,
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  };

  return (
    <div
      className={`audio-btn ${playing ? 'playing' : ''}`}
      style={{ width: size, height: size }}
      onClick={toggle}
    >
      <img src={ringSrc} className="audio-ring" alt="Ring" />
      <img src={logoSrc} className="audio-logo" alt="Logo" />
      <audio ref={audioRef} src={audioSrc} />
    </div>
  );
};

export default AudioButton;
