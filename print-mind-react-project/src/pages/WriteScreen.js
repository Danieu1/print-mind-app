import React, { useState, useEffect } from 'react';
import './WriteScreen.css'; // Vamos criar este arquivo de estilo

const WriteScreen = () => {
  const [text, setText] = useState('');
  const [timerActive, setTimerActive] = useState(false);
  const [time, setTime] = useState(0); // Em segundos

  useEffect(() => {
    let interval = null;
    if (timerActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!timerActive && time !== 0) {
      clearInterval(interval);
    }
    // Limpa o intervalo quando o componente é desmontado ou o timerActive muda
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerActive, time]); // Adicione time às dependências para garantir que o cleanup funcione corretamente

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleSubmit = () => {
    alert("Texto enviado para análise (em breve!): " + text);
    // Aqui você enviaria o texto para a API de IA
    // Por enquanto, apenas um alert para simular
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