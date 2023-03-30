import React from 'react'
import {Link} from 'react-router-dom';
function RegisterDoctor() {
  return (
    <div>
          {/* Appointment Start */}
          <div className="container-fluid bg-primary my-5 py-5" >
        <div className="container py-5">
          <div className="row gx-5">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="mb-4">
                <h5 className="d-inline-block text-white text-uppercase border-bottom border-5">Inscription DOCTOR</h5>
                <h1 className="display-4"> Créer un compte </h1>
              </div>
              <p className="text-white mb-5"> vous devez créer un compte pour faire service de médecin </p>
              <Link className="btn btn-dark rounded-pill py-3 px-5 me-3" to="/Login"> Connecter </Link>
     
            </div>
            <div className="col-lg-6">
              <div className="bg-white text-center rounded p-5">
                <h1 className="mb-4"> Inscrit-vous </h1>
    
                         {/*   onSubmit={handleSubmit} */}
      <form >
        <div className="row g-3" style={{alignItems:'center'}}>
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
          <div className="col-12 col-sm-6">
 
 <select className="form-control bg-light border-0"  style={{ height: '55px' , width:'500px' }}>
 <option value="option1">Choisir vostre Specialité </option>
<option value="option1">Specialité 1</option>
<option value="option2">Specialité 2</option>
<option value="option3">Specialité 3</option>
</select>
 </div>
          <div className="col-12">
            <button className="btn btn-primary w-100 py-3" type="submit" style={{width:"30px",fontSize:"30px"}}>Inscription</button>
          </div>
        </div>
      </form>
    </div>
    </div>
            </div>
          </div>
        </div>  <br/> <br/>
    {/* Appointment End */ }
    </div>
  )
}

export default RegisterDoctor