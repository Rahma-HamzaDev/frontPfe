
import './App.css';
import { BrowserRouter as Router , Route ,Routes } from 'react-router-dom';

import Menu from './Compenent/Home/Menu';
import { PriceChange } from '@mui/icons-material';
import Principale from './Compenent/Home/Principale';
// import About from './Compenent/Home/About'
import TopBar from './Compenent/Home/TopBar';
import Service from './Compenent/Home/Service';
import Register2 from './Compenent/Home/Register2';
import Footer from './Compenent/Home/Footer';
import Contact from './Compenent/Home/Contact';
import Login from './Compenent/Home/Login';
import RegisterPatient from './Compenent/Home/RegisterPatient';
import RegisterDoctor from './Compenent/Home/RegisterDoctor';
import OurDoctor from './Compenent/Home/OurDoctor'
import ButtonBar from './Compenent/Home/ButtonBar';


import AppAdmin from './Compenent/Admin/AppAdmin';
import GestionMed from './Compenent/Admin/GestionMed';
import Notification from './Compenent/Admin/Notification';
import MenuAd from './Compenent/Admin/MenuAd';
import ListMedcin from './Compenent/Admin/ListMedcin';



import Consultation from './Compenent/Doctor/Consultation' ;

function App() {
  return (
    <Router>
      <TopBar/>
      <Menu/>
 <Routes>
  <Route path="/" element ={<Principale/>} />
  {/* <Route path="/About" element ={<About/>} /> */}
  <Route path="/Service" element ={<Service/>} />
  <Route path="/Register2" element ={<Register2/>} />
  <Route path="/Contact" element ={<Contact/>} />
  <Route path="/Login" element ={<Login/>} />
  <Route path="/RegisterPatient" element ={<RegisterPatient/>} />
  <Route path="/RegisterDoctor" element ={<RegisterDoctor/>} />


   <Route path="/AppAdmin" element ={<AppAdmin/>} /> 
   <Route path="/GestionMed" element ={<GestionMed/>} /> 
   <Route path="/Notification" element ={<Notification/>} /> 
   <Route path="/ListMedecin" element ={<ListMedcin/>} /> 
   <Route path="/MenuAd" element ={<MenuAd/>} /> 

   
  <Route path="/OurDoctor" element ={<OurDoctor/>} />





</Routes>
<ButtonBar/>
  </Router>
  );
}

export default App;
