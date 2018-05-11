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
        <footer>
          <hr/>
          <h5>Developed By: Yasna R. | {(new Date().getFullYear()).toString()} </h5>
          </footer>
        <div id="map"></div>
      </div>
    );
  }
}

export default App;
