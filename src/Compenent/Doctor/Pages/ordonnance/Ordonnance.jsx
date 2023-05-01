import React from 'react'
import "./ord.css"
import TopDoctor from '../../topbarD/TopDoctor'
import { useSelector } from "react-redux";
import { urlimage } from "../../../../Axios/Api";
import { fetchOrd , addOrd } from '../../../../Services/ordServices';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Ordonnance() {
  const { user } = useSelector((state) => state.auth);
  const { ordid } = useParams();
  const [ord, setOrd] = useState([]);
  const [validated, setValidated] = useState(false);
  const [NomMedicaments, setNomMedicaments] = useState("");
  const [DosageMedicaments, setDosageMedicaments] = useState("");
  const [FréquanceMedicaments, setFréquanceMedicaments] = useState("");
  const [FormeMedicaments, setFormeMedicaments] = useState("");




  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      const ord1 = {
        // patientID:id,
        NomMedicaments: NomMedicaments,
        DosageMedicaments: DosageMedicaments,
        FréquanceMedicaments: FréquanceMedicaments,
        FormeMedicaments: FormeMedicaments
      }
      addOrd (ord1)
      .then(res=>{
        console.log("Insert OK",res);
        // navigate("/Consultation");
        })
        .catch(error=>{
        console.log(error)
        alert("Erreur ! Insertion non effectuée")
        })
        }
        
   if (form.checkValidity() === true) {
  console.log("valeurs valides")

};
      setValidated(true);
    }  


  useEffect(() => {
    GetListOrd();
  }, []);
  const GetListOrd = async () => {

    //affiche les consultation 

    await fetchOrd(ordid)
      .then((res) => {
        setOrd(res.data);
      });
  }

  return (
    <div className='Ord1'>

      <TopDoctor />

      <div className="tiltle">
        <h1>Gestion de Ordonnance </h1>
      </div>
      <br />
      <div className='ord' style={{ border: "2px solid black" }}>
        <div className="row" style={{ display: "flex" }}>
          <fieldset className="col-md-6">
            <legend>Médicaments : </legend>
            <div>
              <div className="row g-3" style={{ alignItems: 'center' }}>
                <div className="col-10">
                  <label htmlFor='social'>Date Consultation :</label>
                  <input type='date'
                   className='form-control' 
                   id='social'
                    placeholder='Date Consultations'
                   
                    
                    />
                </div>
                <div className="col-10">
                  <label htmlFor='social'> Nom Médicaments:</label>
                  <input type="text" 
                  placeholder="Raison de visite" 
                  id='social'  
                  className="form-control" 
                  value={NomMedicaments}
                    onChange={(e)=>setNomMedicaments(e.target.value)}
                  />
                </div>
                <div className="col-10">
                  <label htmlFor='social'> Dosage Médicaments : </label>
                  <input type="text"
                   placeholder="Antécedents Médecaux" 
                   id='social' 
                   className="form-control"  
                   value={DosageMedicaments}
                   onChange={(e)=>setDosageMedicaments(e.target.value)}

            
                   />
                </div>
                <div className="col-10">
                  <label htmlFor='social'> Fréquance Médicaments :</label>
                  <input type="text" 
                  placeholder="Antécedents Médecaux" 
                  id='social'   
                   className="form-control"
                   value={FréquanceMedicaments}
                   onChange={(e)=>setFréquanceMedicaments(e.target.value)}
                
                   />
                </div>
                <div className="col-10">
                  <label htmlFor='social'>Forme Médicaments :</label>
                  <input type="text" 
                  placeholder="Antécedents Médecaux" 
                  id='social' 
                  className="form-control" 
                  value={FormeMedicaments}
                  onChange={(e)=>setFormeMedicaments(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </fieldset>
        </div>
        <div className='observation'>
          <fieldset >
          <form validated={validated} onSubmit={handleSubmit}>
              <legend> observation  :</legend>
              <div>
                <textarea rows="9" cols="80" className="form-control"></textarea>
              </div><br />
              <div className="col-10">
                <button className="btn btn-primary" type="submit">Enregistrer</button>
              </div>
            </form>
          </fieldset>
        </div>
      </div>
      <br />
      <div className="ordonnance">
        <div className='haut'>
        <div className="entete">
          <p> {user.firstName} {user.lastName} </p>
          <p>{user.adresse}</p>
          <p>{user.phone}</p>
          {/* <hr/> */}
        </div>
        <div className='tot'>
          <p>Médecin {user?.specialiteID.nomsep}</p>
          <p>{user.certification}</p>
        </div>
        </div>
        <hr />
        <br />
        <div className="info-patient">
          <h3 className='H2'>nom patient</h3>
          <div className='inf2'>
          <p>adresse</p>
          <p>numtel</p>
          </div>
        </div>
        <hr />
        <br />
        <div className="ordonnance-details">
          <h3 className='H3'>DOLIPRANE 500 mg</h3>
          <p>1 comprimé en cas de douleur, 3 comprimés par jour maximum, espacés de 4 heures</p>
        </div>


        <div className="signature-tampon">
          <p>Signature et tampon :</p>
        </div>
      </div>


    </div>
  )
}

export default Ordonnance