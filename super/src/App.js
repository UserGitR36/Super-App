import React from 'react';

import './App.css'; 
import Home from './Components/Home.jsx';
import Category from './Components/Category.jsx';
import Info from './Components/info.jsx';
import Movies from './Components/Movies.jsx';

const App = () => {
  return (
    <div className="App">
         <Home />
         <Category />
        <Info />
       <Movies />
     

    </div>
  );
};
export default App;
