// src/pages/WriteScreen.tsx
import React, { useState } from 'react';
import './WriteScreen.css'; // Crie este arquivo de estilo

const WriteScreen: React.FC = () => {
  const [text, setText] = useState('');
  const [timerActive, setTimerActive] = useState(false);
  const [time, setTime] = useState(0); // Em segundos

  // Lógica básica do timer (ainda não funcional completa)
  // useEffect(() => {
  //   let interval: NodeJS.Timeout | null = null;
  //   if (timerActive) {
  //     interval = setInterval(() => {
  //       setTime((prevTime) => prevTime + 1);
  //     }, 1000);
  //   } else if (!timerActive && time !== 0) {
  //     if (interval) clearInterval(interval);
  //   }
  //   return () => { if (interval) clearInterval(interval); };
  // }, [timerActive, time]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleSubmit = () => {
    alert("Texto enviado para análise (em breve!): " + text);
    // Aqui você enviaria o texto para a API de IA
  };

  return (
    <div className="write-screen-container">
      <h2>Tela de Escrita Livre</h2>
      <div className="timer-area">
        <span>Tempo: {formatTime(time)}</span>
        <button onClick={() => setTimerActive(!timerActive)}>
          {timerActive ? 'Pausar' : 'Iniciar Timer'}
        </button>
        <button onClick={() => setTime(0)}>Resetar</button>
      </div>

      <textarea
        className="writing-area"
        placeholder="Comece a escrever seus pensamentos aqui..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={15}
      />

      <button className="submit-button" onClick={handleSubmit}>
        Analisar e Criar Mapa Mental
      </button>
    </div>
  );
};

export default WriteScreen;