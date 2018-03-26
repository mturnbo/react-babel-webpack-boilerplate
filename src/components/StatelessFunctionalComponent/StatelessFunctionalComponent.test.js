import React from 'react';
import { mount } from 'enzyme';
import Base from './index';

const wrapper = mount(<Base title="Test" content="Blah blah blah" />);

test('ClassComponent Component Renders', () => {
  expect(wrapper).toMatchSnapshot();
});
