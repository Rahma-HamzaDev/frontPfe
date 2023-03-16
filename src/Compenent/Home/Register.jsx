import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default class Register extends Component {
    constructor(props){
        super(props);
       };
  render() {
    return (
     
<div>
<Form>
<Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nom&Prénom</Form.Label>
        <Form.Control type="texte" placeholder="Enter Nom Complet" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Adresse</Form.Label>
        <Form.Control type="texte" placeholder="Enter Adresse" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Numéro Télephone</Form.Label>
        <Form.Control type="number" placeholder="Enter NumPhone" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Spécialité</Form.Label>
        <Form.Control type="texte" placeholder="Enter Spécialité" />
      </Form.Group>
       
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Années d'expérience </Form.Label>
        <Form.Control type="number" placeholder="Enter Années d'expérience" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Diplômes</Form.Label>
        <Form.Control type="texte" placeholder="Enter Diplômes" />
      </Form.Group>
 
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>    
    </div>
     )
  }
}
