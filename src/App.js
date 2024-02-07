import React from 'react';
import HomeScreen from './Screen';
import './App.css';

const App = () => {
  return (
    <div className="app" style={{backgroundColor:'lightblue'}}>
      <main>
        <HomeScreen/>
      </main>
      <footer>
        <p>&copy; 2024 My Website</p>
      </footer>
    </div>
  );
};

export default App;
