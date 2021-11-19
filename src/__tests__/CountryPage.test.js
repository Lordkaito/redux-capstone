import '@testing-library/jest-dom/extend-expect';
import React, { useEffect } from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { HashRouter as Router } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import { act } from 'react-dom/test-utils';
import CountryPage from '../components/pages/CountryPage';
import store from '../__mock__/Redux/mockConfigureStore';
import { fetchDataForCountry } from '../__mock__/Redux/state/mockCountryState';

describe('Main component rendering', () => {
  let CountryPageApp;
  act(() => {
    CountryPageApp = render(
      <React.StrictMode>
        <Router>
          <Provider store={store}>
            <CountryPage />
          </Provider>
        </Router>
      </React.StrictMode>,
    );
  });
  afterEach(() => {
    cleanup();
  });

  test('Country page test', () => {
    const nameElement = screen.getByTestId('country-name-test');
    expect(nameElement).toBeInTheDocument();
    expect(nameElement.innerHTML).toEqual('Albania');
    const sourceTest = screen.getByTestId('source-test');
    expect(sourceTest).toBeInTheDocument();
    expect(sourceTest.innerHTML).toContain('John Hopkins University');
    const totalTest = screen.getByTestId('total-test');
    expect(totalTest).toBeInTheDocument();
    expect(totalTest.innerHTML).toContain('130343');
  });

  test('snapshot of Main page with mocked store page', () => {
    expect(CountryPage).toMatchSnapshot();
  });
});