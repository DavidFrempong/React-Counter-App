import React, { Component, Fragment, useState } from 'react';
import update from 'immutability-helper'
import PropTypes from 'prop-types'
import '../../../css/style.css';
import Box from './boxComponent';

function Hooks () {

    // This creates two outputs:
    // An object, "state"
    // And a function, "setState"
    const [state, setState] = useState({
      name: 'David',
      total: 1
    })

    // On clicked, change the state
    const clickedButton = () => {
        setState({
            name: 'Bill',
            total: state.total * 2
        })
    }

    console.log(useState({}))

    const displayBox = () => {
       if(state.total === 0){
        return <div>Loading...</div>
       } else if(state.total === 2){
          return <Box />
       } else {
           return <div>Done!</div>
       }
    }

    return (
        <div id="hooksapp">
            <h1>Learning hooks with {state.name}</h1>
            <div className='button' onClick={clickedButton}>Change my name</div>
            {displayBox()}
        </div>

    )
}

export default Hooks
