import React, { useState, useEffect } from 'react';
import Question from './Question';
import Score from './Score';
import ProgressBar from './ProgressBar';
import Timer from './Timer';
import lumiaLogo from '../assets/lumia-ico.webp';
import './Quiz.css';

const Quiz = ({ questions, onReset }) => {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [score, setScore] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Função para sortear uma pergunta aleatória
  const getRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
  };

  // Garantir que a pergunta seja sempre diferente da anterior
  const getNewRandomQuestion = () => {
    let newQuestion;
    do {
      newQuestion = getRandomQuestion();
    } while (currentQuestion && newQuestion.id === currentQuestion.id);
    return newQuestion;
  };

  // Inicializar com uma pergunta aleatória
  React.useEffect(() => {
    if (!currentQuestion) {
      setCurrentQuestion(getRandomQuestion());
    }
  }, [currentQuestion]);

  useEffect(() => {
    if (timeLeft > 0 && !showFeedback) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showFeedback) {
      handleAnswer(-1); // Timeout - no answer selected
    }
  }, [timeLeft, showFeedback]);

  const handleAnswer = (answerIndex) => {
    if (selectedAnswer !== null) return; // Previne múltiplas respostas
    
    setSelectedAnswer(answerIndex);
    const correct = answerIndex === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    
    if (correct) {
      setScore(score + 1);
    }
    setTotalAnswered(totalAnswered + 1);
    
    // Mostrar feedback com suspense
    setTimeout(() => {
      setShowFeedback(true);
    }, 500);
  };

  const handleNextQuestion = () => {
    setIsLoading(true);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setIsCorrect(false);
    setTimeLeft(30);
    
    // Simular carregamento e sortear nova pergunta
    setTimeout(() => {
      setCurrentQuestion(getNewRandomQuestion());
      setIsLoading(false);
    }, 1000);
  };

  if (isLoading) {
    return (
      <div className="quiz-container">
        <div className="loading-screen">
          <div className="lumia-logo-small">
            <img src={lumiaLogo} alt="Lumia Logo" className="lumia-logo-small-img" />
            <div className="logo-text-content">
              <span className="logo-text">Lum.IA</span>
              <span className="logo-subtitle">Quiz</span>
            </div>
          </div>
          <div className="loading-content">
            <div className="loading-spinner"></div>
            <h2>Preparando nova pergunta...</h2>
            <p>Sortendo uma nova questão para você!</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <div className="quiz-title">
          <div className="lumia-logo-small">
            <img src={lumiaLogo} alt="Lumia Logo" className="lumia-logo-small-img" />
            <div className="logo-text-content">
              <span className="logo-text">Lum.IA</span>
              <span className="logo-subtitle">Quiz</span>
            </div>
          </div>
          <h1>Quiz Contínuo</h1>
          <p>Teste seus conhecimentos com tecnologia Lumia</p>
        </div>
        <div className="quiz-stats">
          <div className="stat-item">
            <span className="stat-value">{score}</span>
            <span className="stat-label">Acertos</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{totalAnswered}</span>
            <span className="stat-label">Respondidas</span>
          </div>
          <Timer timeLeft={timeLeft} />
        </div>
      </div>

      <div className="quiz-content">
        {currentQuestion && (
          <Question
            question={currentQuestion}
            onAnswer={handleAnswer}
            selectedAnswer={selectedAnswer}
            showFeedback={showFeedback}
            isCorrect={isCorrect}
            timeLeft={timeLeft}
          />
        )}

        {showFeedback && (
          <div className="feedback-section">
            <div className="feedback-actions">
              <button 
                className="btn-primary" 
                onClick={handleNextQuestion}
              >
                Próxima Pergunta →
              </button>
              <button 
                className="btn-secondary" 
                onClick={onReset}
              >
                🏠 Voltar ao Início
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
