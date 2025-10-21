import React from 'react';
import lumiaLogo from '../assets/lumia-ico.webp';
import './Score.css';

const Score = ({ questions, answers, onRestart, onReset }) => {
  const correctAnswers = answers.filter(answer => answer.isCorrect).length;
  const totalQuestions = questions.length;
  const scorePercentage = Math.round((correctAnswers / totalQuestions) * 100);
  const totalTime = answers.reduce((total, answer) => total + answer.timeSpent, 0);
  const averageTime = Math.round(totalTime / totalQuestions);

  const getScoreMessage = (percentage) => {
    if (percentage >= 90) return "Excelente! Você é um expert!";
    if (percentage >= 70) return "Muito bom! Continue assim!";
    if (percentage >= 50) return "Bom trabalho! Você está no caminho certo!";
    if (percentage >= 30) return "Não desista! Pratique mais!";
    return "Continue estudando! Você vai melhorar!";
  };

  const getScoreColor = (percentage) => {
    if (percentage >= 70) return "#00d4aa";
    if (percentage >= 50) return "#ffa726";
    return "#ff6363";
  };

  return (
    <div className="score-container">
      <div className="score-header">
        <div className="lumia-logo-result">
          <img src={lumiaLogo} alt="Lumia Logo" className="lumia-logo-result-img" />
          <div className="logo-content">
            <h1 className="logo-text">Lum.IA</h1>
            <div className="logo-subtitle">Quiz Finalizado</div>
          </div>
        </div>
        <h1 className="score-title">Parabéns!</h1>
        <p className="score-subtitle">Veja como você se saiu no quiz Lumia</p>
      </div>

      <div className="score-content">
        <div className="score-main">
          <div className="score-circle">
            <div 
              className="score-percentage"
              style={{ color: getScoreColor(scorePercentage) }}
            >
              {scorePercentage}%
            </div>
            <div className="score-label">Pontuação</div>
          </div>
          
          <div className="score-message">
            <h2 style={{ color: getScoreColor(scorePercentage) }}>
              {getScoreMessage(scorePercentage)}
            </h2>
          </div>
        </div>

        <div className="score-stats">
          <div className="stat-card">
            <div className="stat-icon">✓</div>
            <div className="stat-content">
              <div className="stat-value">{correctAnswers}</div>
              <div className="stat-label">Respostas Corretas</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">✗</div>
            <div className="stat-content">
              <div className="stat-value">{totalQuestions - correctAnswers}</div>
              <div className="stat-label">Respostas Incorretas</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">⏱️</div>
            <div className="stat-content">
              <div className="stat-value">{averageTime}s</div>
              <div className="stat-label">Tempo Médio</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">📊</div>
            <div className="stat-content">
              <div className="stat-value">{totalQuestions}</div>
              <div className="stat-label">Total de Perguntas</div>
            </div>
          </div>
        </div>

        <div className="detailed-results">
          <h3>Resultado Detalhado</h3>
          <div className="results-list">
            {questions.map((question, index) => {
              const answer = answers[index];
              const isCorrect = answer?.isCorrect;
              
              return (
                <div key={question.id} className={`result-item ${isCorrect ? 'correct' : 'incorrect'}`}>
                  <div className="result-question">
                    <span className="result-number">{index + 1}.</span>
                    <span className="result-text">{question.question}</span>
                  </div>
                  <div className="result-answer">
                    <strong>Sua resposta:</strong> {answer?.selectedAnswer !== undefined ? question.options[answer.selectedAnswer] : 'Não respondida'}
                  </div>
                  {!isCorrect && (
                    <div className="result-correct">
                      <strong>Resposta correta:</strong> {question.options[question.correctAnswer]}
                    </div>
                  )}
                  <div className="result-explanation">
                    <strong>Explicação:</strong> {question.explanation}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="score-actions">
          <button className="btn-primary" onClick={onRestart}>
            Refazer Quiz
          </button>
          <button className="btn-secondary" onClick={onReset}>
            Voltar ao Início
          </button>
        </div>
      </div>
    </div>
  );
};

export default Score;
