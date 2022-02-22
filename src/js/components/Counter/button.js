import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Button extends React.Component {

    constructor() {
        super()
        this.state = {
            hover: false
        }
    }

    toggleHover = () => {
        this.setState({
            hover: !this.state.hover
        })
    }

    render() {
        const styleButton = {
            color: this.props.fontColor,
            width: '50%',
            border: '3px solid #000000',
            padding: '20px',
            fontSize: '2rem',
            fontWeight: '900',
            textAlign: 'center',
            cursor: 'pointer',
            fontColor: 'white',
            transition: 'all 0.3s ease-in-out',
            background: this.state.hover ? this.props.hoverColor : this.props.backgroundColor
        }

        return (
            <div className={`button ${this.props.action}`}
                style={styleButton}
                onMouseEnter={this.toggleHover}
                onMouseLeave={this.toggleHover}>
                {this.props.children}
            </div>
        )
    }

}

