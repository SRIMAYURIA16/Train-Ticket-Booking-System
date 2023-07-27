import React, { useState ,useEffect} from 'react';
import tl from './assets/trainlist.jpg';
import './trainList.css';
import Top from './navbar';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
function TrainList() {
    const location=useLocation();
    const s=location.state.from;
    const d=location.state.to;
    const [content, addContent] = useState([]);
    const[errors,setErrors]=useState('');
    
    useEffect(()=>{
        if (!s || !d) {
            setErrors('Please provide source and destination.');
          }
          else {
            axios
              .get(`http://localhost:8181/train/source/${s}/destination/${d}`)
              .then(function (response) {
                addContent(response.data);
              })
              .catch(function (error) {
                // Handle any errors from the API call here
                setErrors('Error fetching train data. Please try again later.');
              });
          }
        }, [s, d]); 
   
    
    return ( 
        <>
        <Top/>
        <div className='tg1' style={{paddingTop:'90px'}}>
        {errors && <div>{errors}</div>}
            {content.map((mp)=>(
            <div className='tg2t'>
            <div className='tg2'>
                <div className='tg3t'>
                <div style={{paddingLeft:'2%',height:'100%'}}>
                    <img src={tl} style={{width:'60%',height:'80%',paddingLeft:'9%'}}></img>
                </div>
                </div>
                <div className='tg3t'>
                <div className='tg3'>
                    <span>{mp.trainname}</span>
                    <p>{mp.trainno}</p>
                </div>
                </div>
                <div className='tg3t'>
                <div className='tg3'>
                    <span>FROM</span>
                    <p>{mp.source}</p>
                </div>
                </div>
                <div className='tg3t'>
                <div className='tg3'>
                    <span>TO</span>
                    <p>{mp.destination}</p>
                </div>
                </div>
                <div className='tg3t'>
                <div className='tg3'>
                    <span>ARRIVAL TIME</span>
                    <p>{mp.atime}</p>
                </div>
                </div>
                <div className='tg3t'>
                <div className='tg3'>
                    <span>DEPATURE TIME</span>
                    <p>{mp.dtime}</p>
                </div>
                </div>
                <div className='tg3t'>
                <div className='tg3'>
                    <center>
                        <Link to='/seatselection' state={mp}><button class='b110'  type='submit'>Show Availability</button></Link>
                    
                    </center>
                    
                </div>
                </div>
                
            </div>
            </div>
            ))}
        </div>
        </>
     );
}

export default TrainList;