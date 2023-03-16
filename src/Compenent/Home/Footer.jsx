import React from 'react'
import './Style.css'

function Footer() {
  return (
    <>
    <footer className="container-fluid bg-dark text-light mt-5 py-5">  

    <div className="container py-5" >
        <div className="row g-5">
            <div className="col-lg-3 col-md-6">
                <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Get In Touch</h4>
                <p className="mb-4">No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor</p>
                <p className="mb-2"><i className="fa fa-map-marker-alt text-primary me-3"></i>123 Street, New York, USA</p>
                <p className="mb-2"><i className="fa fa-envelope text-primary me-3"></i>info@example.com</p>
                <p className="mb-0"><i className="fa fa-phone-alt text-primary me-3"></i>+012 345 67890</p>
            </div>
            <div className="col-lg-3 col-md-6" style={{fontSize:"15px"}}>
                <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Quick Links</h4>
                <div  className="d-flex flex-column justify-content-start" >
                    <a className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Home</a>
                    <a className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>About Us</a>
                    <a className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Our Services</a>
                    <a className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Meet The Team</a>
                    <a className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Latest Blog</a>
                    <a className="text-light" href="#"><i className="fa fa-angle-right me-2"></i>Contact Us</a>
                </div>
            </div>
            <div className="col-lg-3 col-md-6" style={{fontSize:"13px"}}>
                <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Popular Links</h4>
                <div className="d-flex flex-column justify-content-start">
                    <a className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Home</a>
                    <a className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>About Us</a>
                    <a className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Our Services</a>
                    <a className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Meet The Team</a>
                    <a className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Latest Blog</a>
                    <a className="text-light" href="#"><i className="fa fa-angle-right me-2"></i>Contact Us</a>
                </div>
            </div>
            <br/>
            <div className="col-lg-3 col-md-6">
                    <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Newsletter</h4>
                    <form action="">
                        <div className="input-group">
                            {/* <input type="text" className="form-control p-3 border-0" placeholder="Your Email Address"/>
                            <button className="btn btn-primary">Sign Up</button> */}
                        </div>
                    </form>
                    <h6 className="text-primary text-uppercase mt-4 mb-3" >Follow Us</h6>
                    <div className="d-flex" style={{paddingLeft : "50px"}}>
                        <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="#"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="#"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                        <a className="btn btn-lg btn-primary btn-lg-square rounded-circle" href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        <div className="container-fluid bg-dark text-light border-top border-secondary py-4">
        <div className="container">
            <div className="row g-5">
                <div className="col-md-6 text-center text-md-start">
                    <p className="mb-md-0">&copy; <a className="text-primary" href="#">Your Site Name</a>. All Rights Reserved.</p>
                </div>
                
            </div>
        </div>
    </div>
    <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a> 
    </>
  )}
  export default Footer
  {/* <div className="container-fluid bg-dark text-light py-5 wow fadeInUp" data-wow-delay="0.3s" style={{marginTop: "-75px"}}>
  <div className="container pt-5">
      <div className="row g-5 pt-4">
          <div className="col-lg-3 col-md-6">

<h3 className="text-white mb-4">Quick Links</h3>
<div className="d-flex flex-column justify-content-start">
  <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Home</a>
  <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</a>
  <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Our Services</a>
  <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Latest Blog</a>
  <a className="text-light" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
</div>
</div>
<div className="col-lg-3 col-md-6">
<h3 className="text-white mb-4">Popular Links</h3>
<div className="d-flex flex-column justify-content-start">
  <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Home</a>
  <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</a>
  <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Our Services</a>
  <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Latest Blog</a>
  <a className="text-light" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
</div>
</div>
<div className="col-lg-3 col-md-6">
<h3 className="text-white mb-4">Get In Touch</h3>
<p className="mb-2"><i className="bi bi-geo-alt text-primary me-2"></i>123 Street, New York, USA</p>
<p className="mb-2"><i className="bi bi-envelope-open text-primary me-2"></i>info@example.com</p>
<p className="mb-0"><i className="bi bi-telephone text-primary me-2"></i>+012 345 67890</p>
</div>
</div>
<div className="col-lg-3 col-md-6">
              <h3 className="text-white mb-4">Follow Us</h3>
              <div className="d-flex">
                  <a className="btn btn-lg btn-primary btn-lg-square rounded me-2" href="#"><i className="fab fa-twitter fw-normal"></i></a>
                  <a className="btn btn-lg btn-primary btn-lg-square rounded me-2" href="#"><i className="fab fa-facebook-f fw-normal"></i></a>
                  <a className="btn btn-lg btn-primary btn-lg-square rounded me-2" href="#"><i className="fab fa-linkedin-in fw-normal"></i></a>
                  <a className="btn btn-lg btn-primary btn-lg-square rounded" href="#"><i className="fab fa-instagram fw-normal"></i></a>
              </div>
          </div>
          </div>
  </div>
<div className="container-fluid text-light py-4" style={{ background: "#051225" }}>
<div className="container">
<div className="row g-0">
<div className="col-md-6 text-center text-md-start">
  <p className="mb-md-0">&copy; <a className="text-white border-bottom" href="#">Your Site Name</a>. All Rights Reserved.</p>
</div>
<div className="col-md-6 text-center text-md-end">
  <p className="mb-0">Designed by <a className="text-white border-bottom" href="https://htmlcodex.com">HTML Codex</a></p>
</div>
</div>
</div>
</div> */}