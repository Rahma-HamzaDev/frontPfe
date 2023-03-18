import React from 'react'
import '../../App.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router , Route ,Routes } from 'react-router-dom';

import Principale from '../Home/Principale';
import MenuDoctor from './MenuDoctor';

function Appdoctor() {
  return (
  

    <MenuDoctor/>
  )
}

export default Appdoctor