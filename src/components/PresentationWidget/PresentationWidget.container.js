import React from 'react';
import PresentationWidget from './PresentationWidget.component';
import data from 'data/data.json';
import './PresentationWidget.container.scss';

class PresentationWidgetContainer extends React.Component {
  render() {
    const componentList = data.map((entry, index) =>
      <PresentationWidget title={entry.title} content={entry.content} key={index.toString()} />
    );

    return (
      <div className="presentation-widget-container">
        <h2>Stateless Functional Component Container</h2>
        {componentList}
      </div>
    );
  }
}

export default PresentationWidgetContainer;
