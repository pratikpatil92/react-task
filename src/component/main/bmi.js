import React, { Component } from 'react';
import Bmi_keypad from '../bmi_keypad';

import '../../assets/calculator.css';

export default class bmi extends Component {

    render() {
        return (
            <div className="bmi">
                <h1>BMI Calculator</h1>
                <Bmi_keypad></Bmi_keypad>
            </div>
        )
    }
}
