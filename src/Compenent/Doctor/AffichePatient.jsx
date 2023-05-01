// import React from 'react';
// import MUIDataTable from "mui-datatables";
// import ReactLoading from 'react-loading';
// import {useDispatch,useSelector} from "react-redux"
// import { deletePatients } from '../../features/patientSlice';
// import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
// import EditePatient from './EditePatient';
// import Insertpatient from "./Insertpatient";


// function AffichePatient() { 

//   const dispatch = useDispatch();
// const {patients,isLoading,error} = useSelector((state)=>state.storepatients);
// const handleDelete=(id)=>{
//   if(window.confirm("supprimer Patient O/N")) {
//   dispatch(deletePatients(id));
//   } }

// const columns = [
// {
// label: "Num Fiche",
// name: "cinPa"
// },
// {
// label: "CIN",
// name: "cinPa"
// },
// {
// label: "Nom",
// name: "nompatient"
// },
// {
// label: "Prénom",
// name: "prenompatient"
// },
// {
// label: "Email",
// name: "emailpatient" 
// },
// {
// label: "Date de Naissance",
// name: "dateNais"
// },
// {
// label: "sexe",
// name: "sexepatient"
// },
// {
// label: "Adresse",
// name: "adressepatient"
// },
// {
// label: "N°Teléphone",
// name: "numtelPa"
// },
    
// //affichege d'autre model 
// // {
// // name:"scategorieID",
// // label: "S/Categorie",

// // options: {
// // customBodyRender : (scateg) => (
// // scateg? scateg.nomscategorie : null
// // )
// // }
// // },
// // {
// // label: "Image",
// // name:"imageart",
// // options: {
// // customBodyRender : (rowdata) => (
// // <img
// // style={{ height: 40, width : 60, borderRadius: '10%' }}
// // src= {rowdata}
// // alt=""
// // />
// // )
// // }
// // },
// {
// name: "_id",
// label: "Actions",
// options: {
// customBodyRender: (value,tableMeta) => (
// <div>
// <span>
// <EditePatient art={patients[tableMeta.rowIndex]} />
// </span>
// <span
// onClick={(e) => handleDelete(value)}
// style={{ cursor: 'pointer'}}
// >
// <DeleteForeverRoundedIcon color='error' />
// </span>
// </div>
// )
// }
// }
// ];
// // error handling & map successful query data
// const renderPatients = () => {
// if (isLoading) return <center><ReactLoading type='spokes' color="red"
// height={'8%'} width={'8%'} /></center>
// if (error) return <p>Impossible d'afficher la liste des patients...</p>
// //les patients not null
// return <React.Fragment>
// {patients &&
// <MUIDataTable
//         title="Liste des Patients"
//         data={patients}
//         columns={columns}
// //combien de ligne en l'afficher :
// options={{
// rowsPerPageOptions:[5,10,15,100]
// }}
// /> 

// }
// </React.Fragment>
// }
//   return (
//     <>
//     <div>
//     <Insertpatient/>
//     </div>
//     <div>
//       {/* // l'appel de notre fonction  */}
//     {renderPatients()}
//     </div>
//     </>
//   )
// }

// export default AffichePatient