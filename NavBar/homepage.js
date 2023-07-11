import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./homepage.css";
import { Link } from "react-router-dom";
import v from './assets/Initial Name Mk Monogram Logo.gif';
function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<>
		<header>
            <span></span>
            <span></span>		
<img src={v} alt="gif" style={{height:'50',width:'70px',borderRadius:'50%'}}/>  
            {/* <img src="https://cdn-icons-png.flaticon.com/128/5193/5193777.png" style={{height:"10vh",width:"10vh"}}/> */}
			<h3>Travel On</h3>
            <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
            <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<span></span><span></span><span></span><span></span><span></span><span></span>
			<nav ref={navRef}>
				{/* <a href="/#">Home</a>
				<a href="/#">Customer Support</a>
				<a href="/#">About Me</a>
			<a href="/#">Profile</a> */}
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
		<body>

		</body>
		<footer>
		<div class="container1" >
        <a class="link twitter">
            <i class="fab fa-2x fa-twitter"></i>
        </a>
       
        <a class="link instagram" href="https://instagram.com/irctc_train_ticket?igshid=MzRlODBiNWFlZA==">
            <i class="fab fa-2x fa-instagram"></i>
        </a>
		<a class="link youtube" href="https://youtube.com/shorts/taQ62p7EpfQ?feature=share">
			<i class="fab fa-2x fa-youtube"></i>
		</a>
		<a class="link email">

		<i class="fa-sharp fa-solid fa-2x fa-envelope"></i>
		</a>
		<a class="link phone">
		<i class="fa-2x fa-sharp fa-solid fa-phone"></i>
		</a>
        <a class="link facebook">
            <i class="fab fa-2x fa-facebook-f"></i>
        </a>
    </div>
		</footer>
		
		</>
	);
}

export default Navbar;