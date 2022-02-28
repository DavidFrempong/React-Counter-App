import React, { Component } from 'react';

import '../../../css/style.css';

import Starbucks from '../../../images/Starbucks Logo.png'

export default class AllBills extends React.Component {

    constructor() {
        super()
        this.state = {}
    };

    showAllBills = () => {
        const bills = [0, 2, 49, 96, 839, 8492, 959, 8493, 96, 923, 9594]


        return bills.map(() => {
            return(
            <li className='bill' key={bills}>
                <div className='company'>
                    <div className='logo'>
                        <img src={Starbucks} />
                    </div>
                    <div className='title'>Starbucks</div>
                </div>
                <div className='price'>$6.99</div>
            </li>
            )
        })
    }


    render() {
        return (
            <section id="allbills">
                <div className='container'>
                    <div className='total-bills'>
                        <div className='text'>Total Amount:</div>
                        <div className='number'>$917:</div>
                    </div>

                    <ul className='bills-list'>
                        {this.showAllBills()}
                    </ul>
                </div>
            </section>
        )
    }
}

