import React from 'react';
import { mount } from 'enzyme';
import Footer from './Footer';

const wrapper = mount(<Footer/>);

test('Footer Component Renders', () => {
  expect(wrapper).toMatchSnapshot();
});
