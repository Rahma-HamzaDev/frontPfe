import React from 'react'
import MenuPa from '../principale/MenuPa';

import Table from 'react-bootstrap/Table';
import { useState,useEffect } from 'react'
import {  fetchMedecin}  from '../../../Services/DoctorServices';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import TopPA from '../principale/top/TopPA';
// import Sidebar from "../Sidebar";
function DossiersPa() {
  const[medecin,setMedecin]=useState([])
  useEffect(()=>{
    fetchMedecin().then(res=>{
      setMedecin(res.data)
      console.log(res.data)
    })
   .catch(error=>{
    console.log(error)
   })
  },[])

  return (
    <div>
          <TopPA/>
          <div style={{ textAlign: 'center' }}>
<h1> Mes Dossiers </h1> <br/><br/>
</div>
       {/* serach Stmed  */}
       {/* <div className="container-fluid bg-primary my-5 py-5">
        <div className="container py-5">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: "500px" }}>
            <h5 className="d-inline-block text-white text-uppercase border-bottom border-5"> Chercher </h5>
            <h1 className="display-4 mb-4"> Consulter Mes Dossiers</h1>
          </div>
          <div className="mx-auto" style={{ width: "100%", max_width: "600px" }}>
            <div className="input-group">
            <select className="form-select border-primary w-25" style={{ height: "60px" }}>
                <option selected>Nom medecin</option>
                <option value="1">medecin 1</option>
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
      
      {/* tableau des medecin  */}
      <Table striped bordered hover>
    
    <thead>
      <tr>
        <th>nom du Medecin </th>
        <th>Adresse</th>
        <th>Num téléphone</th>
        <th>Fiches</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
    
      <tr>
        <td></td>
        <td></td>
        <td></td>
       <Link to="/SonDossier"> <td><Button variant="primary">Voir Dossier</Button></td></Link> 
        <td><Button variant="danger">Delete</Button></td>
      </tr>

    </tbody>

  
  </Table>
      
      </div>
  )
}

export default DossiersPa