import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {useSelector} from "react-redux";
import {urlimage} from "../../../Axios/Api"
import {Nav, Navbar,Container,Form,FormControl,Button} from 'react-bootstrap';
import {Link, useParams } from 'react-router-dom'
const TopDoctor=()=>{
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };
    const {user} = useSelector((state) =>state.auth);
  console.log(user);

// const medecinId =user._id
// console.log(medecinId); 
// const {id} = useParams();

  return(

<Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand >DrMedicale </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to={`/Patient/medecin/${user._id}`}>Liste des patients</Nav.Link>
      <Nav.Link as={Link} to="/ListRend_vous">Liste Rendez-vous</Nav.Link>
      <Nav.Link as={Link} to="/Demdeur">Demande Rendez-Vous</Nav.Link>
      <Nav.Link as={Link} to="/CalendrieMed">calendrier</Nav.Link>

    </Nav>
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src={user.avatar ? urlimage + user.avatar : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"} />
    </Stack>
    </Container>
    <Nav className="me-auto">
    <Nav.Link as={Link} to="/Modifiercompte" > <h6 style={mystyle}>Bienvenu {user.firstName} {user.lastName} </h6></Nav.Link>
    <Nav.Link as={Link} to="/Logout" >Deconnecter</Nav.Link>
    </Nav>

  </Navbar>
  )

}
export default  TopDoctor
