import React from 'react'
import MenuAd from './MenuAd';
import Table from 'react-bootstrap/Table';
import { useState,useEffect } from 'react'
import {  fetchMedecin}  from '../../Services/DoctorServices';
import Button from 'react-bootstrap/Button';

function GestionMed() {
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
      <MenuAd/>
   
<h1>Liste des demandes de Médecin</h1>
      <Table striped bordered hover>
    
    <thead>
      <tr>
        <th>nom</th>
        <th>prenom</th>
        <th>Email</th>
        <th>Adresse</th>
        <th>Num telephone</th>
        <th>specialites</th>
        <th>Accepter</th>
        <th>Refuser</th>
      </tr>
    </thead>
    <tbody>
      {medecin.map((med,index)=>
      <tr key={index}>

        <td>{med.nommedecin}</td>
        <td>{med.prenommedecin}</td>
        <td>{med.emailmedecin}</td>
        <td>{med.adressemedecin}</td>
        <td>{med.numtelMd}</td>
        <td>{med.nomsep}</td>
        <td><Button variant="primary">Accepter</Button></td>
        <td><Button variant="danger">Refuser</Button></td>
     
      </tr>
      )}
    </tbody>

  
  </Table>
    </div>
  )
}

export default GestionMed