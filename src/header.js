import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
          <header className="App-header">
          <img src={require('./images/logo.png')} alt="lets go logo" width="80" height="auto"/> 
          <h1 className="App-title" style={{marginTop: '20px', marginLeft: '20px'}}>Lets Go...</h1>
        </header>
        
      </div>
    );
  }
}

export default Header;
