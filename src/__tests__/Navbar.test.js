import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';
import store from '../Redux/ConfigureStore';

describe('Calendar component', () => {
  let NavbarApp;
  act(() => {
    NavbarApp = render(
      <React.StrictMode>
        <Router>
          <Provider store={store}>
            <Navbar />
          </Provider>
        </Router>
      </React.StrictMode>,
    );
  });
  afterEach(() => {
    cleanup();
  });

  test('navbar tab name', () => {
    const liElement = screen.getByTestId('tab-name');
    expect(liElement).toBeInTheDocument();
    expect(liElement.innerHTML).toEqual('Current Tab');
  });

  test('snapshot of calendar page', () => {
    expect(NavbarApp).toMatchSnapshot();
  });
});