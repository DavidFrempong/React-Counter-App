import React, { Component } from 'react';

import '../../../css/style.css';

import Starbucks from '../../../images/Starbucks Logo.png'

export default class AddBill extends React.Component {

    constructor() {
        super()
        this.state = {
            business_name: '',
            price: '',
            status: 'unpaid'
        }
    };

    inputChange = () => {

        const name = window.event.target.name;
        const value =
            window.event.target.type === 'checkbox'
                ? window.event.target.checked
                : window.event.target.value;

        this.setState(
            {
                [name]: value
            }
        )
    }

    handleSubmit = () => {
        // "Prevent Devalut" prevents window from reloading
        window.event.preventDefault()

        // Resets Add Bill state to default after save is clicked
        this.setState({
            business_name: '',
            price: 0
        })

        // Now, pass in the object
        this.props.saveBill(this.state)

        // Show us the new state
        console.log(this.state)
    }


    render() {
        return (
            <section id="addbill" className={`${this.props.addBillOpen == true ? 'active' : ''}`}>
                <div className='container'>
                    <h2>Add a new bill</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor='business_name'>Business Name</label>
                            <input type={"text"} id="business_name" name="business_name" onChange={this.inputChange} value={this.state.business_name} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='price'>Price</label>
                            <input type={"text"} id="price" name="price" onChange={this.inputChange} value={this.state.price} />
                        </div>
                        <button type={"submit"}>Save</button>
                    </form>
                </div>
            </section>
        )
    }
}

