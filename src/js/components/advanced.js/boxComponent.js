import React, { Component, Fragment, useEffect, useState } from 'react';
import update from 'immutability-helper'
import PropTypes from 'prop-types'
import '../../../css/style.css';

function Box() {

    const ComponenentMount = () => {
        useEffect(() => {
            console.log('Mount')
            // Empty string to assue function is triggered only after component is mounted
        }, [])
    }

    const ComponentUpdated = () => {
        useEffect(() => {
            console.log('Update')
        })
    }
    ComponenentMount()
    ComponentUpdated()

    return (
        <div className='box' style={{
            width: '100%',
            height: '200px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'blue',
            color: 'white',
            fontWeight: '600'
        }}>
            This is a blue box
        </div>

    )
}

export default Box
