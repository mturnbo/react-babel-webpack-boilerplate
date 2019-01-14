import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import StateWidgetContainer from 'components/StateWidget/StateWidget.container';
import PresentationWidgetContainer from 'components/PresentationWidget/PresentationWidget.container';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <Header />
        <hr />
        <StateWidgetContainer />
        <PresentationWidgetContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
