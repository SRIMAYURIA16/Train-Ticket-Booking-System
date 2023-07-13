import React from 'react';
import tl from './assets/trainlist.jpg';
import { Train } from './Train';
import './trainList.css';
import Top from './navbar';
function TrainList() {
    return ( 
        <>
        {/* <Top/> */}
        <div className='tg1'>
            {Train.map((mp)=>(
            <div className='tg2t'>
            <div className='tg2'>
                <div className='tg3t'>
                <div style={{paddingLeft:'2%',height:'100%'}}>
                    <img src={tl} style={{width:'60%',height:'80%',paddingLeft:'9%'}}></img>
                </div>
                </div>
                <div className='tg3t'>
                <div className='tg3'>
                    <span>{mp.name}</span>
                    <p>{mp.no}</p>
                </div>
                </div>
                <div className='tg3t'>
                <div className='tg3'>
                    <span>FROM</span>
                    <p>{mp.from}</p>
                </div>
                </div>
                <div className='tg3t'>
                <div className='tg3'>
                    <span>TO</span>
                    <p>{mp.to}</p>
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
                    <button class='b110'  type='submit'>Show Availability</button>
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