import React from 'react';
import {HashRouter} from 'react-router-dom'
import './reset.css'
import './App.css';
import routes from './routes'

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
        {routes}
      </div>
      </HashRouter>
    );
  }
}
  

export default App;
