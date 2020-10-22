import React, { Component } from 'react'
import { Button } from 'reactstrap';
import '../../assets/calculator.css'

export default class stopwatch extends Component {
    constructor(props){
        super(props);
        this.state={
            milsec:0,
            secs:0,
            min:0,
            hrs:0,
        }
    }
    stopwatch_start;
    
    timer = ()=>{
        this.setState({
                milsec: this.state.milsec +1,
            });

        if (this.state.milsec === 90){
            this.setState({
                milsec: 0,
                secs: this.state.secs +1,
            })
        }else if(this.state.secs === 60){
            this.setState({
                secs:0,
                min:this.state.min +1,
            })
        }else if(this.state.min == 60){
            this.setState({
                min:0,
                hrs:this.state.hrs+1,
            })
        }    
    }
    // intrval1 = setInterval(this.timer,10);
    intrval = ()=>{
        this.stopwatch_start = setInterval(this.timer,10);
    } 
    stopintrval = () =>{
        clearInterval(this.stopwatch_start);
    }

    resetwatch = () =>{
        this.setState({
            milsec:0,
            secs:0,
            min:0,
            hrs:0,
        });
    }
    
    render() {
        
        return (
            <div className="container">
                <div className="row head">
                    <div className="col colstop1">
                        <h2>Stopwatch</h2>
                    </div>
                </div>
                <div className="row justify-content-md-center clock">
                    <div className="col-1">
                        <h2>{this.state.hrs}</h2>
                    </div>
                    <div className="col-sm-1">
                        <h2>:</h2>
                    </div>
                    <div className="col-sm-1">
                        <h2>{this.state.min}</h2>
                    </div>
                    <div className="col-sm-1">
                        <h2>:</h2>
                    </div>
                    <div className="col-sm-1">
                        <h2>{this.state.secs}</h2>
                    </div>
                    <div className="col-sm-1">
                        <h2>:</h2>
                    </div>
                    <div className="col-sm-1">
                        <h2>{this.state.milsec}</h2>
                    </div>
                </div>
                <div className="row justify-content-md-center clock">
                    <div className="col-1">
                        <h2>Hrs</h2>
                    </div>
                    <div className="col-sm-1">
                        <h2></h2>
                    </div>
                    <div className="col-sm-1">
                        <h2>Min</h2>
                    </div>
                    <div className="col-sm-1">
                        <h2></h2>
                    </div>
                    <div className="col-sm-1">
                        <h2>Sec</h2>
                    </div>
                    <div className="col-sm-1">
                        <h2></h2>
                    </div>
                    <div className="col-sm-1">
                        <h2>Millisec</h2>
                    </div>
                </div>

                <div className="row btns">
                    <div className="col btnstop">
                    <Button color="success" onClick={this.intrval}>start</Button>
                    <Button color="info" onClick={this.stopintrval}>Pause</Button>
                    <Button color="warning" onClick={this.resetwatch}>reset</Button>
                    </div>
                </div>

                

                


            </div>
        )
    }
}

