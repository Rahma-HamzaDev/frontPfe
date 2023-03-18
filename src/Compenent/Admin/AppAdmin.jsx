import React from 'react'
import '../../App.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router , Route ,Routes } from 'react-router-dom';
import Notification from './Notification';
import GestiomMed from './GestiomMed';
import Principale from '../Home/Principale';
import TopBar from '../Home/TopBar';
import MenuAd from './MenuAd';
function AppAdmin() {
  return (
    <div>
     
      
    <MenuAd/>

    </div>
  )
}

export default AppAdmin