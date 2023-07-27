import React, { Component } from 'react';
import './logout.css';

export default class UserLogout extends Component {
 logout = () => {
    localStorage.clear();
    window.location.href = "/train login page";
  }
 
  render() {
    return (

      <>
      &nbsp; &nbsp;
      <button id="logout-button" onClick={this.logout}>
  Logout
</button>
        {/* <button valuestyle={{backgroundColor:'none',}} >Logout</button> */}
        
        </>
    
     
    )
  }
}