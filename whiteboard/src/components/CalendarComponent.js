import React from 'react';
import { Calendar, momentLocalizer, View } from 'react-big-calendar'
import events from '../events/events'
import moment from 'moment'
import { HighContrastSelectorBlack } from '@fluentui/react';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = momentLocalizer(moment) // or globalizeLocalizer
const cardDim = {height: 300, width: 282};

class CalendarComponent extends React.Component {
  constructor(...args) {
    super(...args)

    this.state = { events }
  }

  eventStyleGetter(events) {
    var style = {
      backgroundColor: events.color,
      borderWidth: '0px'
    }

    if(events.submitted) {
      style.opacity = 0.5;
    } else if(events.end < (new Date())) {
      // events.title = 'Missing ' + events.title;
    }
    return { style: style };
  }

  eventClick(events) {
    if(events.allDay) {
      let numCards = Math.floor(document.documentElement.offsetWidth/cardDim.width);
      if(numCards > 5) numCards = 5;
      let cardHeight = (6-numCards)*cardDim.height;
      let calendarHeight = events.start.getHours()*50;
      window.scroll({top: cardHeight+calendarHeight, behavior: 'smooth'});
      // alert(cardHeight + calendarHeight + ', ' + document.documentElement.offsetHeight);
    } else {
      alert(events.title + ' was clicked');
    }
  }

  handleSelect = ({start, end}) => {
    const title = window.prompt('New Event Name');
    if(title) { // Ensure user entered title
      events.push(
        {
          title,
          color: '#8caebf',
          start,
          end,
        }
      );
      this.setState({
        events: events
      });
    }
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
          onSelectEvent={(this.eventClick)}
          onSelectSlot={this.handleSelect}
          eventPropGetter={(this.eventStyleGetter)}
        />
    </div>
    );
  }
}

export default CalendarComponent;

  