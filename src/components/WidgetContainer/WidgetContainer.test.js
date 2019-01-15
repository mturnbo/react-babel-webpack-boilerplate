import React from 'react';
import { mount } from 'enzyme';
import WidgetContainer from './WidgetContainer';

const wrapper = mount(<WidgetContainer title="Test" content="Blah blah blah" />);

test('Widget Container Renders', () => {
  expect(wrapper).toMatchSnapshot();
});

