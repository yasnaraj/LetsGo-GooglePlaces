import React, { Component } from 'react';
import './App.css';
import Header from './header';
import MainComponent from './components/maincomponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainComponent />
        <div id="map"></div>
      </div>
    );
  }
}

export default App;
