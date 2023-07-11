import React from 'react';
import './train login page.css';
import { Link } from 'react-router-dom';
import Typewriter from "typewriter-effect";
export const menuItems = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Services',
    url: '/services',
  },
  {
    title: 'About',
    url: '/about',
  },
];
const Login_page = () => {
  return (
    <>
    
    <div className="top1">
        
      <div className="s1">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Travel On")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Welcomes You!!!")
                        .deleteAll()
                        .typeString("Start You Journey")
                        .deleteAll()
                        .typeString("Life is short, and the world is wide!!!")
                        .start();
                }}
            />
        </div>
      <div className="container" >
      <form>
      <h1>Login</h1>
        <input type="text" placeholder="Email" name="email" required />
        <input type="password" placeholder="Password" name="password" required />
        <button type="submit"><Link to="/" style={{color:'white'}} >Login</Link></button>
        <Link to='/train reg page' style={{color:'orange'}}>Don't have an account? Register</Link>
        <br></br>
        <Link to='/train admin login page' style={{color:'orange'}}>Admin Login</Link>
        
      </form>
      </div>
    </div>

    </>
  );
};

export default Login_page;