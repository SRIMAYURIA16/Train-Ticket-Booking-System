import React from 'react';
import { Link } from 'react-router-dom';
import v from './assets/Initial Name Mk Monogram Logo.gif';
import { FaBars, FaTimes } from "react-icons/fa";
import './homepage.css'
import { useRef } from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Navbar from './homepage';
import Login_page from './train login page';
import Admin_login_page from './train admin login page';
import Register from './train reg page';
import {useSelector} from 'react-redux';
import UserLogout from './logout';
function Adtop(){

    const navRef = useRef();
    const user=useSelector(state => state.user.value)

const showNavbar = () => {
    navRef.current.classList.toggle(
        "responsive_nav"
    );
};

return (
    <>
   
    <div id="home1">
    <header >
        <span></span>
        <span></span>		
<img src={v} alt="gif" style={{height:'50',width:'70px',borderRadius:'50%'}}/>  
        <h3>Travel On</h3>
        <nav ref={navRef} >
            {/* <a href="#about us">About us</a> */}
            {/* <a href="/homepage">Home</a> */}
            <Link to='/homepage' >Home</Link>
            <Link to='/manageTrain' >Train</Link>
            &nbsp; &nbsp;
            {!user.email?
        <Link to='/train login page' >Login/Sign Up</Link>:
        <h4>{user.email}<UserLogout/></h4>
        }
            {/* <Link to='/homepage' >Home</Link> */}
            {/* <Link to='/#' >Login/Sign Up</Link> */}
            <button
                className="nav-btn nav-close-btn"
                onClick={showNavbar}>
                <FaTimes />
            </button>
        </nav>
        <button
            className="nav-btn"
            onClick={showNavbar}>
            <FaBars />
        </button>
    </header>
    </div>
    </>
 );
}
export default Adtop;

      
