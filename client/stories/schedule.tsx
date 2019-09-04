import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';


import Calendar from "../src/components/Calendar";

import "bootstrap/dist/css/bootstrap.css";

const schedule = [{
  dates: ['2019-09-13', '2019-09-29'],
  class: 'bg-danger'
},
{
  dates: ['2019-09-15', '2019-09-18'],
  class: 'bg-warning'
}]


storiesOf('Schedule', module)
  .add('Calendar', () => (
    <Calendar
      schedule = {schedule}
      onClick = { action('button-clicked') }
    />
  ));