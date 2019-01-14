import React from 'react';
import StateWidget from './StateWidget.component';
import data from 'data/data.json';
import './StateWidget.container.scss';

class StateWidgetContainer extends React.Component {
  render() {
    const componentList = data.map((entry, index) =>
      <StateWidget title={entry.title} content={entry.content} key={index.toString()} />
    );

    return (
      <div className="class-component-container">
        <h2>Class Component Container</h2>
        {componentList}
      </div>
    );
  }
}

export default StateWidgetContainer;
