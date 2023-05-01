import React from 'react' ;
import MenuPa from '../principale/MenuPa';
import ListGroup from 'react-bootstrap/ListGroup';
import './patientedite.css';
import Sidebar from "../principale/side/Sidebar";
function MoncomptePa() {
  return (
    <>
     <MenuPa/>
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