import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//Going through what we need for the app from step 1.

// MoleContainer
// This will be the component that decides which child component is rendered. We will store a Boolean state variable called displayMole here.

// Mole
// This will represent a displayed mole. It ultimately will contain a timer determining the lifespan of a mole. This component will render when displayMole === true

// EmptySlot
// This will represent an empty molehill or an invalid location to click. Much like its sister component, it will have an internal timer to cycle the display. This component will render when displayMole === false