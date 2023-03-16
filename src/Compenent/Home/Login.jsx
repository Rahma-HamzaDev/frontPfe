import React from 'react'
import {  Link } from "react-router-dom";
function Login() {
  return (
  
         <div className="container-fluid bg-primary my-5 py-5" style ={{paddingTop:"100px"}} >
    <div className="container">
    <div className="text-center mx-auto mb-5" style={{maxWidth: '400px'  }}>
       {/* form Start  */}
      <form>
        <div className="row g-3">
          <div className="col-12 col-sm-6">
          {/* value={email} onChange={handleEmailChange} */}
            <input type="email" className="form-control bg-light border-0" placeholder="Your Email" style={{ height: '60px' , width:'200px' }}  />  
          </div>
         
          <div className="col-12 col-sm-6">
       
          <input type="password" className="form-control bg-light border-0" placeholder="Your password" style={{ height: '60px', width:'200px' }}  />
          </div>
          <div className="col-12">
          <button
                    className="btn btn-primary w-100 py-3"
                    type="submit">Connecter
                  </button>
            <Link className="btn btn-dark rounded-pill py-3 px-5 me-3" to="/Login"> Creat Account </Link>

          </div>
        </div>
      </form>
    </div>
    </div>

</div>

  
  );
}

export default Login