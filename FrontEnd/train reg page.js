import React, { useState,useEffect } from 'react';
import './train reg page.css'; 
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { login } from './features/user';
function Register(){
  const handleNext=()=>{
    dispatch(login({email}));navigate("/homepage")
  }
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const[firstName,setFirstName]=useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [errors, setErrors] = useState({});
  const[content,addContent]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:8181/api/v1/auth/get').then(function (response) {
      addContent(response.data);
      
    });
  })
  
  const validateForm = () => {
    const errors = {};
  
    content.map((value) => {
      if (value.email === email) {
        errors.email = "The Email Id already exists";
        console.log("The Email Id already exists");
      }
    });
  
    if (firstName.trim() === '') {
      errors.firstName = 'First name is required';
    }
  
    if (lastName.trim() === '') {
      errors.lastName = 'Last name is required';
    }
  
    if (email.trim() === '') {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email address';
    }
  
    if (password === '') {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password should be at least 6 characters long';
    } else if (!/[0-9]/.test(password)) {
      errors.password = 'Password must contain at least one digit';
    } else if (!/[a-zA-Z]/.test(password)) {
      errors.password = 'Password must contain at least one letter';
    } else if (!/[!@#$%^&*]/.test(password)) {
      errors.password = 'Password must contain at least one symbol';
    }
  
    if (!/^\d{10}$/.test(phone)) {
      errors.phone = 'Invalid mobile number';
    }
    
    if (city.trim() === '') {
      errors.city = 'City is required';
    }
  
    setErrors(errors);
  
    // Return true if there are no errors
    return Object.keys(errors).length === 0;
  };
  
   
    async function handleSubmit (event) {
      event.preventDefault();
      if (validateForm()) {
        // Perform registration logic here
        // For simplicity, we'll just log the form data to the console
        handleNext();
      }
      try{
        const data={
          name:firstName,
          // last_name:lastName,
          email:email,
          // city:city,
          password:password
          // mobile_no:phone
        };
        const response = await axios.post('http://localhost:8181/api/v1/auth/register', data).then(response=>{console.log(response.data)});
console.log('Registration successful:', response.data);


        
    
        // Dispatch the 'login' action and redirect to the homepage after successful registration
        dispatch(login({ email }));
        navigate('/homepage');
      } catch (error) {
        console.error('API request error:', error);
      }

       
  };

  return (
    <>
    <div className="top2">
    <div className="registration-container">
      <h2>Registration Page</h2>
      <form >
        <div className="form-group">
          <label>First Name:</label>
          <input required
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {errors.firstName && <span className="error-message">{errors.firstName}</span>}
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input required
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {errors.lastName && <span className="error-message">{errors.lastName}</span>}
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input required
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input required
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>
        <div className="form-group">
          <label>Mobile Number:</label>
          <input required
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </div>
        <div className="form-group">
          <label>City:</label>
          <input required
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          {errors.city && <span className="error-message">{errors.city}</span>}
        </div>
       <Link to="/" style={{color:'white'}} > <button type="submit" onClick={handleSubmit}>Register</button></Link>
        <Link to='/train login page' style={{color:'orange'}}>Have an account? Login</Link>
      </form>
    </div>
    </div>
    </>
  );
};

export default Register;