
import './App.css';
import { BrowserRouter as Router , Route ,Routes } from 'react-router-dom';

import Menu from './Compenent/Home/Menu';
import { PriceChange } from '@mui/icons-material';
import Principale from './Compenent/Home/Principale';
 import About from './Compenent/Home/About'
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


// Doctor interface
import Consultation from './Compenent/Doctor/Consultation' ;
import Ordonnance from './Compenent/Doctor/Ordonnance' ;
import ListPatient from './Compenent/Doctor/ListPatient';
import Insertpatient from './Compenent/Doctor/Insertpatient';
import MenuDoctor from './Compenent/Doctor/MenuDoctor';
import ListRend_vous from './Compenent/Doctor/ListRend_vous';
import Demdeur from './Compenent/Doctor/Demdeur';
import NotifactionDR from './Compenent/Doctor/NotifactionDR';
import Fiche from './Compenent/Doctor/Fiche';
//
// patient interface
import MenuPa from './Compenent/patient/MenuPa';
import ConsPa from './Compenent/patient/ConsPa';
import DossiersPa from './Compenent/patient/DossiersPa';
import FichePa from './Compenent/patient/FichePa';
import MesRend from './Compenent/patient/MesRend';
import OrdPa from './Compenent/patient/OrdPa';
import PrincipalePa from './Compenent/patient/PrincipalePa';
//




function App() {
  return (
    <Router>
      <TopBar/>
      <Menu/>
 <Routes>
  <Route path="/" element ={<Principale/>} />
 <Route path="/About" element ={<About/>} /> 
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

   
 
  <Route path="/Insertpatient" element ={<Insertpatient/>} />
  <Route path="/ListPatient" element ={<ListPatient/>} />
  <Route path="/MenuDoctor" element ={<MenuDoctor/>} />
  <Route path="/MenuDoctor" element ={<Consultation/>} />
  <Route path="/ListRend_vous" element ={<ListRend_vous/>} />
  <Route path="/Demdeur" element ={<Demdeur/>} />
  <Route path="/Fiche" element ={<Fiche/>} />
  <Route path="/Ordonnance" element ={<Ordonnance/>} />

  <Route path="/NotifactionDR" element ={<NotifactionDR/>} />


  <Route path="/PrincipalePa" element ={<PrincipalePa/>} />
  <Route path="/MenuPa" element ={<MenuPa/>} />
  <Route path="/MesRend" element ={<MesRend/>} />
  <Route path="/DossiersPa" element ={<DossiersPa/>} />
  <Route path="/ConsPa" element ={<ConsPa/>} />
  <Route path="/OrdPa" element ={<OrdPa/>} />
  <Route path="/FichePa" element ={<FichePa/>} />
  <Route path="/OurDoctor" element ={<OurDoctor/>} />







</Routes>
<ButtonBar/>
  </Router>
  );
}

export default App;
