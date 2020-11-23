import React from 'react';
import { Calendar, momentLocalizer, View } from 'react-big-calendar'
import events from '../events/events'
import moment from 'moment'

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = momentLocalizer(moment) // or globalizeLocalizer
const THIQQ = '2px';

class CalendarComponent extends React.Component {
  eventStyleGetter(events) {
    var style = {
      backgroundColor: events.color,
    }

    if(events.submitted) {
      style.opacity = 0.5;
    } else if(events.end < (new Date())) {
      // events.title = 'Missing ' + events.title;
    }
    return { style: style };
  }

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
        onSelectEvent={event => alert(event.desc)}
        eventPropGetter={(this.eventStyleGetter)}
      />
    </div>
    );
  }
}

export default CalendarComponent;

  