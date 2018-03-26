import React from 'react';
import ClassComponentContainer from '../../containers/ClassComponentContainer';
import StatelessFunctionalComponentContainer from '../../containers/StatelessFunctionalComponentContainer';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <h1>React App</h1>
        <hr />
        <ClassComponentContainer />
        <StatelessFunctionalComponentContainer />
      </div>
    );
  }
}

export default App;
