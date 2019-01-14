import React from 'react';
import {storiesOf} from '@storybook/react';
import ClassComponent from '../src/components/ClassComponent';

const title = 'Class Component';
const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat';

storiesOf('ClassComponent', module)
  .add('it renders', () => (
    <ClassComponent title={title} content={content} />
  ));
