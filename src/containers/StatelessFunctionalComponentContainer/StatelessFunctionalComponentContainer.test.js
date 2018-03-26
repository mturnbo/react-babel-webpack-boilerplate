import React from 'react';
import { mount } from 'enzyme';
import StatelessFunctionalComponentContainer from './index';

const wrapper = mount(<StatelessFunctionalComponentContainer />);

test('StatelessFunctionalComponent Container Renders', () => {
  expect(wrapper).toMatchSnapshot();
});
