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
      <h1 style={{color:'black'}}>Admin Login</h1>
        <input type="text" placeholder="Email" name="adminname" required />
        <input type="password" placeholder="Password" name="password" required />
        <button type="submit"><Link to="/" style={{color:'white'}} >Login</Link></button>
        <Link to='/train login page' style={{color:'orange'}}>User ?Login</Link>
       
      </form>
      </div>
    </div>
      
    </>
  );
};

export default Admin_login_page;
