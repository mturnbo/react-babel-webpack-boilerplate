import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import WidgetContainer from 'components/WidgetContainer';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <Header title="React Babel Webpack Boilerplate" />
        <div className="app-content">
          <WidgetContainer />
        </div>
        <Footer title="Footer" />
      </div>
    );
  }
}

export default App;
