import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../../../css/style.css'
import '../../../css/index.css'

import Button from './button.js';

export default class Counter extends React.Component {

  constructor() {
    super()
    this.state = {
      status: 'manual', currentNumber: 0
    }
  }

  
  manual = () => {
    this.setState({
      status: 'manual'
    })
    if(this.setState.status = !'auto'){
      return 
    }
  }

  changeManual = () => {
    this.setState({
      backgroundColor: 'red',
      color: 'white',
    })
  }

  changeAuto = () => {
    this.setState({
      backgroundColor: 'red',
      color: 'white',
    })
  }


  auto = () => {
    this.setState({
      status: 'auto'
    })
    if(this.setState.status = 'auto'){
        this.counterRun()
    }
  }

  // componentWillMount(){
  //   console.log('conponent')
  // }
  // 

  
  // componentDidMount(){
  //   if(this.props.status == 'auto'){
  //     this.setState({
  //       status: this.props.status == 'auto'
  //     }, () => {
  //       this.counterRun()
  //     });
  //   }
  // }

  clickedAdd = () => {
    this.setState({
      currentNumber: this.state.currentNumber + 1
    })
  }

  clickedSubtract = () => {
    this.setState({
      currentNumber: this.state.currentNumber - 1
    })
    console.log(this.state);
  }

  counterRun = () => {
     setInterval(() => {
       this.setState({
         currentNumber: this.state.currentNumber + 10
       })
     }, 1000);
  }


  render() {
    const styleCounter = {
      width: '90%',
      maxWidth: '400px',
      margin: '0 auto',
      position: 'relative',
      top: '100px'
    }
    
    const styleNumber = {
      border: '5px solid #000000',
      padding: '20px',
      fontSize: '2rem',
      fontWeight: '900',
      textAlign: 'center'
    }
    
    const styleButtons = {
      display: this.props.status == 'auto' ? 'none': 'flex'
    }

    const manual ={
      backgroundColor: 'black',
      color: 'white',
      textAlign: 'center',
      margin: '0 15%',
      padding: '10px 0',
      borderRadius: '20px',
      cursor: 'pointer'
    }
    
    const auto ={
      backgroundColor: this.props.status == 'auto' ? 'red': 'blue',
      color: 'white',
      position: 'relative',
      top: '20px',
      textAlign: 'center',
      margin: '0 15%',
      padding: '10px 0',
      borderRadius: '20px',
      cursor: 'pointer'
    }

    return (
      <div id="counter" style={styleCounter}>
        <div className='number' style={styleNumber}>{this.state.currentNumber}</div>
        <div className='buttons' style={styleButtons}>
          <Button action="minus" hoverColor="red" backgroundColor="white" fontColor="black"
          trigger ={this.clickedSubtract}
          >-</Button>
          <Button action="plus" hoverColor="blue" backgroundColor="black" fontColor="white"
          trigger ={this.clickedAdd}
          >+</Button>
        </div>
        <div className='choosebutton' style={choosebutton}>
          <div className='manual' style={manual} 
          onClick={this.manual}
          onClick={this.changeManual}>Manual</div>
          <div className='auto' style={auto} 
          onClick={this.auto}>Auto</div>
        </div>
      </div>
    )
  }

}

const choosebutton = {
  position: 'relative',
  top: '50px'
}