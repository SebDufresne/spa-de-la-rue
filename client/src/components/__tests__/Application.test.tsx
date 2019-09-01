import React from 'react';
import ReactDOM from 'react-dom';
import Application from 'components/Application';

describe('Appointment', () => {
  it('renders without crashing', async () => {
    const div = document.createElement('div');
    ReactDOM.render(<Application />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});