import React from 'react'
import { Link } from 'react-router-dom';
import '../Home/Style.css';
// import Sidebar from "./Sidebar";

// import ListSpecialites from './ListSpecialites';

import MenuPa from './MenuPa';

function PrincipalePa() {
  return (
    <div>  
<MenuPa/>
{/* <Sidebar/> */}
   {/* hero start  */}
     <div className="container-fluid bg-primary py-5 mb-5 hero-header1">
     <div className="container py-5">
       <div className="row justify-content-start">
         <div className="col-lg-8 text-center text-lg-start" style={{ paddingTop: "50px" }}>
           <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5" style={{ Color: 'black' }}>Bienvenue dans votre compte </h5>
           <h1 className="display-1 text-white mb-md-4" style={{ fontSize: "30px",color:'black' }}>La meilleure solution pour prendre rendez-vous avec votre médecin rapidement !</h1>
          
         </div>
       </div>
     </div>
   </div>

  {/* serach Start  */}
      <div className="container-fluid bg-primary my-5 py-5">
        <div className="container py-5">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: "500px" }}>
            <h5 className="d-inline-block text-white text-uppercase border-bottom border-5">Checher des médecins </h5>
            <h1 className="display-4 mb-4"> prenez rendez-vous </h1>
          </div>
          <div className="mx-auto" style={{ width: "100%", max_width: "600px" }}>
            <div className="input-group">
              <select className="form-select border-primary w-25" style={{ height: "60px" }}>
                <option selected>Specialité</option>
                <option value="1">Specialité 1</option>
                <option value="2">Specialité 2</option>
                <option value="3">Specialité 3</option>
              </select>
              <input type="text" className="form-control border-primary w-50" placeholder="Keyword" />
              <button className="btn btn-dark border-0 w-25">Chercher</button>
            </div>
          </div>
        </div>
      </div>
      {/* search end */}

{/* specialité Start */}

<div className="services" > 
        <h1 className="title"></h1>
        <p className="sub-title">Notre Specialités</p>
        <div className="list-services">
           <Link to="/OurDoctor" className="nav-item nav-link"> 
        
            <div className="box">
              <h1> Generaliste </h1>
              <p>From walk-in care, same-day appointments to online visits with OnCare, we'll take good care of you. If you are experiencing an emergency</p>
            </div>
           </Link> 
          <div className="box">
            <h1>Dentaire </h1>
            <p>From walk-in care, same-day appointments to online visits with OnCare, we'll take good care of you. If you are experiencing an emergency</p>
          </div>
          <div className="box">
            <h1>Spectialist care</h1>
            <p>From walk-in care, same-day appointments to online visits with OnCare, we'll take good care of you. If you are experiencing an emergency</p>
          </div>
          <div className="box">
            <h1>PEDIATRIC</h1>
            <p>From walk-in care, same-day appointments to online visits with OnCare, we'll take good care of you. If you are experiencing an emergency</p>
          </div>
          <div className="box">
            <h1></h1>
            <p>From walk-in care, same-day appointments to online visits with OnCare, we'll take good care of you. If you are experiencing an emergency</p>
          </div>
          <div className="box">
            <h1>familly care</h1>
            <p>From walk-in care, same-day appointments to online visits with OnCare, we'll take good care of you. If you are experiencing an emergency</p>
          </div>

        </div>
      </div> 

      {/* specialité end */}


 
   </div>
   
  )
}

export default PrincipalePa

