import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ClassComponentContainer from '../ClassComponentContainer/index';
import StatelessFunctionalComponentContainer from '../StatelessFunctionalComponentContainer/index';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <Header title="React Babel Webpack Boilerplate" />
        <hr />
        <ClassComponentContainer />
        <StatelessFunctionalComponentContainer />
        <Footer title="Footer" />
      </div>
    );
  }
}

export default App;
