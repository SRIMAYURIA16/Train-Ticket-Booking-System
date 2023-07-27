import { useRef,useState,useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './homepage.css';
import { Link } from "react-router-dom";
import v from './assets/Initial Name Mk Monogram Logo.gif';
import Typewriter from "typewriter-effect";
import {useSelector} from 'react-redux';
import UserLogout from "./logout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Navbar() {
	const navRef = useRef();
	const user = useSelector((state) => state.user.value);
	const [source, setSource] = useState("");
	const [destination, setDestination] = useState("");
	const[date,setDate]=useState("");
	
	const navigate=useNavigate();
	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
	const sourceOptions = [
		"Chennai",
		"Mumbai",
		"Madurai",
		"Trichy",
		"Thanjavur",
		"Bangalore",
		"Tirupur",
		"Namakkal",
		"Erode",
		"Tirunelveli",
		"Hyderabad",
		"Mumbai",
		"Coimbatore"
	  ];
	  
	  const destinationOptions = [
		"Chennai",
		"Mumbai",
		"Madurai",
		"Trichy",
		"Thanjavur",
		"Bangalore",
		"Tirupur",
		"Namakkal",
		"Erode",
		"Tirunelveli",
		"Hyderabad",
		"Mumbai",
		"Coimbatore"
	  ];

	  
	return (
		<>
		<div id="home">
		<header >
            <span></span>
            <span></span>		
<img src={v} alt="gif" style={{height:'50',width:'70px',borderRadius:'50%'}}/>  
			<h3>Travel On</h3>
			<nav ref={navRef} >
				{/* <a href="/homepage">Home</a> */}
			    <Link to='/homepage' >Home</Link>
			    <Link to='/about us' >AboutUs</Link>
			    <Link to='/customersupport' >CustomerService</Link>
				{/* <a href="/#">Customer Support</a> */}
				{/* <a href="/#contact">Contact</a> */}
				<Link to='/homepage'>Contact</Link>
				<Link to='/feedback'>Feedback</Link>
			{/* <a href="/#">Profile</a> */}
			{!user.email?
			<Link to='/train login page' >Login/Sign Up</Link>:
			<h4>{user.email}<UserLogout/></h4>
			}	
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
			&nbsp;&nbsp;&nbsp;
			<select style={{color:'black',width:'340px',height:'42px'}} value={source} onChange={(e) => setSource(e.target.value)}>
            <option value="">Select Source</option>
            {sourceOptions.map((option) => (
              <option style={{color:'black'}}key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
		  &nbsp;&nbsp;
          <select style={{color:'black',width:'340px',height:'42px'}} value={destination} onChange={(e) => setDestination(e.target.value)}>
            <option value="">Select Destination</option>
            {destinationOptions.map((option) => (
              <option style={{color:'black'}}key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
		  &nbsp;&nbsp;

          <input
            id='sdate'
            type='date'
            placeholder='dd/mm/yyyy'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

             <Link to="/trainList" state={{ from: source, to: destination, dateofj: date }}>
            
         
			 <button className='b11' type='submit' >Search Trains</button>
			 </Link>
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

export default Navbar;