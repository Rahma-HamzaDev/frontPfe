import React from 'react'
import MenuDoctor from './MenuDoctor';
import Table from 'react-bootstrap/Table';
import { useState,useEffect } from 'react'
import { fetchRend }  from '../../Services/RendServices';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import SidebarD from './SidebarD';
function Demdeur() {
       
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
 
  return (
  
      
      <div>
       <SidebarD/>
    <h1>  Liste  des Demandeur Rendez vous  </h1>   
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
        <th>Action </th>
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
        <td>
        <Link to="/ListRend_vous"><Button variant="primary">Accepter</Button></Link> 
        <br/> <br/>
        <Button variant="danger">Refuser</Button>
        </td>
      </tr>
      )}
    </tbody>
  
  </Table>
      
        
        </div>
  )
}

export default Demdeur