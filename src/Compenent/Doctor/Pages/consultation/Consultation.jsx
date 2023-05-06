import React from 'react';
import "./cons.css";
import { useState, useEffect } from 'react';
import InfoIcon from '@mui/icons-material/Info';
import MUIDataTable from "mui-datatables";
import { fetchCons,addCons , deleteCons} from '../../../../Services/ConsService';
import { IconButton, Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { pink } from '@mui/material/colors';
import { Link } from "react-router-dom";
import { useNavigate, useParams } from 'react-router-dom';
import MedicationIcon from '@mui/icons-material/Medication';
import TopDoctor from '../../topbarD/TopDoctor';
function Consultation() {

  const {id} = useParams();
  const [cons, setCons] = useState([]);

   const navigate = useNavigate();
//   const [validated, setValidated] = useState(false);
//   const [MotifCons, setMotifCons] = useState("");
//   const [AntécedentsMédecaux, setAntécedentsMédecaux] = useState("");
//   const [HistoriqueSocial, setHistoriqueSocial] = useState("");
//   const [ExemansComplementaires, setExemansComplementaires] = useState("");
//   const [HistoriqueFamilial, setHistoriqueFamilial] = useState("");
//   const [DescriptionExamen, setDescriptionExamen] = useState("");
//   const [DateCons, setDateCons] = useState("");
//   const [TaillePatient, setTaillePatient] = useState("");
//   const [PoisPatient, setPoisPatient] = useState("");
//   const [tension, setTension] = useState("");
//   const [Température, setTempérature] = useState("");
// //insert
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const form = event.currentTarget;
//     if (form.checkValidity() === true) {
//       const cons1 = {
//         patientID:id,
//         MotifCons: MotifCons,
//         AntécedentsMédecaux: AntécedentsMédecaux,
//         HistoriqueSocial: HistoriqueSocial,
//         ExemansComplementaires: ExemansComplementaires,
//         HistoriqueFamilial: HistoriqueFamilial,
//         DescriptionExamen:DescriptionExamen,
//         DateCons :DateCons,
//         TaillePatient:TaillePatient,
//         PoisPatient:PoisPatient,
//         tension:tension,
//         Température:Température,

//       }
//       addCons (cons1)
//       .then(res=>{
//         console.log("Insert OK",res);
//          navigate("/Consultation");
//         })
//         .catch(error=>{
//         console.log(error)
//         alert("Erreur ! Insertion non effectuée")
//         })
//         }
        
//    if (form.checkValidity() === true) {
//   console.log("valeurs valides")

// };
//       setValidated(true);
//     }                
//delete consultation 
    const delcons = async (_id) => {
      await deleteCons(_id)
      var newcons = cons.filter((item) => {
        return item._id !== _id
      })
      setCons(newcons);
    }

 //affiche consultation
  useEffect(() => {
    GetListCons();
  }, []);
  const GetListCons = async () => {

    //affiche les consultation 

    await fetchCons(id)
      .then((res) => {
        setCons(res.data);
      });
  }
  //delete consultation 

  //preparer les columns
  const columns = [
    {
      name: "_id",
      label: "Num Cons",
      options: {
        filter: true,
        sort: false,
       }
    },
    {
      name: "patientID",
      label: "Num Fiche",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (pat) => (
          pat && pat.numfiche ? pat.numfiche : null
        ),
      },
    },
    {
      name: "DateCons",
      label: "Date Cons",
      options: {
        filter: true,
        sort: false,
       }
    },
    {
      name: "MotifCons",
      label: "Motif Cons",
      options: {
        filter: true,
        sort: false,
       }
    },
    {
      name: "AntécedentsMédecaux",
      label: "Antécedents Médecaux",
      options: {
        filter: true,
        sort: false,
       }
    },
    {
      name: "HistoriqueFamilial" ,
      label: "Historique familial",
      options: {
        filter: true,
        sort: false,
       }
    },
    {
      name: "ExemansComplementaires",
      label: "Exemans complementaires",
      options: {
        filter: true,
        sort: false,
       }
    },
    {
      name: "HistoriqueSocial",
      label: "Historique Social",
      options: {
        filter: true,
        sort: false,
       }   
    },
    {
      name: "_id",
      label: "Details",
      options: {
          filter: true,
          sort: false,
        customBodyRender: (value) => (
          <div>
              <IconButton >
              {<Link to={value}  > 
           
                <InfoIcon  />
              </Link>
              }
              </IconButton>
          </div>

        )
      }
    },
    {
      name: "_id",
      label: "Modifier",
      options: {
          filter: true,
          sort: false,
        customBodyRender: (value) => (
          <div>
            <IconButton>
            {/* /Patient/:patientid/cons/edit/:consid */}
              {<Link to = {`/patient/${id}/cons/edit/${value}`}  > 
           
                <EditIcon color='secondary'  fontSize='large'/>
              </Link>
              }
              </IconButton>
            
              <IconButton onClick={() => { delcons(value) }}>
              <DeleteIcon fontSize='large' sx={{ color: pink[500] }} />
            </IconButton>

          </div>

        )
      }
    },
    {
      name: "_id",
      label: "Ordonnance",
      options: {
          filter: true,
          sort: false,
        customBodyRender: (value) => (
          <div>
            <IconButton >
            {<Link to={`/patient/${id}/cons/ord/${value}`} >
           
                <MedicationIcon fontSize='large' />
              </Link>
              }
              </IconButton>
            
          </div>

        )
      }
    },
  ];
  const options = {
    filterType: 'checkbox',
  };

  return (
    <div>

            <TopDoctor/>
            <div style={{ padding: 5, margin: 5 }}>
        <Button
          color="error"
          // startIcon={<AddCircleIcon />}
          size="large"
          startIcon={<PersonAddIcon fontSize='large'  />}
          variant="outlined"
        > {<Link to={`/Patient/cons/${id}/insert`} 
          style={{
            textDecoration:
              "none", color: "black" 
          }}>
            Ajouter Consultation
          </Link>
          }
        </Button>
      </div>
    <div className="tiltle">   
    <h1>Gestion de consultation </h1>
    </div>
     <br/>
     <br/>
      {/* <div className='cons' style={{border:"2px solid black"} }>
        <div className="row" style={{display: "flex"}}>

          <fieldset className="col-md-6">
            <legend>Antécedents :</legend>
            <div>
              <div className="row g-3" style={{ alignItems: 'center' }}>
              <div className="col-10">
                  Date Consultation : 
                  <input type="date"
                   placeholder="Raison de visite" 
                   className="form-control"
                   value={DateCons}
                   onChange={(e)=>setDateCons(e.target.value)}
                   />
                </div>
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
                <div className="col-10">
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
                </div>
               
              </div>
            </div>
          </fieldset>

          <fieldset className="col-md-6">
            <legend>Examen :</legend>
            <div>
              <div className="row g-3">
                <div className="col-10">
                  Taille de patient : 
                <input type="text" className="form-control" 
                 onChange={(e)=>setTaillePatient(e.target.value)}
                value={TaillePatient}
                          />
                </div>
                <div className="col-10">
                  Poid de patient :
                   <input type="text"
                    className="form-control" 
                    onChange={(e)=>setPoisPatient(e.target.value)}
                value={PoisPatient}
                   />
                </div>
                <div className="col-10">
                  tension artérielle:
                   <input type="number" 
                   className="form-control" 
                   onChange={(e)=>setTension(e.target.value)}
                   value={tension}
                   />
                </div>
                <div className="col-10">
                  Température: 
                  <input type="text"
                   className="form-control"
                   onChange={(e)=>setTempérature(e.target.value)}
                   value={Température}
                   />
                </div>
              </div>
            </div>
          </fieldset>
        </div>

        <fieldset >
          <form validated={validated} onSubmit={handleSubmit}>
            <legend>Description d'Examen  :</legend>
            <div>
              <textarea rows="9" cols="80" className="form-control"
             
              value={ DescriptionExamen}
              onChange={(e)=>setDescriptionExamen(e.target.value)}
              ></textarea>
            </div><br/>
            <div className="col-10">
                  <button className="btn btn-primary" type="submit">Enregistrer</button>
                </div>
          </form>
        </fieldset>
      </div> */}

      
      <div>
  

  <MUIDataTable
    title={"Liste des Consultation"}
    data={cons}
    columns={columns}
     options={options}
  />
</div>




    </div>
  );
}

export default Consultation;
