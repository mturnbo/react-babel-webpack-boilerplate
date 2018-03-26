import React from 'react';
import { mount } from 'enzyme';
import ClassComponentContainer from './index';

const wrapper = mount(<ClassComponentContainer />);

test('ClassComponent Container Renders', () => {
  expect(wrapper).toMatchSnapshot();
});
