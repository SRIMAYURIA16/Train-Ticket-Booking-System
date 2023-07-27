import React from 'react';
import Faq from "react-faq-component";
import './customersupport.css';
import { useState } from 'react';
import Top from './navbar';
const data = {
    title: "FAQ (Frequently Asked Questions)",
    rows: [
        {
            title: "What is Travel On?",
            content: `Travel On(Le Travenues Technology Ltd.) was started by Mayu,Thara and 
            Dharshini in July 2023. iTravelOn is an intelligent, AI-based travel app, 
            with a user base of over 170 million travellers. TravelOn uses Artificial Intelligence for deal discovery, personalized recommendations, dynamic marketing, airfare predictions, train delay information, PNR confirmation status, infrastructure cost optimization, 
            business intelligence and for providing fully-automated customer service over chat and voice.`,
        },
        {
            title: "Why is TravelOn different from other travel booking platforms?",
            content:
            'TravelOn is an intelligent, AI-based travel platform that helps you organise, book and track your trips. With unique features such as the Online/Offline Train Running Status, PNR Prediction, Refund Calculator, TDR tracking, Station Alarm and so on, the TravelOn Trains app offers a seamless booking experience. The app can currently be used in 8 Indian languages. On the other hand, the TravelOn trains app also offers the users some unique features such as fare prediction, auto web check-in and so on!',
        },
        {
            title: "How do I get a refund on a ticket booking through TravelOn?",
            content: `For refund of a confirmed booking, you need to place a cancellation request from the My Trips section of the TravelOn app.
            For refund related to a failed booking, the amount deducted from your account will be reversed in the source account within 7 days.`,
        },
        {
            title: "How can I track refunds on TravelOn?",
            content: <ul >
                <li style={{color:'grey'}}>Please follow the steps mentioned below to track your refund status:</li>
                <li style={{color:'grey'}}> Log in to your TravelOn account</li>
                <li style={{color:'grey'}}> Click on the customer service tab</li>
                <li style={{color:'grey'}}> Select your trip from the 'MyTrips' section</li>
                <li style={{color:'grey'}}>Click on the booking ID and check the refund status</li>
            </ul>,
        },
        {
            title:"How do I cancel my ticket on TravelOn?",
            content:<ul><li style={{color:'grey'}}>Please follow these simple steps to cancel your ticket on TravelOn:</li>
                <li style={{color:'grey'}}>Log in to TravelOn</li>
            <li style={{color:'grey'}}> Visit the 'My Trips' section on the app</li>
            <li style={{color:'grey'}}> Select the desired booking, scroll down and click on the 'cancel ticket' tab to initiate cancellation.</li>
            <li style={{color:'grey'}}> In case of partial cancellation, please select the desired passenger(s) and click on the cancel tab.</li>
            </ul>,
        },
        {
            title: "What is the package version",
            content: 'current version is 1.2.1',
        },
    ],
};
const styles = {
    bgColor: '#d1b8bb ',
    opacity:0.2,
    titleTextColor: "black",
    // rowTitleColor: "black",
    rowContentColor: 'red',
    titleTextSize: '20px',
    rowTitleColor: 'black',
    rowContentColor: 'grey',
    transitionDuration: "1s",
};

const config = {
    animate: true,
    tabFocus: true,
    openOnload: 0,
    expandIcon: "+",
    collapseIcon: "-",
};
const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
        {isReadMore ? text.slice(0, 950) : text}
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "...read more" : " show less"}
        </span>
      </p>
    );
  };
function CustomerService() {
    
    return ( 
        <>
        <Top/>
        <div className='cpad'>
        <h3>Book your train ticket with TravelOn for a memorable experience.</h3>
        <br></br>
        <h4>
            <ReadMore>
        TravelOn.com is a reliable travel agent in India, which offers great deals on  tickets. Book train for all destinations across India  at the lowest trainfares with us. As one of the leading travel portals of India, we constantly endeavour to make your vacation memorable. So, why go anywhere else? Call us to save big on all kinds of travel products and services and have a memorable travel experience on small budget. 
        We believe in creating awesome vacations for our clients through customized holiday packages & tours. Enjoy great savings on holiday trips with TravelOn.com.
Cheap Tickets are available at TravelOn.com, one of the leading travel portals in India. The company offers great discounts on train tickets. 
Being a reliable name in the traveling industry of India, we focus on providing a smooth providing booking experience to our customers. So, book air tickets at the lowest airfare by planning your trip with us.
If you want to book your train tickets at no convenience fee and looking for transparency in air ticket pricing, 
we are here to serve you with the best possible offers. To reduce your train booking cost, we have tied up with several banking partners. 
You can avail the best train ticket booking deals for all major low-cost carriers of India and abroad with us. 
Last minute discounts on air ticket booking are also available with us. 
So, go for a journey to your preferred destinations with the best trainfare discounts.
</ReadMore>
        </h4>
        <div>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
        </div>
        </>
     );
}

export default CustomerService;