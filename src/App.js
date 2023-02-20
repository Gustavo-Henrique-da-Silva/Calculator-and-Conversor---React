import React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// pages

import Home from './components/home';
import Calculator from './components/calculator';
import Data from './components/conversorData';
import Measurement from './components/conversorMeasurement';
import Error from './components/error';

//Navbar
import Navbar from './components/navbar';
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculate" element={<Calculator />} />
          <Route path="/data" element={<Data />} />
          <Route path="/measurement" element={<Measurement />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
