import React, { useState } from 'react';
import "../patient/sidebar.css";
import { Link } from 'react-router-dom';
function SidebarA() {
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
              <Link to="/"> Acceuil</Link>
            </div>
          <div className="link-container">
              <Link to="/ListMedecin">Liste Medecin</Link>
            </div>
            
            <div className="link-container">
              <Link to="/GestionMed">Verification</Link>
            </div>

            <div className="link-container">
              <Link to="/Notification" > Notification </Link>
            </div>


          </div>
     
      </div>
     
    </div>
  );
}

export default SidebarA;
