import React from 'react'
import '../Home/Style.css';
import { useState, useEffect } from 'react';

// import Sidebar from "./Sidebar";
// import ListeSpecard from "./ListeSpecard";
import { fetchSpecialite } from "../../Services/SpecialiteServices";

// import ListSpecialites from './ListSpecialites';

import MenuPa from './principale/MenuPa';

function PrincipalePa() {
  const[specialite, setSpecialite]=useState([])
  useEffect(()=>{
    fetchSpecialite().then(res=>{
      setSpecialite(res.data)
      console.log(res.data)
    })
   .catch(error=>{
    console.log(error)
   })
  },[])
  return (
    <div>
      <MenuPa />
      {/* <Sidebar/> */}
      {/* hero start  */}
      <div className="container-fluid bg-primary py-5 mb-5 hero-header1">
        <div className="container py-5">
          <div className="row justify-content-start">
            <div className="col-lg-8 text-center text-lg-start" style={{ paddingTop: "50px" }}>
              <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5" style={{ Color: 'black' }}> Bienvenue sur votre espace patient</h4>
              <h3 className="display-1 text-white mb-md-4" style={{ fontSize: "20px" }}>Effectuez vos démarches en ligne:<br />
                Chercher des médecins,<br /> prenez des Rendez-vous,<br />
                consulter ses dossiers médicaux
              </h3>


            </div>
          </div>
        </div>
      </div>

      {/* serach Start  */}
      {/* <div className="container-fluid bg-primary my-5 py-5">
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
      </div> */}
      {/* search end */}

      {/* specialité Start */}



      {/* specialité end */}

      <div className="services" >
        <h1 className="title">Notre Specialités</h1>
        <p className="sub-title"> Les Specialités qui sont disponibles dans le site </p>
        <div className="list-services">
            {specialite.map((sep, index) => (
              <div className="box" key={index}>
                <h1>{sep.nomsep}</h1>
                <p>{sep.desc}</p>
              </div>
            ))}
         </div>
      </div>


    </div>

  )
}

export default PrincipalePa

