import React from 'react';
import './Notescard.css';

const NotesCard = ({ newNote, setNewNote }) => {
  return (
    <div className="notes-card">
      <h2>All Notes</h2>
      <textarea 
        value={newNote} 
        onChange={(e) => setNewNote(e.target.value)} 
        placeholder="Type your notes here..." // Add a placeholder attribute
      />
    </div>
  );
};

export default NotesCard;