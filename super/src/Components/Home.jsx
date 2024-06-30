import React, { useState } from 'react';
import './Home.css';
import image13 from '../assets/image 13.png';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    mobile: '',
    shareData: false,
  });

  const [errors, setErrors] = useState({});
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleTermsChange = () => {
    setTermsAccepted(!termsAccepted);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Field is required';
    if (!formData.username) newErrors.username = 'Field is required';
    if (!formData.email) newErrors.email = 'Field is required';
    if (!formData.mobile) newErrors.mobile = 'Field is required';
    if (!termsAccepted) newErrors.termsAccepted = 'You must accept the terms and conditions';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      localStorage.setItem('registrationData', JSON.stringify(formData));
      alert('Registration successful');
      // Reset form data
      setFormData({
        name: '',
        username: '',
        email: '',
        mobile: '',
        shareData: false,
      });
      setTermsAccepted(false);
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="home">
      <div className="left-section">
        <img src={image13} alt="Event" className="cover-image" />
        <p className="tagline">Discover new things on <br/> Superapp</p>
      </div>
      <div className="right-section">
        <h1 className="heading"> Super App</h1>
        <p>Create your new account</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>
          <div className="form-group">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className={errors.username ? 'error' : ''}
            />
            {errors.username && <span className="error-text">{errors.username}</span>}
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile"
              value={formData.mobile}
              onChange={handleChange}
              className={errors.mobile ? 'error' : ''}
            />
            {errors.mobile && <span className="error-text">{errors.mobile}</span>}
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              name="shareData"
              checked={formData.shareData}
              onChange={handleChange}
            />
            <label>Share my registration data with Superapp</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={handleTermsChange}
            />
            <label>I accept the <a href="#">Terms and Conditions</a></label>
            {errors.termsAccepted && <span className="error-text">{errors.termsAccepted}</span>}
          </div>
          <div className="sign-up-button-container">
            <button type="submit" className="sign-up-button">SIGN UP</button>
          </div>
        </form>
        <p className="terms">
          By clicking on Sign up, you agree to Superapp <a href="#">Terms and Conditions of Use</a>
        </p>
        <p className="privacy">
          To learn more about how Superapp collects, uses, shares, and protects your personal data please head Superapp <a href="#">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
};

export default Home;