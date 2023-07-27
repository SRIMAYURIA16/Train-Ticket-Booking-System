import React,{useState,useEffect} from 'react';
import './train login page.css';
import { Link,useNavigate } from 'react-router-dom';
import Typewriter from "typewriter-effect";
import { useDispatch } from 'react-redux';
import {login,logout} from './features/user';

import {useSelector} from 'react-redux';
import Navbar from './homepage';
import axios from 'axios';
const Login_page = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const user=useSelector(state => state.user.value)
  const[content,addContent]=useState([]);
  const[errors,setErrors]=useState("");
  const[emailerr,setEmailerr]=useState('');
  const[passerr,setPasserr]=useState('');
  useEffect(()=>{
    axios.get('http://localhost:8181/api/v1/auth/get').then(function (response) {
      addContent(response.data);
    })
  },[]);
  
  
  const handleNext=()=>{
    dispatch(login({email}));navigate("/")
  }
  
  const handleChange = async(e) => {
    e.preventDefault();
    if(email.length===0){
      setEmailerr("EmailId  is required");    
      return;
    }
    else{
      setEmailerr("");    
    }
    if(password.length===0){
      setPasserr("Password is required");    
      return;
    }
    else{
      setPasserr("");    
    }
    if(email.length!==0 && password.length!==0){
  try{
  const response = await axios.post(
    'http://localhost:8181/api/v1/auth/authenticate',
    {
      email,
      password
    });
    handleNext();
    let token = response.data.token;
    let user = response.data.userResponse;
    localStorage.setItem('token',token);
    localStorage.setItem('user',JSON.stringify(user));
  }
  catch(error){
    console.log("helloooo");
    if (error.response && error.response.status === 403) {
      setErrors("Invalid email or password" );
    } else {
      console.error('Error:', error);
    }
  }
  }
  };
  
      
   
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
      
        <input type="text" value={email} placeholder="Email" name="email" required onChange={e=>setEmail(e.target.value)}/>

          <span style={{color:"red"}}>{emailerr}</span>
        <span style={{color:"red"}}>{errors}</span>
        <input type="password" placeholder="Password" name="password" required onChange={e=>setPassword(e.target.value)}/>
        <span style={{color:"red"}}>{passerr}</span>
        <Link to="/" style={{color:'white'}} > <button type="submit" onClick={handleChange}>Login</button></Link>
      <Link to='/train reg page' style={{color:'orange'}}>Don't have an account? Register</Link>
      <br></br>
      <Link to='/train admin login page' style={{color:'orange'}}>Admin Login</Link> 
     
        {/* {!email.name?
          <button onClick={()=> dispatch(login({email})
          )}>Login</button>:
        <button onClick={()=> dispatch(logout()
          )}>Logout</button>} */}
        {/* <Link to="/" style={{color:'white'}} ><button type="submit">Login</button></Link> */}
      </form>
      </div>
    </div>

    </>
  );
};

export default Login_page;