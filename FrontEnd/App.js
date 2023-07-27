import logo from './logo.svg';
import './App.css';
import Admin_login_page from './train admin login page';
import {BrowserRouter as Router,Link,Route, Routes} from 'react-router-dom';
import Login_page from './train login page';
import Register from './train reg page';
import Navbar from './homepage';
import AboutUs from './about us';
import CustomerService from './customersupport';
import Seats from './seatselection';
import TrainList from './trainList';
import SeatSelection from './seatselection';
import Payment from './paymentPage';
import AddTrain from './addTrain';
import UpdateTrain from './updateTrain';
import DeleteTrain from './deleteTrain';
import AdminHome from './adminHome';
import ManageTrain from './ManageTrain';
import Feedback from './feedback';
function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Navbar/>}/>
        <Route path="/train login page" element={<Login_page/>}/>
        <Route path="/train admin login page" element={<Admin_login_page/>}/>
        <Route path="/train reg page" element={<Register/>}/>
        <Route path="/about us" element={<AboutUs/>}/>
        <Route path="/customersupport" element={<CustomerService/>}/>
        <Route path="/seatSelection" element={<Seats/>}/>
        <Route path="/trainList" element={<TrainList/>}/>
        <Route path="/homepage" element={<Navbar/>}/>
        <Route path="/seatselection" element={<SeatSelection/>}/>
        <Route path="/paymentPage" element={<Payment/>}/>
        <Route path="/addTrain" element={<AddTrain/>}/>
        <Route path="/updateTrain" element={<UpdateTrain/>}/>
        <Route path="/deleteTrain" element={<DeleteTrain/>}/>
        <Route path="/adminHome" element={<AdminHome/>}/>
        {/* <Route path="/adminHome" element={<AdminHome/>}/> */}
        <Route path="/manageTrain" element={<ManageTrain/>}/>
        <Route path="/feedback" element={<Feedback/>}/>
      </Routes>
      </Router>
  );
}

export default App;
