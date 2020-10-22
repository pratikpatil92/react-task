import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import '../../assets/calculator.css';

export default class thermometer extends Component {
    constructor(props){
        super();
        this.state = {
            height:'50%',
            backgroundcolor:'grey',
            fillcolor:'white',
        }
        this.handleChange = this.handleChange.bind(this);

        
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    render() {
        return (
               <div className= "container">
                   <div className = "row">
                       <div className="col col1">
                           <div className="thermometer" style={{backgroundColor:this.state.backgroundcolor}}>
                            <div className="thermometer1" style={{backgroundColor:this.state.fillcolor,height:this.state.height}}></div>
                           </div>
                           
                       </div>
                       <div className="col-6 col2">
                           <div className="thermeter-form">
                                <Form>
                                        <FormGroup>
                                            <Label for="exampleheight">Enter Height in %</Label>
                                            <Input type="text" name="height" id="exampleheight" placeholder="Enter your Height in %" value={this.state.height} onChange={this.handleChange}/>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="exampleBackgroundcolor">Enter Height in Meter</Label>
                                            <Input type="text" name="backgroundcolor" id="exampleBackgroundcolor" placeholder="Enter backgrondcolor" value={this.state.backgroundcolor} onChange={this.handleChange}/>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="exampleFillcolor">Enter Height in Meter</Label>
                                            <Input type="text" name="fillcolor" id="exampleFillcolor" placeholder="Enter fill color" value={this.state.fillcolor} onChange={this.handleChange}/>
                                        </FormGroup>
                                        {/* <Button onClick={this.handleSubmit}>Submit</Button> */}
                                </Form>
                                </div>
                       </div>

                   </div>
               </div>
                
                
            
        )
    }
}
