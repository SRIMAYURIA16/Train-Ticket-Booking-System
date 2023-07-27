import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Register from './train reg page';
import Login_page from './train login page';
import Admin_login_page from './train admin login page';
import App from './App';
import Navbar from './homepage';
import About_us from './about us';
import CustomerService from './customersupport';
import Seats from './seatselection';
import TrainList from './trainList';
import Top from './navbar';
// import { Train } from './Train';
import foot from './footer';
import Profile from './profile';

import SeatSelection from './seatselection';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducer from './features/user';
import PaymentPage from './paymentPage';
import Payment from './paymentPage';
import UpcomingJourneyPage from './upcoming';
import PastJourneyPage from './past journey';
import AdminPage from './admin';
import AddTrain from './addTrain';
const store=configureStore({
  reducer:{
    user:userReducer
  }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <AddTrain/> */}
    <App/>
    {/* <AdminPage/> */}
    {/* <Profile/>
    <Login_page/> */}
    {/* <Dropdown/> */}
    {/* <Payment/> */}
    {/* <SeatSelection/> */}
     {/* <UpcomingJourneyPage/> */}
    {/* <PastJourneyPage/>  */}
    </Provider>
    {/* <Register/> */}
    {/* <Navbar/> */}
    {/* <foot/> */}
    {/* <CustomerService/> */}
    {/* <About_us/> */}
    {/* <Seats/> */}
    {/* <TrainList/> */}
    {/* <Top/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
