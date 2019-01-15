import React from 'react';
import Widget from 'components/Widget';
import data from 'data/data.json';
import './WidgetContainer.scss';

class WidgetContainer extends React.Component {
  render() {
    const componentList = data.map((entry, index) =>
      <Widget title={entry.title} content={entry.content} key={index.toString()} />
    );

    return (
      <div className="widget-container">
        <h2>Widget Container</h2>
        {componentList}
      </div>
    );
  }
}

export default WidgetContainer;
