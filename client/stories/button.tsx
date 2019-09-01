import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import { action } from '@storybook/addon-actions';

storiesOf('Button2', module)
  .add('with text', () => (
    <Button onClick={action('button-clicked')}>Hello Button</Button>
  ))
  .add('with emoji', () => (
    <Button onClick={action('button-clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));