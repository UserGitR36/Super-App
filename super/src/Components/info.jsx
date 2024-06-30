import React, { useState, useEffect } from 'react';
import './info.css';
import WeatherCard from './Weathercard';
import NewsCard from './Newscard';
import TimerCard from './Timercard';
import NotesCard from './Notescard';
import UserProfileCard from './UserProfilecard';
import Movies from './Movies';


const Info = () => {
  const [weather, setWeather] = useState(null);
  const [news, setNews] = useState([]);
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [timer, setTimer] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    const savedUserDetails = JSON.parse(localStorage.getItem('userDetails'));
    setUserDetails(savedUserDetails);
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
    const timerId = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  const addNote = () => {
    if (newNote) {
      const updatedNotes = [...notes, newNote];
      setNotes(updatedNotes);
      localStorage.setItem('notes', JSON.stringify(updatedNotes));
      setNewNote('');
    }
  };

  const handleStartTimer = () => {
    setTimerRunning(true);
    setTimeout(() => {
      setTimerRunning(false);
      alert('Time is up!');
    }, timer * 1000);
  };

  const handleBrowseClick = () => {
    console.log('Browse button clicked');
  };

  return (
    <div className="info-page">
      <div className="info-section">
        <UserProfileCard userDetails={userDetails} />
        <WeatherCard weather={weather} currentTime={currentTime} />
        <TimerCard
          timer={timer}
          setTimer={setTimer}
          handleStartTimer={handleStartTimer}
          timerRunning={timerRunning}
        />
      </div>
      <div className="info-section">
        <NotesCard notes={notes} newNote={newNote} setNewNote={setNewNote} addNote={addNote} />
      </div>
      <div className="info-section">
        <NewsCard news={news} />
        <button onClick={handleBrowseClick} className="browse-button">Browse</button>
      </div>
    </div>
  );
};

export default Info;

