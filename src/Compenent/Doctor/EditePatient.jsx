import React from 'react'
import { useState,useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import {fetchPatientById,editPatient, addPatient} from '../../Services/patientServices'

import { useNavigate, useParams } from 'react-router-dom';

export default function EditePatient() {
  const {id} = useParams();
  const navigate=useNavigate();
  const [validated, setValidated] = useState(false);
  const [nompatient, setnompatient] = useState("");
  const [prenompatient, setPrenompatient] = useState("");
  const [emailpatient, setEmailpatient] = useState("");
  const [adressepatient, setAdressepatient] = useState("");
  const [sexepatient, setSexepatient] = useState("");
  const [numtelPa, setNumPa] = useState("");
  const [dateNais, setDateNais] = useState("");
  useEffect(() => {
  GetUnPatient();
  // GetListCategories();
  },[]); 
  const GetUnPatient=async()=>{
  fetchPatientById(id)
  .then(res=>{
  setnompatient(res.data.nompatient)
  setPrenompatient(res.data.prenompatient)
  setEmailpatient(res.data.emailpatient)
  setNumPa(res.data.numtelPa)
  setDateNais(res.data.dateNais)
  setSexepatient(res.data.sexepatient)
  setAdressepatient(res.data.adressepatient)
  })
  .catch(error=>{
  console.log(error)
  })
  } 
  // const GetListCategories=async()=>{
  //   fetchScategories()
  // .then(res=>{
  //   setScategories(res.data)
  //   })
  //   .catch(error=>{
  //   console.log(error)
  //   alert("Erreur ! Modification non effectuée")
  //   })
  //   } 
    const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
    const patient={
    _id:id,
    name: nompatient,
    prenom: prenompatient,
    sexe : sexepatient,
    dateNaissance: dateNais,
    Email: emailpatient,
    numéroPhone: numtelPa
    }
    editPatient (patient)
    .then(res=>{
    console.log("Update OK",res);
    navigate("/ListPatient");
    })
    .catch(error=>{
    console.log(error)
    })
    }
    setValidated(true);
    };  

  return (
    <div>

<div className="container w-100 d-flex justify-content-center">
<div className=' mt-5 w-50'>
<h1 align="center">Modification Patient </h1>
<div className='form mt-3'>
<Form className="border p-3" noValidate validated={validated}
onSubmit={handleSubmit}>
<Row className="mb-2">
<Form.Group as={Col} md="6" >
<Form.Label >Nom *</Form.Label>
<Form.Control
required
type="text"
placeholder="Nom"
value={nompatient}
onChange={(e)=>setnompatient(e.target.value)}
/>
<Form.Control.Feedback type="invalid">
Saisir Nom Patient 
</Form.Control.Feedback>
</Form.Group>
<Form.Group as={Col} md="6">
<Form.Label>Prenom *</Form.Label>
<Form.Control
required
type="text"
placeholder="prenom"
value={prenompatient}
onChange={(e)=>setPrenompatient(e.target.value)}
/>
<Form.Control.Feedback type="invalid">
Saisir prénom Patient
</Form.Control.Feedback>
</Form.Group>
</Row>
<Row className="mb-2">
<Form.Group className="col-md-6">
<Form.Label>Email *</Form.Label>
<InputGroup hasValidation>
<Form.Control
type="text"
required
placeholder="email"
value={emailpatient}
onChange={(e)=>setEmailpatient(e.target.value)}
/>
<Form.Control.Feedback type="invalid">
Email Incorrecte
</Form.Control.Feedback>
</InputGroup>
</Form.Group>
<Form.Group as={Col} md="6">
<Form.Label>Num patient</Form.Label>
<Form.Control
type="number"
placeholder="num Phone"
value={numtelPa}
onChange={(e)=>setNumPa(e.target.value)}
/>
</Form.Group>
</Row>
<Row className="mb-3">
{/* <Form.Group className="col-md-6">
<Form.Label>sexe *</Form.Label>
<InputGroup hasValidation>
<Form.Control
type="text"
required
placeholder="sexe patient"
value={sexepatient}
onChange={(e)=>setSexepatient(e.target.value)}
/>
<Form.Control.Feedback type="invalid">
Sexe Incorrecte
</Form.Control.Feedback>
</InputGroup>
</Form.Group> */}

<Form.Group className="col-md-6">
<Form.Label>Adresse *</Form.Label>
<InputGroup hasValidation>
<Form.Control
type="text"
required
placeholder="Adresse"
value={adressepatient}
onChange={(e)=>setAdressepatient(e.target.value)}
/>
<Form.Control.Feedback type="invalid">
adresse Incorrecte
</Form.Control.Feedback>
</InputGroup>
</Form.Group>

<Form.Group className="col-md-6">
<Form.Label>Date Naissance *</Form.Label>
<InputGroup hasValidation>
<Form.Control
type="text"
required
placeholder="date naissance"
value={dateNais}
onChange={(e)=>setDateNais(e.target.value)}
/>
<Form.Control.Feedback type="invalid">
date naissance Incorrecte
</Form.Control.Feedback>
</InputGroup>
</Form.Group>

</Row>
<center><Button type="submit">Enregistrer</Button></center>
</Form>
</div>
</div>
</div>


    </div>
  )
}

