import React, { Component } from 'react';
import '../../../css/style.css';
import Header from './header';
import AllBills from './allBills';
import FloatingMenu from './floatingmenu';
import AddBill from './addBill';

export default class BillsApp extends React.Component {

    constructor() {
        super()
        this.state = {
         
        }
    }


    render() {
        return (
            <div id='BillsApp'>
                <Header />
                <AllBills />
                <AddBill />
                <div className='content-background' />
                <FloatingMenu />
            </div>
        )
    }

}