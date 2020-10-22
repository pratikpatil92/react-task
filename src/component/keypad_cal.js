import React, { Component } from 'react'
import '../assets/calculator.css'
import { Container } from 'reactstrap'
import { button } from 'reactstrap';
export default class keypad extends Component {
    buttonPressed = (e) =>{
        this.props.buttonPressed(e.target.name);
    };
    render() {
        return (
            <div className="buttons">
                <button className="btn btn-primary"  name="1" onClick={this.buttonPressed}>1</button>
                <button className="btn btn-primary" name="2" onClick={this.buttonPressed}>2</button>
                <button className="btn btn-primary" name="3" onClick={this.buttonPressed}>3</button>
                <button className="btn btn-primary" name="4" onClick={this.buttonPressed}>4</button>
                <button className="btn btn-primary" name="5" onClick={this.buttonPressed}>5</button>
                <button className="btn btn-primary" name="6" onClick={this.buttonPressed}>6</button>
                <button className="btn btn-primary" name="7" onClick={this.buttonPressed}>7</button>
                <button className="btn btn-primary" name="8" onClick={this.buttonPressed}>8</button>
                <button className="btn btn-primary" name="9" onClick={this.buttonPressed}>9</button>
                <button className="btn btn-primary" name="-" onClick={this.buttonPressed}>-</button>
                <button className="btn btn-primary" name="+" onClick={this.buttonPressed}>+</button>
                <button className="btn btn-primary" name="/" onClick={this.buttonPressed}>/</button>
                <button className="btn btn-primary" name="*" onClick={this.buttonPressed}>*</button>
                <button className="btn btn-primary" name="=" onClick={this.buttonPressed}>=</button>
                <button className="btn btn-primary" name="C" onClick={this.buttonPressed}>C</button>
                <button className="btn btn-primary" name="CE" onClick={this.buttonPressed}>CE</button>







            </div>
        )
    }
}
