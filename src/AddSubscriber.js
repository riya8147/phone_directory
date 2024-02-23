import React, { Component } from 'react';
import Header from './Header';
 
import './AddSubscriber.css';

class AddSubscriber extends Component{


    constructor(){
        super();
        this.state={
           id: 0,
           name: '',
           phone: ''
        }
        console.log(this.state);
    }
    inputChangedHandler = (e) =>{
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
        console.log(this.state);
    }

    render(){

        const {name, phone} = this.state;


        return(
            <div>
                <Header heading="ADD SUBSCRIBER"/>
                <div className="component-body-container">
                    <button className="custom-btn">Back</button>
                    <form className="subsciber-form">
                    <label htmlFor="name" className="label-control">Name:</label>
                    <input id="name" type="text" className="input-control" name="name" onChange={this.inputChangedHandler}></input><br></br><br></br>
                    <label htmlFor="name" className="label-control">Phone:</label>
                    <input id="phone" type="text" className="input-control" name="phone" onChange={this.inputChangedHandler}></input><br></br><br></br>
                    <div className="subsciber-info-container">
                        <span className="subscriber-to-add-heading">Subscriber to be added:</span><br></br>
                        <span className="subscriber-info">Name: {name}</span><br></br>
                        <span className="subscriber-info">Phone: {phone}</span><br></br>                   
                    </div>
                    <button type="submit" className="custom-btn add-btn">Add</button>
                </form>
                </div>

            </div>
        )
            
    }
}

export default AddSubscriber;

