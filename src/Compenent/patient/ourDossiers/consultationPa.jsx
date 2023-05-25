import React, { useEffect, useState } from 'react'
import "../../Doctor/Pages/consultation/datails.css";
import { useNavigate, useParams } from 'react-router-dom';

//
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { fetchconById } from '../../../Services/dossierService';
import TopPA from '../principale/top/TopPA';

//


function ConsultationPa() {
    const [cons, setCons] = useState(null);


  const { consid } = useParams();
  useEffect(() => {
    GetListcons();
  }, []);
  const GetListcons = async () => {
    await fetchconById(consid)
      .then((res) => {
        setCons(res.data);
        console.log(res.data);
      });
  }

  const printToPDF = () => {
    const input = document.getElementById('pdf-content');
    html2canvas(input).then((canvas) => {
      const pdf = new jsPDF();
      const imgData = canvas.toDataURL('image/png');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('ConsultationPatient.pdf');
    });
  };
  return (
    <>
      <TopPA/>

      <div className='allD' >


        <br />
        <div className='details'>
          <PictureAsPdfIcon fontSize='large' onClick={printToPDF} />
          <div className='details2'>
            <div id='pdf-content'>

              <div className="tiltle11">
                <h1>Details du consultation </h1>
              </div>
              <br />
              <h3 className='H33'>Date consulataion: <span className='span1'> {cons?.DateCons}</span></h3> <br />
              {/* <h3 className='H33' >NumCons:  {cons?._id}</h3> <br/> */}
              <h3 className='H33' >numFich :  <span className='span1'>{cons?.patientID.numfiche}  </span></h3> <br />
              <h3 className='H33' >Identication du patient:  {cons?.patientID.cinPa}</h3> <br />
              <h3 className='H33' >Nom & Prénom patient : <span className='span1'>{cons?.patientID.nompatient} </span> <span className='span1'>{cons?.patientID.prenompatient} </span></h3>  <br />
              <h3 className='H33' > Taille de patient : <span className='span1'>{cons?.TaillePatient}</span></h3>  <br />
              <h3 className='H33' >Poid de patient :  <span className='span1'>{cons?.PoisPatient}</span> </h3>  <br />
              <h3 className='H33' > tension artérielle:  <span className='span1'>{cons?.tension} </span></h3>  <br />
              <h3 className='H33' >Température : <span className='span1'> {cons?.Température} </span></h3>  <br />

              <h3 className='H33' >Description de resultat : </h3>
              <br />
              <p className="examen">{cons?.DescriptionExamen}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ConsultationPa
