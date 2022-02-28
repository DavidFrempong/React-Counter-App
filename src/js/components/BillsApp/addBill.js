import React, { Component } from 'react';

import '../../../css/style.css';

import Starbucks from '../../../images/Starbucks Logo.png'

export default class AddBill extends React.Component {

    constructor() {
        super()
        this.state = {}
    };

   


    render() {
        return (
            <section id="addbill">
                <div className='container'>
                    <h2>Add a new bill</h2>
                    <form>
                        <label htmlFor='business_name'>Business Name</label>
                        <input type={"text"} id="business_name"/>
                    </form>
                </div>
            </section>
        )
    }
}

