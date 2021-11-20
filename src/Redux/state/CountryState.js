import Axios from 'axios';

const URL = 'https://api.covid19tracking.narrativa.com/api';
const GET_COUNTRY = 'rrcapstone/state/GET_COUNTRY';

export const fetchDataForCountry = (country) => async (dispatch) => {
  // fetch data from the API
  const myCountry = { ...country };
  dispatch({
    type: GET_COUNTRY,
    payload: myCountry,
  });
};

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRY:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;