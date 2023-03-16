
import './App.css';
import { BrowserRouter as Router , Route ,Routes } from 'react-router-dom';

import Menu from './Compenent/Home/Menu';
import { PriceChange } from '@mui/icons-material';
import Principale from './Compenent/Home/Principale';
import About from './Compenent/Home/About'
import TopBar from './Compenent/Home/TopBar';
import Service from './Compenent/Home/Service';
import LoginDoctor from './Compenent/Home/LoginDoctor';
import Footer from './Compenent/Home/Footer';
import Contact from './Compenent/Home/Contact'
import Login from './Compenent/Home/Login';
// import AppAdmin from './Compenent/Admin/AppAdmin'
function App() {
  return (
    <Router>
      <TopBar/>
    <Menu/>
 <Routes>
  <Route path="/" element ={<Principale/>} />
  <Route path="/About" element ={<About/>} />
  <Route path="/Service" element ={<Service/>} />
  <Route path="/LoginDoctor" element ={<LoginDoctor/>} />
  <Route path="/Contact" element ={<Contact/>} />
  <Route path="/Login" element ={<Login/>} />
  {/* <Route path="/AppAdmin" element ={<AppAdmin/>} /> */}
</Routes>
<Footer/>
  </Router>
  );
}

export default App;
