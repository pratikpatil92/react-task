import React, { Component } from 'react';

import Bmi_output from './output_bmi';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import '../assets/calculator.css';

export default class bmi_keypad extends Component {
    constructor(props){
        super();
        this.state = {
            weight:'',
            height:'',
            bmi_result:'',
            bmi_cls:'',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.calculate_bmi = this.calculate_bmi.bind(this);
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    calculate_bmi = ()=>{
        let height_sq = (this.state.height/100 * this.state.height/100);
        let bmi = this.state.weight / height_sq;
        let message = "";
        let cls = "";

        if(bmi >= 18.5 && bmi <= 24.99){
            ((message = "You are in a healthy weight range and BMI is ") && (cls="text-success"));
        }
        else if(bmi >= 25 && bmi <= 29.9){
            ((message = "You are overweight and BMI is ")&& (cls="text-warning"));
        }
        else if(bmi >= 30){
            ((message="You are obese and BMI is ")&& (cls="text-danger"));
        }
        else if(bmi < 18.5){
            ((message="You are under weight and BMI is ") && (cls="text-info"));
        }

        this.setState({bmi_result:message});
        this.setState({bmi_cls:cls});
        this.setState({bmi:Math.round(bmi * 100) / 100});


        
    }

    handleSubmit = (e)=>{
        this.calculate_bmi();

    }
    render() {
        return (
            <div className="Bmi-form">
                <Form>
                    <FormGroup>
                        <Label for="exampleWeight">Enter Weight in Kg</Label>
                        <Input type="number" name="weight" id="exampleWeight" placeholder="Enter your weight" value={this.state.weight} onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleHeight">Enter Height in Meter</Label>
                        <Input type="number" name="height" id="exampleHeight" placeholder="Enter your height" value={this.state.height} onChange={this.handleChange}/>
                    </FormGroup>
                    <Button onClick={this.handleSubmit}>Calculate BMI</Button>
                </Form>
                
                {/* <Bmi_output bmi_result={[this.state.bmi_result,this.state.bmi]} className={this.state.bmi_cls}></Bmi_output> */}
                <h2 className={this.state.bmi_cls}>{[this.state.bmi_result,this.state.bmi]}</h2>

            </div>
        )
    }
}
