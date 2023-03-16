import React from 'react'
import { FaUserNurse} from "react-icons/fa";
import {  BsPersonCircle} from "react-icons/bs";


import { Link } from 'react-router-dom';

function Register2() {
  return (

 <div className="row g-5" style={{paddingLeft:'390px' , paddingButton :'400px' , paddingTop:'60px'}}>
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon mb-4">
                  <Link to="/RegisterDoctor" style={{ color: 'white', fontSize: '50px' }}><FaUserNurse /></Link>
                </div>
                <h4 className="mb-3">Register Doctor</h4>
                <p className="m-0">doctor you can register here</p>
              
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon mb-4">
                  <Link to="/RegisterPatient" style={{ color: 'white', fontSize: '50px' }}><BsPersonCircle /></Link>
                </div>
                <h4 className="mb-3">Register Patient</h4>
                <p className="m-0"> Patient you can register here
                 </p>
              
              </div>
            </div>      <br/><br/>
       </div>
  )
}

export default Register2