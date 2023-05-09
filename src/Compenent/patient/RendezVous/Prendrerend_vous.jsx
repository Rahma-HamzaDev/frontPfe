import React, { useState } from 'react'
import { Container, Row, Col, Form} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import TopPA from '../principale/top/TopPA';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {addRend} from '../../../Services/RendServices';

function Prendrerend_vous() {
  const {id} = useParams();
  const [Daterd, setDaterd] = useState('');
 const [timerd, setTimerd] = useState('');
 const [Descrd, setDescrd] = useState('');
 const [etatrend, setEtatrend] = useState('');
 const [validated, setValidated] = useState(false);
const {user} = useSelector((state) =>state.auth);
const userId = user._id
console.log(userId);
const navigate = useNavigate();






const handleSubmit = (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (form.checkValidity() === true) {
    const rend = {
      medecinID: id,
      userID:userId,
      Daterd :Daterd,
      timerd:timerd,
      Descrd:Descrd,
      etatrend:"en attente",
    }



    addRend(rend)
      .then(res => {
        console.log("Insertion OK", res);
        alert ("votre rendezvous est enregistrer")
         navigate("/HomePatient");
      })
      .catch(error => {
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
    <div>
      {/* <Sidebar/> */}
      <TopPA/>
      <Container >
      <Row className="justify-content-center" style={{paddingBotton:"20px",paddingTop:"20px"}}>
        <Col md={7}>
          <h3 style={{textAlign:"center"}}>Prendre rendez-vous</h3>
          <Form validated={validated} onSubmit={handleSubmit}>
       
            <Form.Group style={{border:"2px  solide black"}}>
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" 
              required
               value={Daterd}
               onChange={(e)=>setDaterd(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
              <Form.Label>Heure</Form.Label>
              <Form.Control type="time" 
              required
                 value={timerd}
                 onChange={(e)=>setTimerd(e.target.value)}
              
              /> 
   
            </Form.Group>
            <Form.Group>
            <Form.Label>Description</Form.Label>
      <Form.Control
      
       value={Descrd}
       onChange={(e)=>setDescrd(e.target.value)}
        as="textarea"
      />
    </Form.Group>
    <br/>
    <div className='ENVREND' style={{paddingLeft:"300px"}}>
    <Button variant="success" type="submit" size='50px' > Confirmer </Button>&nbsp;&nbsp;&nbsp;
    {/* <Button  variant="danger" type="reset" >Annuler</Button> */}
         </div>
         <br/>
          </Form>
        </Col>
      </Row>
    </Container>
      
 
      </div>
  )
}

export default Prendrerend_vous