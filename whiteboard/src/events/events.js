import { MathCalendarEvents } from '../data/subject-events/MathCalendarEvents'
import { ReadingCalendarEvents } from '../data/subject-events/ReadingCalendarEvents'
import { EnglishCalendarEvents } from '../data/subject-events/EnglishCalendarEvents'
import { ScienceCalendarEvents } from '../data/subject-events/ScienceCalendarEvents'
import { SocialStudiesCalendarEvents } from '../data/subject-events/SocialStudiesCalendarEvents'

// TODO: Add descriptions for each of the events!

let events = [] // Array to house all events

// Add all math events with time stamp
MathCalendarEvents.forEach(item => {
  let endDate = new Date(item.dueDate);
  endDate.setHours(item.timeEnd[0]);
  endDate.setMinutes(item.timeEnd[1]);
  endDate.setSeconds(item.timeEnd[2]);

  let startDate = new Date(item.dueDate);
  startDate.setHours(item.timeStart[0]);
  startDate.setMinutes(item.timeStart[1]);
  startDate.setSeconds(item.timeStart[2]);

  events.push({
    color: '#E74856',
    title: item.assignmentName,
    start: startDate,
    end: endDate,
    submitted: item.submitted,
  });

  events.push({
    color: '#E74856',
    title: item.assignmentName,
    allDay: true,
    start: startDate,
    end: endDate,
    submitted: item.submitted
  });
});

// Add all reading events with time stamp
ReadingCalendarEvents.forEach(item => {
  let endDate = new Date(item.dueDate);
  endDate.setHours(item.timeEnd[0]);
  endDate.setMinutes(item.timeEnd[1]);
  endDate.setSeconds(item.timeEnd[2]);

  let startDate = new Date(item.dueDate);
  startDate.setHours(item.timeStart[0]);
  startDate.setMinutes(item.timeStart[1]);
  startDate.setSeconds(item.timeStart[2]);

  events.push({
    color: '#B146C2',
    title: item.assignmentName,
    start: startDate,
    end: endDate,
    submitted: item.submitted
  });

  events.push({
    color: '#B146C2',
    title: item.assignmentName,
    allDay: true,
    start: startDate,
    end: endDate,
    submitted: item.submitted
  });
});

// Add all english events with time stamp
EnglishCalendarEvents.forEach(item => {
  let endDate = new Date(item.dueDate);
  endDate.setHours(item.timeEnd[0]);
  endDate.setMinutes(item.timeEnd[1]);
  endDate.setSeconds(item.timeEnd[2]);

  let startDate = new Date(item.dueDate);
  startDate.setHours(item.timeStart[0]);
  startDate.setMinutes(item.timeStart[1]);
  startDate.setSeconds(item.timeStart[2]);

  events.push({
    color: '#0078D7',
    title: item.assignmentName,
    start: startDate,
    end: endDate,
    submitted: item.submitted
  });

  events.push({
    color: '#0078D7',
    title: item.assignmentName,
    allDay: true,
    start: startDate,
    end: endDate,
    submitted: item.submitted
  });
});

// Add all science events with time stamp
ScienceCalendarEvents.forEach(item => {
  let endDate = new Date(item.dueDate);
  endDate.setHours(item.timeEnd[0]);
  endDate.setMinutes(item.timeEnd[1]);
  endDate.setSeconds(item.timeEnd[2]);

  let startDate = new Date(item.dueDate);
  startDate.setHours(item.timeStart[0]);
  startDate.setMinutes(item.timeStart[1]);
  startDate.setSeconds(item.timeStart[2]);

  events.push({
    color: '#00CC6A',
    title: item.assignmentName,
    start: startDate,
    end: endDate,
    submitted: item.submitted
  });

  events.push({
    color: '#00CC6A',
    title: item.assignmentName,
    allDay: true,
    start: startDate,
    end: endDate,
    submitted: item.submitted
  });
});

// Add all social studies events with time stamp
SocialStudiesCalendarEvents.forEach(item => {
  let endDate = new Date(item.dueDate);
  endDate.setHours(item.timeEnd[0]);
  endDate.setMinutes(item.timeEnd[1]);
  endDate.setSeconds(item.timeEnd[2]);

  let startDate = new Date(item.dueDate);
  startDate.setHours(item.timeStart[0]);
  startDate.setMinutes(item.timeStart[1]);
  startDate.setSeconds(item.timeStart[2]);

  events.push({
    color: '#f79914',
    title: item.assignmentName,
    start: startDate,
    end: endDate,
    submitted: item.submitted
  });

  events.push({
    color: '#f79914',
    title: item.assignmentName,
    allDay: true,
    start: startDate,
    end: endDate,
    submitted: item.submitted
  });
});

export default events;
