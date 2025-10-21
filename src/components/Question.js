import React from 'react';
import './Question.css';

const Question = ({ 
  question, 
  onAnswer, 
  selectedAnswer, 
  showFeedback,
  isCorrect,
  timeLeft 
}) => {
  const handleOptionClick = (optionIndex) => {
    if (selectedAnswer === null) {
      onAnswer(optionIndex);
    }
  };

  return (
    <div className="question-container">
      <div className="question-header">
        <div className="question-number">
          Pergunta Aleatória
        </div>
        <div className="question-timer">
          <span className={`timer ${timeLeft <= 10 ? 'timer-warning' : ''}`}>
            {timeLeft}s
          </span>
        </div>
      </div>

      <div className="question-content">
        <h2 className="question-text">{question.question}</h2>
        
        <div className="options-container">
          {question.options.map((option, index) => (
            <button
              key={index}
              className={`option ${selectedAnswer === index ? 'selected' : ''} ${
                showFeedback && index === question.correctAnswer ? 'correct' : ''
              } ${
                showFeedback && selectedAnswer === index && !isCorrect ? 'incorrect' : ''
              }`}
              onClick={() => handleOptionClick(index)}
              disabled={selectedAnswer !== null}
            >
              <span className="option-letter">
                {String.fromCharCode(65 + index)}
              </span>
              <span className="option-text">{option}</span>
            </button>
          ))}
        </div>

        {showFeedback && (
          <div className="answer-feedback">
            <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
              <div className="feedback-icon">
                {isCorrect ? '✓' : '✗'}
              </div>
              <div className="feedback-text">
                {isCorrect 
                  ? 'Correto! Parabéns!' 
                  : 'Incorreto. A resposta correta é:'
                }
              </div>
            </div>
            
            {!isCorrect && (
              <div className="correct-answer">
                <strong>Resposta correta:</strong> {question.options[question.correctAnswer]}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Question;
