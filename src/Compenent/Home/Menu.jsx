import React from 'react';
import './Style.css';
import { Link } from "react-router-dom";
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import Nav from 'react-bootstrap/Nav';
import logo from './Images/Dr.png'

function Menu() {
  return (
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
          <Link to="/" className="nav-item nav-link">acceuil</Link>
         <Link to="/About" className="nav-item nav-link">A Propos </Link> 
            <Link to="/service" className="nav-item nav-link">Service</Link>
              <Link to="/Register2" className="nav-item nav-link">Inscrit</Link>
            <Link to="/contact" className="nav-item nav-link">Contact</Link>
            {/* <Link to="/AppAdmin" className="nav-item nav-link">Admin</Link> */}
            {/* <Link to="/ListPatient" className="nav-item nav-link">Doctor</Link> */}
            <Link to="/PrincipalePa" className="nav-item nav-link">Paient</Link>
          </div>
          <button type="button" className="btn text-dark" data-bs-toggle="modal" data-bs-target="#searchModal"></button>
          <Link to="/Login" className="btn btn-primary py-2 px-4 ms-3" size={20}>Connecter</Link>
        </div>
      </nav>
    </div>
  

  )
}

export default Menu