import React from 'react';
import { mount } from 'enzyme';
import BaseContainer from './index';

const wrapper = mount(<BaseContainer />);

test('Base Container Renders', () => {
  expect(wrapper).toMatchSnapshot();
});
