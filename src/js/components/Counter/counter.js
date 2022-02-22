import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Button from './button.js';

export default class Counter extends React.Component {

  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <div id="counter" style={styleCounter}>
        <div className='number' style={styleNumber}>0</div>
        <div className='buttons' style={styleButtons}>
          <Button action="minus" hoverColor="red" backgroundColor="white" fontColor="black">-</Button>
          <Button action="plus" hoverColor="blue" backgroundColor="black" fontColor="white">+</Button>
        </div>
      </div>
    )
  }

}

const styleCounter = {
  width: '100%',
  maxWidth: '400px',
  margin: '0 auto'
}

const styleNumber = {
  border: '3px solid #000000',
  padding: '20px',
  fontSize: '2rem',
  font7eight: '900',
  textAlign: 'center'
}

const styleButtons = {
  display: 'flex'
}

const styleButton = {
  width: '50%',
  border: '3px solid #000000',
  padding: '20px',
  fontSize: '2rem',
  font7eight: '900',
  textAlign: 'center',
  cursor: 'pointer'
}