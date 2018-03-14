import React from 'react';
import BaseContainer from '../src/containers/BaseContainer';
import { shallow, mount } from 'enzyme';

const wrapper = mount(<BaseContainer />);

test('Base Container Renders', () => {
  expect(wrapper).toMatchSnapshot();
});
