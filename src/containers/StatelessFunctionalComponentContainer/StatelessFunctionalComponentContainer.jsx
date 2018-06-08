import React from 'react';
import StatelessFunctionalComponent from '../../components/StatelessFunctionalComponent';
import data from '../../data/data.json';
import './StatelessFunctionalComponentContainer.scss';

class StatelessFunctionalComponentContainer extends React.Component {
  render() {
    const componentList = data.map((entry, index) =>
      <StatelessFunctionalComponent title={entry.title} content={entry.content} key={index.toString()} />);

    return (
      <div className="stateless-functional-component-container">
        <h2>Stateless Functional Component Container</h2>
        {componentList}
      </div>
    );
  }
}

export default StatelessFunctionalComponentContainer;
