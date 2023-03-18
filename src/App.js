
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
import AppAdmin from './Compenent/Admin/AppAdmin'
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
  <Route path="/OurDoctor" element ={<OurDoctor/>} />
   <Route path="/AppAdmin" element ={<AppAdmin/>} /> 
</Routes>
<ButtonBar/>
  </Router>
  );
}

export default App;
