
import React, { Component } from 'react';

import Header from "./Header"

import './App.css'

class App extends Component{
    

  render() {
    // let x = 10;
    // let y = 20;
    let subscribers = [
      {
        id: 1,
        name: "Rakshitha",
        phone: "7987979872"
      },
      {
        id: 2,
        name: "Rakshiv",
        phone: "7987979872"
      }

    ]

    return (
      <div className="component-container">
      <Header></Header>
      <div className="component-body-container">
      <button className="custom-btn add-btn">ADD</button>
      <div>
        <div className="grid-container heading-container"></div>
        <span className="grid-item name-heading"> Name</span>
        <span className="grid-item phone-heading"> Phone</span>
      </div>
      {/* <label htmlfor="name">ADDITION VALUE: </label>
      <input id="name" type="text" placeholder="Type Here" defaultValue={x+y}></input> */}

      {
        subscribers.map(sub => {
          return <div key={sub.id} className="grid-container">
          <span className="grid-item">{sub.name}</span>
          <span className="grid-item">{sub.phone}</span>
          </div>
        })
      }



      </div>
      </div>
    );
     
  }
} 


export default App;
