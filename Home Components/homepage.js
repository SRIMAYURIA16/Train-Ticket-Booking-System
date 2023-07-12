import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./homepage.css";
import { Link } from "react-router-dom";
import v from './assets/Initial Name Mk Monogram Logo.gif';
import Typewriter from "typewriter-effect";
import AboutUs from "./about us";
function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<>
		<div id="home">
		<header >
            <span></span>
            <span></span>		
<img src={v} alt="gif" style={{height:'50',width:'70px',borderRadius:'50%'}}/>  
			<h3>Travel On</h3>
			<nav ref={navRef} >
				<a href="/#home">Home</a>
				<a href="#about us">About us</a>
				{/* <a href="/#">Customer Support</a> */}
				<a href="/#contact">Contact</a>
			{/* <a href="/#">Profile</a> */}
			    <Link to='/train login page' >Login/Sign Up</Link>
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
        <input type="text" placeholder="Source" name="source" required />
				<label for="destination" style={{color:'white'}}>Your Destination</label>
        <input type="text" placeholder="Destination" name="destination" required />
		<label for="date" style={{color:'white'}}>Date of Journey</label>
		<input type="date" placeholder="dd/mm/yyyy" name="date" required/>
        <button type="submit"> Search Trains</button>
        
        
      </form>

			</div>
			</div>
		</body>
		<footer>
		<AboutUs/>
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

export default Navbar;