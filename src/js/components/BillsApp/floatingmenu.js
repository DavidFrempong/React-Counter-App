import React, { Component } from 'react';
import '../../../css/style.css';
import CreditCard from '../../../../src/images/Credit Card.svg'
import Save from '../../../images/Save (Bank).svg'
import Settings from '../../../images/Settings.svg'
import Transfer from '../../../images/Transfer.svg'
import Add from '../../../images/Add.svg'


export default class FloatingMenu extends React.Component {

    constructor() {
        super()
        this.state = {

        }
    }


    render() {
        return (
            <nav id="floating-menu">
                <div className='link'>
                    <div className='icon'>
                        <img src={CreditCard} />
                    </div>
                    <div className='text'>Spend</div>
                </div>

                <div className='link'>
                    <div className='icon'>
                        <img src={Save} />
                    </div>
                    <div className='text'>Save</div>
                </div>

                <div className='link'>
                    <div className='icon'>
                        <img src={Transfer} />
                    </div>
                    <div className='text'>Transfer</div>
                </div>

                <div className='link'>
                    <div className='icon'>
                        <img src={Settings} />
                    </div>
                    <div className='text'>Settings</div>
                </div>
                <div className='link add-button'>
                    <div className='add-button' onClick={this.props.clickedAddBillButton}>
                        <div className='icon'>
                            <img src={Add} />
                        </div>
                    </div>
                </div>
            </nav >
        )
    }
}
