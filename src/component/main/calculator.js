import React, { Component } from 'react'
import '../../assets/calculator.css';
import Keypad from '../keypad_cal';
import Output from '../output_cal';

export default class calculator extends Component {

    state = {
        result:'',
    }

    buttonPressed = buttonName =>{
        if (buttonName=== "="){
            this.calculate();
        }else if(buttonName==="C"){
            this.reset();
        }else if(buttonName==="CE"){
            this.backspace();
        }else{
            this.setState({
                result: this.state.result + buttonName,
        });}
    };

    calculate = ()=>{
        try{this.setState({
            result: eval(this.state.result)
        })}catch(e){
            this.setState({
                result:"error",
            })
        }
    }
    reset = ()=>{
        this.setState({
            result:'',
        })
    }
    backspace = ()=>{
        this.setState({
            result:this.state.result.slice(0, -1),
        })
    }
    render() {
        return (
            <div className="calc-body">
                <h2>Basic Calculator</h2>
                <Output result={this.state.result}></Output>
                <Keypad buttonPressed={this.buttonPressed}></Keypad>
            </div>
        )
    }
}
