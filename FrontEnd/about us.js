
import React from 'react';
import './aboutus.css';
import per from './assets/person.png';
import v from './assets/Initial Name Mk Monogram Logo.gif';
import Top from './navbar';

const AboutUs = () => {
  return (
    <>
    <Top/>
    <div className="about-us" id="about us">
      <center><h1 style={{color:'white'}}>About Us</h1></center>
      <p style={{color:'white'}}>Welcome to our company! We are dedicated to providing high-quality products and excellent customer service. 
      Our team is passionate about what we do and we strive to exceed our customers' expectations.</p>
      <p style={{color:'white'}}>Feel free to explore our website and contact us if you have any questions or inquiries. We look forward to serving you!</p>
      
    </div>

    <div className="team">
      <div className='tp'>
      <div className='tm'>
      <img src={per} alt="team member1" style={{height:'50',width:'70px',borderRadius:'50%'}}/> 
      
      <h4 style={{paddingLeft:'15px'}}>Mayu</h4><br></br>
      <p style={{paddingLeft:'10px'}}>The_Founder</p>
      <div className='container2'>
      <a class="link email" href="mailto:mayuannadurai16@gmail.com">
			<i class="fa-sharp fa-solid fa-1X fa-envelope"></i>
		</a>
      <a class="link facebook" href="https://www.facebook.com/groups/indian.railway.ticket.agency/">
            <i class="fab fa-1x fa-facebook-f"></i>
        </a>
        <a class="link instagram" href="https://instagram.com/srimayuri_annadurai?igshid=NGExMmI2YTkyZg==">
            <i class="fab fa-1x fa-instagram"></i>
        </a>
        </div>
      </div>
      </div>
      <div className='tp'>
      <div className='tm'>
      <img src={per} alt="team member2" style={{height:'50',width:'70px',borderRadius:'50%'}}/> 
      <h4 style={{paddingLeft:'15px'}}>Thara</h4><br></br>
      <p style={{paddingLeft:'10px'}}>The_CAO</p>
     
      <div className='container2'>
      <a class="link email" href="mailto:tharakeshwarisankaran25@gmail.com">
			<i class="fa-sharp fa-solid fa-1X fa-envelope"></i>
		</a>
      <a class="link facebook" href="https://www.facebook.com/groups/indian.railway.ticket.agency/">
            <i class="fab fa-1x fa-facebook-f"></i>
        </a>
        <a class="link instagram" href="https://instagram.com/tharakeshwari_s?igshid=MzRlODBiNWFlZA==">
            <i class="fab fa-1x fa-instagram"></i>
        </a>
        </div>
      </div>
      </div>
      <div className='tp'>
      <div className='tm'>
        <center>
        <img src={per} alt="team member3" style={{height:'50',width:'70px',borderRadius:'50%'}}/>
        </center>
      
      <h4 style={{paddingLeft:'15px'}}>Dharshini</h4><br></br>
      <p style={{paddingLeft:'10px'}}>The_CRO</p>
      <div className='container2'>
      <a class="link1 email" href="mailto:sri.sd2003@gmail.com">
			<i class="fa-sharp fa-solid fa-1X fa-envelope"></i>
		</a>
      <a class="link1 facebook1" href="https://www.facebook.com/groups/indian.railway.ticket.agency/">
            <i class="fab fa-1x fa-facebook-f"></i>
        </a>
        <a class="link1 instagram1" href="https://instagram.com/sri_sd23?igshid=MzRlODBiNWFlZA==">
            <i class="fab fa-1x fa-instagram"></i>
        </a>
        </div>
      </div> 
      </div>
    </div>
    </>
  );
};

export default AboutUs;













{/* <div className="our-team">
        <h2 style={{color:'white'}}>Our Team</h2>
        <div className="team-member">
          <img src="" alt="Team Member 1" />
          <h3 style={{color:'white'}}>John Doe</h3>
          <p style={{color:'white'}}>Position: CEO</p>
        </div>
        <div className="team-member">
          <img src="team-member2.jpg" alt="Team Member 2" />
          <h3 style={{color:'white'}}>Jane Smith</h3>
          <p style={{color:'white'}}>Position: CTO</p>
        </div>
        {/* Add more team members as needed */}
      {/* </div> */} 