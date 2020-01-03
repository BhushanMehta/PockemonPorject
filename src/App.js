import React, { Component } from 'react';
import './App.css';
import PockemonList from './PockemonList/PockemonList';

class App extends Component {
    render() {
    return (
      <div className="App">
          <PockemonList />
      </div>
    );
  }
}

export default App;
