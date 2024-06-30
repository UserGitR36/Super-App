import React, { useState, useEffect, useRef } from 'react';
import './Timercard.css';

const TimerCard = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        if (hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(timerRef.current);
          setIsRunning(false);
        } else {
          if (seconds === 0) {
            if (minutes === 0 && hours > 0) {
              setHours((prev) => prev - 1);
              setMinutes(59);
              setSeconds(59);
            } else if (minutes > 0) {
              setMinutes((prev) => prev - 1);
              setSeconds(59);
            }
          } else {
            setSeconds((prev) => prev - 1);
          }
        }
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isRunning, hours, minutes, seconds]);

  const handleStart = () => {
    if (hours !== 0 || minutes !== 0 || seconds !== 0) {
      setIsRunning(true);
    }
  };

  const handleIncrement = (type) => {
    if (type === 'hours') setHours((prev) => prev + 1);
    if (type === 'minutes') setMinutes((prev) => prev + 1);
    if (type === 'seconds') {
      if (seconds < 59) {
        setSeconds((prev) => prev + 1);
      } else {
        setSeconds(0);
        if (minutes < 59) {
          setMinutes((prev) => prev + 1);
        } else {
          setMinutes(0);
          setHours((prev) => prev + 1);
        }
      }
    }
  };

  const handleDecrement = (type) => {
    if (type === 'hours' && hours > 0) setHours((prev) => prev - 1);
    if (type === 'minutes' && minutes > 0) setMinutes((prev) => prev - 1);
    if (type === 'seconds' && seconds > 0) setSeconds((prev) => prev - 1);
  };

  return (
    <div className="timer-section">
      <div className="circle">
        <div className="time">
          {String(hours).padStart(2, '0')}:
          {String(minutes).padStart(2, '0')}:
          {String(seconds).padStart(2, '0')}
        </div>
      </div>
      <div className="time-controls">
        <div className="time-control">
          <span>Hours</span>
          <button onClick={() => handleIncrement('hours')}>▲</button>
          <span>{String(hours).padStart(2, '0')}</span>
          <button onClick={() => handleDecrement('hours')}>▼</button>
        </div>
        <div className="time-control">
          <span>Minutes</span>
          <button onClick={() => handleIncrement('minutes')}>▲</button>
          <span>{String(minutes).padStart(2, '0')}</span>
          <button onClick={() => handleDecrement('minutes')}>▼</button>
        </div>
        <div className="time-control">
          <span>Seconds</span>
          <button onClick={() => handleIncrement('seconds')}>▲</button>
          <span>{String(seconds).padStart(2, '0')}</span>
          <button onClick={() => handleDecrement('seconds')}>▼</button>
        </div>
      </div>
      <button className="start-button" onClick={handleStart}>
        Start
      </button>
    </div>
  );
};

export default TimerCard;
