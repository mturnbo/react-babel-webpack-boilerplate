import React from 'react';
import Base from '../src/components/Base';
import { shallow, mount } from 'enzyme';

const wrapper = mount(<Base title="Test" content="Blah blah blah" />);

test('Base Component Renders', () => {
  expect(wrapper).toMatchSnapshot();
});
