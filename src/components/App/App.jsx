import React from 'react';
import BaseContainer from '../../containers/BaseContainer';
import './app.scss';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <h1>React App</h1>
        <hr />
        <BaseContainer />
      </div>
    );
  }
}

export default App;