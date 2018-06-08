import React from 'react';
import { storiesOf } from '@storybook/react';
import StatelessFunctionalComponent from '../src/components/StatelessFunctionalComponent';

const title = 'Stateless Functional Component';
const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ' +
    'laboret  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
    'aliquip ex ea commodo consequat';

storiesOf('StatelessFunctionalComponent', module)
  .add('it renders', () => (
    <StatelessFunctionalComponent title={title} content={content} />
  ));
