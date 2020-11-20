import React from 'react';
import { Calendar, momentLocalizer, View } from 'react-big-calendar'
import events from '../events/events'
import moment from 'moment'

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = momentLocalizer(moment) // or globalizeLocalizer

class CalendarComponent extends React.Component {
    render() {
      return (
        <div>


        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          views={['week', 'month', 'agenda' ]}
          defaultView={'week'}
          selectable
          onSelectEvent={event => alert(event.title)}
        />
      </div>
      );
    }
}

export default CalendarComponent;

  