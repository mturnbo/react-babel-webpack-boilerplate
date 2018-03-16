import React from 'react';
import Base from '../../components/Base';
import data from '../../data/data.json';
import './baseContainer.scss';

class BaseContainer extends React.Component {
  render() {
    const baseList = data.map((entry, index) =>
      <Base title={entry.title} content={entry.content} key={index} />
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
