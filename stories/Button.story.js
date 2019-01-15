import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from 'components/Button';

const label1 = 'Hello';
const label2 = 'Click Me';

storiesOf('Button', module)
  .add('with label', () => (
    <Button label={label1} />
  ))
  .add('with click action', () => (
    <Button onClick={action('clicked')} label={label2} />
  ));
