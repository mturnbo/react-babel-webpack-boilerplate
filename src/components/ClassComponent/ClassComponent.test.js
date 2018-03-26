import React from 'react';
import { mount } from 'enzyme';
import ClassComponent from './index';

const wrapper = mount(<ClassComponent title="Test" content="Blah blah blah" />);

test('ClassComponent Component Renders', () => {
  expect(wrapper).toMatchSnapshot();
});
