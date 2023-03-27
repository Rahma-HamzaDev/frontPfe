import React from 'react' ;
import ListGroup from 'react-bootstrap/ListGroup';
import './stylepatient.css';
import Sidebar from "./Sidebar";
function MoncomptePa() {
  return (
    <>
     <Sidebar/>
    <div className='tous'> 
    <div className='compte'>
        <h1> Moncompte </h1>        
        
        <ListGroup variant="flush">
      <ListGroup.Item>nom & Prénom</ListGroup.Item>
      <ListGroup.Item> numéro </ListGroup.Item>
      <ListGroup.Item> Adresse </ListGroup.Item>
      <ListGroup.Item> Date Naissance </ListGroup.Item>
    </ListGroup>
    </div>
        </div>
        </>
  )
}

export default MoncomptePa