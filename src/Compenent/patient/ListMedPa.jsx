// import React ,{useState ,useEffect}from 'react'
// import { fetchMedecin } from'../../Services/DoctorServices'

// // import './Card.css'
// import { Button } from '@mui/material'
// import { Link } from 'react-router-dom'
// import { TfiBackLeft } from 'react-icons/tfi';
// import MediaCardPa from './MediaCardPa';
// // import "./MenuPa";
// const ListMedPa = () => {
//   const[medecins,setmedecin]=useState([])
//   useEffect(()=>{
//     fetchMedecin().then(res=>{
//       setmedecin(res.data)
//     })
//     .catch(error=>{
//       console.log(error)
//     })
//   })



//   return (
//     <> 
//   {/* <MenuPa/> */}
//     <div className="container">

//        <div style={{ padding: 5, margin: 5 }}>
//                     <Button
//                         color="success"
//                       variant="contained"
//                     >
//                         {<Link to={"/"} style={{
//                             textDecoration:
//                                 "none", color: "white"
//                         }}>
//                             Ajouter
//                         </Link>
//                         }
//                     </Button></div>
//     <div
//         style={{ "display": "flex", "flexWrap": "wrap", "justifyContent": "right" }}>
//         {medecins.map((med, ind) => 
//                  <MediaCardPa 
//                  medecins={med}/>
//         )}
//         </div>
// </div>
// </>
// )
// }

// export default ListMedPa
