import React, { useState } from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';
function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <button className="openbtn" onClick={toggleSidebar}>☰</button>
      <div className={`sidebar ${isOpen ? 'open' : 'close'}`}>
        <a href="#" className="closebtn" onClick={toggleSidebar}>&times;</a>
        <div className="links-container">

          <div className="link-container">
              <Link to="/PrincipalePa">Accuiel</Link>
            </div>
            
            <div className="link-container">
              <Link to="/MesRend">Mes Rendez-vous </Link>
            </div>

            <div className="link-container">
              <Link to="/DossiersPa" >Mes Dossiers</Link>
            </div>

            <div className="link-container">
              <Link to="/MoncomptePa" >Mon Compte </Link>
            </div>
            
            <div className="link-container">
              <Link to="/Notification" > Notification </Link>
            </div>


          </div>
     
      </div>
      <div className="main">
   
      </div>
    </div>
  );
}

export default Sidebar;
