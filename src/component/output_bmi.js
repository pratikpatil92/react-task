import React, { Component } from 'react'

export default class output_bmi extends Component {
    render() {
        return (
            <div>
                <h4>{this.props.bmi_result}</h4>
            
            </div>
        )
    }
}
