import React from 'react';
import './404.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Page Not Found</h1>
      <a href="/" className="home-link">Go to Home Page</a>
      <img src="https://ibb.co/vJ6j9Ck" alt="Not Found" className="center-image" />
    </div>
  );
}

export default NotFound;




