import React, { Component } from 'react';
import '../../../css/style.css';
import Header from './header';
import AllBills from './allBills';
import FloatingMenu from './floatingmenu';
import AddBill from './addBill';
import update from 'immutability-helper';

export default class BillsApp extends React.Component {

    constructor() {
        super()
        // Current data state
        this.state = {
            addBillOpen: false,
            // Passes in all the current bills
            allBills: [{
                business_name: 'Starbucks',
                price: 50,
                status: 'unpaid'
            }],
        }
    }

    // When this is clicked, change the state to the opposite of the current state; If open, close; If closed, open

    clickedAddBillButton = () => {
        this.setState({
            addBillOpen: !this.state.addBillOpen
        })
    }

    // This pulls the current bills and adds new information to the array
    saveBill = (bill) => {
        const newBills = update(this.state.allBills, {
            $push: [bill]
        })

        // This returns an array of the new version that user added
        this.setState({
            allBills: newBills,

            // This removes the menu and brings back original state
            addBillOpen: !this.state.addBillOpen

        }, () => {
            console.log(this.state)
        }
        )
    }

    // Create method to change status of whether bill is paid or not

    changeBillStatus = (billIndex) => {
        const allBills = this.state.allBills;
        const bill = allBills[billIndex];
        if (bill.status == 'unpaid') {
            bill.status = 'paid'
        } else {
            bill.status = 'unpaid';
        }

        //  This sets the original bill to the new state of the bill
        const newState = update(this.state, {
            allBills: {
                $set: allBills
            }
        })
        this.setState(newState, () => {
            console.log(this.state)
        })
    }

    deleteBill = (billIndex) => {
        const allBills = this.state.allBills

        // Splice removes things; in this case we are removing one index from the array
        allBills.splice(billIndex, 1)

        // Bills updates with new state
        const newState = update(this.state, {
            allBills: {
                $set: allBills
            }
        })
        this.setState(newState, () => {
            console.log(this.state)
        })
        
    }


    render() {
        return (
            <div id='BillsApp'>
                <Header />

                {/* Passes all the new bills from the global state into the array */}
                <AllBills allBills={this.state.allBills}

                    // Changes status of bill
                    changeBillStatus={this.changeBillStatus}

                    // Deletes bill
                    deleteBill={this.deleteBill}

                />

                <AddBill addBillOpen={this.state.addBillOpen}

                    // Function is passed through as a property
                    saveBill={this.saveBill} />
                <div className='content-background' />

                {/* Triggers the menu by event listener */}
                <FloatingMenu clickedAddBillButton={this.clickedAddBillButton} />
            </div>
        )
    }

}