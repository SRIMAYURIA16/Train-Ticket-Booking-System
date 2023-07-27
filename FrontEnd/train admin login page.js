import React from 'react';
import './train login page.css';
import {BrowserRouter,Link,Route, Routes} from 'react-router-dom';
import Login_page from './train login page';
const Admin_login_page = () => {
  return (
    <>
    <div className="top1">
      <div className="container">
    
      <form>
      <h1 >Admin Login</h1>
        <input required type="text" placeholder="Email" name="adminname"  />
        <input required type="password" placeholder="Password" name="password" />
        <Link to="/adminHome" style={{color:'white'}} ><button type="submit">Login</button></Link>
        <Link to='/train login page' style={{color:'orange'}}>User ?Login</Link>
       
      </form>
      </div>
    </div>
      
    </>
  );
};

export default Admin_login_page;
