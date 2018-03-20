import React from 'react';
import { mount } from 'enzyme';
import Base from '../src/components/Base';

const wrapper = mount(<Base title="Test" content="Blah blah blah" />);

test('Base Component Renders', () => {
  expect(wrapper).toMatchSnapshot();
});
