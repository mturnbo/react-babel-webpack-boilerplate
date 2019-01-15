import React from 'react';
import { mount } from 'enzyme';
import Widget from './Widget';

const wrapper = mount(<Widget title="Test" content="Blah blah blah" />);

test('Widget Component Renders', () => {
  expect(wrapper).toMatchSnapshot();
});


