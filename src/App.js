import React from 'react';
import './Style/App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './Admin/Navbar'
import Home from './Admin/Home'


function App() {
  return (
    <Router exact path="/">
      <Navbar />
      <Route exact path='/' component={Home} />
    </Router>
  );
}

export default App;