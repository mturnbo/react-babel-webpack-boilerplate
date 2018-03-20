import React from 'react';
import { mount } from 'enzyme';
import BaseContainer from '../src/containers/BaseContainer';

const wrapper = mount(<BaseContainer />);

test('Base Container Renders', () => {
  expect(wrapper).toMatchSnapshot();
});
