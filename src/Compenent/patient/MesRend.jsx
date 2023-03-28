import React from 'react'
import MenuPa from './MenuPa';
import Table from 'react-bootstrap/Table';
import { useState,useEffect } from 'react'
import { fetchRend }  from '../../Services/RendServices';
import { fetchMedecin}  from '../../Services/DoctorServices';
import Button from 'react-bootstrap/Button';
import Sidebar from "./Sidebar";
function MesRend() {
  const[rend,setRend]=useState([])
  useEffect(()=>{
    fetchRend().then(res=>{
      setRend(res.data)
      console.log(res.data)
    })
   .catch(error=>{
    console.log(error)
   })
  },[])
  // const[medecin,setMedecin]=useState([])
  // useEffect(()=>{
  //   fetchMedecin().then(res=>{
  //     setMedecin(res.data)
  //     console.log(res.data)
  //   })
  //  .catch(error=>{
  //   console.log(error)
  //  })
  // },[])
  return (
    <div>
       <MenuPa/>
    <h1>  Liste Mes Rendez vous  </h1>   
      <Table striped bordered hover>
    
    <thead>
      <tr>
        <th>nom Médecin</th>
        {/* <th>prenom redecin</th>
        <th>Num telephone</th>
        <th>Adresse</th> */}
        <th>Date</th>
        <th>Temps </th>
        <th> Etat </th>
        <th>description </th>
      
      </tr>
    </thead> 
    <tbody>
    {rend.map((red,index)=>
      <tr key={index}>
        <td>{red.medecinID}</td>
        {/* <td>{red.medecin.prenomredecin}</td>
        <td>{red.medecin.numtelMd}</td>
        <td>{red.medecin.adresseredecin}</td> */}
        <td>{red.Daterd}</td>
        <td>{red.timerd}</td>
        <td>{red.etatrd}</td>
        <td>{red.Descrd}</td>
      </tr>
      )}
    </tbody>
  
  </Table>
      
        
        </div>
  )
}

export default MesRend