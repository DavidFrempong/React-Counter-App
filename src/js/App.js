import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Counter from './components/Counter/counter.js'
import Button from './components/Counter/button.js'

import '../css/style.css'

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      
    }
  }

  render () {
    return (
       <div id="App">
         <Counter />
       </div>
      )
  }

}

