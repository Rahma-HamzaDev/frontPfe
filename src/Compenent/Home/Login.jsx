import React from 'react'
import {  Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import login from './Images/img-4.png'
import './Login.css';
function Login() {
  return (
  

    <div class="auth-container" style={{paddingTop:"40px",paddingBottom:"100px"}}>
      <div class="description-auth">
    <Form  >
    <h1>CONNEXION</h1>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email </Form.Label>
      <Form.Control type="email" placeholder="Enter email" />

    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>

    <Button   variant="primary" type="submit">
          SE CONNECTER
    </Button><br/>
 <Link to='/Register2' >Register Now !!</Link>
  </Form>
 
  </div>
    <div class="ima">
    <img src= {login} width="250" height="250"/>
  </div>
  </div>
  );
}

export default Login




{/* <div className="container-fluid bg-primary my-5 py-5" style ={{paddingTop:"100px"}} >
<div className="container">
<div className="text-center mx-auto mb-5" style={{maxWidth: '400px'  }}>
   {/* form Start  */}
//   <form>
//     <div className="row g-3">
//       <div className="col-12 col-sm-6">
//       {/* value={email} onChange={handleEmailChange} */}
//         <input type="email" className="form-control bg-light border-0" placeholder="Your Email" style={{ height: '60px' , width:'200px' }}  />  
//       </div>
     
//       <div className="col-12 col-sm-6">
   
//       <input type="password" className="form-control bg-light border-0" placeholder="Your password" style={{ height: '60px', width:'200px' }}  />
//       </div>
//       <div className="col-12">
//       <button
//                 className="btn btn-primary w-100 py-3"
//                 type="submit">Connecter
//               </button>
//         <Link className="btn btn-dark rounded-pill py-3 px-5 me-3" to="/Login"> Creat Account </Link>

//       </div>
//     </div>
//   </form>
// </div>
// </div>

// </div> */}