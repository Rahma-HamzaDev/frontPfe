import React from 'react'
import MenuDoctor from './MenuDoctor';
import Table from 'react-bootstrap/Table';
import { useState,useEffect } from 'react'
import { fetchRend }  from '../../Services/RendServices';
function ListRend_vous() {
     
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
       <MenuDoctor/>
    <h1>  Liste  Rendez vous  </h1>   
      <Table striped bordered hover>
    
    <thead>
      <tr>
        <th>nom Médecin</th>
        {/* <th>prenom redecin</th>
        <th>Num telephone</th>
        <th>Adresse</th> */}
        <th>Date</th>
        <th>Temps </th>
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
        <td>{red.Descrd}</td>
      </tr>
      )}
    </tbody>
  
  </Table>
      
        
        </div>
  )
}


export default ListRend_vous