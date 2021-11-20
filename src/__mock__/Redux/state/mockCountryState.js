import Axios from 'axios';

const URL = 'https://api.covid19tracking.narrativa.com/api';
const GET_COUNTRY = 'rrcapstone/state/GET_COUNTRY';

export const fetchDataForCountry = (country) => {
  // fetch data from the API
  const myCountry = { ...country };
  return ({
    type: GET_COUNTRY,
    payload: myCountry,
  });
};

const initialState = {
  date: '2021-11-18',
  id: 'albania',
  links: [
    {
      href: '/api/2021-11-18/country/albania',
      rel: 'self',
      type: 'GET',
    },
  ],
  name: 'Albania',
  name_es: 'Albania',
  name_it: 'Albania',
  regions: [],
  source: 'John Hopkins University',
  today_confirmed: 195021,
  today_deaths: 3022,
  today_new_confirmed: 549,
  today_new_deaths: 8,
  today_new_open_cases: 541,
  today_new_recovered: 0,
  today_open_cases: 61656,
  today_recovered: 130343,
  today_vs_yesterday_confirmed: 0.0028230285079600126,
  today_vs_yesterday_deaths: 0.002654280026542777,
  today_vs_yesterday_open_cases: 0.008852163953202874,
  today_vs_yesterday_recovered: 0,
  yesterday_confirmed: 194472,
  yesterday_deaths: 3014,
  yesterday_open_cases: 61115,
  yesterday_recovered: 130343,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRY:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;