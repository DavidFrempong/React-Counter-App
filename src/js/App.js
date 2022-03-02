import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// import Counter from './components/Counter/counter.js'
// import Immutable from './components/immutable/immutable.js'
// import Practice from './components/immutable/practice.js';
import BillsApp from './components/BillsApp/BillsApp.js';
import Advanced from './components/advanced.js/advanced.js';
import Topics from './components/advanced.js/more_topics.js';
import Hooks from './components/advanced.js/hooks.js';
import Box from './components/advanced.js/boxComponent.js';

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
         {/* <Advanced /> */}
         {/* <Topics /> */}
         {/* <Hooks /> */}
         {/* <Box /> */}
       </div>
      )
  }

}

