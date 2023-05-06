import React from 'react'
import MenuDoctor from '../HomeDoctor/MenuDoctor';
import Table from 'react-bootstrap/Table';
import { useState,useEffect } from 'react'
import { fetchRend }  from '../../../../Services/RendServices';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import TopDoctor from '../../topbarD/TopDoctor';

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
      <TopDoctor/>
      <br/>    <br/> 
    <h1 style={{textAlign:"center"}}>  Liste  des Demandeur Rendez vous  </h1>  
    <br/>   <br/> 
      <Table striped bordered hover>
    
    <thead>
      <tr>
        <th>Nom patient</th>
        <th>Phone Patient</th>
        <th>Date</th>
        <th>Temps </th>
        <th> Etat </th>
        <th>Description </th>
        <th>Acepter</th>
        <th>Refuser </th>

      </tr>
    </thead> 
    <tbody>
    {rend.map((red,index)=>
      <tr key={index}>
        <td>{red?.patientID?.nompatient}  {red?.patientID?.prenompatient}</td>
    <td>{red?.patientID?.numtelPa} </td>
        <td>{red.Daterd}</td>
        <td>{red.timerd}</td>
        <td>{red.etatrend}</td>
        <td>{red.Descrd}</td>
        <td>
        <Link to="/ListRend_vous"><Button variant="primary">Accepter</Button></Link> 
      </td>
      <td>
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