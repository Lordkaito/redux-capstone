import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import CountryPage from './components/pages/CountryPage';
import Navbar from './components/Navbar';
import './components/styles/App.css';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<HomePage />} />
          <Route
            path="/CountryPage"
            element={<CountryPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;