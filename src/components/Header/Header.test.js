import React from 'react';
import { mount } from 'enzyme';
import Header from './Header';

const wrapper = mount(<Header/>);

test('Header Component Renders', () => {
  expect(wrapper).toMatchSnapshot();
});
