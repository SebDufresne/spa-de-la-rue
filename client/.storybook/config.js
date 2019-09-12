import { configure } from '@storybook/react';

import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

function loadStories() {
  require('../stories/volunteerForm');
  require('../stories/profile');

  require('../stories/partner');
  require('../stories/sponsor');
  // require('../stories/volunteer');
  require('../stories/clinic');

  require('../stories/schedule');
  require('../stories/socialMedia');
  
  // You can require as many stories as you need.
}

configure(loadStories, module);

addDecorator(
  withInfo({
    styles: {
      header: {
        h1: {
          marginRight: '20px',
          fontSize: '25px',
          display: 'inline',
        },
        body: {
          paddingTop: 0,
          paddingBottom: 0,
        },
        h2: {
          display: 'inline',
          color: '#999',
        },
      },
      infoBody: {
        backgroundColor: '#eee',
        padding: '0px 5px',
        lineHeight: '2',
      },
    },
    inline: true,
    source: false,
  })
);