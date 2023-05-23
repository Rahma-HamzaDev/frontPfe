import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import TopPA from '../principale/top/TopPA';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addRend, fetchRendM } from '../../../Services/RendServices';
import Calendar from 'react-calendar';
import "./rdvP.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Prendrerend_vous() {
  const { id } = useParams();
  console.log(id)
  const [Daterd, setDaterd] = useState('');
  const [timerd, setTimerd] = useState('');
  // const [rend, setRend] = useState('');
  //  const [Descrd, setDescrd] = useState('');
  //  const [etatrend, setEtatrend] = useState('');
  const [validated, setValidated] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const { user } = useSelector((state) => state.auth);
  const userId = user._id
  console.log(userId);
  const navigate = useNavigate();
  const [reservationMessage, setReservationMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const startTime = new Date(`1970-01-01T08:00:00`);
  const endTime = new Date(`1970-01-01T15:00:00`);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);

    const form = event.currentTarget;

    // Vérification de la date
    const selectedDate = new Date(Daterd);
    if (selectedDate.getDay() === 0 || selectedDate.getDay() === 6) {
      alert("Vous ne pouvez pas prendre rendez-vous le samedi ou le dimanche.");
      return;
    }

    // Vérification de l'heure
    // const selectedTime = new Date(`1970-01-01T${timerd}`);
    // if (selectedTime.getHours() < 8 || selectedTime.getHours() >= 14) {
    //   alert("Les rendez-vous ne sont disponibles que de 09h00 à 14h00.");
    //   return;
    // }
//verifier time
    const selectedTime = new Date(`1970-01-01T${timerd}`);
    if (selectedTime < startTime || selectedTime >= endTime) {
      alert("Les rendez-vous ne sont disponibles que de 08h00 à 14h00.");
      return;
    }
    
    const minutes = selectedTime.getMinutes();
    if (minutes % 30 !== 0) {
      alert("Les rendez-vous ne sont disponibles que toutes les 30 minutes.");
      return;
    }


    // À implémenter en interrogeant la base de données pour récupérer les rendez-vous déjà réservés

    if (form.checkValidity() === true) {
      const rend = {
        medecinID: id,
        userID: userId,
        Daterd: Daterd,
        timerd: timerd,
      }

      if (form.checkValidity() === true) {
        console.log("valeurs valides")
      };
      setValidated(true);

    // Vérification de la disponibilité
    // fetchRendM(id).then((res) => {
    //   if (res && res.Daterd) {
    //     const rendezVousExiste = res.Daterd.some((Rend) => {
    //       return Rend.Daterd === Daterd && Rend.timerd === timerd;
    //     });
    //     if (rendezVousExiste) {
    //       alert(
    //         "Ce rendez-vous est déjà réservé. Veuillez choisir une autre date ou heure."
    //       );
    //     }
    //   };
    // })

  //   addRend(rend)
  // .then(res => {
  //   console.log("Insertion OK", res);
  //   alert("Votre rendez-vous est enregistré.");
  //   // navigate("/HomePatient");
  // })
 
    addRend(rend).then(res => {
        console.log("Insertion OK", res);
         alert("votre rendezvous est enregistrer")
        navigate("/HomePatient");
      }).catch(error => {
          console.log(error)
          alert("Erreur ! Rendez_vous est reserver")
     
        })
     }
  }
  return (
    <div>
      <TopPA />
      <div className='tourdv'>
        <h3 style={{ textAlign: "center" }}>Prendre rendez-vous : </h3>
        <div className="prendrdv">
        {!submitted ? (
          <Form validated={validated} onSubmit={handleSubmit} className='rdvpa'>
            <Form.Group>
              <Form.Label>Choisir Date :</Form.Label>
              <Form.Control type="date"
                required
                value={Daterd}
                onChange={(e) => setDaterd(e.target.value)}
              />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label>Choisir Temps :</Form.Label>
              <Form.Control type="time"
                required
                value={timerd}
                onChange={(e) => setTimerd(e.target.value)}

              />

            </Form.Group>
            <br />
            <Button variant="success"
              type="submit"
              size='50px'
            // onClick={verifierDisponibilite}
            > Confirmer </Button>
            &nbsp;&nbsp;&nbsp;

          </Form>
           ) : (
            <div className="submitted-message">
              <p>Votre code a été soumis avec succès !</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Prendrerend_vous