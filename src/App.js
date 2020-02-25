import React from 'react';
import {HashRouter, Route} from 'react-router-dom'
import './reset.css'
import './App.css';

class App extends React.Component {
  constructor () {
    super()
    this.state = {

    }
  }
  render () {
    return (
      <HashRouter>
      <div className="App">
        
        <Route />
        <Route />
        
      </div>
      </HashRouter>
    );
  }
}
  

export default App;
