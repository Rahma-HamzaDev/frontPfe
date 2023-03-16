import React from 'react'

function Contact() {
  return (
    <div className="container-fluid pt-5">
    <div className="container">
      <div className="text-center mx-auto mb-5" style={{maxWidth: '500px'}}>
        <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Any Questions?</h5>
        <h1 className="display-4">Please Feel Free To Contact Us</h1>
      </div>
      <div className="row g-5 mb-5">
          <div className="col-lg-4">
            <div className="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center" style={{height: '200px'}}>
              <div className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4" style={{width: '100px', height: '70px', transform: 'rotate(-15deg)'}}>
                <i className="fa fa-2x fa-location-arrow text-white" style={{transform: 'rotate(15deg)'}}></i>
              </div>
              <h6 className="mb-0">123 Street, New York, USA</h6>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center" style={{height: '200px'}}>
              <div className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4" style={{width: '100px', height: '70px', transform: 'rotate(-15deg)'}}>
                <i className="fa fa-2x fa-phone text-white" style={{transform: 'rotate(15deg)'}}></i>
              </div>
              <h6 className="mb-0">+012 345 6789</h6>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center" style={{height: '200px'}}>
              <div className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4" style={{width: '100px', height: '70px', transform: 'rotate(-15deg)'}}>
                <i className="fa fa-2x fa-envelope-open text-white" style={{transform: 'rotate(15deg)'}}></i>
              </div>
              <h6 className="mb-0">info@example.com</h6>
            </div>
          </div>
        </div>
        
      <div
        className="row justify-content-center "
        style={{ marginTop: "80px", zIndex: "1" }} >
        <div className="col-lg-8">
          <div className="bg-white rounded p-5 m-5 mb-0">
            <form>
              <div className="row g-3">
                <div className="col-12 col-sm-6">
                  <input
                    type="text"
                    className="form-control bg-light border-0"
                    placeholder="Your Name"
                    style={{ height: "55px" }}
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <input
                    type="email"
                    className="form-control bg-light border-0"
                    placeholder="Your Email"
                    style={{ height: "55px" }}
                  />
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    className="form-control bg-light border-0"
                    placeholder="Subject"
                    style={{ height: "55px" }}
                  />
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control bg-light border-0"
                    rows="5"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="col-12">
                  <button
                    className="btn btn-primary w-100 py-3"
                    type="submit">Send Message
                  </button>
                </div>
              </div>
            </form>
            </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Contact