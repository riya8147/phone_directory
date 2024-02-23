
import React, { Component } from 'react';

import Header from "./Header"

import './App.css'


    // let x = 10;
    // let y = 20;
    // let subscribers = [
    //   {
    //     id: 1,
    //     name: "Rakshitha",
    //     phone: "7987979872"
    //   },
    //   {
    //     id: 2,
    //     name: "Rakshiv",
    //     phone: "7987979872"
    //   }

    // ]

class App extends Component{
  constructor()
    {
      super();
      this.state = {
        subcribersListToShow : []
      }
    }
  
    

  render() {

  


    return (
      <div className="component-container">
      <Header heading="Phone Directory"  developed_by="RAKSHITHA"></Header>
      <div className="component-body-container">
      <button className="custom-btn add-btn">ADD</button>
      
        <div className="grid-container heading-container"></div>
        <span className="grid-item name-heading"> Name</span>
        <span className="grid-item phone-heading"> Phone</span>
      </div>
      {/* <label htmlfor="name">ADDITION VALUE: </label>
      <input id="name" type="text" placeholder="Type Here" defaultValue={x+y}></input> */}

      {
        this.state.subcribersListToShow.map(sub => {
          return <div key={sub.id} className="grid-container">
          <span className="grid-item">{sub.name}</span>
          <span className="grid-item">{sub.phone}</span>

          <span className="grid-item action-btn-container">
          <button className="custom-btn delete-btn"  onClick={this.deleteHandler.bind(this, "Delete Clicked")}>Delete</button>
          </span>

          </div>
        })
      }



      </div>
  
    );
     
  }
} 


export default App;
