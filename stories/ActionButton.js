import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ActionButton from '../src/components/ActionButton.jsx';

storiesOf('Action Button', module)
  .add('with text', () => <ActionButton text="Hello Action Button" />)
  .add(
    'with click event',
    () => (
      <ActionButton
        onAction={action('clicked')}
        text="Button with click event"
      />
    ),
    { notes: 'A very simple component' },
  );
