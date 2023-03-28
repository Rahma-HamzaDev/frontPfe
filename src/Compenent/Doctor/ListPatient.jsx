import React from 'react';
import '../Home/Style.css'
import '../../App.css';
import MenuDoctor from './MenuDoctor';
import { useState, useEffect } from 'react';
//npm install mui-datatables
import MUIDataTable from "mui-datatables";
import { fetchPatient, deletePatient } from '../../Services/patientServices';
import { IconButton, Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { pink } from '@mui/material/colors';
import { Link } from "react-router-dom";
// import { ThemeProvider } from "@mui/styles";
// import { createTheme } from "@mui/material/styles";

function ListPatient() {

  const [patients, setPatient] = useState([]);
  useEffect(() => {
    GetListPatient();
  }, []);
  const GetListPatient = async () => {

    //affiche les patients 

    await fetchPatient()
      .then((res) => {
        setPatient(res.data);
      });
  }
  //delete patient 
  const delPatient = async (_id) => {
    await deletePatient(_id)
    var newpatients = patients.filter((item) => {
      return item._id !== _id
    })
    setPatient(newpatients);
  }
  //preparer les columns
  const columns = [
    {
      label:"Num Fiche",
      name:"cinPa"
    },
    {
      label: "CIN",
      name: "cinPa", 
      //trie solent designattion 
      // filter: true,
      // sort: true,
    },
    {
      label: "Nom",
      name: "nompatient"
    },
    {
      label: "Prénom",
      name: "prenompatient"
    },
    {
      label: "Email",
      name: "emailpatient"
    },
    {
      label: "Date de Naissance",
      name: "dateNais"
    },
    {
      label: "sexe",
      name: "sexepatient"
    },
    {
      label: "Adresse",
      name: "adressepatient"
    },
   
    {
      label: "N°Teléphone",
      name: "numtelPa"
    },
    {
      name: "_id",
      label: "Actions",
      options: {
        customBodyRender: (value) => (
          <div>
            <IconButton >
              {<Link to={"/patient/edit/" + value} >
                <EditIcon color='secondary' />
              </Link>
              }
            </IconButton>
            <Button type="submit">Consultation</Button>
            <IconButton onClick={() => { delPatient(value) }}>
              <DeleteIcon sx={{ color: pink[500] }} />
            </IconButton>
          </div>
        )
      }
    },
  ];


  return (
    <div>
  <MenuDoctor/>
      {/* hero end  */}

      {/* //Button */}

      <div style={{ padding: 5, margin: 5 }}>
        <Button
          color="success"
          startIcon={<AddCircleIcon />}
          variant="contained"
        >
          
          {/* ajouter patient  */}
          {<Link to={"/InsertPatient"} style={{
            textDecoration:
              "none", color: "white"
          }}>
            Ajouter Patient
          </Link>
          }
        </Button>

      </div>

      <MUIDataTable
        title="Liste des Patients"
        data={patients}
        columns={columns}
      />

    </div>
  )
}

export default ListPatient