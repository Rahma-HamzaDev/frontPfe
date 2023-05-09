import React from 'react'
import MenuDoctor from '../HomeDoctor/MenuDoctor';
import Table from 'react-bootstrap/Table';
import { useState,useEffect } from 'react'
import { fetchRend }  from '../../../../Services/RendServices';
import TopDoctor from '../../topbarD/TopDoctor';
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
      <TopDoctor/><br/>
      <h1 style={{textAlign:"center"}}>  Liste  Rendez vous  </h1>   <br/>
      <Table striped bordered hover>
    
    <thead>
      <tr>
        <th>Nom Patient</th>
        <th>Phone Patient</th>
        <th>Date</th>
        <th>Temps </th>
        <th>Etat</th>
        <th>Description </th>
      
      </tr>
    </thead> 
    <tbody>
    {rend.map((red,index)=>
      <tr key={index}>
         <td>{red?.patientID?.nompatient}  {red?.patientID?.prenompatient}</td>
         <td>{red?.patientID?.numtelPa}</td>

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