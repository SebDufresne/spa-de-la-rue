import { configure } from '@storybook/react';

import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

function loadStories() {
  require('../stories/volunteerForm');
  require('../stories/button.tsx');
  require('../stories/sponsor.tsx');
  require('../stories/profile');
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