import React, { Component } from 'react';
import '../../../css/style.css';
import Starbucks from '../../../images/Starbucks Logo.png'
import Building from '../../../images/Building, Apartment.svg'
import Check from '../../../images/Checkmark.svg'
import Trash from '../../../images/Trash.svg'



export default class AllBills extends React.Component {

    constructor() {
        super()
        this.state = {}
    };

    showAllBills = () => {
        // This is coming from the BillsApp component
        const bills = this.props.allBills;

        // This will loop over every bill
        if (bills.length > 0) {
            return bills.map((bills, index) => {
                return (

                    // If the bill status is paid, change the color; if not, add default color
                    <li className={`bill ${bills.status == 'paid' ? 'active' : ''}`} key={index}>

                        <div className='company'>
                            <div className='logo'>
                                <img src={Building} />
                            </div>
                            <div className='title'>{bills.business_name}</div>
                        </div>
                        <div className='price'>${bills.price}</div>
                        <div className='buttons'>
                            {/* We pass the index in here to show us the current position of the array */}
                            <div className='paid' onClick={this.props.changeBillStatus.bind(null, index)}>
                            <img src={Check} />
                            </div>
                            <div className='delete' onClick={this.props.deleteBill.bind(null, index)}>
                            <img src={Trash} />
                            </div>
                        </div>
                    </li>
                )
            })
        } else {
            return <li className='bill' key={bills}>
                <div className='no-bills'>Please add a bill to the list.</div>
            </li>
        }
    }

    // Calculate total amount
    billTotalAmount = () => {
        // This takes all bills
        const bills = this.props.allBills
        let total = 0

        //   This loops through all the bills and adds them all together
        for (var i = 0; i < bills.length; i++) {
            total += parseInt(bills[i].price);
        }
        if (bills.length > 0) {
            return total;
        } else {
            return 0;
        }
    }

    render() {
        return (
            <section id="allbills">
                <div className='container'>
                    <div className='total-bills'>
                        <div className='text'>Total Amount:</div>
                        {/* This executes the function that adds all the bills */}
                        <div className='number'>${this.billTotalAmount()}</div>
                    </div>

                    <ul className='bills-list'>
                        {this.showAllBills()}
                    </ul>
                </div>
            </section>
        )
    }
}

