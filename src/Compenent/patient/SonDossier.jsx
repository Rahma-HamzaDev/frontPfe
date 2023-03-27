import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "../Home/Style.css"
import Sidebar from './Sidebar';
const SonDossier = () => {
  return (
    <>
    <Sidebar/>
    <div className="Cards">
        <Card style={{ width: '18rem' }}>
      <Card.Header>Dossier 1 </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item> NomDossier</ListGroup.Item>
        <ListGroup.Item>  Date dossier</ListGroup.Item>
        <ListGroup.Item> Ordonnance</ListGroup.Item>
      </ListGroup>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Header> Dossier 2</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item> NomDossier</ListGroup.Item>
        <ListGroup.Item>  Date dossier</ListGroup.Item>
        <ListGroup.Item> Ordonnance</ListGroup.Item>
      </ListGroup>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Header> Dossier 3</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item> NomDossier</ListGroup.Item>
        <ListGroup.Item>  Date dossier</ListGroup.Item>
        <ListGroup.Item> Ordonnance</ListGroup.Item>
      </ListGroup>
    </Card>
    </div></>
  )
}

export default SonDossier
