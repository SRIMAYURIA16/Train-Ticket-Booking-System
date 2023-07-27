import React, { useState } from 'react';
import './seatselection.css';
import Typewriter from 'typewriter-effect';
import CheckIcon from '@mui/icons-material/Check';
import ToggleButton from '@mui/material/ToggleButton';
import Top from './navbar';
import { Link, useLocation } from 'react-router-dom';


import axios from 'axios';
import { useEffect } from 'react';


function Display(props) {
  const [pname, setPname] = useState('');
  const [age, setAge] = useState('');
  const [adhar, setAdhar] = useState('');
  const [tclass, setTclass] = useState('');
  const [gender, setGender] = useState('');
  const [price, setPrice] = useState(1000);
  const handleOk = () => {
    if (tclass === "AC1") {
      setPrice("1000");
    } else if (tclass === "AC2") {
      setPrice(1250);
    } else if (tclass === "AC3") {
      setPrice(1000);
    } else if (tclass === "FirstClass") {
      setPrice(750);
    } else if (tclass === "SecondClass") {
      setPrice(500);
    } else if (tclass === "Sleeper") {
      setPrice(650);
    }

    const data = {
      pname,
      age,
      adhar,
      tclass,
      gender,
      price,
    };
console.log(data);
    // Call the callback function with the data
    props.onDataChange(data);
  };
  return (
    <>
      <div className="i11">
        <br></br>
        <br></br>
        <fieldset style={{ width: '90%' }}>
          <legend>PASSENGER&nbsp;{props.n + 1}</legend>
          <input
            type="text"
            placeholder="Name"
            style={{ border: 'none', width: '17%', height: '3vh', borderRadius: '10px',color:'black' }}
            value={pname}
            onChange={(e) => setPname(e.target.value)}
          />
          <br></br>
          <br></br>
          <input
            type="number"
            placeholder="Age"
            style={{ border: 'none', width: '18%', height: '5vh', borderRadius: '10px' ,color:'black'}}
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <br></br>
          <br></br>
          <input
            type="text"
            placeholder="Aadhar Number"
            style={{ border: 'none', width: '17%', height: '3vh', borderRadius: '10px' ,color:'black'}}
            value={adhar}
            onChange={(e) => setAdhar(e.target.value)}
          />
          <br></br>
          <br></br>
          <select
            style={{ border: 'none', width: '18%', height: '5vh', borderRadius: '10px',color:'black' }}
            value={tclass}
            onChange={(e) => setTclass(e.target.value)}
          >
            <option style={{color:'black'}} value="AC 1">AC 1</option>
            <option style={{color:'black'}}value="AC 2">AC 2</option>
            <option style={{color:'black'}} value="AC 3">AC 3</option>
            <option style={{color:'black'}}value="Sleeper">SLEEPER</option>
            <option style={{color:'black'}}value="First Class">FIRST CLASS</option>
            <option style={{color:'black'}}value="Second Class">SECOND CLASS</option>
          </select>
          <br></br>
          <br></br>
          <select
            style={{ border: 'none', width: '18%', height: '5vh', borderRadius: '10px' ,color:'black'}}
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="Gender" style={{color:'black'}}>Gender</option>
            <option value="Male" style={{color:'black'}}>MALE</option>
            <option value="Female" style={{color:'black'}}>FEMALE</option>
            <option value="Others" style={{color:'black'}}>OTHERS</option>
          </select>
          <br></br>
          <br></br>
          <button style={{color:'black'}}onClick={handleOk}>OKAY</button>
        </fieldset>
      </div>
    </>
  );
}

function SeatSelection() {
  const location = useLocation();
  const data = location.state;
  const [num, setNum] = useState(0);

  const [forms, setForms] = useState([]);

  const[val,setVal]=useState(1);
  const [content, addContent]=useState([]);
  const[mt,setMt]=useState({});
  const [total, setTotal] = useState(0);
  const [passengerData, setPassengerData] = useState([]);
  const[displayAmt,setdisplayAmt]=useState("none");
  const handleDataChange = (data) => {
    setPassengerData((prevData) => [...prevData, data]);
  };
  const handleSubmit = () => {
    const formsArray=[];
    
  for (let i = 0; i < num; i++) {
    formsArray.push(<Display  key={i} n={i}
      onDataChange={handleDataChange} />);
  }
  
    setForms(formsArray);
  };
  useEffect(() => {
    let str = 'http://localhost:8181/trainclass?tId=';
    str = str + data.train_no;
    axios.get(str).then(function (response) {
      addContent(response.data);
    }, []);
    content.map((value) => {
      setMt({
        ac1: value.ac1,
        ac2: value.ac2,
        ac3: value.ac3,
        first: value.first,
        second: value.second,
        sleeper: value.sleeper,
      });
    });
  }, []);
    
    // const response = await axios.get(`http://localhost:8181/trainclass?tId=${val}`);
    
    const handlePay=()=>{
      let sum=0;
      passengerData.map((passenger, index) => {
          sum=sum+passenger.price;
      })
      console.log(sum);
    setTotal(sum);
    setdisplayAmt("block");
  }
  const inputStyle = {
    width: '50px', // Set the desired width
    height: '30px', // Set the desired height
    fontSize: '16px', // Set the desired font size
    // Add any other desired styles here
  };
    console.log(content);
    content.map((value)=>{
      if(value.tid===val){
        mt.ac1=value.ac1;
        mt.ac2=value.ac2;
        mt.ac3=value.ac3;
        mt.first=value.first;
        mt.second=value.second;
        mt.sleeper=value.sleeper;
      }
    })
  

  const [selected, setSelected] = React.useState(false);
  const [Wselected, WsetSelected] = React.useState(false);

  return (
    <>
      <Top />
      <div id="seatselect">
        <div className="ss1">
          <div className="ss2">
          <h1 className='type' style={{paddingRight:'1%',paddingTop:'11%',color:'rgb(244, 210, 210'}}> <Typewriter 
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Welcome")
                        .pauseFor(1000)
                        
                       
                        .start();
                }}
            /> 
            <br></br>
            <Typewriter 
                onInit={(typewriter) => {
                    typewriter
                    .pauseFor(4000)
                        .typeString("Book Your Tickets")
                        
                        .start();
                }}
            /> 
            <span style={{color:'black'}}></span></h1>
        <div className='tg2t1'>
            <div className='tg21'>
                <div className='tg3t1'>
                <div className='tg31'>
                    <span >{data.trainname}</span>
                    <p>{data.trainno}</p>
                </div>
                </div>
                <div className='tg3t1'>
                <div className='tg31'>
                    <span>FROM</span>
                    <p>{data.source}</p>
                </div>
                </div>
                <div className='tg3t1'>
                <div className='tg31'>
                    <span>TO</span>
                    <p>{data.destination}</p>
                </div>
                </div>
                <div className='tg3t1'>
                <div className='tg31'>
                    <span>ARRIVAL TIME</span>
                    <p>{data.atime}</p>
                </div>
                </div>
                <div className='tg3t1'>
                <div className='tg31'>
                    <span>DEPATURE TIME</span>
                    <p>{data.dtime}</p>
                </div>
                </div>
                <div className='tg3t1'>
                <div className='tg31'>
                    <span>DISTANCE</span>
                    <p>{data.distance}</p>
                </div>
                </div>
                {/* <div className='tg3t1'>
                <div className='tg31'>
                    <span>DEPATURE TIME</span>
                    <p>{data.}</p>
                </div>
                </div> */}
                <fieldset><legend>AVAILABLE SEATS</legend>
                <div className='tg3t1'>
                <div className='tg31'>
                    <span>AC1 CLASS</span><br></br>
                    <span style={{color:'rgb(244, 210, 210)',textDecoration:'none'}}>{mt.ac1}</span><br></br>
                    <span style={{color:'rgb(244, 210, 210)',textDecoration:'none'}}>[1500]</span><br></br>

                </div>
                </div>
                <div className='tg3t1'>
                <div className='tg31'>
                    <span>AC2 CLASS</span><br></br>
                    <span style={{color:'rgb(244, 210, 210)',textDecoration:'none'}}>{mt.ac2}</span><br></br>
                    <span style={{color:'rgb(244, 210, 210)',textDecoration:'none'}}>[1250]</span><br></br>

                </div>
                </div>
                <div className='tg3t1'>
                <div className='tg31'>
                    <span>AC3 CLASS</span><br></br>
                    <span style={{color:'rgb(244, 210, 210)',textDecoration:'none'}}>{mt.ac3}</span><br></br>
                    <span style={{color:'rgb(244, 210, 210)',textDecoration:'none'}}>[1000]</span><br></br>

                </div>
                </div>
                <div className='tg3t1'>
                <div className='tg31'>
                    <span>FIRST CLASS</span><br></br>
                    <span style={{color:'rgb(244, 210, 210)',textDecoration:'none'}}>{mt.first}</span><br></br>
                    <span style={{color:'rgb(244, 210, 210)',textDecoration:'none'}}>[750]</span><br></br>

                </div>
                </div>
                <div className='tg3t1'>
                <div className='tg31'>
                    <span>SECOND CLASS</span><br></br>
                    <span style={{color:'rgb(244, 210, 210)',textDecoration:'none'}}>{mt.second}</span><br></br>
                    <span style={{color:'rgb(244, 210, 210)',textDecoration:'none'}}>[500]</span><br></br>

                </div>
                </div>
                <div className='tg3t1'>
                <div className='tg31'>
                    <span>SLEEPER CLASS</span><br></br>
                    <span style={{color:'rgb(244, 210, 210)',textDecoration:'none'}}>{mt.sleeper}</span><br></br>
                    <span style={{color:'rgb(244, 210, 210)',textDecoration:'none'}}>[650]</span><br></br>

                </div>
                </div>
                
                </fieldset>
                <br></br>
                <span style={{ fontSize: 'larger', fontWeight: 'bold' }}>NUMBER OF PASSENGERS: </span>
              <input type='number' min={0} onChange={(e) => setNum(e.target.value)} style={{color:'black',inputStyle}} />
              &nbsp;&nbsp;&nbsp;
              <button
                type='submit'
                style={{ width: '15vh', height: '40px', paddingBottom:'10px',borderRadius: '50px', backgroundColor: 'black', color: 'white' }}
                onClick={handleSubmit}
              >
                Proceed
              </button>
                {/* <span style={{fontSize:'larger',fontWeight:'bold'}}>NUMBER OF PASSENGERS:  </span>
                <input type="number" style={{color:'black'}} min={0} onChange={(e)=>{setNum(e.target.value)}}></input>
                <button type="submit" style={{width:'10%'}}onClick={handleSubmit}>Proceed</button> */}
                <br></br>
                {forms}
                {passengerData.map((passenger, index) => (
            <div key={index} className="passenger-data">
              <h3>PASSENGER {index + 1}</h3>
              <p>Name: {passenger.pname}</p>
              <p>Age: {passenger.age}</p>
              <p>Aadhar Number: {passenger.adhar}</p>
              <p>Class: {passenger.tclass}</p>
              <p>Gender: {passenger.gender}</p>
              <p>Price: {passenger.price}</p>
            </div>
          ))}
        </div>
        </div>
 
          </div>
          <center>
            {/* <Link to="/paymentPage"> */}
              <button
                type="submit"
                style={{ color: 'black', backgroundColor: 'rgb(244, 210, 210', width: '30%' }}
                onClick={handlePay}
              >
                Proceed
              </button>
              <div style={{display:displayAmt}}>
            <Link
          to={{
            pathname: '/paymentPage',
            state: { passengerData: passengerData }
          }}
        >
            <button
                type='submit'
                style={{
                  color: 'black',
                  backgroundColor: 'rgb(244, 210, 210)',
                  width: '15%',
                  height: '10vh',
                  borderRadius: '50px',
                  fontSize: '18px'
                }}
              >
                Make Payment
                Rs.{total}
              </button>
            </Link>
              </div>
            {/* </Link> */}
          </center>

        </div>
      </div>
    </>
  );
}

export default SeatSelection;
