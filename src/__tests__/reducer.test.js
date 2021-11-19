import '@testing-library/jest-dom/extend-expect';
import mockCountryReducer, { fetchDataForCountry } from '../__mock__/Redux/state/mockCountryState';

const initialState = null;
const obj = {
  value: 'Albania',
};

describe('time selection reducer function testing', () => {
  test('action return with object', () => {
    expect(typeof fetchDataForCountry(obj)).toEqual('object');
  });
  test('If given payload to sucessfully change the state to it', () => {
    expect(mockCountryReducer(initialState, fetchDataForCountry(obj))).toEqual({ value: 'Albania' });
  });
});