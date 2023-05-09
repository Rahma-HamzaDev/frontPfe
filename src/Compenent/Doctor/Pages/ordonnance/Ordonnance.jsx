import React from 'react'
import "./ord.css"
import TopDoctor from '../../topbarD/TopDoctor'
import { useSelector } from "react-redux";
import { urlimage } from "../../../../Axios/Api";
import { fetchOrd , addOrd } from '../../../../Services/ordServices';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
function Ordonnance() {
  const { user } = useSelector((state) => state.auth);
  const { id,patientid } = useParams();

  const [ord, setOrd] = useState(null);
  const [validated, setValidated] = useState(false);
  const [NomMedicaments, setNomMedicaments] = useState("");
  const [DosageMedicaments, setDosageMedicaments] = useState("");
  const [FréquanceMedicaments, setFréquanceMedicaments] = useState("");
  const [FormeMedicaments, setFormeMedicaments] = useState("");
  const [DateOrd, setDateOrd] = useState("");
  const [observation, setObservation] = useState("");



  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      const ord1 = {
       consID:id,
        DateOrd:DateOrd,
        NomMedicaments: NomMedicaments,
        DosageMedicaments: DosageMedicaments,
        FréquanceMedicaments: FréquanceMedicaments,
        FormeMedicaments: FormeMedicaments,
        patientID:patientid,
        observation:observation
      }
      addOrd (ord1)
      .then(res=>{
        console.log("Insert OK",res);
       setOrd(res.data) 
        // console.log(ord1)
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
    await fetchOrd(id)
      .then((res) => {
        setOrd(res.data);
        console.log(res.data)
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
                    value={DateOrd}
                    onChange={(e)=>setDateOrd(e.target.value)}
                    
                    />
                </div>
                <div className="col-10">
                  <label htmlFor='social'> Nom Médicaments:</label>
                  <textarea 
                  placeholder=" Nom Médicaments" 
               
                  className="form-control" 
                  value={NomMedicaments}
                    onChange={(e)=>setNomMedicaments(e.target.value)}
                  ></textarea>
                </div>
                <div className="col-10">
                  <label htmlFor='social'> Dosage Médicaments : </label>
                  <textarea 
                   placeholder="Dosage Médicaments " 
       
                   className="form-control"  
                   value={DosageMedicaments}
                   onChange={(e)=>setDosageMedicaments(e.target.value)}

            
                   />
                </div>
                <div className="col-10">
                  <label htmlFor='social'> Fréquance Médicaments :</label>
                  <textarea 
                  placeholder="Fréquance Médicaments" 
                   className="form-control"
                   value={FréquanceMedicaments}
                   onChange={(e)=>setFréquanceMedicaments(e.target.value)}
                
                   />
                </div>
                <div className="col-10">
                  <label htmlFor='social'>Forme Médicaments :</label>
                  <textarea
                  placeholder="Antécedents Médecaux" 
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
                <textarea rows="9" cols="80" className="form-control"
                
                 value={observation}
                  onChange={(e)=>setObservation(e.target.value)}
                
                ></textarea>
              </div><br />
              <div className="col-10">
                <button className="btn btn-primary" type="submit">Enregistrer</button>
              </div>
            </form>
          </fieldset>
        </div>
      </div>
    <>
      <div className="ordonnance">
      <br />
      <br />
      <br />
      <br />
     
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
      
        {/* <div className='haut'  >

          <p>nom patient :</p>
          <p>{ord?.patientID?.nompatient} {ord?.patientID?.prenompatient}   </p>
    
        </div> */}
        {/* <hr /> */}
        {/* <br />
        <br /> */}
   <h3 className='H3'>Ordonnance Medicale</h3>  
   <br/>  <br/> 
        <div className="ordonnance-details" >
   
        <div className='haut'  >

<p></p>
<p>Sfax le {ord?.DateOrd}</p>

</div>
<div className='haut'  >

<p></p>
<p>Patient : {ord?.patientID?.nompatient} {ord?.patientID?.prenompatient}   </p>

</div> 
    
          <div className='contenue'>
          {ord?.NomMedicaments}&nbsp;
          &nbsp;

          {ord?.DosageMedicaments}&nbsp;
          &nbsp;

          {ord?.FréquanceMedicaments}&nbsp;
          &nbsp;
          &nbsp;
          
          {ord?.observation}   &nbsp;
          &nbsp;
        
           </div>
        </div>
        <br/>
{/* //  )} */}

        <div className="signature-tampon">
          <p>Signature et tampon :</p>
        </div>
      </div>
      </>
      <div className='impr'>
  <LocalPrintshopIcon fontSize='large' />
        </div>
    </div>
  )
}

export default Ordonnance