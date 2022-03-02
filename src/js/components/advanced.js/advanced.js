import React, { Component, Fragment } from 'react';
import update from 'immutability-helper'
import PropTypes from 'prop-types'
import '../../../css/style.css';

console.dir(document.getElementById("testing"))

export default class Advanced extends React.Component {

    constructor() {
        super();
        
        this.projectRef = React.createRef()
    }

    UNSAFE_componentDidMount() {
        console.dir(this.projectRef.current)
    }

    render() {
        return (
            <div id="advancedFeatures">
                <div ref={this.projectRef}>Project</div>
                <ChildComp total={7}/>
            </div>
        )
    }

}

const ChildComp = (props) => {
    return (
        <div>
            {props.total}
        </div>
    )
}

// Property must be an number; otherwise, error
ChildComp.propTypes = {
    total: PropTypes.number
}