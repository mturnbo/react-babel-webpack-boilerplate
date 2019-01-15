import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import WidgetContainer from 'components/WidgetContainer';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <Header />
        <hr />
        <WidgetContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
