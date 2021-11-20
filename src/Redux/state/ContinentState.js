import Axios from 'axios';

const URL = 'https://api.covid19tracking.narrativa.com/api';
const GET_ALL_COUNTRIES = 'rrcapstone/state/GET_ALL_COUNTRIES';

export const fetchDataForAllCountries = () => async (dispatch) => {
  const objStore = {};
  const today = new Date();
  const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate() - 1}`;
  const response = await Axios.get(`${URL}/${date}`);
  const data = response.data.dates[date].countries;
  const countries = Object.keys(data);
  countries.forEach((country) => {
    objStore[country] = data[country];
  });
  dispatch({
    type: GET_ALL_COUNTRIES,
    payload: objStore,
  });
};

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;