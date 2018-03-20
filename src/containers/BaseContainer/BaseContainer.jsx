import React from 'react';
import Base from '../../components/Base';
import data from '../../data/data.json';
import './BaseContainer.scss';

class BaseContainer extends React.Component {
  render() {
    const baseList = data.map((entry, index) =>
      <Base title={entry.title} content={entry.content} key={index.toString()} />
    );

    return (
      <div>
        <h2>Base Container</h2>
        <div className="container">
          {baseList}
        </div>
      </div>
    );
  }
}

export default BaseContainer;
