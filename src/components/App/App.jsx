import React from 'react';
import Base from '../Base';
import data from '../../data/data.json';
import './app.css';

export default class App extends React.Component {
  render() {
    let baseComponents = data.map((entry) => {
      return <Base title={entry.title} content={entry.content} />;
    });

    return (
      <div>
        <h1>React App</h1>
        <hr />
        <div className="container">
          {baseComponents}
        </div>
      </div>);
  }
}
