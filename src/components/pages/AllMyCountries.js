import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataForAllCountries } from '../../Redux/state/ContinentState';
import { fetchDataForCountry } from '../../Redux/state/CountryState';
import '../styles/HomePage.css';

const AllMyCountries = ({ myState, AllCountriesObj }) => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    const country = e.target.innerText;
    const capital = country.charAt(0).toUpperCase() + country.slice(1);
    dispatch(fetchDataForCountry(myState.AllCountriesReducer[capital]));
  };
  return (
    <>
      <div className="grid-container">
        {AllCountriesObj.map((country) => {
          return (
            <div key={country} className="grid-item">
              <div>
                <Link onClick={(e) => handleClick(e)} to="/CountryPage">{country}</Link>
              </div >
              <div>
                <p>Today confirmed: <br />
                  {myState.AllCountriesReducer[country].today_confirmed}
                </p>
                <p>Today deaths: {myState.AllCountriesReducer[country].today_new_deaths}</p>
                <p>New confirmeds: {myState.AllCountriesReducer[country].today_new_confirmed}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AllMyCountries;
