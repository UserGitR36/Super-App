import React, { useState, useEffect } from 'react';
import './Category.css'; 
import image2 from '../assets/image 2.png';
import image3 from '../assets/image 3.png';
import image4 from '../assets/image 4.png';
import image6 from '../assets/image 6.png';
import image7 from '../assets/image 7.png';
import image8 from '../assets/image 8.png';
import image9 from '../assets/image 9.png';
import image10 from '../assets/image 10.png';
import image11 from '../assets/image 11.png';

const categories = [
  { name: 'Action', image: image2 },
  { name: 'Drama',  image: image3 },
  { name: 'Romance',  image: image4 },
  { name: 'Thriller',  image: image6 },
  { name: 'Western',  image: image7 },
  { name: 'Horror',  image: image8 },
  { name: 'Fantasy',  image: image9 },
  { name: 'Music',  image: image10 },
  { name: 'Fiction', image: image11 },
];

const Category = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  
  useEffect(() => {
    const storedCategories = localStorage.getItem('selectedCategories');
    if (storedCategories) {
      setSelectedCategories(JSON.parse(storedCategories));
    }
  }, []); 
  
  useEffect(() => {
    localStorage.setItem('selectedCategories', JSON.stringify(selectedCategories));
  }, [selectedCategories]);

  const handleCategoryClick = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  const handleNextClick = () => {
    if (selectedCategories.length >= 3) {
      // Navigate to the next page
      console.log('/info');
    } else {
      alert('Minimum 3 categories required');
    }
  };

  return (
    <div className="category-page">
      <div className="left-section">
        <h2 className="heading">Super App</h2>
        <p className="subheading">
          Choose your <br />
          entertainment <br />
          category
        </p>
        <div className="selected-categories">
          {selectedCategories.map((category) => (
            <div key={category} className="category-chip">
              <span>{category}</span>
              <button onClick={() => handleCategoryClick(category)}>X</button>
            </div>
          ))}
        </div>
        {selectedCategories.length < 3 && (
          <p className="error-message">
            <span className="triangle">&#x26A0;</span> Minimum 3 categories
            required
          </p>
        )}
      </div>
      <div className="right-section">
        <div className="category-grid">
          {categories.map((category) => (
            <div
              key={category.name}
              className={`category-box ${category.name} ${selectedCategories.includes(category.name) ? 'selected' : ''}`}
              onClick={() => handleCategoryClick(category.name)}
            >
              <h3 className="category-heading">{category.name}</h3>
              <img src={category.image} alt={category.name} />
            </div>
          ))}
        </div>
        <button className="next-button" onClick={handleNextClick}>
          Next Page
        </button>
      </div>
    </div>
  );
};

export default Category;

