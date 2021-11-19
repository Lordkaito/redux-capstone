import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../images/map.png';
import '../styles/Country.css';

const CountryPage = () => {
  const myState = useSelector((state) => state.CountryReducer);
  return (
    <div className="country-container">
      <div className="map">
        <img src={logo} alt="map" className="map-icon" />
      </div>
      <div>
        <h1 data-testid="country-name-test"
          className="country-name">{myState.name}</h1>
      </div>
      <div className="country-info">
        <p>Date: {myState.date}</p>
        <p data-testid="source-test"
        >Source: {myState.source}</p>
        <p>Total confirmed: {myState.today_confirmed}</p>
        <p>New confirmed cases: {myState.today_new_confirmed}</p>
        <p>Total deaths: {myState.today_deaths}</p>
        <p>New deaths: {myState.today_new_deaths}</p>
        <p>New open cases: {myState.today_new_open_cases}</p>
        <p data-testid="total-test">Total recovered: {myState.today_recovered}</p>
      </div>
    </div>
  );
};

export default CountryPage;