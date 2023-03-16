import React from 'react'
import './App.css';
import { BrowserRouter as Router , Route ,Routes } from 'react-router-dom';
import Notification from './Notification';
import GestiomMed from './GestiomMed';
import Principale from '../Home/Principale';
import TopBar from '../Home/TopBar';
import Menu from './MenuAd';
import Principale from './';
function AppAdmin() {
  return (
    <div>
        <Router>
      <TopBar/>
    <Menu/>
 <Routes>
  <Route path="/" element ={<Principale/>} />
  <Route path="/Notification" element ={<Notification/>} />
  <Route path="/GestiomMed" element ={<GestiomMed/>} />
</Routes>
<Footer/>
  </Router>
    </div>
  )
}

export default AppAdmin