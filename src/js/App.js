import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// import Counter from './components/Counter/counter.js'
// import Immutable from './components/immutable/immutable.js'
// import Practice from './components/immutable/practice.js';
import BillsApp from './components/BillsApp/BillsApp.js';

import '../css/style.css'
import '../css/index.css'

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      
    }
  }

  render () {
    return (
       <div id="App">
         < BillsApp />
       </div>
      )
  }

}

