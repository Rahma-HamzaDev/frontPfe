import React from 'react';
import './Style.css';
import { Link } from "react-router-dom";
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import Nav from 'react-bootstrap/Nav';

function Menu() {
  return (
    <div>
      {/* startNavbar Start */}
      {/* <div className="container-fluid sticky-top bg-white shadow-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
          <Link to="/" className="navbar-brand">
            <h1 className="m-0 text-uppercase text-primary"><i className="fa fa-clinic-medical me-2"></i>DR_Medicale</h1>
       </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
          
            <Link to="/" className="nav-item nav-link">Home</Link>
            <Link to="/About" className="nav-item nav-link">About</Link>
            <Link to="/service" className="nav-item nav-link">Service</Link>
              <Link to="/OurDocto" className="nav-item nav-link">Our Doctor</Link>
              
              <a href="contact.html" className="nav-item nav-link">Contact</a>
              <div>
              <a href="appointment.html" className="btn btn-primary py-2 px-4 ms-3">Appointment</a>
</div>
            </div>
          </div>
        </nav>
      </div>
    </div> */}
      {/* endNavbar Start*/}
      
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
        <Link to="/" className="navbar-brand">

          <h1 className="m-0 text-primary"><i className="fa fa-tooth me-2"></i>DentCare</h1>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
          <Link to="/" className="nav-item nav-link">Home</Link>
            <Link to="/About" className="nav-item nav-link">About</Link>
            <Link to="/service" className="nav-item nav-link">Service</Link>
              <Link to="/LoginDoctor" className="nav-item nav-link">I am a doctor</Link>
            <Link to="/contact" className="nav-item nav-link">Contact</Link>
          </div>
          <button type="button" className="btn text-dark" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search"></i></button>
          <a href="/Login" className="btn btn-primary py-2 px-4 ms-3">Sign In</a>
        </div>
      </nav>
    </div>

  )
}

export default Menu