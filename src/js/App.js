import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Counter from './components/Counter/counter.js'
import Immutable from './components/immutable/immutable.js'
import Practice from './components/immutable/practice.js';

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
         <Practice />
         {/* <Counter status="manual"/> */}
       </div>
      )
  }

}

