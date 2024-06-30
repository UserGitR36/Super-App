import React from 'react';
import './UserProfilecard.css';
import image14 from '../assets/image 14.png'; 

const UserProfile = ({ userDetails }) => {
 
  return (
    <div className="info-page">
      <div className="user-profile">
        <img src={image14} alt="User" className="user-image" />
        <div className="user-details">
          <div className="user-info">
            <p>KK Vinay{userDetails?.name}</p>
            <p>Vinay090@gmail.com {userDetails?.email}</p>
            <p>vinay060 {userDetails?.username}</p>
          </div>
          <div className="user-categories">
           
            <div className="categories">
              {userDetails?.categories?.map((category) => (
                <span key={category} className="category-chip">{category}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

