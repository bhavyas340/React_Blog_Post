import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/App';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/Navbar';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);