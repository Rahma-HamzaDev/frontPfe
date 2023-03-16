import React from 'react'
import { Link } from 'react-router-dom'
function RegisterPatient() {
  return (
    <div>


   {/* Appointment Start */}
   <div className="container-fluid bg-primary my-5 py-5">
        <div className="container py-5">
          <div className="row gx-5">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="mb-4">
                <h5 className="d-inline-block text-white text-uppercase border-bottom border-5">Register PATIENT</h5>
                <h1 className="display-4">Make An account </h1>
              </div>
              <p className="text-white mb-5"> you must create an account to make appointments with our doctor </p>
              <Link className="btn btn-dark rounded-pill py-3 px-5 me-3" to="/Login"> Connecter </Link>
     
            </div>
            <div className="col-lg-6">
              <div className="bg-white text-center rounded p-5">
                <h1 className="mb-4">Inscrit-vous</h1>
             
    
                         {/*   onSubmit={handleSubmit} */}
      <form >
        <div className="row g-3">
          <div className="col-12 col-sm-6">
          {/* value={name} onChange={handleNameChange}  */}
            <input type="text" className="form-control bg-light border-0" placeholder="Your first Name" style={{ height: '55px' }}/>
          </div>
          <div className="col-12 col-sm-6">
          {/* value={name} onChange={handleNameChange}  */}
            <input type="text" className="form-control bg-light border-0" placeholder="Your last Name" style={{ height: '55px' }}/>
          </div>
          <div className="col-12 col-sm-6">
          {/* value={name} onChange={handleNameChange}  */}
            <input type="number" className="form-control bg-light border-0" placeholder="Your Phone NUmber " style={{ height: '55px' }}/>
          </div>
          <div className="col-12 col-sm-6">
          {/* value={email} onChange={handleEmailChange} */}
            <input type="email" className="form-control bg-light border-0" placeholder="Your Email" style={{ height: '55px' }}  />
          </div>
          <div className="col-12 col-sm-6">
          <input type="password" className="form-control bg-light border-0" placeholder="Your password" style={{ height: '55px' }}  />
          </div>
          <div className="col-12 col-sm-6">
          <input type="password" className="form-control bg-light border-0" placeholder="confirm password" style={{ height: '55px' }}  />
          </div>
          <div className="col-12">
            <button className="btn btn-primary w-100 py-3" type="submit" style={{fontSize:"25px"}}>Inscrit</button>
          </div>
        </div>
      </form>
    </div>
    </div>
            </div>
          </div>
        </div>  
    {/* Appointment End */ }


    </div>
  )
}

export default RegisterPatient
  

