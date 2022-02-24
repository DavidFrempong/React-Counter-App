import React, { Component } from 'react';

import '../../../css/style.css';

export default class Immutable extends React.Component {

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

        // Add name
        // const newState = {
        //     names: [...this.state.names, 'Ramsey']
        // };


        // Remove name
        // const newState = {
        //     names: this.state.names.filter((name) => name !== 'Bill')
        // };

        // this.setState(newState,() => {
        //         console.log(this.state)
        //     });

        // Merge two arrays
        // const newState = {
        //     both: [...this.state.names, ...this.state.teachers]
        // }

        // Sort Array

        const newState = {
            names: this.state.names.slice().sort()
        }

        this.setState(newState, () => {
            console.log(this.state)
        })

    }


    changeToActive = () => {
        if (this.state.names[0] == 'Barlay') {
            return 'active';
        } else {
            return '';
        }
    }

    render() {
        return (
            <div id="immutable" >
                {/* <div className={`box ${this.changeToActive()}`}></div>
                <div className='button' onClick={this.clickedButton}>Press Me</div> */}
            </div>
        )
    }

}
