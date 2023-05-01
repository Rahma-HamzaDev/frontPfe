
// import React from "react";
// import "./sidebar.css";
// function Sidebar() {
//   return (
//     <div className="container">
//       <div className="navbar">
//         <ul>
//           <li>Accueil</li>
//           <li>À propos</li>
//           <li>Contact</li>
//         </ul>
//       </div>
//       <div className="content">
       
//       </div>
//     </div>
//   );
// }

// export default Sidebar;






import React, { useState } from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';
function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  return (
    <div className='allside1' >
      <button className="openbtn" onClick={toggleSidebar}>☰</button>
      <div className={`sidebar ${isOpen ? 'open' : 'close'}`} >
        <a href="#" className="closebtn" onClick={toggleSidebar}>&times;</a>
        <div className="links-container">

        <div className="link-container">
              <Link to=""></Link>
            </div>

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
              <Link to="/Notification" > Notification </Link>
            </div>
               
            <div className="link-container">
              <Link to="/Patientedite" > Mon Profile </Link>
            </div>

            <div className="link-container">
              <Link to="/Logout" style={{color:"red"}} > deconnecter </Link>
            </div>


          </div>
     
      </div>
      <div className="main">
   
      </div>
    </div>
  );
}

export default Sidebar;
