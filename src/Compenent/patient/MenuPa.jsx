import React from 'react';
import'../Home/Style.css';
import { Link } from 'react-router-dom';
import {  GrNotification} from "react-icons/gr";
import logo from '../Home/Images/Dr.png' ; 

function MenuPa() {
  return (
    <div>
    <div>
 <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
   <Link to="/" className="navbar-brand">
   
    <h1 className="m-0 text-primary"><i className="fa fa-tooth me-2">
    <img src={logo} width='40px' height='40px' /> 
     </i>Dr Medicale</h1>

   </Link>
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
     <span className="navbar-toggler-icon"></span>
   </button>
   <div className="collapse navbar-collapse" id="navbarCollapse">
     <div className="navbar-nav ms-auto py-0">
     <Link to="/principalePa" className="nav-item nav-link">acceuil</Link>

       <Link to="/MesRend" className="nav-item nav-link">Mes Rendez-vous</Link>
       <Link to="/DossiersPa" className="nav-item nav-link">Mes Dossiers médecaux</Link>

     <Link to="/Notification" className="nav-item nav-link"> <GrNotification size ={30} /> </Link>   </div>
           
     </div>
 </nav>
</div>
</div>  )
}

export default MenuPa