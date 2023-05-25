import React from 'react'
import TopDoctor from '../../topbarD/TopDoctor'
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { fetchConsById, editCons } from '../../../../Services/ConsService';

function EditeCons() {
  const { consid,patientid } = useParams();
  console.log(patientid)
  console.log(consid)
  //     const [cons, setCons] = useState(null);
     console.log(consid)
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [MotifCons, setMotifCons] = useState("");
  const [AntécedentsMédecaux, setAntécedentsMédecaux] = useState("");
  // const [HistoriqueSocial, setHistoriqueSocial] = useState("");
  // const [ExemansComplementaires, setExemansComplementaires] = useState("");
  // const [HistoriqueFamilial, setHistoriqueFamilial] = useState("");
  const [DescriptionExamen, setDescriptionExamen] = useState("");

  useEffect(() => {
    GetUnCons();
    // GetListMedecin();
  }, []);

  const GetUnCons = async () => {
    fetchConsById(consid)
      .then(res => {
        setMotifCons(res.data.MotifCons)
        setAntécedentsMédecaux(res.data.AntécedentsMédecaux)
        // setHistoriqueSocial(res.data.HistoriqueSocial)
        // setExemansComplementaires(res.data.ExemansComplementaires)
        // setHistoriqueFamilial(res.data.HistoriqueFamilial)
        setDescriptionExamen(res.data.DescriptionExamen)

      })
      .catch(error => {
        console.log(error)
      })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      const cons = {
        _id:consid,
        MotifCons: MotifCons,
        AntécedentsMédecaux: AntécedentsMédecaux,
        // HistoriqueSocial: HistoriqueSocial,
        // ExemansComplementaires: ExemansComplementaires,
        // HistoriqueFamilial: HistoriqueFamilial,
        DescriptionExamen:DescriptionExamen,
      }
      editCons(cons)
        .then(res => {
          console.log("Update OK", res);
          // alert("modification avec succès")
          // "/patient/cons/6452c36c27b142a8046da762"
          navigate(`/patient/cons/${patientid}`);
        })
        .catch(error => {
          console.log(error)
        })
    }
    setValidated(true);
  };


  return (
    <div>
      <TopDoctor />

      <div className='cons' style={{ border: "2px solid black" }}>
        <div className="row" style={{ display: "flex", paddingLeft: "500px" }}>

          <fieldset className="col-md-6">
            <legend>Antécedents :</legend>
            <div>
              <div className="row g-3" style={{ alignItems: 'center' }}>
                <div className="col-10">
                  Motif de consultation : 
                  <input type="text"
                   placeholder="Raison de visite" 
                   className="form-control" 
                   value={MotifCons}
                   onChange={(e)=>setMotifCons(e.target.value)}
                    />
                </div>
                <div className="col-10">
                  Antécedents Médecaux :
                   <input type="text"
                    placeholder="Antécedents Médecaux" 
                    className="form-control" 
                    value={AntécedentsMédecaux}
                   onChange={(e)=>setAntécedentsMédecaux(e.target.value)} 
                    />
                </div>
                {/* <div className="col-10">
                  Historique familial :
                   <input type="text"
                    placeholder="Historique familial" 
                    className="form-control" 
                    value={HistoriqueFamilial}
                    onChange={(e)=>setHistoriqueFamilial(e.target.value)} 
       
                    />
                </div>
                <div className="col-10">
                  Exemans complementaires :
                   <input type="text" 
                   placeholder="Historique familial" 
                   className="form-control" 
                   value={ExemansComplementaires}
                   onChange={(e)=>setExemansComplementaires(e.target.value)} 
                   />
                </div>
                <div className="col-10">
                  Historique Social : 
                  <input type="text" 
                  placeholder="Historique Social" 
                  className="form-control" 
                  value={HistoriqueSocial}
                  onChange={(e)=>setHistoriqueSocial(e.target.value)} 
                  
                  />
                </div> */}

              </div>
            </div>
          </fieldset>
        </div>

  {/* <fieldset className="col-md-6">
            <legend>Examen :</legend>
            <div>
              <div className="row g-3">
                <div className="col-10">
                  Numéro de fiche : <input type="number" className="form-control" />
                </div>
                <div className="col-10">
                  Taille de patient : <input type="number" className="form-control" />
                </div>
                <div className="col-10">
                  Poid de patient : <input type="number" className="form-control" />
                </div>
                <div className="col-10">
                  tension artérielle: <input type="number" className="form-control" />
                </div>
                <div className="col-10">
                  Température: <input type="number" className="form-control" />
                </div>
                <div className="col-10">
                  Périmètre de patient: <input type="number" className="form-control" />
                </div>
              </div>
            </form>
          </fieldset> */}

        <fieldset >
          <form  noValidate validated={validated} onSubmit={handleSubmit} >
            <legend>Description d'Examen  :</legend>
            <div>
              <textarea rows="9" cols="80" className="form-control"
                    value={DescriptionExamen}
                    onChange={(e)=>setDescriptionExamen(e.target.value)} 
              ></textarea>
            </div><br/>
            <div className="col-10">
                  <button className="btn btn-primary" type="submit">Enregistrer</button>
                </div>
          </form>
        </fieldset> 

      </div>
    </div>
  )
}

export default EditeCons
