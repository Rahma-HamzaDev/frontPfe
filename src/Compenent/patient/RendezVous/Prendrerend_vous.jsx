import React from 'react'
import { Container, Row, Col, Form} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import TopPA from '../principale/top/TopPA';

function Prendrerend_vous() {
  // const [date, setDate] = useState('');
  // const [time, setTime] = useState('');

  return (
    <div>
      {/* <Sidebar/> */}
      <TopPA/>
      <Container >
      <Row className="justify-content-center" style={{paddingBotton:"20px",paddingTop:"20px"}}>
        <Col md={7}>
          <h3 style={{textAlign:"center"}}>Prendre rendez-vous</h3>
          <Form>
           {/* onSubmit={handleSubmit} */}
            <Form.Group style={{border:"2px  solide black"}}>
              <Form.Label>Date</Form.Label>
              <Form.Control type="date"  />
              {/* value={date} onChange={(event) => setDate(event.target.value)} */}
            </Form.Group>
            <Form.Group>
              <Form.Label>Heure</Form.Label>
              <Form.Control type="time" /> 
              {/* value={time} onChange={(event) => setTime(event.target.value)} */}
            </Form.Group>
            <Form.Group>
            <Form.Label>Description</Form.Label>
      <Form.Control
        as="textarea"
        // placeholder={props.placeholderText}
        // value={value}
        // onChange={handleChange}
      />
    </Form.Group>
    <br/>
    <div className='ENVREND' style={{paddingLeft:"300px"}}>
    <Button variant="success" type="submit" size='50px' > Envoyer </Button>
         </div>
         <br/>
          </Form>
        </Col>
      </Row>
    </Container>
      
 
      </div>
  )
}

export default Prendrerend_vous