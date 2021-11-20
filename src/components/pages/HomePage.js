import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataForAllCountries } from '../../Redux/state/ContinentState';
import { fetchDataForCountry } from '../../Redux/state/CountryState';
import '../styles/HomePage.css';
import showcase from '../images/cov19.png';
import AllMyCountries from './AllMyCountries';

const HomePage = () => {
  const dispatch = useDispatch();
  const myState = useSelector((state) => {
    return state;
  });
  useEffect(() => {
    dispatch(fetchDataForAllCountries());
  }, []);
  const AllCountriesObj = Object.keys(myState.AllCountriesReducer);
  const [mySearch, setMySearch] = useState('');
  const handleClick = (e) => {
    const country = e.target.innerText;
    const capital = country.charAt(0).toUpperCase() + country.slice(1);
    dispatch(fetchDataForCountry(myState.AllCountriesReducer[capital]));
  };
  const countryToSearch = (e) => {
    const countryToSearch = document.querySelector('input').value;
    const capital = countryToSearch.charAt(0).toUpperCase() + countryToSearch.slice(1).toLowerCase();
    setMySearch(capital);
  };
  return (
    <>
      <div className="showcase-container">
        <img src={showcase} alt="showcase" className="image-showcase" />
      </div>
      <div className="search-field">
        <input
          type="text"
          placeholder="Search for a country"
          className="search-input"
        />
        <button className="search" type="button" onClick={(e) => countryToSearch(e)}>Search</button>
      </div>
      {mySearch !== '' ? (
        AllCountriesObj.filter((country) => country.toLowerCase() === mySearch.toLowerCase()).map((country) => (
          <div className="grid-container">
            <div key={country} className="grid-item">
              <div>
                <Link to="/CountryPage" onClick={(e) => handleClick(e)}>{country}</Link>
              </div>
              <div>
                <p>Today confirmed: <br />
                  {myState.AllCountriesReducer[country].today_confirmed}
                </p>
                <p>Today deaths: {myState.AllCountriesReducer[country].today_new_deaths}</p>
                <p>
                  New confirmeds: {myState.AllCountriesReducer[country].today_new_confirmed}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : <AllMyCountries myState={myState} AllCountriesObj={AllCountriesObj} />}
    </>
  );
};

export default HomePage;