import React from 'react';
import { mount } from 'enzyme';
import StateWidget from './StateWidget.component';
import StateWidgetContainer from './StateWidget.container';

const componentWrapper = mount(<StateWidget title="Test" content="Blah blah blah" />);
const containerWrapper = mount(<StateWidgetContainer />);

test('StateWidget Component Renders', () => {
  expect(componentWrapper).toMatchSnapshot();
});

test('StateWidget Container Renders', () => {
  expect(containerWrapper).toMatchSnapshot();
});

