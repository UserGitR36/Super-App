import React from 'react';
import './Movies.css';
import logoimage141 from '../assets/logoimage 141.png';

const MoviesData = {
  Action: [
    {
      backdrop_path: "https://image.tmdb.org/t/p/original/5Zv5KmgZzdIvXz2KC3n0MyecSNL.jpg",
      id: 634528,
      original_language: "en",
      title: "The Marksman",
      img: "https://image.tmdb.org/t/p/original/6vcDalR50RWa309vBH1NLmG2rjQ.jpg"
    },
    {
      backdrop_path: "https://image.tmdb.org/t/p/original/jnq4fV53Px9HvUZD2bQIxtGSwS7.jpg",
      id: 644083,
      original_language: "en",
      title: "Twist",
      img: "https://image.tmdb.org/t/p/original/29dCusd9PwHrbDqzxNG35WcpZpS.jpg"
      
    },
    {
      backdrop_path: "https://image.tmdb.org/t/p/original/uQtqiAu2bBlokqjlURVLEha6zoi.jpg",
      id: 544401,
      original_language: "en",
      title: "Cherry",
      img: "https://image.tmdb.org/t/p/original/pwDvkDyaHEU9V7cApQhbcSJMG1w.jpg"
    },
    {
      backdrop_path: "https://image.tmdb.org/t/p/original/6TPZSJ06OEXeelx1U1VIAt0j9Ry.jpg",
      id: 587996,
      original_language: "es",
      title: "Below Zero",
      img: "https://image.tmdb.org/t/p/original/dWSnsAGTfc8U27bWsy2RfwZs0Bs.jpg"
    },
  ],
  Thriller: [
    {  
      backdrop_path: "https://image.tmdb.org/t/p/original/6zbKgwgaaCyyBXE4Sun4oWQfQmi.jpg",
      id: 615457,
      original_language: "en",
      title: 'Nobody',
      img: 'https://image.tmdb.org/t/p/original/oBgWY00bEFeZ9N25wWVyuQddbAo.jpg' },

    {  
      backdrop_path: "https://image.tmdb.org/t/p/original/vfuzELmhBjBTswXj2Vqxnu5ge4g.jpg",
      id: 602269,
      original_language: "en",
      title: 'The Little Things',
      img: 'https://image.tmdb.org/t/p/original/c7VlGCCgM9GZivKSzBgzuOVxQn7.jpg' },

    { 
      backdrop_path: "https://image.tmdb.org/t/p/original/fX8e94MEWSuTJExndVYxKsmA4Hw.jpg",
      id: 604822,
      original_language: "zh",
      original_title: "急先锋",
      title: 'Vanguard',
      img: 'https://image.tmdb.org/t/p/original/mKvw1Ic9enfFlCPBNJGiejRPMUO.jpg' },

    {    
      backdrop_path: "https://image.tmdb.org/t/p/original/jiqD14fg7UTZOT6qgvzTmfRYpWI.jpg",
      id: 495764,
      original_language: "en",  
      title: 'Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)',
      img: 'https://image.tmdb.org/t/p/original/h4VB6m0RwcicVEZvzftYZyKXs6K.jpg' },

  ],
  Horror: [
    {  
      backdrop_path: "https://image.tmdb.org/t/p/original/54yOImQgj8i85u9hxxnaIQBRUuo.jpg",
      id: 539885,
      original_language: "en",
      title: 'Ava',
      img: 'https://image.tmdb.org/t/p/original/qzA87Wf4jo1h8JMk9GilyIYvwsA.jpg' },

    { "backdrop_path": "https://image.tmdb.org/t/p/original/2M2JxEv3HSpjnZWjY9NOdGgfUd.jpg",
      "id": 553604,
      "original_language": "en",
      title: 'Honest Thief',
      img: 'https://image.tmdb.org/t/p/original/zeD4PabP6099gpE0STWJrJrCBCs.jpg' },

    { "backdrop_path": "https://image.tmdb.org/t/p/original/dYCWUAidqgakGETwZkfGxU7CWhL.jpg",
      "id": 606523,
      "original_language": "ko",
      "original_title": "낙원의 밤",
      title: 'Night in Paradise',
      img: 'https://image.tmdb.org/t/p/original/dYCWUAidqgakGETwZkfGxU7CWhL.jpg' },

    { "backdrop_path": "https://image.tmdb.org/t/p/original/ne4QPHn56Z1vxk6iKJKvDnmNI9Y.jpg",
      "id": 611914,
      "original_language": "en",
      title: 'The Courier',
      img: 'https://image.tmdb.org/t/p/original/cmC7bJZ5sCzx9ZsrlXOrYJfYtLc.jpg' },
  ],
};

const Movies = () => {
  return (
    <div className="movies-section">
      <header className="movies-header">
        <h1>Super App</h1>
        <img src={logoimage141} alt="logo" className="logo-image" />
      </header>
      <h2>Entertainment according to your choice</h2>
      {Object.keys(MoviesData).map((category) => ( 
        <div key={category} className="movie-category">
          <h3>{category}</h3>
          <div className="movie-grid">
            {MoviesData[category].map((movie) => (
              <div key={movie.title} className="movie-card">
                <img src={movie.img} alt={movie.title} />
                <p>{movie.title}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Movies;

















