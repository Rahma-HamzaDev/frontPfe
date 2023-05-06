
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from "react-redux";

//home
import Menu from './Compenent/Home/Menu';
// import { Logout, PriceChange } from '@mui/icons-material';
import Principale from './Compenent/Home/Principale';
import About from './Compenent/Home/About'
import TopBar from './Compenent/Home/TopBar';
import Service from './Compenent/Home/Service';
import Register2 from './Compenent/Home/Register2';
import Footer from './Compenent/Home/Footer';
import Contact from './Compenent/Home/Contact';
import Login from './Compenent/Home/Login';
import Register from './Compenent/Home/Register';
import OurDoctor from './Compenent/patient/doctors/OurDoctor'
import ButtonBar from './Compenent/Home/ButtonBar';



// Doctor interface
import Consultation from './Compenent/Doctor/Pages/consultation/Consultation';
import Ordonnance from './Compenent/Doctor/Pages/ordonnance/Ordonnance';
// import ListPatient from './Compenent/Doctor/ListPatient';
import Insertpatient from './Compenent/Doctor/Pages/PatientList/Insertpatient';
import MenuDoctor from './Compenent/Doctor/Pages/HomeDoctor/MenuDoctor';
import ListRend_vous from './Compenent/Doctor/Pages/RendezVous/ListRend_vous';
import Demdeur from './Compenent/Doctor/Pages/RendezVous/Demdeur';
import NotifactionDR from './Compenent/Doctor/NotifactionDR';
import Fiche from './Compenent/Doctor/Pages/PatientList/Fiche';
import EditePatient from './Compenent/Doctor/Pages/PatientList/EditePatient';
import ListPatient from "./Compenent/Doctor/Pages/PatientList/ListPatient";
// import AffichePatient from "./Compenent/Doctor/AffichePatient";



// patient interface
import MenuPa from './Compenent/patient/principale/MenuPa';

import DossiersPa from './Compenent/patient/ourDossiers/DossiersPa';
import ListeSpecard from './Compenent/patient/ListeSpecard';
import MesRend from './Compenent/patient/RendezVous/histoireRend/MesRend';

import PrincipalePa from './Compenent/patient/PrincipalePa';

import Sidebar from './Compenent/patient/principale/side/Sidebar';
import SidebarD from './Compenent/Doctor/SidebarD';

import Prendrerend_vous from './Compenent/patient/RendezVous/Prendrerend_vous';
import SonDossier from './Compenent/patient/ourDossiers/SonDossier';
import ListMedPa from './Compenent/patient/ListMedPa';
import MediaCardPa from './Compenent/patient/MediaCardPa';
// import MoncomptePa from './Compenent/patient/ProfilePa/MoncomptePa';

import PrincipaleDo from './Compenent/Doctor/Pages/HomeDoctor/PrincipaleDo';


import Patientedite from './Compenent/patient/ProfilePa/Patientedite';
import HomePatient from './Compenent/patient/principale/HomePatient';
import Modifiercompte from './Compenent/Doctor/Pages/modificationcompte/Modifiercompte';
import CalendrieMed from './Compenent/Doctor/Pages/RendezVous/CalendrieMed';
import ConsPa from './Compenent/patient/ourDossiers/ConsPa';
import OrdPa from './Compenent/patient/ourDossiers/OrdPa';
import ListsepPa from './Compenent/patient/principale/ListsepPa';
import Logout from './Compenent/patient/principale/Logout';
import TopPA from './Compenent/patient/principale/top/TopPA';
import DetailsCons from './Compenent/Doctor/Pages/consultation/DetailsCons';
import EditeCons from './Compenent/Doctor/Pages/consultation/EditeCons';
import Paientedite from './Compenent/patient/ProfilePa/Patientedite';
import TopDoctor from './Compenent/Doctor/topbarD/TopDoctor';
import ProtectedRoutesMedecin from './Compenent/Home/ProtectedRoutesMedecin';
import Dossmed from './Compenent/Doctor/Pages/dossiers medicales/Dossmed';

import AjouterCons from './Compenent/Doctor/Pages/consultation/AjouterCons';
function App() {
  // const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <>
      <Router>
        {/* {isLoggedIn? <HomePatient /> :<Login/> } */}
        {/* {isLoggedIn2? <PrincipaleDo /> :<LoginDoctor/> } */}

        {/* <TopBar/>  */}
        {/* <Menu/> */}
        <Routes>
          <Route path="/" element={<Principale />} />
          <Route path="/About" element={<About />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Register2" element={<Register2 />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/AppA" element ={<AppA/>} /> */}



          {/* Doctor  */}
          <Route path="/Patient/edit/:id" element={<EditePatient />} />
          <Route path="/Patient/medecin/:id/insert" element={<Insertpatient />} />

          <Route path="/Patient/cons/:id" element={<Consultation />} />
          <Route path="/Patient/cons/:id/insert" element={<AjouterCons />} />


          <Route path="/Modifiercompte" element={<Modifiercompte />} />
          <Route path="/MenuDoctor" element={<MenuDoctor />} />
          <Route path="/Consultation" element={<Consultation />} />
          <Route path="/ListRend_vous" element={<ListRend_vous />} />
          <Route path="/Demdeur" element={<Demdeur />} />
          <Route path="/Fiche" element={<Fiche />} />
         
          <Route path="/Patient/Dossmed/:id" element={<Dossmed/>} />

   
          <Route path="/Patient/cons/:id/:consid" element={<DetailsCons />} />
          {/* <Route path="/cons/:consid" element={<DetailsCons />} /> */}
          <Route path="/Patient/:patientid/cons/edit/:consid" element={<EditeCons />} />
          {/* <Route path="ord/cons/:id/:ordid" element ={<Ordonnance/>} /> */}
          <Route path="/Patient/:patientid/cons/ord/:id" element={<Ordonnance />} />
          {/* <Route path="/PrincipaleDo" element ={<PrincipaleDo />} /> */}
          <Route path="/PrincipaleDo" element={<PrincipaleDo />} />
          <Route path="/NotifactionDR" element={<NotifactionDR />} />
          <Route path="/ListeSpecard" element={<ListeSpecard />} />
          {/* <Route path="/ListPatient" element={<ListPatient />} /> */}
          <Route path="/Patient/medecin/:id" element={<ListPatient />} />

          <Route path="/SidebarD" element={<SidebarD />} />
          <Route path="/CalendrieMed" element={<CalendrieMed />} />
          <Route path="/TopDoctor" element={<TopDoctor />} />
          {/* /patient/ */}
          <Route path="/PrincipalePa" element={<PrincipalePa />} />
          <Route path="/HomePatient" element={<HomePatient />} />
          <Route path="/Patientedite" element={<Patientedite />} />
          <Route path="/MenuPa" element={<MenuPa />} />
          <Route path="/MesRend" element={<MesRend />} />
          <Route path="/DossiersPa" element={<DossiersPa />} />
          <Route path="/ConsPa" element={<ConsPa />} />
          <Route path="/OrdPa" element={<OrdPa />} />
          <Route path="/SonDossier" element={<SonDossier />} />
          <Route path="/OurDoctor" element={<OurDoctor />} />
          <Route path="/Prendrerend_vous" element={<Prendrerend_vous />} />
          <Route path='/ListMedPa' element={<ListMedPa />} />
          <Route path='/MediaCardPa' element={<MediaCardPa />} />
          {/* <Route path='/MoncomptePa'element={<MoncomptePa/>}/> */}
          <Route path="/Sidebar" element={<Sidebar />} />
          <Route path="/ListsepPa" element={<ListsepPa />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="/TopPA" element={<TopPA />} />
          {/* <Route path="/Cons" element={<Cons/>} /> */}
          <Route path="/Paientedite" element={<Paientedite />} />

        </Routes>
      </Router>
    </>);
}


export default App;
