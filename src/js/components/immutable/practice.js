import React, { Component } from 'react';
import '../../../css/style.css';

import update from 'immutability-helper'

export default class Practice extends React.Component {

    constructor() {
        super()
        this.state = {
            background: 'black',
            names: ['Trey', 'Bill', 'CJ', 'Barlay'],
            both: [],
            teachers: ['Cam', 'Bob', 'Cistele'],
            user: {
                name: 'David',
                age: '20',
                grades: {
                    math: 'A',
                    english: 'B',
                    gym: 'A'
                }
            }
        }
    }

    clickedButton = () => {
        console.log(this.state);
        
        const newTeachers = update
        (this.state.teachers, {
            $splice: [[2]]
        })
        const newState = update(this.state, {
            teachers: {$set: newTeachers}
        })
        console.log(newTeachers)

        this.setState(newState, () => {
            console.log(this.state)
        })
    }


    changeToActive = () => {
        if (this.state.teachers[2] !== 'Cistele') {
            return 'active';
        } else {
            return '';
        }
    }

    render() {
        return (
            <div id="immutable" >
                <div className={`box ${this.changeToActive()}`}></div>
                <div className='button' onClick={this.clickedButton}>Press Me</div>
            </div>
        )
    }

}
