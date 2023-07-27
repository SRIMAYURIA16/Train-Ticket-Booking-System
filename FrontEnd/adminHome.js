import React from 'react';
import Typewriter from "typewriter-effect";
import { Link } from 'react-router-dom';
import Adtop from './NavAdmin';

function AdminHome() {
    return ( 
        <>
       <Adtop/>
        <body>
			<div className="b11">
			<div className="cont">
			
				<h3>MAKE YOUR <br></br>
			RESERVATION</h3>
			    <h4 style={{color:'lightpink'}}>Certainly, travel is more than the seeing of sights
				<br></br> it is a change that goes on, 
				<br></br>deep and permanent, in the ideas of living.</h4>
				<div className="type">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Travel On")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Welcomes You!!!")
                        .deleteAll()
                        .typeString("Remember that happiness is a way of travel")
                        .deleteAll()
                        .typeString("not a destination!!!")
                        .start()
						.deleteAll()
                        .typeString("Happy Journey!!!")
                        .start();
                }}
            /> 
         </div>
			
			</div>
			<div className="book">
			<form>
				<label for="source" style={{color:'white'}}>Your Source</label>
        <input type="text" placeholder="Source" name="source" autoComplete="off" required />
				<label for="destination" style={{color:'white'}}>Your Destination</label>
        <input type="text" placeholder="Destination" name="destination" autoComplete="off" required />
		<label for="date" style={{color:'white'}}>Date of Journey</label>
		<input type="date" placeholder="dd/mm/yyyy" style={{color:'#7E7E82'}} name="date" required/>
        <Link to="/trainList" style={{color:'white'}} ><button type="submit">Search Trains</button></Link>
      </form>
			</div>
			</div>
		</body>
		<footer>
			{/* <seatSelection/>
			<CustomerService/>
		<AboutUs/> */}
		<div id="contact">
				<center>
			<h3>Contact us on:</h3>
				</center>
		<div class="container1" >

        <a class="link twitter" href="https://twitter.com/i/flow/login">
            <i class="fab fa-2x fa-twitter"></i>
        </a>
       
        <a class="link instagram" href="https://instagram.com/irctc_train_ticket?igshid=MzRlODBiNWFlZA==">
            <i class="fab fa-2x fa-instagram"></i>
        </a>

		<a class="link youtube" href="https://youtube.com/shorts/taQ62p7EpfQ?feature=share">
			<i class="fab fa-2x fa-youtube"></i>
		</a>

		<a class="link email" href="mailto:mayuannadurai16@gmail.com">
			<i class="fa-sharp fa-solid fa-2x fa-envelope"></i>
		</a>
		

		<a class="link phone" href="tel:7446789181">
		<i class="fa-2x fa-sharp fa-solid fa-phone"></i>
		</a>

        <a class="link facebook" href="https://www.facebook.com/groups/indian.railway.ticket.agency/">
            <i class="fab fa-2x fa-facebook-f"></i>
        </a>
    </div>
	<div class="text-center text-white p-3" style={{opacity:0.8}} >
      © 2022 Copyright:All Rights Reserved
    </div>
		</div>
		</footer>
        </>
     );
}

export default AdminHome;