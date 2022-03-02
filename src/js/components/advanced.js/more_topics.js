import React, { Component, Fragment } from 'react';
import update from 'immutability-helper'
import PropTypes from 'prop-types'
import '../../../css/style.css';
import { render } from 'react-dom';

const AppContext = React.createContext()

class Provider extends Component {
    constructor() {
        super()
        // Initial states
        this.state = {
            name: 'David',
            clicked: 'false'
        }
    }

    // Whatever the state is, do the opposite of it
    clickedButton = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render() {
        return (
            // This passes in an object, as a provider, to the consumer, the state
            // In this case, a state of "name" and "clicked", as well as the clickedButton function

            <AppContext.Provider value={{ globalState: this.state, clickedButton: this.clickedButton }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default class Topics extends React.Component {

    // We are not using this state
    constructor() {
        super();
        this.state = {
            name: 'David',
        }
    }


    render() {
        return (
            <Provider>
                {/* Gets data from ContextApi above, in this case the name */}
                <AppContext.Consumer>
                    {(context) => <h1>{context.globalState.name}</h1>}
                </AppContext.Consumer>


                {/* Passes info down to GrandComp */}
                <div id="advancedFeatures">
                    <GrandComp />
                </div>
            </Provider>
        )
    }
}

// Passes info down to FatherComp
const GrandComp = (props) => {
    return (
        <div className='GrandComp'>
            <FatherComp />
        </div>
    )
}

// Passes info down to ChildComp
const FatherComp = (props) => {
    return (
        <div className='FatherComp'>
            <ChildComp />
        </div>
    )
}

const ChildComp = (props) => {
    return (

        // Searches in the ContextApi for needed states
        <AppContext.Consumer>
            {context => <>

                {/*  In this case here it sees that for the class "ChildComp", that if the global state clicked is true, then add the class of active */}
                {/* But if not, return an empty string */}
                <div className={`ChildComp ${context.globalState.clicked === true ? 'active' : ''}`}>

                    {/* Here, print data from ContextApi */}
                    {context.globalState.name}

                    {/* Carry out function on click */}
                    <div className='button' onClick={context.clickedButton}>Save item</div>
                </div>
            </>}

        </AppContext.Consumer>
    )
}