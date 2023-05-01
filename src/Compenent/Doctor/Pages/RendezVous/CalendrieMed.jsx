import React from 'react';
import "./clendrie.css"
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'moment/locale/fr';
import TopDoctor from '../../topbarD/TopDoctor';

function CalendrieMed() {
    const myEventsList = [
        {
          title: 'Event 1',
          start: new Date(2023, 3, 15),
          end: new Date(2023, 3, 15),
        },
        {
          title: 'Event 2',
          start: new Date(2023, 3, 20),
          end: new Date(2023, 3, 20),
        },
        // Ajoutez ici d'autres événements
      ];
    
      const localizer = momentLocalizer(moment);
  return (
    <>
          <TopDoctor/>

    <div className='calend'>
<Calendar
  localizer={localizer}
  events={myEventsList}
  startAccessor="start"
  endAccessor="end"
  style={{ height: '600px', width:'100%', backgroundColor: '#f7f7f7', border: '1px solid #ccc' }}/>

  </div>
  </>
  )
}

export default CalendrieMed
