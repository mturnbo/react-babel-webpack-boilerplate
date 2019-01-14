import React from 'react';
import { mount } from 'enzyme';
import PresentationWidget from './PresentationWidget.component';
import PresentationWidgetContainer from './PresentationWidget.container';

const componentWrapper = mount(<PresentationWidget title="Test" content="Blah blah blah" />);
const containerWrapper = mount(<PresentationWidgetContainer />);

test('PresentationWidget Component Renders', () => {
  expect(componentWrapper).toMatchSnapshot();
});

test('PresentationWidget Container Renders', () => {
  expect(containerWrapper).toMatchSnapshot();
});

