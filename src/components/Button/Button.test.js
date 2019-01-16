import React from 'react';
import { mount } from 'enzyme';
import Button from './Button';

const wrapper = mount(<Button label="Test" />);

test('Button Component Renders', () => {
  expect(wrapper).toMatchSnapshot();
});
