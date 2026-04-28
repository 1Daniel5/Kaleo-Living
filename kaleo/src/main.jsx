import React from 'react'

import ReactDOM from 'react-dom/client'

import App from './App.jsx'

import './App.css'


// ReactDOM.createRoot creates the "root" of the React app
// It finds the <div id="root"> in kaleo.html and attaches React to it
// The .render() method then renders the App component inside that div
ReactDOM.createRoot(document.getElementById('root')).render(
  
  // <React.StrictMode> is like a "debug mode" for React
  // It helps catch potential problems in development
  <React.StrictMode>
    {/* This is the entire app - all components live inside here */}
    <App />
  </React.StrictMode>,
)