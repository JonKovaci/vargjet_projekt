import React, { useState, useEffect } from 'react';
import { Button, Alert, ProgressBar } from 'react-bootstrap';

const levels = [
  { id: 1, name: "Lehtë", sequence: [2, 4, 6, 8], answer: 10 },
  { id: 2, name: "Mesatar", sequence: [1, 4, 9, 16], answer: 25 },
  { id: 3, name: "I vështirë", sequence: [1, 1, 2, 3, 5], answer: 8 }
];

const SequenceGame = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('');
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    const timer = timeLeft > 0 && setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const checkAnswer = () => {
    if (parseInt(userAnswer) === levels[currentLevel].answer) {
      setScore(score + 10);
      setMessage('Përgjigje e saktë!');
      setTimeout(() => {
        setCurrentLevel((currentLevel + 1) % levels.length);
        setMessage('');
        setUserAnswer('');
        setTimeLeft(30);
      }, 1000);
    } else {
      setMessage('Përgjigje e gabuar, provo përsëri!');
    }
  };

  return (
    <div className="mt-4 p-3 border rounded">
      <h3>Loja e Vargjeve Numerike</h3>
      <div className="d-flex justify-content-between mb-3">
        <h5>Niveli: {levels[currentLevel].name}</h5>
        <h5>Pikët: {score}</h5>
      </div>
      
      <ProgressBar now={(timeLeft / 30) * 100} label={`${timeLeft}s`} />

      <div className="my-4">
        <h4>
          {levels[currentLevel].sequence.join(', ')}, ?
        </h4>
        <input
          type="number"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          className="form-control my-2"
        />
        <Button onClick={checkAnswer} className="mt-2">
          Kontrollo
        </Button>
      </div>

      {message && (
        <Alert variant={message.includes('saktë') ? 'success' : 'danger'}>
          {message}
        </Alert>
      )}
    </div>
  );
};

export default SequenceGame;