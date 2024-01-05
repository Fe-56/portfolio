import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import { ThemeProvider, getTheme } from "./Theme";

const root = ReactDOM.createRoot(document.getElementById('root'));
initialiseTheme();

root.render(
  <Router>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Router>
);

function initialiseTheme () {
  const savedTheme = getTheme();
  
  if (savedTheme == 'dark-theme'){
    document.getElementById('root').className = 'App dark-theme';
  }
  else{
    document.getElementById('root').className = 'App light-theme';
  }
}