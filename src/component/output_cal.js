import React, { Component } from 'react'

import '../assets/calculator.css'

export default class output_cal extends Component {
    render() {
        return (
            <div className="result">
                <p>{this.props.result}</p>
            </div>
        )
    }
}
