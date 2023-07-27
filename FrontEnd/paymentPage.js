import React from 'react'
import './paymentPage.css';
import { useState } from 'react';
import axios from 'axios';
import tk from './assets/tk.jpg'
// import bg1 from './assets/supportvideo.mp4';
import j1 from './assets/Initial Name Mk Monogram Logo.gif'
import Navbar from './homepage';
import Top from './navbar';
import jsPDF from 'jspdf';

function Payment() {
  const[visible,setVisible]=useState("none");
  const[name,setName]=useState("");
  const[bank,setBank]=useState("");
  const[card,setCard]=useState("");
  const[exdate,setExdate]=useState("");
  const[cvv,setCvv]=useState("");
  const[errors,setErrors]=useState({});
  
  const handelDownload=()=>{
      var doc=new jsPDF('landscape','px','a4','false');
      // doc.rect(20, 20,592,400);
      doc.addImage(tk,'jpg',20,20,592,400);
      doc.save('tickets.pdf');
  }
    
  const validateForm = () => {
    const errors = {};

    if (name.trim() === '') {
      errors.name = 'Name is required';
    }
    
   
    if (bank.trim() === '') {
      errors.bank = 'Bank name is required';
    } 
    
    if (card === '') {
      errors.card = 'Card number is required';
    }
    else if(card.length!==12){
      errors.card = 'Card number is invalid';
    }
    if (cvv === '') {
      errors.cvv = 'CVV is required';
    }
    else if(cvv.length!==3){
      errors.cvv = 'CVV is invalid';

    }
    if (exdate.trim() === '') {
      errors.exdate = 'Expiry date is required';
    }
    else if(!/^(0[1-9]|1[0-2])\/\d{2}$/.test(exdate)){
      errors.exdate = 'Expiry date is invalid';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  async function handlePay(e){
    const cvvnum=parseInt(cvv);
    e.preventDefault();
    if (validateForm()) {
    try{
      const data={
         user_name:name,
         bank_name:bank,
         card_no:card,
         cvv:cvvnum,
         exp_date:exdate
      };
      const res=await axios.post("http://localhost:8181/payment/",data);
      await console.log(res);
      alert("Ticket is confirmed");
      setVisible("block");
    }catch(e){
      console.log(e.message);
    }
    }
  }
  
    return ( 
        <>
        <Top/>
    <div className="wrapper" style={{paddingTop:'70px'}}>
      <div class="payment" style={{marginRight:'400px',marginTop:"100px"}}>
        <div class="payment-logo">
          <img src={j1} style={{width:'100px' , height:'100px',borderRadius:'50%'}}></img>
        </div>
        
        
        <h2>Make Your Payment</h2>
        <div class="form">
          <div class="card space icon-relative">
            <label class="label">Card holder:</label>
            <input type="text" class="input" value={name} onChange={(e) =>setName(e.target.value)}></input>
            {/* <i class="fas fa-user"></i> */}
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div class="card space icon-relative">
            <label class="label">Bank Name</label>
            <input type="text" class="input"  value={bank} onChange={(e) => setBank(e.target.value)} ></input>
            {/* <i class="fas fa-user"></i> */}
            {errors.bank && <span className="error-message">{errors.bank}</span>}
          </div>
          <div class="card space icon-relative">
            <label class="label">Card number:</label>
            <input type="text" class="input" data-mask="0000 0000 0000 0000" placeholder="Card Number"  value={card} onChange={(e) => setCard(e.target.value)}></input>
            {/* <i class="far fa-credit-card"></i> */}
            {errors.card && <span className="error-message">{errors.card}</span>}
          </div>
          <div class="card-grp space">
            <div class="card-item icon-relative">
              <label class="label">Expiry date:</label>
              <input type="text" name="expiry-data" class="input" data-mask="00 / 00"  placeholder="00 / 00" value={exdate} onChange={(e) => setExdate(e.target.value)}></input>
              {/* <i class="far fa-calendar-alt"></i> */}
              {errors.exdate && <span className="error-message">{errors.exdate}</span>}
            </div>
            <div class="card-item icon-relative">
              <label class="label">CVC:</label>
              <input type="text" class="input" data-mask="000" placeholder="000" value={cvv} onChange={(e) => setCvv(e.target.value)}></input>
              {/* <i class="fas fa-lock"></i> */}
              {errors.cvv && <span className="error-message">{errors.cvv}</span>}
            </div>
          </div>
            
        <center>
        <div class="btn" onClick={handlePay}>
            Pay Now
          </div> 
        </center>
          <div class="btn" style={{display:visible}} onClick={handelDownload}>Download tickets</div>
          
          
        </div>
      </div>
    </div>
    
</>
     );
}

export default Payment;