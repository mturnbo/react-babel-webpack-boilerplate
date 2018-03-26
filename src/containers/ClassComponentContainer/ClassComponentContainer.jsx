import React from 'react';
import ClassComponent from '../../components/ClassComponent';
import data from '../../data/data.json';
import './ClassComponentContainer.scss';

class ClassComponentContainer extends React.Component {
  render() {
    const componentList = data.map((entry, index) =>
      <ClassComponent title={entry.title} content={entry.content} key={index.toString()} />
    );

    return (
      <div className="class-component-container">
        <h2>Class Component Container</h2>
        {componentList}
      </div>
    );
  }
}

export default ClassComponentContainer;
