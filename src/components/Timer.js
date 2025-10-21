import React from 'react';
import './Timer.css';

const Timer = ({ timeLeft }) => {
  const getTimerColor = (time) => {
    if (time <= 10) return '#ff6363';
    if (time <= 20) return '#ffa726';
    return '#00d4aa';
  };

  const getTimerBackground = (time) => {
    if (time <= 10) return 'rgba(255, 99, 99, 0.1)';
    if (time <= 20) return 'rgba(255, 167, 38, 0.1)';
    return 'rgba(0, 212, 170, 0.1)';
  };

  const getTimerBorder = (time) => {
    if (time <= 10) return 'rgba(255, 99, 99, 0.3)';
    if (time <= 20) return 'rgba(255, 167, 38, 0.3)';
    return 'rgba(0, 212, 170, 0.3)';
  };

  return (
    <div 
      className="timer-container"
      style={{
        color: getTimerColor(timeLeft),
        background: getTimerBackground(timeLeft),
        borderColor: getTimerBorder(timeLeft)
      }}
    >
      <div className="timer-icon">⏱️</div>
      <div className="timer-text">
        <div className="timer-value">{timeLeft}</div>
        <div className="timer-label">segundos</div>
      </div>
    </div>
  );
};

export default Timer;
