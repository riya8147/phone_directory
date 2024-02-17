
import React, { Component } from 'react';

import Header from "./Header"

class App extends Component{
  render() {
    // let x = 10;
    // let y = 20;
    return (
      <div>
      <Header></Header>
      <button>ADD</button>
      <div>
        <span> Name</span><br/>
        <span> Phone</span>
      </div>
      {/* <label htmlfor="name">ADDITION VALUE: </label>
      <input id="name" type="text" placeholder="Type Here" defaultValue={x+y}></input> */}


      </div>
    );
     
  }
} 


export default App;
