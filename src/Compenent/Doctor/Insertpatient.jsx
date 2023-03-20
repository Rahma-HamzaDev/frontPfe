// import React from 'react'
// import { useState , useEffect } from 'react';
// import {useNavigate} from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Row from 'react-bootstrap/Row';
// import { addArticle } from '../../services/articleService';
// import { addPatient, fetchPatient } from '../../Services/patientServices';


// export default function Insertpatient() {

//     const [cinPa, setCinPa] = useState("");
//     const [nompatient, setNompatient] = useState("");
//     const [prenompatient, setPrenompatient] = useState("");
//     const [emailpatient, setEmailpatient] = useState("");
//     const [adressepatient, setAdressepatient] = useState("");
//     const [sexepatient, setSexepatient] = useState("");
//     const [passwordPa, setpasswordPa] = useState(""); 
//     const [numtelPa, setNumtelPa] = useState("");
//        const navigate=useNavigate();


//        useEffect(() => {
//         GetListPatient();
//         },[]);

//         const GetListPatient=async()=>{
//             fetchPatient()
//             .then(res=>{
//             setScategories(res.data)
//             })
//             .catch(error=>{
//             console.log(error)
//             })
//             }

//             const handleSubmit = (event) => {
//                 event.preventDefault();
//                 const form = event.currentTarget;
//                 if (form.checkValidity() === true) {
//                   const patient={
//                     cinPa:cinPa,
//                     nompatient:nompatient,
//                     prenompatient: prenompatient,
//                     emailpatient: emailpatient,
//                     adressepatient: adressepatient,
//                     sexepatient: sexepatient,
//                     passwordPa: passwordPa,
//                     numtelPa:numtelPa
//                   }
//                   addPatient (patient)
//                   .then(res=>{
//                     console.log("Insert OK",res);
//                     navigate("/ListPatient");
//                     })
//                     .catch(error=>{
//                     console.log(error)
//                     alert("Erreur ! Insertion non effectuée")
//                     })
//                     }
                    
//                 // if (form.checkValidity() === true) {
//                 //   console.log("valeurs valides")
//                 //   }
//                   setValidated(true);
//                   };
                  

//   return (
//     <>

//     <div className="container w-100 d-flex justify-content-center">
//     <div className=' mt-5 w-50'>
//     <h1 align="center">Ajout patient</h1>
//     <div className='form mt-3'>
//     <Form className="border p-3" noValidate validated={validated}
//     onSubmit={handleSubmit}>
//     <Row className="mb-2">
//     <Form.Group as={Col} md="6" >
//     <Form.Label >Référence *</Form.Label>
//     <Form.Control
//     required
//     type="text"
//     placeholder="Référence"
//     value={reference}
//     onChange={(e)=>setReference(e.target.value)}
//     />
//     <Form.Control.Feedback type="invalid">
//     Saisir Référence Article
//     </Form.Control.Feedback>
//     </Form.Group>
//     <Form.Group as={Col} md="6">
//     <Form.Label>Désignation *</Form.Label>
//     <Form.Control
//     required
//     type="text"
//     placeholder="Désignation"
//     value={designation}
//     onChange={(e)=>setDesignation(e.target.value)}
//     />
//     <Form.Control.Feedback type="invalid">
//     Saisir Désignation
//     </Form.Control.Feedback>
//     </Form.Group>
//     </Row>
//     <Row className="mb-2">
//     <Form.Group className="col-md-6">
//     <Form.Label>Marque *</Form.Label>
//     <InputGroup hasValidation>
//     <Form.Control
//     type="text"
//     required
//     placeholder="Marque"
//     value={marque}
//     onChange={(e)=>setMarque(e.target.value)}
//     />
//     <Form.Control.Feedback type="invalid">
//     Marque Incorrecte
//     </Form.Control.Feedback>
//     </InputGroup>
//     </Form.Group>
//     <Form.Group as={Col} md="6">
//     <Form.Label>Prix</Form.Label>
//     <Form.Control
    
//     type="number"
//     required
//     placeholder="Prix"
//     value={prix}
//     onChange={(e)=>setPrix(e.target.value)}
//     />
//     </Form.Group>
//     </Row>
//     <Row className="mb-3">
//     <Form.Group className="col-md-6 ">
//     <Form.Label>
//     Qté stock<span className="req-tag">*</span>
//     </Form.Label>
//     <Form.Control
//     required
//     type="number"
//     value={qtestock}
//     onChange={(e)=>setQtestock(e.target.value)}
//     placeholder="Qté stock"
//     />
//     <Form.Control.Feedback type="invalid">
//     Qté stock Incorrect
//     </Form.Control.Feedback>
//     </Form.Group>
//     <Form.Group as={Col} md="6">
//     <Form.Label>Image</Form.Label>
//     <Form.Control
//     type="text"
//     placeholder="Image"
//     value={imageart}
//     onChange={(e)=>setImageart(e.target.value)}
//     />
//      </Form.Group>
//      <Form.Group>
//      <Form.Control
//     as="select"
//     type="select"
//     value={scategorieID}
//     onChange={(e)=>setScategorieID(e.target.value)}
//     >
//     <option>Sélectionner</option>
//     {scategories? scategories.map((scat)=><option key={scat._id}
//     value={scat._id}>{scat.nomscategorie}</option>):null}
//     </Form.Control>
//     </Form.Group>
//     </Row>
//     <center><Button type="submit">Enregistrer</Button></center>
//     </Form>
//     </div>
//     </div>
//     </div>
//     </>
//     <div>insert patients</div>

//   )
// }


