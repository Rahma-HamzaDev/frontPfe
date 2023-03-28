import React from 'react'
import { useState , useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import MenuDoctor from "./MenuDoctor";
import { addPatient } from '../../Services/patientServices';

export default function Insertpatient() {
    const [validated, setValidated] = useState(false);
    const [cinPa, setCinPa] = useState("");
    const [dateNais, setdateNais] = useState("");
    const [nompatient, setNompatient] = useState("");
    const [prenompatient, setPrenompatient] = useState("");
    const [emailpatient, setEmailpatient] = useState("");
    const [adressepatient, setAdressepatient] = useState("");
    const [sexepatient, setSexepatient] = useState("");
    const [numtelPa, setNumtelPa] = useState("");
    const navigate=useNavigate();


    //    useEffect(() => {
    //     GetListPatient();
    //     },[]);

        // const GetListPatient = async () => {

        //     //affiche les patients 
        
        //     await fetchPatient()
        //       .then((res) => {
        //         setPatient(res.data);
        //       });
        //   }

            const handleSubmit = (event) => {
                event.preventDefault();
                const form = event.currentTarget;
                if (form.checkValidity() === true) {
                  const patient={
                    cinPa:cinPa,
                    nompatient:nompatient,
                    prenompatient: prenompatient,
                    emailpatient: emailpatient,
                    adressepatient: adressepatient,
                    sexepatient: sexepatient,
                    numtelPa:numtelPa
                  }
                  addPatient (patient)
                  .then(res=>{
                    console.log("Insert OK",res);
                    navigate("/ListPatient");
                    })
                    .catch(error=>{
                    console.log(error)
                    alert("Erreur ! Insertion non effectuée")
                    })
                    }
                    
               if (form.checkValidity() === true) {
              console.log("valeurs valides")
           
            };
                  setValidated(true);
                }                

  return (
    <>
    <MenuDoctor/>
    <div className="container w-100 d-flex justify-content-center">
    <div className=' mt-5 w-50'>
    <h1 align="center">Ajout patient</h1>
    <div className='form mt-3'>
    <Form className="border p-3" noValidate validated={validated}
    onSubmit={handleSubmit}>

<Row className="mb-2">
<Form.Group as={Col} className="col-md-6 ">
    <Form.Label>Num Fiche *</Form.Label>
    <Form.Control
    required
    type="number"
    placeholder="prenom de patient"
    value={cinPa}
    onChange={(e)=>setCinPa(e.target.value)}
    />
    <Form.Control.Feedback type="invalid">
    Saisir Numéro de fiche
    </Form.Control.Feedback>
    </Form.Group>
    <Form.Group as={Col} className="col-md-6 " >
    <Form.Label >Nom *</Form.Label>
    <Form.Control
    required
    type="text"
    placeholder="nom de patient "
    value={nompatient}
    onChange={(e)=>setNompatient(e.target.value)}
    />
       <Form.Control.Feedback type="invalid">
    Saisir nom Patient
    </Form.Control.Feedback>
    </Form.Group>
    </Row>
    <Row className="mb-2">
    <Form.Group as={Col} className="col-md-6 ">
    <Form.Label>Prénom *</Form.Label>
    <Form.Control
    required
    type="text"
    placeholder="prenom de patient"
    value={prenompatient}
    onChange={(e)=>setPrenompatient(e.target.value)}
    />

    <Form.Control.Feedback type="invalid">
    Saisir Prénom
    </Form.Control.Feedback>
    </Form.Group>
   
    <Form.Group  as={Col} className="col-md-6 ">
    <Form.Label>
   Email *
    </Form.Label>
    <Form.Control
    required
    type="text"
    value={emailpatient}
    onChange={(e)=>setEmailpatient(e.target.value)}
    placeholder="email "
    />
    <Form.Control.Feedback type="invalid">
 Email incorrect
    </Form.Control.Feedback>
    </Form.Group>
    </Row>
    <Row className="mb-2">
    <Form.Group as={Col} md="col-md-6 ">
    <Form.Label>NumPhone</Form.Label>
    <Form.Control
    type="number"
    placeholder="Phone"
    value={numtelPa}
    onChange={(e)=>setNumtelPa(e.target.value)}
    />
     </Form.Group>

    <Form.Group as={Col} md="col-md-6 ">
    <Form.Label>Sexe</Form.Label>
    <Form.Control
    type="text"
    placeholder="sexe"
    value={sexepatient}
    onChange={(e)=>setSexepatient(e.target.value)}
    />
     </Form.Group>
</Row>
<Row className="mb-2">
     <Form.Group as={Col} md="col-md-6 ">
    <Form.Label>Adresse</Form.Label>
    <Form.Control
    type="text"
    placeholder="Adresse"
    value={adressepatient}
    onChange={(e)=>setAdressepatient(e.target.value)}
    />
     </Form.Group>
     
     <Form.Group as={Col} md="col-md-6 ">
    <Form.Label>date de Naissance</Form.Label>
    <Form.Control
    type="date"
    placeholder="date naissance"
    value={dateNais}
    onChange={(e)=>setdateNais(e.target.value)}
    />
     </Form.Group>
    
    </Row>

    <center><Button className= "btn-primary " type="submit">Enregistrer</Button></center>
    </Form>
    </div>
    </div>
    </div>
    </>
 

  )
}


