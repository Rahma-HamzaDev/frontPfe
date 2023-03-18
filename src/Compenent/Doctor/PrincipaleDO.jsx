import React from 'react'
import '../../App.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router , Route ,Routes } from 'react-router-dom';

import Principale from '../Home/Principale';
import MenuDoctor from './MenuDoctor';

function PrincipaleDO() {
  return (
  

    <MenuDoctor/>
  )
}

export default PrincipaleDO